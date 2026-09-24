/**
 * Dados legais usados nas políticas de privacidade e de cookies.
 * TODO: preencher com os dados reais da empresa (cada linha só aparece no site quando preenchida).
 */
export const empresa = {
  razaoSocial: '',
  cnpj: '',
  emailPrivacidade: '',
  /** data da última revisão das políticas */
  atualizacao: '24 de setembro de 2026',
}

export const contato = {
  nome: 'Samoa Gastrobar',
  endereco: 'Rua Olga Tarrusselo Geromel, 201',
  bairro: 'Jardim São Luís — Itatiba, SP',
  cidade: 'Itatiba',
  estado: 'SP',
  whatsapp: '5511924892615',
  whatsappLabel: '(11) 92489-2615',
  telefone: '+55-11-92489-2615',
  instagram: 'https://www.instagram.com/samoagastrobar_',
  instagramHandle: '@samoagastrobar_',
  ifood:
    'https://www.ifood.com.br/delivery/itatiba-sp/samoa-gastrobar-jardim-sao-luiz-ii/9ea37ecd-2688-4e9b-a00e-c845ef849613',
  ingressos: 'https://uticket.com.br/samoagastrobar',
  cardapioAlmoco: 'https://www.canva.com/design/DAG-YtB2Bu4/UyIfku9rWVK9dE9_Bvl9yw/view',
  cardapioJanta: 'https://www.canva.com/design/DAG-ZSnH28M/rhMwyFAmPNFK1hGSJ2FhtQ/view',
}

/**
 * Coordenadas do pino oficial do Samoa no Google Maps. O mapa usa a coordenada direto,
 * sem busca: pelo nome aparece um "Samoa" homônimo fora do Brasil, e pelo endereço
 * erra porque o Google cadastrou a rua como "Av.".
 */
export const geo = { lat: -23.013859, lng: -46.8315465, cep: '13253-090' }

export const mapa = {
  embed: `https://maps.google.com/maps?q=${geo.lat},${geo.lng}&z=17&hl=pt-BR&output=embed`,
  rotas: `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`,
}

export const whatsappUrl = (mensagem = 'Olá, Samoa! Gostaria de reservar uma mesa.') =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`

/**
 * DADOS FICTÍCIOS no horário noturno — confirmar com a casa antes de publicar.
 * `schema` alimenta o JSON-LD (dias em inglês, como pede o Schema.org).
 */
export const funcionamento = [
  { dia: 'Terça a domingo', hora: 'Almoço · 11h às 15h', schema: { dias: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], abre: '11:00', fecha: '15:00' } },
  { dia: 'Quinta a sábado', hora: 'Noite · 18h à 01h', schema: { dias: ['Thursday', 'Friday', 'Saturday'], abre: '18:00', fecha: '01:00' } },
  { dia: 'Domingo', hora: 'Tarde · 15h às 22h', schema: { dias: ['Sunday'], abre: '15:00', fecha: '22:00' } },
  { dia: 'Segunda', hora: 'Fechado', schema: null },
]
