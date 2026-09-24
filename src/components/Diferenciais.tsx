import { Icone, type NomeIcone } from './Icone'

const itens: { icone: NomeIcone; titulo: string; texto: string }[] = [
  { icone: 'musica', titulo: 'Música ao vivo', texto: 'Samba, pagode, DJ e voz e violão.' },
  { icone: 'drink', titulo: 'Drinks autorais', texto: 'Carta própria e caipirinhas no capricho.' },
  { icone: 'chopp', titulo: 'Bar Spaten', texto: 'Chopp e long necks sempre gelados.' },
  { icone: 'prato', titulo: 'Almoço executivo', texto: 'Terça a domingo, das 11h às 15h.' },
  { icone: 'sol', titulo: 'Ao ar livre', texto: 'Terraço, container e área externa.' },
  { icone: 'pata', titulo: 'Pet friendly', texto: 'Seu cachorro também é bem-vindo.' },
]

export function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container">
        <header className="cabecalho revelar">
          <p className="script script--grande">o dia inteiro</p>
          <h2>Por que todo mundo vem pro Samoa</h2>
        </header>
        <ul className="diferenciais__lista">
          {itens.map((i) => (
            <li key={i.titulo} className="revelar">
              <span className="diferenciais__icone">
                <Icone nome={i.icone} />
              </span>
              <h3>{i.titulo}</h3>
              <p>{i.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
