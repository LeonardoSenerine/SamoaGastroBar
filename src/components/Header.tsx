import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/site'

const links = [
  { href: '#espaco', label: 'O Espaço' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#shows', label: 'Shows' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#visite', label: 'Visite' },
]

export function Logo({ grande = false }: { grande?: boolean }) {
  return (
    <span className={`logo ${grande ? 'logo--grande' : ''}`}>
      <span className="logo__nome">samoa</span>
      <span className="logo__sub">gastrobar</span>
    </span>
  )
}

export function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
  }, [aberto])

  const fechar = () => setAberto(false)

  return (
    <header className={`header ${rolou ? 'header--solido' : ''} ${aberto ? 'header--aberto' : ''}`}>
      <div className="header__barra container">
        <a href="#inicio" aria-label="Samoa Gastrobar — início" onClick={fechar}>
          <Logo />
        </a>

        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={fechar}>
              {l.label}
            </a>
          ))}
          <a className="botao botao--pequeno" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Reservar mesa
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
