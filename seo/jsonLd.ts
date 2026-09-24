import type { Plugin } from 'vite'
import { agendaDeExemplo, proximosEventos } from '../src/data/eventos.ts'
import { contato, funcionamento, geo } from '../src/data/site.ts'

const FUSO = '-03:00'

function restaurante() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'BarOrPub'],
    '@id': '#samoa',
    name: contato.nome,
    description: 'Gastrobar em Itatiba com almoço executivo, petiscos, drinks autorais e música ao vivo. Pet friendly.',
    image: '/og-samoa.jpg',
    telephone: contato.telefone,
    priceRange: '$$',
    servesCuisine: ['Brasileira', 'Petiscos', 'Hambúrguer', 'Massas'],
    acceptsReservations: true,
    hasMenu: '#cardapio',
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
    location: { '@id': '#samoa' },
    organizer: { '@type': 'Organization', name: contato.nome, url: contato.instagram },
    offers: {
      '@type': 'Offer',
      price: e.preco ?? 0,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: e.ingresso ?? contato.instagram,
    },
  }))
}

/** Injeta os dados estruturados (Schema.org) no <head> durante o build e o dev. */
export function jsonLd(): Plugin {
  return {
    name: 'samoa-json-ld',
    transformIndexHtml() {
      const blocos = [restaurante(), ...eventosSchema()]
      return blocos.map((b) => ({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(b).replace(/</g, '\\u003c'),
        injectTo: 'head',
      }))
    },
  }
}
