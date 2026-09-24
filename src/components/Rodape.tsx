import { contato, whatsappUrl } from '../data/site'
import { Flor } from './Flor'
import { Logo } from './Header'
import { Icone } from './Icone'

const navegacao = [
  { href: '#espaco', label: 'O Espaço' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#shows', label: 'Shows' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#visite', label: 'Visite' },
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
      <p className="container rodape__legal">
        © {new Date().getFullYear()} Samoa Gastrobar · {contato.endereco}, {contato.bairro} · Beba com moderação.
      </p>
    </footer>
  )
}
