import { fotos } from './midia'

export type CategoriaCardapio = 'Petiscos' | 'Pratos' | 'Lanches' | 'Sobremesas'

export interface ItemCardapio {
  nome: string
  categoria: CategoriaCardapio
  descricao: string
  /** Preço em reais */
  preco: number
  foto?: string
  /** Itens com foto e selo aparecem nos destaques */
  selo?: string
}

export const categorias: { nome: CategoriaCardapio; subtitulo: string }[] = [
  { nome: 'Petiscos', subtitulo: 'Para dividir com a mesa' },
  { nome: 'Pratos', subtitulo: 'Almoço e pratos principais' },
  { nome: 'Lanches', subtitulo: 'Burgers no capricho' },
  { nome: 'Sobremesas', subtitulo: 'Para fechar a conta feliz' },
]

/** DADOS FICTÍCIOS (nomes, descrições e preços) — substitua pelo cardápio oficial. */
export const cardapio: ItemCardapio[] = [
  // Petiscos
  { nome: 'Torresmo de rolo', categoria: 'Petiscos', descricao: 'Pururucado na hora, com limão e molho da casa.', preco: 38 },
  { nome: 'Fritas com cheddar e bacon', categoria: 'Petiscos', descricao: 'Porção generosa com cheddar cremoso e bacon crocante.', preco: 36 },
  { nome: 'Bolinho de feijoada', categoria: 'Petiscos', descricao: '8 unidades com geleia de pimenta e couve crispy.', preco: 34 },
  { nome: 'Isca de tilápia', categoria: 'Petiscos', descricao: 'Empanada na farinha panko, com molho tártaro.', preco: 52 },
  { nome: 'Calabresa acebolada', categoria: 'Petiscos', descricao: 'Na chapa, com cebola roxa e pão de alho.', preco: 42 },

  // Pratos
  { nome: 'Almoço executivo', categoria: 'Pratos', descricao: 'Terça a domingo, 11h às 15h. Prato do dia com arroz, feijão, salada e acompanhamentos.', preco: 32.9, foto: fotos.feijoadaMesa, selo: 'Almoço' },
  { nome: 'Feijoada da casa', categoria: 'Pratos', descricao: 'Aos sábados e domingos. Servida no barro com arroz, couve, torresmo e farofa.', preco: 49.9, foto: fotos.feijoada, selo: 'Fim de semana' },
  { nome: 'Pappardelle ao ragu', categoria: 'Pratos', descricao: 'Massa larga, ragu de carne cozido por horas, tomate-cereja e ricota.', preco: 58, foto: fotos.pratoAssinatura, selo: 'Assinatura' },
  { nome: 'Rondelli de 2 queijos', categoria: 'Pratos', descricao: 'Recheio cremoso, molho branco e parmesão ralado na hora.', preco: 52, foto: fotos.rondelli },
  { nome: 'Espaguete com bacon', categoria: 'Pratos', descricao: 'Molho cremoso, bacon crocante e manjericão fresco.', preco: 46, foto: fotos.baldeCarbonara },

  // Lanches
  { nome: 'Burger da casa', categoria: 'Lanches', descricao: 'Blend 180 g, queijo derretido, cebola caramelizada e fritas no pão brioche.', preco: 39.9, foto: fotos.burger, selo: 'Mais pedido' },
  { nome: 'Smash duplo', categoria: 'Lanches', descricao: 'Dois smashes de 90 g, cheddar, picles e maionese da casa.', preco: 36 },
  { nome: 'Burger vegetariano', categoria: 'Lanches', descricao: 'Hambúrguer de grão-de-bico, queijo prato e salada.', preco: 34 },

  // Sobremesas
  { nome: 'Petit gâteau', categoria: 'Sobremesas', descricao: 'Com sorvete de creme e calda de chocolate.', preco: 26 },
  { nome: 'Pudim da casa', categoria: 'Sobremesas', descricao: 'Receita de família, sem furinhos.', preco: 18 },
  { nome: 'Brownie com sorvete', categoria: 'Sobremesas', descricao: 'Brownie quentinho, sorvete e farofa de castanha.', preco: 24 },
]

export interface Drink {
  nome: string
  descricao: string
  preco: number
}

/** DADOS FICTÍCIOS — substitua pela carta de drinks oficial. */
export const drinks: Drink[] = [
  { nome: 'Samoa Tropical', descricao: 'Rum, maracujá, limão-siciliano e hortelã. O drink da casa.', preco: 32 },
  { nome: 'Caipirinha no capricho', descricao: 'Limão cortado na hora, cachaça ou vodka.', preco: 24 },
  { nome: 'Gin tônica cítrica', descricao: 'Gin, tônica, laranja-bahia e pimenta rosa.', preco: 34 },
  { nome: 'Mojito', descricao: 'Rum branco, hortelã, limão e água com gás.', preco: 30 },
  { nome: 'Chopp Spaten 400 ml', descricao: 'Sempre gelado, direto da chopeira.', preco: 16 },
  { nome: 'Balde 5 long necks', descricao: 'Spaten, Stella Artois ou Original.', preco: 55 },
]

export const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
