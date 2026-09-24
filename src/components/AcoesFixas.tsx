import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/site'
import { Icone } from './Icone'

/**
 * Reserva sempre à mão: barra com "Eventos" e "Reservar mesa" no celular e
 * botão flutuante de WhatsApp no computador. Aparecem depois do topo.
 */
export function AcoesFixas() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.8)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const foco = visivel ? 0 : -1

  return (
    <>
      <div className={`barra-mobile ${visivel ? 'barra-mobile--visivel' : ''}`} aria-hidden={!visivel}>
        <a className="botao botao--claro" href="#agenda" tabIndex={foco}>
          Eventos
        </a>
        <a className="botao" href={whatsappUrl()} target="_blank" rel="noreferrer" tabIndex={foco}>
          <Icone nome="whatsapp" className="botao__icone" />
          Reservar mesa
        </a>
      </div>

      <a
        className={`whatsapp-flutuante ${visivel ? 'whatsapp-flutuante--visivel' : ''}`}
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        tabIndex={foco}
        aria-hidden={!visivel}
      >
        <Icone nome="whatsapp" />
        <span>Reserve sua mesa</span>
      </a>
    </>
  )
}
