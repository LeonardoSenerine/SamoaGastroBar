// Pré-renderização (roda no fim do `npm run build`): gera um HTML completo para cada página
// de src/paginas.ts (início, privacidade, cookies e 404), trocando <!--app-html--> pelo
// conteúdo e ajustando título, descrição, canonical e robots de cada uma.

// datas e horários da agenda no fuso de Itatiba, igual ao que o visitante vê
process.env.TZ = 'America/Sao_Paulo'

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render, paginas } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html sem o marcador <!--app-html-->')
}

const escapar = (texto) => texto.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const siteUrl = template.match(/<link rel="canonical" href="([^"]+?)\/?"/)[1]

/** troca o conteúdo de uma meta/link já existente no template */
function trocar(html, regex, novo) {
  if (!regex.test(html)) throw new Error(`prerender: não achei ${regex} no index.html`)
  return html.replace(regex, novo)
}

for (const pagina of paginas) {
  const url = pagina.caminho === '/' || pagina.caminho === '/404' ? `${siteUrl}/` : `${siteUrl}${pagina.caminho}`
  const titulo = escapar(pagina.titulo)
  const descricao = escapar(pagina.descricao)

  let html = template.replace('<!--app-html-->', render(pagina.caminho))
  html = trocar(html, /<title>[^<]*<\/title>/, `<title>${titulo}</title>`)
  html = trocar(html, /(<meta name="description" content=")[^"]*/, `$1${descricao}`)
  html = trocar(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`)
  html = trocar(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`)
  if (pagina.caminho !== '/') {
    html = trocar(html, /(<meta property="og:title" content=")[^"]*/, `$1${titulo}`)
    html = trocar(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${titulo}`)
  }
  if (!pagina.indexar) {
    html = trocar(html, /(<meta name="robots" content=")[^"]*/, '$1noindex, follow')
  }

  const destino = resolve(dist, pagina.arquivo)
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, html)
  console.log(`Pré-renderizado: dist/${pagina.arquivo} (${Math.round(html.length / 1024)} KB)`)
}

rmSync(ssrDir, { recursive: true, force: true })
