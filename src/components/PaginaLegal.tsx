import type { ReactNode } from 'react'
import { empresa } from '../data/site'
import { Flor } from './Flor'

interface PaginaLegalProps {
  sobretitulo: string
  titulo: string
  resumo: string
  children: ReactNode
}

/** Moldura das páginas de texto (privacidade, cookies). */
export function PaginaLegal({ sobretitulo, titulo, resumo, children }: PaginaLegalProps) {
  return (
    <main className="pagina-legal">
      <header className="pagina-legal__topo">
        <Flor className="pagina-legal__flor" variante="linha" />
        <div className="container pagina-legal__estreito">
          <p className="script script--grande">{sobretitulo}</p>
          <h1>{titulo}</h1>
          <p className="pagina-legal__resumo">{resumo}</p>
          <p className="pagina-legal__data">Última atualização: {empresa.atualizacao}</p>
        </div>
      </header>
      <article className="container pagina-legal__estreito pagina-legal__texto">{children}</article>
    </main>
  )
}
