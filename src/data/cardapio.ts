import { fotos } from './midia'

export type CategoriaCardapio = 'Massas' | 'Parmegianas' | 'Pratos' | 'Burgers' | 'Porções' | 'Sobremesas'

export interface ItemCardapio {
  nome: string
  categoria: CategoriaCardapio
  descricao?: string
  /** Preço em reais */
  preco: number
  foto?: string
  /** Itens com foto e selo aparecem nos destaques */
  selo?: string
}

export const categorias: { nome: CategoriaCardapio; subtitulo: string }[] = [
  { nome: 'Massas', subtitulo: 'No almoço, de terça a domingo' },
  { nome: 'Parmegianas', subtitulo: 'No almoço, com arroz branco e batata frita' },
  { nome: 'Pratos', subtitulo: 'No almoço: bifes, frango, feijoada e saladas' },
  { nome: 'Burgers', subtitulo: 'À noite, no pão brioche com hambúrguer artesanal' },
  { nome: 'Porções', subtitulo: 'À noite, para dividir com a mesa' },
  { nome: 'Sobremesas', subtitulo: 'Para fechar a conta feliz' },
]

const comArrozESalada = 'Acompanha arroz branco e salada.'
const comArrozEFritas = 'Acompanha arroz branco e batata frita.'
const comArrozFeijaoFritas = 'Acompanha arroz branco, feijão e batata frita.'

/**
 * Cardápio oficial do Samoa (PDFs "Cardápio almoço" e "Cardápio janta" do Linktree, setembro/2026).
 * Atualize aqui quando os preços mudarem.
 */
