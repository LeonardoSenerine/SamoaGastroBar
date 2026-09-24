import { useSyncExternalStore } from 'react'

/**
 * Consentimento de cookies (LGPD). O site não usa cookies próprios nem analytics; o único
 * terceiro que grava cookies é o mapa do Google (iframe na seção "Encontre o Samoa"), que só
 * carrega depois do aceite. A escolha fica salva no navegador por até 12 meses.
 */
export interface Consentimento {
  /** Mapas e conteúdo de terceiros (Google Maps) */
  mapas: boolean
  /** Quando a escolha foi feita (ISO) */
  data: string
  versao: number
}

const CHAVE = 'samoa-consentimento'
/** Suba a versão quando mudar as categorias: todo mundo vê o aviso de novo. */
const VERSAO = 1
const VALIDADE_MS = 365 * 24 * 3600_000

/** `undefined` = ainda não lido (servidor / hidratação); `null` = visitante ainda não escolheu */
let atual: Consentimento | null | undefined
let painelAberto = false
const ouvintes = new Set<() => void>()

function ler(): Consentimento | null {
  if (atual === undefined) {
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE) ?? 'null') as Consentimento | null
      const valido = salvo?.versao === VERSAO && Date.now() - Date.parse(salvo.data) < VALIDADE_MS
      atual = valido ? salvo : null
    } catch {
      atual = null
    }
  }
  return atual
}

function avisar() {
  ouvintes.forEach((o) => o())
}

function assinar(ouvinte: () => void) {
  ouvintes.add(ouvinte)
  return () => ouvintes.delete(ouvinte)
}

export function salvarConsentimento(mapas: boolean) {
  atual = { mapas, data: new Date().toISOString(), versao: VERSAO }
  try {
    localStorage.setItem(CHAVE, JSON.stringify(atual))
  } catch {
    // navegação privada / armazenamento bloqueado: vale só para esta visita
  }
  painelAberto = false
  avisar()
}

/** Reabre o painel de preferências (link "Preferências de cookies" no rodapé). */
export function abrirPreferencias() {
  painelAberto = true
  avisar()
}

export function fecharPreferencias() {
  painelAberto = false
  avisar()
}

export function useConsentimento() {
  const consentimento = useSyncExternalStore(assinar, ler, () => undefined)
  const preferenciasAbertas = useSyncExternalStore(
    assinar,
    () => painelAberto,
    () => false,
  )
  return { consentimento, preferenciasAbertas }
}
