import { useState } from 'react'
import { proximosEventos } from '../data/eventos'

const semana = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' })
const diaMes = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' })
const hora = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' })

const mesmoDia = (a: Date, b: Date) => a.toDateString() === b.toDateString()

/** Faixa logo abaixo do topo com os dois próximos shows da agenda. */
export function HojeTemMusica() {
  const [agora] = useState(() => Date.now())
  const proximos = proximosEventos(agora).slice(0, 2)
  if (proximos.length === 0) return null

  const hoje = mesmoDia(new Date(proximos[0].data), new Date(agora))

  return (
    <section className="hoje" aria-labelledby="hoje-titulo">
      <div className="container hoje__grade">
        <h2 id="hoje-titulo" className="hoje__titulo">
          <span className="hoje__pulso" aria-hidden="true" />
          {hoje ? 'Hoje tem música' : 'Vem aí'}
        </h2>

        <ul className="hoje__lista">
          {proximos.map((e) => {
            const data = new Date(e.data)
            return (
              <li key={e.id}>
                <time dateTime={e.data}>
                  <strong>{semana.format(data).replace('.', '')}</strong>
                  <span>
                    {diaMes.format(data)} · {hora.format(data)}
                  </span>
                </time>
                <div>
                  <p className="hoje__evento">{e.titulo}</p>
                  <p className="hoje__atracao">{e.atracao}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <a className="link-seta" href="#agenda">
          Programação completa →
        </a>
      </div>
    </section>
  )
}
