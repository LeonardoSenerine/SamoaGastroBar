import areaExterna from '../assets/midia/area-externa.webp'
import baldeCarbonara from '../assets/midia/balde-carbonara.webp'
import bannerSpaten from '../assets/midia/banner-spaten.webp'
import burger from '../assets/midia/burger.webp'
import containerLogo from '../assets/midia/container-logo.webp'
import containerNoite from '../assets/midia/container-noite.webp'
import drink from '../assets/midia/drink.webp'
import drinks from '../assets/midia/drinks.webp'
import eventoLotado from '../assets/midia/evento-lotado.webp'
import fachada from '../assets/midia/fachada.webp'
import feijoada from '../assets/midia/feijoada.webp'
import feijoadaMesa from '../assets/midia/feijoada-mesa.webp'
import noite from '../assets/midia/noite.webp'
import pratoAssinatura from '../assets/midia/prato-assinatura.webp'
import publicoAmigas from '../assets/midia/publico-amigas.webp'
import publicoSelfie from '../assets/midia/publico-selfie.webp'
import publicoTrio from '../assets/midia/publico-trio.webp'
import rondelli from '../assets/midia/rondelli.webp'
import torresmo from '../assets/midia/torresmo.webp'

import heroLoop from '../assets/midia/hero-loop.mp4'
import heroPoster from '../assets/midia/noite-samoa-poster.jpg'
import drinkLoop from '../assets/midia/drink-loop.mp4'
import drinkPoster from '../assets/midia/drink-preparo-poster.jpg'
import showPegada from '../assets/midia/show-pegada-nossa.mp4'
import showPegadaPoster from '../assets/midia/show-pegada-nossa-poster.jpg'
import noiteSamoa from '../assets/midia/noite-samoa.mp4'
import aoVivo from '../assets/midia/ao-vivo.mp4'
import aoVivoPoster from '../assets/midia/ao-vivo-poster.jpg'
import aftermovie from '../assets/midia/aftermovie-tarde.mp4'
import aftermoviePoster from '../assets/midia/aftermovie-tarde-poster.jpg'

export const fotos = {
  areaExterna,
  baldeCarbonara,
  bannerSpaten,
  burger,
  containerLogo,
  containerNoite,
  drink,
  drinks,
  eventoLotado,
  fachada,
  feijoada,
  feijoadaMesa,
  noite,
  pratoAssinatura,
  publicoAmigas,
  publicoSelfie,
  publicoTrio,
  rondelli,
  torresmo,
}

export const loops = {
  hero: { src: heroLoop, poster: heroPoster },
  drink: { src: drinkLoop, poster: drinkPoster },
}

export interface Video {
  id: string
  titulo: string
  legenda: string
  duracao: string
  src: string
  poster: string
}

export const videos: Video[] = [
  { id: 'pegada-nossa', titulo: 'Pegada Nossa', legenda: 'Roda de samba no Samoa', duracao: '1:02', src: showPegada, poster: showPegadaPoster },
  { id: 'noite-samoa', titulo: 'Noite Samoa', legenda: 'Casa cheia até tarde', duracao: '1:23', src: noiteSamoa, poster: heroPoster },
  { id: 'ao-vivo', titulo: 'Tarde ao vivo', legenda: 'DJ, voz e violão', duracao: '1:01', src: aoVivo, poster: aoVivoPoster },
  { id: 'aftermovie', titulo: 'Aftermovie', legenda: 'Do pôr do sol à noite', duracao: '1:14', src: aftermovie, poster: aftermoviePoster },
]
