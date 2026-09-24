import { fotos, loops } from '../data/midia'
import { whatsappUrl } from '../data/site'
import { useVideoNaTela } from '../hooks/useVideoNaTela'
import { Flor } from './Flor'
import { Icone } from './Icone'

export function Hero() {
  const video = useVideoNaTela()

  return (
    <section id="inicio" className="hero">
      <div className="hero__painel">
        <Flor className="hero__flor-linha" variante="linha" />
        <div className="hero__texto">
          <h1 className="hero__titulo">
            <span className="sobretitulo">Samoa Gastrobar · Itatiba, SP</span>{' '}
            <span className="hero__slogan">
              <span className="hero__linha">Chega com fome.</span>{' '}
              <span className="script">Fica pela noite.</span>
            </span>
          </h1>
          <p className="hero__lead">
            Restaurante, drinks e música ao vivo na casinha verde do Jardim São Luís. Almoço de terça a domingo,
            música ao vivo no fim de semana, e o seu cachorro também é bem-vindo.
          </p>
          <div className="hero__acoes">
            <a className="botao" href="#cardapio">
              Ver cardápio
            </a>
            <a className="botao botao--claro" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <Icone nome="whatsapp" className="botao__icone" />
              Reservar mesa
            </a>
          </div>
        </div>
      </div>

      <div className="hero__midia">
        <Flor className="hero__flor" data-parallax="-0.12" />
        <div className="hero__video">
          <video ref={video} src={loops.hero.src} poster={loops.hero.poster} muted loop playsInline preload="auto" aria-label="Noite de festa no Samoa" />
        </div>
        <figure className="hero__cartao" data-parallax="0.1">
          <img src={fotos.drinks} alt="Quatro drinks autorais sobre a mesa" />
          <figcaption>
            <span className="script">brindes</span> autorais
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
