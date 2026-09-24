import { drinks, preco } from '../data/cardapio'
import { fotos, loops } from '../data/midia'
import { useVideoNaTela } from '../hooks/useVideoNaTela'
import { Flor } from './Flor'

export function Drinks() {
  const video = useVideoNaTela()

  return (
    <section id="drinks" className="drinks">
      <div className="container drinks__grade">
        <div className="drinks__midia revelar">
          <Flor className="drinks__flor" data-parallax="-0.1" />
          <div className="drinks__video">
            <video ref={video} src={loops.drink.src} poster={loops.drink.poster} muted loop playsInline preload="none" aria-label="Preparo de uma caipirinha no bar do Samoa" />
          </div>
          <img className="drinks__foto" data-parallax="0.08" src={fotos.drinks} alt="Quatro drinks autorais sobre a mesa" loading="lazy" />
        </div>

        <div className="drinks__texto revelar">
          <p className="script script--grande">se for pra brindar,</p>
          <h2>Que seja no Samoa!</h2>
          <p>
            Clássicos, autorais e chopp gelado para prolongar a noite. Limão cortado na hora e aquele primeiro gole
            enquanto o som começa lá no terraço.
          </p>
          <ul className="carta">
            {drinks.map((d) => (
              <li key={d.nome}>
                <div className="menu__linha">
                  <h3>{d.nome}</h3>
                  <span className="menu__pontos" aria-hidden="true" />
                  <span className="menu__preco">{preco.format(d.preco)}</span>
                </div>
                <p>{d.descricao}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
