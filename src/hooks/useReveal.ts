import { useEffect } from 'react'

/** Adiciona `.visivel` aos elementos `.revelar` quando entram na tela. */
export function useReveal() {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>('.revelar')
    if (!('IntersectionObserver' in window)) {
      alvos.forEach((el) => el.classList.add('visivel'))
      return
    }
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    alvos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
