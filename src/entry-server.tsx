// Usado só no build: gera o HTML completo da página (pré-renderização), para
// prévias de link (WhatsApp, Instagram, Facebook), buscadores e leitores de tela
// lerem o conteúdo sem precisar rodar JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
