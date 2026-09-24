import { fotos } from '../data/midia'

const numeros = [
  { valor: '10 mil+', rotulo: 'seguidores no Instagram' },
  { valor: '4,4 ★', rotulo: 'avaliação no Google' },
  { valor: '6 dias', rotulo: 'por semana, de terça a domingo' },
]

export function Numeros() {
  return (
    <section className="numeros" style={{ backgroundImage: `url(${fotos.eventoLotado})` }}>
      <div className="container numeros__grade">
        {numeros.map((n) => (
          <div key={n.rotulo} className="numero revelar">
            <strong>{n.valor}</strong>
            <span>{n.rotulo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
