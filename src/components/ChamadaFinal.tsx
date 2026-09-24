import { fotos } from '../data/midia'
import { mapa, whatsappUrl } from '../data/site'
import { Icone } from './Icone'

export function ChamadaFinal() {
  return (
    <section className="chamada" style={{ backgroundImage: `url(${fotos.containerNoite})` }}>
      <div className="container chamada__conteudo revelar">
        <p className="script script--grande">mesa cheia, copo cheio</p>
        <h2>Seu próximo encontro começa aqui</h2>
        <div className="chamada__acoes">
          <a className="botao" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <Icone nome="whatsapp" className="botao__icone" />
            Reservar mesa
          </a>
          <a className="botao botao--claro" href={mapa.rotas} target="_blank" rel="noreferrer">
            <Icone nome="pin" className="botao__icone" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  )
}
