export type Categoria = 'Sertanejo' | 'Pagode' | 'Samba' | 'Ao vivo' | 'DJ' | 'Festa'

export interface Evento {
  id: string
  /** Data e hora local, ex.: '2026-10-02T20:00' */
  data: string
  titulo: string
  /** Quem se apresenta (banda, DJ, artista) */
  atracao: string
  categoria: Categoria
  descricao: string
  /** Ingresso antecipado em reais; omita quando não souber (o site não mostra valor) */
  preco?: number
  /** Marque só quando a casa confirmar que a entrada é livre */
  entradaLivre?: boolean
  /** Link de venda (Uticket). Sem link, o botão abre o WhatsApp para reservar mesa. */
  ingresso?: string
}

/**
 * Enquanto for `true`, o build NÃO publica os eventos no JSON-LD (para o Google não indexar
 * shows que não existem). A agenda abaixo é real, então fica `false`.
 */
export const agendaDeExemplo = false

/**
 * Programação publicada pelo Samoa no Instagram (@samoagastrobar_, post de 24/09/2026).
 * Atualize a cada semana; eventos que já passaram somem sozinhos do site.
 */
export const eventos: Evento[] = [
  {
    id: 'leandro-novais-2509',
    data: '2026-09-25T19:00',
    titulo: 'Sexta sertaneja',
    atracao: 'Leandro Novais',
    categoria: 'Sertanejo',
    descricao: 'Sertanejo pra começar o fim de semana.',
  },
  {
    id: 'noite-sertaneja-2609',
    data: '2026-09-26T19:00',
    titulo: 'Noite Sertaneja',
    atracao: 'Alessandro Coelho + participações especiais',
    categoria: 'Sertanejo',
    descricao: 'Porque sábado pede uma noite um pouco diferente.',
  },
  {
    id: 'papel-com-2709',
    data: '2026-09-27T16:00',
    titulo: 'Domingo de pagode',
    atracao: 'Papel.com',
    categoria: 'Pagode',
    descricao: 'Pagode pra fechar a programação sem pressa.',
  },
]

/** Eventos que ainda não terminaram (considera ~6h de duração), em ordem de data. */
export function proximosEventos(agora: number = Date.now()): Evento[] {
  return eventos
    .filter((e) => new Date(e.data).getTime() + 6 * 3600_000 > agora)
    .sort((a, b) => a.data.localeCompare(b.data))
}
