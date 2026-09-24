import { fotos } from '../data/midia'
import { whatsappUrl } from '../data/site'
import { Icone } from './Icone'

const ocasioes = ['Aniversários', 'Confraternizações', 'Eventos de empresa', 'Festas fechadas', 'Lançamentos']

export function Palco() {
  return (
    <section id="palco" className="palco">
      <div className="container palco__grade">
        <div className="palco__texto revelar">
          <p className="script script--grande">o samoa também é palco</p>
          <h2>Sua festa, do nosso jeito</h2>
          <p>
            Música, festa e gente boa para transformar uma noite comum numa boa história. Reserve o terraço, a área
            externa ou a casa inteira. A gente cuida da comida, dos drinks e do som.
          </p>
          <ul className="selos">
            {ocasioes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <a className="botao" href={whatsappUrl('Olá, Samoa! Quero fazer um evento aí. Podem me passar as opções?')} target="_blank" rel="noreferrer">
            <Icone nome="whatsapp" className="botao__icone" />
            Quero fazer meu evento
          </a>
        </div>

        <div className="palco__fotos">
          <img className="revelar" src={fotos.eventoLotado} alt="Escadaria e tenda lotadas em dia de evento ao entardecer" loading="lazy" />
          <img className="revelar" src={fotos.publicoSelfie} alt="Amigas tirando selfie sob o guarda-sol Spaten" loading="lazy" />
          <img className="revelar" src={fotos.publicoAmigas} alt="Amigas brindando com chopp" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
