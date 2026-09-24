import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/site'
import { Icone } from './Icone'

/** Atalhos fixos no rodapé da tela do celular; aparecem depois que o visitante passa do topo. */
export function BarraMobile() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.8)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <div className={`barra-mobile ${visivel ? 'barra-mobile--visivel' : ''}`} aria-hidden={!visivel}>
      <a className="botao botao--claro" href="#agenda" tabIndex={visivel ? 0 : -1}>
        Eventos
      </a>
      <a className="botao" href={whatsappUrl()} target="_blank" rel="noreferrer" tabIndex={visivel ? 0 : -1}>
        <Icone nome="whatsapp" className="botao__icone" />
        Reservar
      </a>
    </div>
  )
}
