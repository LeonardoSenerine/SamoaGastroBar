import type { CSSProperties } from 'react'

/** Atraso da animação de entrada, para itens de uma lista aparecerem em cascata. */
export const atraso = (ms: number) => ({ '--atraso': `${ms}ms` }) as CSSProperties
