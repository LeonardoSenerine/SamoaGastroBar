import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Só com JS rodando e sem "reduzir movimento" o CSS pode esconder conteúdo para animar a entrada.
// Sem essa classe, fotos e textos aparecem direto (nada fica invisível esperando animação).
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.classList.add('js-animar')
}

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Na versão publicada o HTML já vem pré-renderizado: o React só assume a página (hidratação).
// No modo de desenvolvimento a página vem vazia e o React monta tudo do zero.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
