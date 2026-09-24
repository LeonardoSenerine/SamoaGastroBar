// Usado só no build: gera o HTML completo de cada página (pré-renderização), para
// prévias de link (WhatsApp, Instagram, Facebook), buscadores e leitores de tela
// lerem o conteúdo sem precisar rodar JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export { paginas } from './paginas.ts'

export function render(caminho: string) {
  return renderToString(
    <StrictMode>
      <App caminho={caminho} />
    </StrictMode>,
  )
}
