import { useEffect } from 'react'
import { aoAparecer } from '../util/aoAparecer'

/** Adiciona `.visivel` aos elementos `.revelar` quando chegam na tela. */
export function useReveal() {
  useEffect(() => aoAparecer(document.querySelectorAll('.revelar'), (el) => el.classList.add('visivel')), [])
}
