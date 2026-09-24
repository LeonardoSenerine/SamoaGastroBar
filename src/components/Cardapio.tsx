import { useState } from 'react'
import { pratos, type CategoriaPrato } from '../data/cardapio'
import { contato } from '../data/site'
import { Icone } from './Icone'

const abas: (CategoriaPrato | 'Todos')[] = ['Todos', 'Lanches', 'Massas', 'Brasileiros', 'Drinks']

export function Cardapio() {
  const [aba, setAba] = useState<(typeof abas)[number]>('Todos')
  const visiveis = aba === 'Todos' ? pratos : pratos.filter((p) => p.categoria === aba)

  return (
    <section id="cardapio" className="cardapio">
      <div className="container">
        <header className="cabecalho revelar">
          <p className="script script--grande">sabores marcantes</p>
          <h2>Descubra o cardápio</h2>
          <p className="cabecalho__intro">
            Do almoço executivo ao lanche da madrugada. Tudo feito na casa, com o capricho que virou marca do
            Samoa.
          </p>
        </header>

        <div className="abas" role="group" aria-label="Filtrar cardápio">
          {abas.map((a) => (
            <button key={a} className={`aba ${aba === a ? 'aba--ativa' : ''}`} aria-pressed={aba === a} onClick={() => setAba(a)}>
              {a}
            </button>
          ))}
        </div>

        <ul className="pratos">
          {visiveis.map((p) => (
            <li key={p.nome} className="prato">
              <div className="prato__foto">
                <img src={p.foto} alt={p.nome} loading="lazy" />
                <span className="prato__tag">{p.categoria}</span>
              </div>
              <div className="prato__corpo">
                <h3>{p.nome}</h3>
                <p>{p.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="dica-arraste" aria-hidden="true">
          Arraste para ver mais <Icone nome="seta" />
        </p>

        <div className="cardapio__acoes">
          <a className="botao botao--escuro" href={contato.cardapioAlmoco} target="_blank" rel="noreferrer">
            Cardápio almoço
          </a>
          <a className="botao botao--escuro" href={contato.cardapioJanta} target="_blank" rel="noreferrer">
            Cardápio noite
          </a>
          <a className="botao" href={contato.ifood} target="_blank" rel="noreferrer">
            Pedir no iFood
          </a>
        </div>
      </div>
    </section>
  )
}
