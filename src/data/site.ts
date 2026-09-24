export const contato = {
  endereco: 'R. Olga Tarrusselo Geromel, 201',
  bairro: 'Jd. São Luís — Itatiba, SP',
  whatsapp: '5511924892615',
  whatsappLabel: '(11) 92489-2615',
  instagram: 'https://www.instagram.com/samoagastrobar_',
  instagramHandle: '@samoagastrobar_',
  ifood:
    'https://www.ifood.com.br/delivery/itatiba-sp/samoa-gastrobar-jardim-sao-luiz-ii/9ea37ecd-2688-4e9b-a00e-c845ef849613',
  ingressos: 'https://uticket.com.br/samoagastrobar',
  cardapioAlmoco: 'https://www.canva.com/design/DAG-YtB2Bu4/UyIfku9rWVK9dE9_Bvl9yw/view',
  cardapioJanta: 'https://www.canva.com/design/DAG-ZSnH28M/rhMwyFAmPNFK1hGSJ2FhtQ/view',
  mapa: 'https://maps.google.com/maps?q=Samoa%20Gastrobar%20Itatiba&output=embed',
  rotas: 'https://www.google.com/maps/dir/?api=1&destination=Samoa+Gastrobar+Itatiba',
}

export const whatsappUrl = (mensagem = 'Olá, Samoa! Gostaria de fazer uma reserva.') =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const horarios = [
  // TODO: confirmar horário noturno com a casa
  { dia: 'Terça a domingo', hora: 'Almoço executivo · 11h às 15h' },
  { dia: 'Noites de show', hora: 'Conforme a agenda de eventos' },
  { dia: 'Segunda', hora: 'Fechado' },
]
