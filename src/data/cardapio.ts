import { fotos } from './midia'

export type CategoriaPrato = 'Lanches' | 'Massas' | 'Brasileiros' | 'Drinks'

export interface Prato {
  nome: string
  categoria: CategoriaPrato
  descricao: string
  foto: string
}

// TODO: confirmar nomes e descrições com o cardápio oficial da casa
export const pratos: Prato[] = [
  { nome: 'Burger da casa', categoria: 'Lanches', descricao: 'Pão brioche, queijo derretido e fritas crocantes. Lanche no capricho.', foto: fotos.burger },
  { nome: 'Rondelli de 2 queijos', categoria: 'Massas', descricao: 'Recheio cremoso, molho branco e parmesão ralado na hora.', foto: fotos.rondelli },
  { nome: 'Pappardelle ao ragu', categoria: 'Massas', descricao: 'Massa larga, ragu de carne, tomate-cereja e ricota.', foto: fotos.pratoAssinatura },
  { nome: 'Espaguete com bacon', categoria: 'Massas', descricao: 'Molho cremoso, bacon crocante e manjericão fresco.', foto: fotos.baldeCarbonara },
  { nome: 'Feijoada da casa', categoria: 'Brasileiros', descricao: 'Servida no barro, com arroz, couve, torresmo e farofa.', foto: fotos.feijoada },
  { nome: 'Almoço executivo', categoria: 'Brasileiros', descricao: 'De terça a domingo, das 11h às 15h, com salada e acompanhamentos.', foto: fotos.feijoadaMesa },
  { nome: 'Drinks autorais', categoria: 'Drinks', descricao: 'Caipirinhas, tônicas e criações da casa para brindar.', foto: fotos.drinks },
  { nome: 'Drink da casa', categoria: 'Drinks', descricao: 'Cítrico, gelado e no ponto para o fim de tarde no terraço.', foto: fotos.drink },
]
