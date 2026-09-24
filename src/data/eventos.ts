export type Categoria = 'Samba' | 'Pagode' | 'Ao vivo' | 'DJ' | 'Festa' | 'Gastronomia'

export interface Evento {
  id: string
  /** Data e hora local, ex.: '2026-10-02T20:00' */
  data: string
  titulo: string
  /** Quem se apresenta (banda, DJ, artista) */
  atracao: string
  categoria: Categoria
  descricao: string
  /** Ingresso antecipado em reais; omita para entrada livre */
  preco?: number
  /** Link de venda (Uticket). Sem link, o botão abre o WhatsApp. */
  ingresso?: string
}

/**
 * Enquanto for `true`, a agenda é de exemplo e o build NÃO publica os eventos
 * no JSON-LD (para o Google não indexar shows que não existem).
 * Troque para `false` quando cadastrar a programação real.
 */
export const agendaDeExemplo = true

/** DADOS FICTÍCIOS — substitua pela programação real da casa. */
export const eventos: Evento[] = [
  {
    id: 'sabado-pagode-0926',
    data: '2026-09-26T20:00',
    titulo: 'Sábado de Pagode',
    atracao: 'Grupo Toque de Bamba',
    categoria: 'Pagode',
    descricao: 'Pagode de mesa no terraço, com camarote e balde de long neck em dobro até as 22h.',
    preco: 20,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
  {
    id: 'domingo-feijoada-0927',
    data: '2026-09-27T13:00',
    titulo: 'Feijoada & Voz e Violão',
    atracao: 'Rafa Mendes',
    categoria: 'Gastronomia',
    descricao: 'Feijoada completa no almoço e voz e violão pela tarde toda.',
  },
  {
    id: 'sexta-samba-1002',
    data: '2026-10-02T20:00',
    titulo: 'Sexta do Samba',
    atracao: 'Roda Maré Alta',
    categoria: 'Samba',
    descricao: 'Roda de samba ao vivo no terraço, com double drink até as 22h.',
    preco: 20,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
  {
    id: 'dj-1003',
    data: '2026-10-03T21:00',
    titulo: 'Sunset Samoa',
    atracao: 'DJ Luan Rocha',
    categoria: 'DJ',
    descricao: 'Do pôr do sol até tarde: house, funk e brasilidades na área externa.',
    preco: 15,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
  {
    id: 'mpb-1016',
    data: '2026-10-16T20:30',
    titulo: 'Noite MPB ao Vivo',
    atracao: 'Trio Cais',
    categoria: 'Ao vivo',
    descricao: 'Clássicos da MPB em formato intimista, sob o varal de luzes.',
  },
  {
    id: 'halloween-1031',
    data: '2026-10-31T22:00',
    titulo: 'Halloween Samoa',
    atracao: 'DJ Luan Rocha + convidados',
    categoria: 'Festa',
    descricao: 'A festa à fantasia mais esperada de Itatiba. Vá caracterizado.',
    preco: 35,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
]

/** Eventos que ainda não terminaram (considera ~6h de duração), em ordem de data. */
export function proximosEventos(agora: number = Date.now()): Evento[] {
  return eventos
    .filter((e) => new Date(e.data).getTime() + 6 * 3600_000 > agora)
    .sort((a, b) => a.data.localeCompare(b.data))
}
