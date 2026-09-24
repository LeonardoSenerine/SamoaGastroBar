import { useSyncExternalStore } from 'react'

// hora em que a página abriu no navegador
const agoraNoNavegador = Date.now()
const semAssinatura = () => () => {}

/**
 * "Agora" seguro para a pré-renderização: o HTML gerado no build (e a hidratação) usa a hora
 * do build, e logo depois o React troca pela hora real do visitante — sem erro de hidratação
 * e com a agenda sempre atualizada.
 */
export function useAgora() {
  return useSyncExternalStore(
    semAssinatura,
    () => agoraNoNavegador,
    () => __BUILD_TIME__,
  )
}
