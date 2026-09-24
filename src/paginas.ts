/**
 * Páginas do site. Cada uma vira um HTML próprio no build (scripts/prerender.mjs),
 * com título e descrição certos para o Google e para a prévia do link.
 */
export interface Pagina {
  caminho: string
  /** arquivo gerado em dist/ */
  arquivo: string
  titulo: string
  descricao: string
  /** fora do Google e do sitemap */
  indexar: boolean
}

export const paginas: Pagina[] = [
  {
    caminho: '/',
    arquivo: 'index.html',
    titulo: 'Samoa Gastrobar | Restaurante, Drinks e Música ao Vivo em Itatiba',
    descricao:
      'Gastrobar em Itatiba (SP) com almoço executivo de terça a domingo, petiscos, burgers, drinks autorais, chopp Spaten e música ao vivo. Pet friendly. Rua Olga Tarrusselo Geromel, 201, Jardim São Luís.',
    indexar: true,
  },
  {
    caminho: '/privacidade',
    arquivo: 'privacidade.html',
    titulo: 'Política de privacidade | Samoa Gastrobar',
    descricao: 'Como o Samoa Gastrobar trata seus dados pessoais no site, no WhatsApp e nas reservas, de acordo com a LGPD.',
    indexar: true,
  },
  {
    caminho: '/cookies',
    arquivo: 'cookies.html',
    titulo: 'Política de cookies | Samoa Gastrobar',
    descricao: 'Quais cookies o site do Samoa Gastrobar usa, para que servem e como mudar suas preferências.',
    indexar: true,
  },
  {
    caminho: '/404',
    arquivo: '404.html',
    titulo: 'Página não encontrada | Samoa Gastrobar',
    descricao: 'Essa página não existe. Volte para o início do site do Samoa Gastrobar.',
    indexar: false,
  },
]

/** '/privacidade', '/privacidade/' e '/privacidade.html' são a mesma página */
export const normalizarCaminho = (caminho: string) =>
  caminho.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '') || '/'
