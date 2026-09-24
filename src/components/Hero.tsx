import { fotos, loops } from '../data/midia'
import { Flor } from './Flor'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__painel">
        <Flor className="hero__flor-linha" variante="linha" />
        <div className="hero__texto">
          <p className="sobretitulo">Gastrobar · Itatiba, SP</p>
          <h1 className="hero__titulo">
            Vem <span className="script">curtir</span>
            <br />o Samoa
          </h1>
          <p className="hero__lead">
            Música boa, lanche no capricho e drinks autorais na casinha verde do Jardim São Luís. Almoço de
            terça a domingo e shows que param a cidade.
          </p>
          <div className="hero__acoes">
            <a className="botao" href="#agenda">
              Próximos eventos
            </a>
            <a className="botao botao--claro" href="#cardapio">
              Ver cardápio
            </a>
          </div>
        </div>
      </div>

      <div className="hero__midia">
        <Flor className="hero__flor" />
        <div className="hero__video">
          <video src={loops.hero.src} poster={loops.hero.poster} autoPlay muted loop playsInline aria-label="Noite de festa no Samoa" />
        </div>
        <figure className="hero__cartao">
          <img src={fotos.drinks} alt="Quatro drinks autorais sobre a mesa" />
          <figcaption>
            <span className="script">brindes</span> autorais
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
