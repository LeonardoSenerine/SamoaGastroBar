import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Só com JS rodando e sem "reduzir movimento" o CSS pode esconder conteúdo para animar a entrada.
// Sem essa classe, fotos e textos aparecem direto (nada fica invisível esperando animação).
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.classList.add('js-animar')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
