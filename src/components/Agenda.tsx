import { useMemo, useState } from 'react'
import { proximosEventos, type Categoria, type Evento } from '../data/eventos'
import { contato, whatsappUrl } from '../data/site'

const dia = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' })
const mes = new Intl.DateTimeFormat('pt-BR', { month: 'short' })
const semana = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })
const hora = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' })
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

function CartaoEvento({ evento }: { evento: Evento }) {
  const data = new Date(evento.data)
  const link = evento.ingresso ?? whatsappUrl(`Olá! Quero reservar para "${evento.titulo}".`)

  return (
    <li className="evento">
      <time className="evento__data" dateTime={evento.data}>
        <span className="evento__dia">{dia.format(data)}</span>
        <span className="evento__mes">{mes.format(data).replace('.', '')}</span>
      </time>
      <div className="evento__info">
        <p className="evento__meta">
          <span className="etiqueta">{evento.categoria}</span>
          <span>
            {semana.format(data)} · {hora.format(data)}
          </span>
        </p>
        <h3>{evento.titulo}</h3>
        <p className="evento__atracao">{evento.atracao}</p>
        <p className="evento__descricao">{evento.descricao}</p>
      </div>
      <div className="evento__acao">
        <span className="evento__preco">{evento.preco ? moeda.format(evento.preco) : 'Entrada livre'}</span>
        <a className="botao botao--pequeno" href={link} target="_blank" rel="noreferrer">
          {evento.ingresso ? 'Ingressos' : 'Reservar'}
        </a>
      </div>
    </li>
  )
}

export function Agenda() {
  const [filtro, setFiltro] = useState<Categoria | 'Todos'>('Todos')
  const [agora] = useState(() => Date.now())

  const proximos = useMemo(() => proximosEventos(agora), [agora])

  const categorias = useMemo(
    () => ['Todos', ...new Set(proximos.map((e) => e.categoria))] as const,
    [proximos],
  )
  const visiveis = filtro === 'Todos' ? proximos : proximos.filter((e) => e.categoria === filtro)

  return (
    <section id="agenda" className="agenda">
      <div className="container">
        <header className="cabecalho revelar">
          <p className="script script--grande">marca na agenda</p>
          <h2>Próximos eventos</h2>
        </header>

        {proximos.length > 0 ? (
          <>
            <div className="filtros" role="group" aria-label="Filtrar por categoria">
              {categorias.map((c) => (
                <button key={c} className={`filtro ${filtro === c ? 'filtro--ativo' : ''}`} aria-pressed={filtro === c} onClick={() => setFiltro(c)}>
                  {c}
                </button>
              ))}
            </div>
            <ul className="eventos">
              {visiveis.map((e) => (
                <CartaoEvento key={e.id} evento={e} />
              ))}
            </ul>
          </>
        ) : (
          <p className="agenda__vazia">
            A próxima programação está sendo preparada. Acompanhe no Instagram{' '}
            <a href={contato.instagram} target="_blank" rel="noreferrer">
              {contato.instagramHandle}
            </a>
            .
          </p>
        )}

        <p className="agenda__rodape">
          Ingressos antecipados na{' '}
          <a href={contato.ingressos} target="_blank" rel="noreferrer">
            Uticket
          </a>{' '}
          · Aniversário ou evento fechado?{' '}
          <a href={whatsappUrl('Olá! Gostaria de saber sobre eventos fechados no Samoa.')} target="_blank" rel="noreferrer">
            Fale com a gente
          </a>
        </p>
      </div>
    </section>
  )
}
