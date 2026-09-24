import { abrirPreferencias } from '../consentimento'
import { contato, whatsappUrl } from '../data/site'
import { Flor } from './Flor'
import { Logo } from './Logo'
import { Icone } from './Icone'

const navegacao = [
  { href: '/#cardapio', label: 'Cardápio' },
  { href: '/#drinks', label: 'Drinks' },
  { href: '/#shows', label: 'Música ao vivo' },
  { href: '/#agenda', label: 'Agenda' },
  { href: '/#palco', label: 'Eventos fechados' },
  { href: '/#visite', label: 'Como chegar' },
]

export function Rodape() {
  return (
    <footer className="rodape">
      <Flor className="rodape__flor" />
      <div className="container rodape__grade">
        <div className="rodape__marca">
          <Logo grande />
          <p className="script">Se for pra brindar, que seja no Samoa!</p>
        </div>

        <nav aria-label="Rodapé">
          <h3>Navegue</h3>
          <ul>
            {navegacao.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href={contato.instagram} target="_blank" rel="noreferrer">
                <Icone nome="instagram" className="rodape__icone" /> {contato.instagramHandle}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                <Icone nome="whatsapp" className="rodape__icone" /> {contato.whatsappLabel}
              </a>
            </li>
            <li>
              <a href={contato.telefoneLink}>Reservas {contato.telefoneLabel}</a>
            </li>
            <li>
              <a href={contato.ifood} target="_blank" rel="noreferrer">
                iFood
              </a>
            </li>
            <li>
              <a href={contato.ingressos} target="_blank" rel="noreferrer">
                Ingressos · Uticket
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container rodape__legal">
        <p>
          © {new Date().getFullYear()} Samoa Gastrobar · {contato.endereco}, {contato.bairro} · Beba com moderação.
        </p>
        <nav className="rodape__politicas" aria-label="Políticas">
          <a href="/privacidade">Política de privacidade</a>
          <a href="/cookies">Política de cookies</a>
          <button type="button" onClick={abrirPreferencias}>
            Preferências de cookies
          </button>
        </nav>
      </div>
    </footer>
  )
}