export const cardapio: ItemCardapio[] = [
  // Massas (almoço)
  { nome: 'Macarrão à carbonara', categoria: 'Massas', descricao: 'Massa, bacon, ovos e queijo parmesão.', preco: 46, foto: fotos.baldeCarbonara, selo: 'Almoço' },
  { nome: 'Rondelli de presunto e queijo', categoria: 'Massas', descricao: comArrozESalada, preco: 32 },
  { nome: 'Rondelli de ricota com espinafre', categoria: 'Massas', descricao: comArrozESalada, preco: 32 },
  { nome: 'Canelone de presunto e queijo', categoria: 'Massas', descricao: comArrozESalada, preco: 32 },
  { nome: 'Canelone de dois queijos', categoria: 'Massas', descricao: comArrozESalada, preco: 32 },
  { nome: 'Macarrão com frango à milanesa', categoria: 'Massas', descricao: 'Massa, molho vermelho caseiro e frango à milanesa.', preco: 32 },

  // Parmegianas (almoço)
  { nome: 'Parmegiana de frango', categoria: 'Parmegianas', descricao: comArrozEFritas, preco: 34 },
  { nome: 'Parmegiana de contra filé', categoria: 'Parmegianas', descricao: comArrozEFritas, preco: 38 },
  { nome: 'Parmegiana de tilápia', categoria: 'Parmegianas', descricao: comArrozEFritas, preco: 39 },
  { nome: 'Parmegiana de filé mignon', categoria: 'Parmegianas', descricao: comArrozEFritas, preco: 54 },

  // Pratos (almoço)
  { nome: 'Feijoada', categoria: 'Pratos', descricao: 'Quarta e sábado. Acompanha arroz branco, couve refogada, vinagrete e farofa.', preco: 36, foto: fotos.feijoada, selo: 'Quarta e sábado' },
  { nome: 'Bife a cavalo', categoria: 'Pratos', descricao: comArrozFeijaoFritas, preco: 34 },
  { nome: 'Bife acebolado', categoria: 'Pratos', descricao: comArrozFeijaoFritas, preco: 34 },
  { nome: 'Bife ao molho madeira', categoria: 'Pratos', descricao: 'Acompanha arroz branco, purê de batata e salada.', preco: 37 },
  { nome: 'Bife à milanesa', categoria: 'Pratos', descricao: comArrozFeijaoFritas, preco: 29 },
  { nome: 'Filé de frango grelhado', categoria: 'Pratos', descricao: 'Acompanha arroz branco, feijão e salada.', preco: 29 },
  { nome: 'Filé de frango com legumes', categoria: 'Pratos', descricao: 'Acompanha purê de batata.', preco: 33 },
  { nome: 'Salada individual', categoria: 'Pratos', descricao: 'Alface, tomate e rúcula.', preco: 14 },
  { nome: 'Salada grande', categoria: 'Pratos', descricao: 'Alface, tomate e rúcula.', preco: 29 },

  // Burgers (noite)
  { nome: 'Samoa Supremo', categoria: 'Burgers', descricao: 'Pão brioche, hambúrguer artesanal, maionese caseira, queijo, bacon, alface, tomate e cebola caramelizada.', preco: 37, foto: fotos.burger, selo: 'Noite' },
  { nome: 'Samoa Burguer', categoria: 'Burgers', descricao: 'Pão brioche, hambúrguer artesanal, maionese caseira e queijo.', preco: 26 },
  { nome: 'Samoa Bacon', categoria: 'Burgers', descricao: 'Pão brioche, hambúrguer artesanal, maionese caseira, queijo, bacon, alface, tomate e cebola roxa.', preco: 35 },
  { nome: 'Samoa Cheddar', categoria: 'Burgers', descricao: 'Pão brioche, hambúrguer artesanal, maionese caseira, cheddar, alface, tomate e cebola.', preco: 36 },
  { nome: 'Samoa Fresh', categoria: 'Burgers', descricao: 'Pão francês, hambúrguer artesanal, maionese caseira, queijo, rúcula e cebola roxa.', preco: 36 },
  { nome: 'Samoa Turbo', categoria: 'Burgers', descricao: 'Pão brioche, 2 hambúrgueres artesanais, maionese caseira, queijo, bacon, alface, tomate e cebola roxa.', preco: 59 },

  // Porções (noite)
  { nome: 'Torresmo', categoria: 'Porções', preco: 39, foto: fotos.torresmo, selo: 'Para dividir' },
  { nome: 'Batata frita', categoria: 'Porções', preco: 28 },
  { nome: 'Batata frita com cheddar e bacon', categoria: 'Porções', preco: 38 },
  { nome: 'Calabresa acebolada', categoria: 'Porções', descricao: 'Acompanha pão francês.', preco: 27 },
  { nome: 'Anéis de cebola', categoria: 'Porções', preco: 30 },
  { nome: 'Polenta frita', categoria: 'Porções', preco: 33 },
  { nome: 'Tábua de frios P', categoria: 'Porções', preco: 29 },
  { nome: 'Isca de frango', categoria: 'Porções', preco: 44 },
  { nome: 'Tilápia', categoria: 'Porções', preco: 69 },
  { nome: 'Contra filé', categoria: 'Porções', descricao: 'Acompanha pão francês.', preco: 79 },
  { nome: 'Filé mignon', categoria: 'Porções', descricao: 'Acompanha pão francês.', preco: 109 },

  // Sobremesas
  { nome: 'Petit gateau', categoria: 'Sobremesas', preco: 25 },
  { nome: 'Pudim no copo', categoria: 'Sobremesas', preco: 16 },
  { nome: 'Taça de sorvete', categoria: 'Sobremesas', preco: 22 },
  { nome: 'Mousse de chocolate', categoria: 'Sobremesas', preco: 12 },
  { nome: 'Mousse de maracujá', categoria: 'Sobremesas', preco: 12 },
  { nome: 'Mousse de limão', categoria: 'Sobremesas', preco: 12 },
]

export interface Drink {
  nome: string
  descricao: string
  preco: number
}

/** Carta oficial de drinks e cervejas (mesma fonte do cardápio). */
export const drinks: Drink[] = [
  { nome: 'Drink Samoa', descricao: 'Aperol, sprite, gin e laranja. O drink da casa.', preco: 36 },
  { nome: 'Caipirinha tradicional', descricao: 'Abacaxi, limão, morango ou kiwi.', preco: 34 },
  { nome: 'Caipirinha de vinho', descricao: 'Abacaxi ou limão.', preco: 38 },
  { nome: 'Gin tropical', descricao: 'Gin, laranja e Red Bull tropical.', preco: 33 },
  { nome: 'Solar spritz', descricao: 'Campari, suco de laranja e água com gás.', preco: 36 },
  { nome: '43 Spritz', descricao: 'Licor 43, limão, sprite e hortelã.', preco: 39 },
  { nome: 'Citrus fresh (sem álcool)', descricao: 'Limão, laranja, água com gás e hortelã.', preco: 32 },
  { nome: 'Spaten 600 ml', descricao: 'O Samoa é bar Spaten. Também tem Original, Stella e long necks.', preco: 18 },
]

export const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
