export type Categoria = 'Samba' | 'Pagode' | 'Ao vivo' | 'Festa' | 'Gastronomia'

export interface Evento {
  id: string
  /** Data no formato ISO local, ex.: '2026-10-02T20:00' */
  data: string
  titulo: string
  categoria: Categoria
  descricao: string
  /** Preço do ingresso antecipado em reais; omita para entrada livre */
  preco?: number
  /** Link de venda (Uticket). Sem link, o botão abre o WhatsApp. */
  ingresso?: string
}

/**
 * EXEMPLOS — substitua pela agenda real da casa.
 * Eventos com data passada somem da página automaticamente.
 */
export const eventos: Evento[] = [
  {
    id: 'sexta-samba-1002',
    data: '2026-10-02T20:00',
    titulo: 'Sexta do Samba',
    categoria: 'Samba',
    descricao: 'Roda de samba ao vivo no terraço, com double drink até as 22h.',
    preco: 20,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
  {
    id: 'domingo-feijoada-1004',
    data: '2026-10-04T12:00',
    titulo: 'Feijoada & Voz e Violão',
    categoria: 'Gastronomia',
    descricao: 'Feijoada completa servida no almoço, com música acústica à tarde.',
  },
  {
    id: 'pagode-1010',
    data: '2026-10-10T21:00',
    titulo: 'Sábado de Pagode',
    categoria: 'Pagode',
    descricao: 'Pagode de mesa, camarote e drinks autorais até tarde.',
    preco: 25,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
  {
    id: 'ao-vivo-1016',
    data: '2026-10-16T20:30',
    titulo: 'Noite MPB ao Vivo',
    categoria: 'Ao vivo',
    descricao: 'Clássicos da MPB em formato intimista, sob as luzes do rooftop.',
  },
  {
    id: 'halloween-1031',
    data: '2026-10-31T22:00',
    titulo: 'Halloween Samoa',
    categoria: 'Festa',
    descricao: 'A festa à fantasia mais esperada de Itatiba. Vá caracterizado.',
    preco: 35,
    ingresso: 'https://uticket.com.br/samoagastrobar',
  },
]
