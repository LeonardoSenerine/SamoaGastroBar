import { useEffect, useRef, useState } from 'react'
import { fotos } from '../data/midia'
import { aoAparecer } from '../util/aoAparecer'
import { atraso } from '../util/atraso'

interface Numero {
  valor: number
  casas?: number
  prefixo?: string
  sufixo: string
  rotulo: string
}

const numeros: Numero[] = [
  { valor: 10, sufixo: ' mil+', rotulo: 'seguidores no Instagram' },
  { valor: 4.4, casas: 1, sufixo: ' ★', rotulo: 'avaliação no Google' },
  { valor: 6, sufixo: ' dias', rotulo: 'por semana, de terça a domingo' },
]

/**
 * Conta de 0 até o valor quando entra na tela. O HTML pré-renderizado já traz o valor final
 * (bom para buscadores e para quem pediu "reduzir movimento").
 */
function Contador({ valor, casas = 0, sufixo }: Numero) {
  const ref = useRef<HTMLElement>(null)
  const [atual, setAtual] = useState(valor)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return
    let quadro = 0
    const parar = aoAparecer([el], () => {
      const inicio = performance.now()
      const passo = () => {
        const t = Math.min((performance.now() - inicio) / 1600, 1)
        setAtual(valor * (1 - Math.pow(1 - t, 3)))
        // setTimeout (~60 fps) em vez de requestAnimationFrame: garante que chega no valor final
        if (t < 1) quadro = window.setTimeout(passo, 16)
      }
      passo()
    })
    return () => {
      parar()
      clearTimeout(quadro)
    }
  }, [valor])

  const texto = atual.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })
  return (
    <strong ref={ref} aria-label={`${valor.toLocaleString('pt-BR')}${sufixo}`}>
      {texto}
      {sufixo}
    </strong>
  )
}

export function Numeros() {
  return (
    <section className="numeros" style={{ backgroundImage: `url(${fotos.eventoLotado})` }}>
      <div className="container numeros__grade">
        {numeros.map((n, i) => (
          <div key={n.rotulo} className="numero revelar" style={atraso(i * 120)}>
            <Contador {...n} />
            <span>{n.rotulo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
