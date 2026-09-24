import { Flor } from '../components/Flor'
import { Icone } from '../components/Icone'
import { whatsappUrl } from '../data/site'

export function NaoEncontrada() {
  return (
    <main className="nao-encontrada">
      <Flor className="nao-encontrada__flor" />
      <Flor className="nao-encontrada__flor-linha" variante="linha" />
      <div className="container nao-encontrada__conteudo">
        <p className="nao-encontrada__codigo" aria-hidden="true">
          4<span>0</span>4
        </p>
        <p className="script script--grande">ih, essa mesa não existe</p>
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada__texto">
          Parece que essa página saiu mais cedo da festa. O link pode estar errado ou a página mudou de lugar. Mas a casa
          continua aberta:
        </p>
        <div className="nao-encontrada__acoes">
          <a className="botao" href="/">
            Voltar ao início
          </a>
          <a className="botao botao--claro" href="/#cardapio">
            Ver cardápio
          </a>
          <a className="botao botao--claro" href="/#agenda">
            Próximos eventos
          </a>
        </div>
        <a className="link-seta" href={whatsappUrl('Olá, Samoa! Estava no site e não achei o que procurava.')} target="_blank" rel="noreferrer">
          <Icone nome="whatsapp" className="botao__icone" /> Ou fale com a gente no WhatsApp
        </a>
      </div>
    </main>
  )
}
