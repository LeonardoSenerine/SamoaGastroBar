import { useState } from 'react'
import { cardapio, categorias, preco, type CategoriaCardapio } from '../data/cardapio'
import { contato } from '../data/site'
import { Icone } from './Icone'
import { atraso } from '../util/atraso'

const destaques = cardapio.filter((i) => i.foto && i.selo)

export function Cardapio() {
  const [aba, setAba] = useState<CategoriaCardapio>('Massas')
  const itens = cardapio.filter((i) => i.categoria === aba)
  const subtitulo = categorias.find((c) => c.nome === aba)?.subtitulo

  return (
    <section id="cardapio" className="cardapio">
      <div className="container">
        <header className="cabecalho revelar">
          <p className="script script--grande">boa comida é só o começo</p>
          <h2>O que dá vontade hoje?</h2>
          <p className="cabecalho__intro">
            Almoço com massas, parmegianas e feijoada; à noite, burgers artesanais e porções para dividir. Preços do cardápio oficial.
          </p>
        </header>

        {/* destaques com foto */}
        <ul className="pratos" aria-label="Destaques da casa">
          {destaques.map((p, i) => (
            <li key={p.nome} className="prato revelar revelar--zoom" style={atraso(i * 110)}>
              <div className="prato__foto">
                <img src={p.foto} alt={p.nome} loading="lazy" />
                {p.selo && <span className="prato__tag">{p.selo}</span>}
              </div>
              <div className="prato__corpo">
                <div className="prato__linha">
                  <h3>{p.nome}</h3>
                  <span className="prato__preco">{preco.format(p.preco)}</span>
                </div>
                {p.descricao && <p>{p.descricao}</p>}
              </div>
            </li>
          ))}
        </ul>
        <p className="dica-arraste" aria-hidden="true">
          Arraste para ver mais <Icone nome="seta" />
        </p>

        {/* cardápio completo em HTML */}
        <div className="menu revelar">
          <div className="abas" role="tablist" aria-label="Categorias do cardápio">
            {categorias.map((c) => (
              <button
                key={c.nome}
                role="tab"
                id={`aba-${c.nome}`}
                aria-selected={aba === c.nome}
                aria-controls="menu-lista"
                className={`aba ${aba === c.nome ? 'aba--ativa' : ''}`}
                onClick={() => setAba(c.nome)}
              >
                {c.nome}
              </button>
            ))}
          </div>

          <div id="menu-lista" role="tabpanel" aria-labelledby={`aba-${aba}`}>
            <p className="menu__subtitulo">{subtitulo}</p>
            <ul className="menu__lista">
              {itens.map((i) => (
                <li key={i.nome}>
                  <div className="menu__linha">
                    <h3>{i.nome}</h3>
                    <span className="menu__pontos" aria-hidden="true" />
                    <span className="menu__preco">{preco.format(i.preco)}</span>
                  </div>
                  {i.descricao && <p>{i.descricao}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cardapio__acoes">
          <a className="botao botao--escuro" href={contato.cardapioAlmoco} target="_blank" rel="noreferrer">
            Cardápio almoço (PDF)
          </a>
          <a className="botao botao--escuro" href={contato.cardapioJanta} target="_blank" rel="noreferrer">
            Cardápio noite (PDF)
          </a>
          <a className="botao" href={contato.ifood} target="_blank" rel="noreferrer">
            Pedir no iFood
          </a>
        </div>
      </div>
    </section>
  )
}
