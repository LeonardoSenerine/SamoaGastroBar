import { fotos } from '../data/midia'
import { contato } from '../data/site'
import { Icone } from './Icone'
import { atraso } from '../util/atraso'

const imagens = [
  { src: fotos.containerLogo, alt: 'Container verde com a flor amarela e o logo Samoa Gastrobar' },
  { src: fotos.burger, alt: 'Burger com fritas: “Vem curtir o Samoa com música boa e lanche no capricho”' },
  { src: fotos.publicoTrio, alt: 'Trio de amigos sorrindo na área externa' },
  { src: fotos.bannerSpaten, alt: 'Painel Samoa Gastrobar e Spaten ao entardecer' },
  { src: fotos.noite, alt: 'Terraço lotado à noite sob o varal de luzes' },
  { src: fotos.rondelli, alt: 'Rondelli de dois queijos com manjericão' },
  { src: fotos.drink, alt: 'Drink cítrico em frente ao painel “Se for pra brindar, que seja no Samoa!”' },
  { src: fotos.fachada, alt: 'Casa verde de dois andares ao pôr do sol' },
]

export function Galeria() {
  return (
    <section className="galeria">
      <div className="container">
        <header className="galeria__cabecalho revelar">
          <div>
            <p className="script script--grande">quem vem, volta</p>
            <h2>Siga {contato.instagramHandle}</h2>
          </div>
          <a className="botao botao--claro" href={contato.instagram} target="_blank" rel="noreferrer">
            <Icone nome="instagram" className="botao__icone" />
            Ver no Instagram
          </a>
        </header>
      </div>
      <ul className="galeria__grade">
        {imagens.map((i, n) => (
          <li key={i.src} className="revelar revelar--zoom" style={atraso((n % 4) * 90)}>
            <a href={contato.instagram} target="_blank" rel="noreferrer" aria-label={`${i.alt} — abrir Instagram`}>
              <img src={i.src} alt={i.alt} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
