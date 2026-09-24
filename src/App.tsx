import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Diferenciais } from './components/Diferenciais'
import { Espaco } from './components/Espaco'
import { Cardapio } from './components/Cardapio'
import { Drinks } from './components/Drinks'
import { Numeros } from './components/Numeros'
import { Shows } from './components/Shows'
import { Agenda } from './components/Agenda'
import { Galeria } from './components/Galeria'
import { Visite } from './components/Visite'
import { Rodape } from './components/Rodape'
import { BarraMobile } from './components/BarraMobile'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Espaco />
        <Cardapio />
        <Drinks />
        <Numeros />
        <Shows />
        <Agenda />
        <Galeria />
        <Visite />
      </main>
      <Rodape />
      <BarraMobile />
    </>
  )
}
