import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HojeTemMusica } from './components/HojeTemMusica'
import { Diferenciais } from './components/Diferenciais'
import { Cardapio } from './components/Cardapio'
import { Drinks } from './components/Drinks'
import { Espaco } from './components/Espaco'
import { Numeros } from './components/Numeros'
import { Shows } from './components/Shows'
import { Agenda } from './components/Agenda'
import { Palco } from './components/Palco'
import { Galeria } from './components/Galeria'
import { ChamadaFinal } from './components/ChamadaFinal'
import { Visite } from './components/Visite'
import { Rodape } from './components/Rodape'
import { AcoesFixas } from './components/AcoesFixas'
import { Letreiro } from './components/Letreiro'
import { useReveal } from './hooks/useReveal'
import { useParallax } from './hooks/useParallax'

// Ordem pensada para decidir a visita: atmosfera → comida → drinks → ambiente → música → ação
export default function App() {
  useReveal()
  useParallax()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HojeTemMusica />
        <Diferenciais />
        <Letreiro />
        <Cardapio />
        <Drinks />
        <Espaco />
        <Numeros />
        <Shows />
        <Letreiro invertido />
        <Agenda />
        <Palco />
        <Galeria />
        <ChamadaFinal />
        <Visite />
      </main>
      <Rodape />
      <AcoesFixas />
    </>
  )
}
