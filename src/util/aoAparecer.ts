/**
 * Chama `callback` uma única vez para cada elemento quando ele chega na tela.
 *
 * Usa IntersectionObserver e, como rede de segurança, confere a posição na rolagem:
 * o observer pode não disparar (cards fora da tela num carrossel horizontal, seções
 * puladas por um link do menu, navegadores embutidos). Qualquer elemento que já
 * chegou ou passou da parte de baixo da tela é revelado.
 *
 * Retorna uma função para parar de observar.
 */
export function aoAparecer(alvos: Iterable<Element>, callback: (el: Element) => void): () => void {
  const pendentes = new Set(alvos)
  let observer: IntersectionObserver | undefined
  let espera = 0

  const parar = () => {
    observer?.disconnect()
    window.removeEventListener('scroll', agendar)
    window.removeEventListener('resize', agendar)
    clearTimeout(espera)
  }

  const revelar = (el: Element) => {
    if (!pendentes.delete(el)) return
    observer?.unobserve(el)
    callback(el)
    if (pendentes.size === 0) parar()
  }

  const conferir = () => {
    espera = 0
    const limite = window.innerHeight * 0.92
    for (const el of [...pendentes]) {
      if (el.getBoundingClientRect().top < limite) revelar(el)
    }
  }

  // setTimeout em vez de requestAnimationFrame: continua funcionando mesmo se o navegador
  // estiver economizando quadros
  function agendar() {
    if (!espera) espera = window.setTimeout(conferir, 120)
  }

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => e.isIntersecting && revelar(e.target)),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    pendentes.forEach((el) => observer!.observe(el))
  }

  window.addEventListener('scroll', agendar, { passive: true })
  window.addEventListener('resize', agendar)
  conferir()

  return parar
}
