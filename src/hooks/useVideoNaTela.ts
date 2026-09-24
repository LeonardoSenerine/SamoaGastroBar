import { useEffect, useRef } from 'react'

/**
 * Toca um vídeo mudo em loop só enquanto ele está visível, e nunca quando o
 * visitante pediu menos movimento (prefers-reduced-motion) — nesse caso fica o poster.
 * Use com `preload="none"` para vídeos abaixo da dobra: nada baixa até entrar na tela.
 */
export function useVideoNaTela<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (movimentoReduzido.matches) return

    if (!('IntersectionObserver' in window)) {
      video.play().catch(() => {})
      return
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return ref
}
