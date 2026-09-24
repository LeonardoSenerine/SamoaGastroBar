import type { JSX } from 'react'
import './App.css'
import { AvisoCookies } from './components/AvisoCookies'
import { Header } from './components/Header'
import { Rodape } from './components/Rodape'
import { normalizarCaminho } from './paginas'
import { Cookies } from './paginas/Cookies'
import { Inicio } from './paginas/Inicio'
import { NaoEncontrada } from './paginas/NaoEncontrada'
import { Privacidade } from './paginas/Privacidade'

const rotas: Record<string, () => JSX.Element> = {
  '/': Inicio,
  '/privacidade': Privacidade,
  '/cookies': Cookies,
}

/** `caminho` vem de location.pathname no navegador e da lista de páginas na pré-renderização. */
export default function App({ caminho }: { caminho: string }) {
  const Pagina = rotas[normalizarCaminho(caminho)] ?? NaoEncontrada

  return (
    <>
      <Header />
      <Pagina />
      <Rodape />
      <AvisoCookies />
    </>
  )
}
