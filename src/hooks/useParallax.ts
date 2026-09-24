import { useEffect } from 'react'

/**
 * Parallax leve para elementos com `data-parallax="0.15"` (fração da rolagem).
 * Só no computador e sem "reduzir movimento"; atualiza uma vez por quadro.
 */
export function useParallax() {
  useEffect(() => {
    const podeAnimar =
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
      window.matchMedia('(min-width: 961px) and (hover: hover)').matches
    if (!podeAnimar) return

    const alvos = [...document.querySelectorAll<HTMLElement>('[data-parallax]')]
    let quadro = 0

    const atualizar = () => {
      quadro = 0
      const meio = window.innerHeight / 2
      for (const el of alvos) {
        const caixa = el.parentElement!.getBoundingClientRect()
        if (caixa.bottom < -200 || caixa.top > window.innerHeight + 200) continue
        const deslocamento = (caixa.top + caixa.height / 2 - meio) * Number(el.dataset.parallax)
        el.style.translate = `0 ${deslocamento.toFixed(1)}px`
      }
    }
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(atualizar)
    }

    atualizar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => {
      window.removeEventListener('scroll', aoRolar)
      cancelAnimationFrame(quadro)
      alvos.forEach((el) => (el.style.translate = ''))
    }
  }, [])
}
