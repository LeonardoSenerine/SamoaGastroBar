import type { Plugin } from 'vite'
import { agendaDeExemplo, proximosEventos } from '../src/data/eventos.ts'
import { contato, funcionamento, geo, liberadoParaGoogle } from '../src/data/site.ts'
import { paginas } from '../src/paginas.ts'

const FUSO = '-03:00'

/**
 * URL pública do site, usada nas meta tags de compartilhamento (que exigem endereço absoluto).
 * Ordem: variável SITE_URL (domínio próprio) → domínio de produção da Vercel → padrão.
 */
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
const SITE_URL = (process.env.SITE_URL ?? (vercel ? `https://${vercel}` : 'https://samoa-gastro-bar.vercel.app')).replace(/\/$/, '')

function restaurante() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'BarOrPub'],
    '@id': `${SITE_URL}/#samoa`,
    url: `${SITE_URL}/`,
    name: contato.nome,
    description: 'Gastrobar em Itatiba com almoço executivo, petiscos, drinks autorais e música ao vivo. Pet friendly.',
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/icon-512.png`,
    telephone: contato.telefone,
    priceRange: '$$',
    servesCuisine: ['Brasileira', 'Petiscos', 'Hambúrguer', 'Massas'],
    acceptsReservations: true,
    hasMenu: `${SITE_URL}/#cardapio`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contato.endereco,
      addressLocality: contato.cidade,
      addressRegion: contato.estado,
      postalCode: geo.cep,
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
    openingHoursSpecification: funcionamento
      .filter((f) => f.schema)
      .map((f) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: f.schema!.dias,
        opens: f.schema!.abre,
        closes: f.schema!.fecha,
      })),
    amenityFeature: [{ '@type': 'LocationFeatureSpecification', name: 'Pet friendly', value: true }],
    sameAs: [contato.instagram, contato.ifood],
  }
}

function eventosSchema() {
  // agenda de exemplo não vai para o Google
  if (agendaDeExemplo) return []
  return proximosEventos().map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `${e.titulo} — ${e.atracao}`,
    description: e.descricao,
    startDate: `${e.data}:00${FUSO}`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: { '@type': 'PerformingGroup', name: e.atracao },
    location: { '@id': `${SITE_URL}/#samoa` },
    organizer: { '@type': 'Organization', name: contato.nome, url: contato.instagram },
    // oferta só quando há preço informado ou entrada livre confirmada
    ...(e.preco || e.entradaLivre
      ? {
          offers: {
            '@type': 'Offer',
            price: e.preco ?? 0,
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            url: e.ingresso ?? contato.instagram,
          },
        }
      : {}),
  }))
}

/**
 * Metadados que precisam do endereço completo do site: troca %SITE_URL% no index.html, injeta os
 * dados estruturados (Schema.org) e gera robots.txt e sitemap.xml.
 */
export function siteMeta(): Plugin {
  return {
    name: 'samoa-site-meta',
    transformIndexHtml(html) {
      const blocos = [restaurante(), ...eventosSchema()]
      return {
        html: html
          .replaceAll('%SITE_URL%', SITE_URL)
          // até o Samoa aprovar, nenhuma página entra no Google (ver liberadoParaGoogle)
          .replace(
            '<meta name="robots" content="index, follow" />',
            `<meta name="robots" content="${liberadoParaGoogle ? 'index, follow' : 'noindex, nofollow'}" />`,
          ),
        tags: blocos.map((b) => ({
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(b).replace(/</g, '\\u003c'),
          injectTo: 'head' as const,
        })),
      }
    },
    // robots.txt e sitemap.xml gerados no build, já com o endereço certo
    generateBundle() {
      const hoje = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        // Allow de propósito: o buscador precisa conseguir ler o noindex das páginas
        source: liberadoParaGoogle ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` : 'User-agent: *\nAllow: /\n',
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          paginas
            .filter((p) => p.indexar)
            .map((p) => `  <url><loc>${SITE_URL}${p.caminho}</loc><lastmod>${hoje}</lastmod></url>\n`)
            .join('') +
          '</urlset>\n',
      })
    },
  }
}
