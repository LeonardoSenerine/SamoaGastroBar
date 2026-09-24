import type { SVGProps } from 'react'

interface FlorProps extends SVGProps<SVGSVGElement> {
  /** `solida` preenche as pétalas; `linha` desenha só o contorno */
  variante?: 'solida' | 'linha'
}

const petala = 'M0 0 C -26 -18 -30 -62 0 -92 C 30 -62 26 -18 0 0 Z'

/** Flor de cinco pétalas pintada nos containers do Samoa. */
export function Flor({ variante = 'solida', ...resto }: FlorProps) {
  const solida = variante === 'solida'
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" {...resto}>
      <g
        fill={solida ? 'currentColor' : 'none'}
        stroke={solida ? 'none' : 'currentColor'}
        strokeWidth={solida ? 0 : 1.5}
        strokeLinejoin="round"
      >
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={petala} transform={`rotate(${r})`} />
        ))}
        <circle r="13" fill={solida ? 'var(--laranja)' : 'none'} />
      </g>
    </svg>
  )
}
