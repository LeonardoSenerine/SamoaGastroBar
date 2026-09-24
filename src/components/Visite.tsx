import { salvarConsentimento, useConsentimento } from '../consentimento'
import { contato, funcionamento, mapa, whatsappUrl } from '../data/site'
import { Flor } from './Flor'
import { Icone } from './Icone'

export function Visite() {
  const { consentimento } = useConsentimento()

  return (
    <section id="visite" className="visite">
      <div className="visite__painel">
        <Flor className="visite__flor" variante="linha" />
        <div className="revelar">
          <p className="script script--grande">alô, samoa!</p>
          <h2>Encontre o Samoa</h2>

          <address className="visite__endereco">
            <Icone nome="pin" className="visite__icone" />
            <span>
              {contato.endereco}
              <br />
              {contato.bairro}
            </span>
          </address>
          <p className="visite__telefone">
            Reservas e pedidos: <a href={contato.telefoneLink}>{contato.telefoneLabel}</a>
          </p>

          <dl className="horarios">
            {funcionamento.map((h) => (
              <div key={h.dia + h.hora}>
                <dt>{h.dia}</dt>
                <dd>{h.hora}</dd>
              </div>
            ))}
          </dl>

          <div className="visite__acoes">
            <a className="botao" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <Icone nome="whatsapp" className="botao__icone" />
              Reservar pelo WhatsApp
            </a>
            <a className="botao botao--claro" href={mapa.rotas} target="_blank" rel="noreferrer">
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="visite__mapa">
        {/* o Google grava cookies: o mapa só carrega com consentimento */}
        {consentimento?.mapas ? (
          <iframe title="Mapa do Samoa Gastrobar" src={mapa.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div className="mapa-bloqueado">
            <Icone nome="pin" className="mapa-bloqueado__icone" />
            <p className="mapa-bloqueado__titulo">Mapa do Google desligado</p>
            <p>O Google Maps grava cookies no seu navegador, então ele só aparece com a sua permissão.</p>
            <div className="mapa-bloqueado__acoes">
              <button className="botao botao--pequeno" onClick={() => salvarConsentimento(true)}>
                Permitir e carregar mapa
              </button>
              <a className="botao botao--claro botao--pequeno" href={mapa.rotas} target="_blank" rel="noreferrer">
                Abrir no Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
