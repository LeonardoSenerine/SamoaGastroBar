import { Flor } from './Flor'

const frases = ['Música ao vivo', 'Drinks autorais', 'Almoço executivo', 'Chopp Spaten', 'Pet friendly', 'Samba & pagode', 'Petiscos pra dividir']

/** Faixa de texto rolando sem parar (para no hover e some o movimento com "reduzir movimento"). */
export function Letreiro({ invertido = false }: { invertido?: boolean }) {
  const itens = [...frases, ...frases]
  return (
    <div className={`letreiro ${invertido ? 'letreiro--invertido' : ''}`} aria-hidden="true">
      <div className="letreiro__trilho">
        {itens.map((f, i) => (
          <span key={i} className="letreiro__item">
            {f}
            <Flor className="letreiro__flor" />
          </span>
        ))}
      </div>
    </div>
  )
}
