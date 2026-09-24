import { fotos } from '../data/midia'
import { mapa } from '../data/site'
import { Flor } from './Flor'
import { Icone } from './Icone'
import { atraso } from '../util/atraso'

const ambientes = [
  { titulo: 'Container verde', texto: 'A flor amarela pintada na lataria virou cartão-postal.' },
  { titulo: 'Terraço com luzes', texto: 'Varal de lâmpadas, vista da cidade e o palco das noites.' },
  { titulo: 'Área externa', texto: 'Mesas sob os guarda-sóis Spaten, tenda para os grandes eventos.' },
]

export function Espaco() {
  return (
    <section id="espaco" className="espaco">
      <div className="espaco__mosaico">
        <img className="revelar revelar--cortina" src={fotos.areaExterna} alt="Área externa com guarda-sóis e o container verde com a flor do Samoa" loading="lazy" />
        <img className="revelar revelar--cortina" style={atraso(150)} src={fotos.containerNoite} alt="Container com o logo Samoa iluminado à noite" loading="lazy" />
        <img className="revelar revelar--cortina" style={atraso(300)} src={fotos.eventoLotado} alt="Escadaria e tenda lotadas em dia de evento ao entardecer" loading="lazy" />
      </div>

      <div className="espaco__painel">
        <Flor className="espaco__flor" variante="linha" data-parallax="0.12" />
        <div className="revelar">
          <p className="script script--grande">conheça</p>
          <h2>A melhor casinha de Itatiba</h2>
          <p className="espaco__intro">
            Casa verde, container florido e muito espaço ao ar livre. Um gastrobar pensado para durar o dia
            inteiro: mesa posta no almoço, drink na mão ao entardecer e música noite adentro.
          </p>
          <ol className="espaco__lista">
            {ambientes.map((a, i) => (
              <li key={a.titulo}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{a.titulo}</h3>
                  <p>{a.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="pet">
            <span className="pet__icone">
              <Icone nome="pata" />
            </span>
            <div>
              <h3>Bar pet friendly em Itatiba</h3>
              <p>Traga seu cachorro: tem água fresquinha e espaço ao ar livre para ele curtir junto.</p>
            </div>
          </aside>
          <a className="botao" href={mapa.rotas} target="_blank" rel="noreferrer">
            <Icone nome="pin" className="botao__icone" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  )
}
