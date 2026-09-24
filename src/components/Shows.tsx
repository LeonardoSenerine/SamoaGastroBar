import { useCallback, useEffect, useRef, useState } from 'react'
import { videos, type Video } from '../data/midia'
import { Icone } from './Icone'
import { atraso } from '../util/atraso'

const formatos = ['Sertanejo', 'Pagode', 'Samba', 'DJ', 'Festas temáticas']

function CartaoVideo({ video, indice, onAbrir }: { video: Video; indice: number; onAbrir: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)

  // prévia muda ao passar o mouse; o arquivo só carrega quando alguém demonstra interesse
  const tocar = () => {
    const v = ref.current
    if (v && window.matchMedia('(hover: hover)').matches) v.play().catch(() => {})
  }
  const pausar = () => ref.current?.pause()

  return (
    <li className="video-cartao revelar revelar--zoom" style={atraso(indice * 110)}>
      <button onClick={onAbrir} onMouseEnter={tocar} onMouseLeave={pausar} onFocus={tocar} onBlur={pausar} aria-label={`Assistir ${video.titulo}`}>
        <video ref={ref} src={video.src} poster={video.poster} muted loop playsInline preload="none" tabIndex={-1} />
        <span className="video-cartao__play">
          <Icone nome="play" />
        </span>
        <span className="video-cartao__info">
          <strong>{video.titulo}</strong>
          <span>
            {video.legenda} · {video.duracao}
          </span>
        </span>
      </button>
    </li>
  )
}

function Player({ video, onFechar }: { video: Video; onFechar: () => void }) {
  const dialogo = useRef<HTMLDialogElement>(null)

  // não fecha no cleanup: isso dispararia `close` e desmontaria o player no remount do StrictMode
  useEffect(() => {
    const d = dialogo.current
    if (!d) return
    if (!d.open) d.showModal()
    d.addEventListener('close', onFechar)
    return () => d.removeEventListener('close', onFechar)
  }, [onFechar])

  return (
    <dialog
      ref={dialogo}
      className="player"
      aria-label={video.titulo}
      onCancel={(e) => {
        e.preventDefault()
        onFechar()
      }}
      onClick={(e) => e.target === e.currentTarget && onFechar()}
    >
      <button className="player__fechar" onClick={onFechar} aria-label="Fechar vídeo">
        <Icone nome="fechar" />
      </button>
      <video src={video.src} poster={video.poster} controls autoPlay playsInline />
      <p>
        <strong>{video.titulo}</strong> · {video.legenda}
      </p>
    </dialog>
  )
}

export function Shows() {
  const [aberto, setAberto] = useState<Video | null>(null)
  const fechar = useCallback(() => setAberto(null), [])

  return (
    <section id="shows" className="shows">
      <div className="container">
        <header className="cabecalho revelar">
          <p className="script script--grande">quando o sol se põe</p>
          <h2>Shows &amp; música ao vivo</h2>
          <p className="cabecalho__intro">
            Levamos para Itatiba e região os melhores shows e eventos. Dá o play e sente a energia.
          </p>
        </header>

        <ul className="videos">
          {videos.map((v, i) => (
            <CartaoVideo key={v.id} video={v} indice={i} onAbrir={() => setAberto(v)} />
          ))}
        </ul>

        <ul className="formatos revelar">
          {formatos.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      {aberto && <Player key={aberto.id} video={aberto} onFechar={fechar} />}
    </section>
  )
}
