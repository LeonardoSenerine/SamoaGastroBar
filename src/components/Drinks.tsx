import { fotos, loops } from '../data/midia'
import { Flor } from './Flor'

const destaques = ['Drinks autorais', 'Caipirinhas no capricho', 'Chopp & long necks Spaten', 'Baldes para a mesa']

export function Drinks() {
  return (
    <section className="drinks">
      <div className="container drinks__grade">
        <div className="drinks__midia revelar">
          <Flor className="drinks__flor" />
          <div className="drinks__video">
            <video src={loops.drink.src} poster={loops.drink.poster} autoPlay muted loop playsInline aria-label="Preparo de uma caipirinha no bar do Samoa" />
          </div>
          <img className="drinks__foto" src={fotos.baldeCarbonara} alt="Balde de cervejas, caipirinha e espaguete com bacon" loading="lazy" />
        </div>

        <div className="drinks__texto revelar">
          <p className="script script--grande">se for pra brindar,</p>
          <h2>Que seja no Samoa!</h2>
          <p>
            O bar é o coração da casa. Limão cortado na hora, coqueteleira trabalhando e aquele primeiro gole
            gelado enquanto o som começa lá no terraço.
          </p>
          <ul className="selos">
            {destaques.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
