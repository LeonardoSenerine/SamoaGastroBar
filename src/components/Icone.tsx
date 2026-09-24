const caminhos = {
  musica: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  drink: (
    <>
      <path d="M5 4h14l-6 8v7" />
      <path d="M8 21h10" />
      <path d="M7.5 7h9" />
      <circle cx="17.5" cy="4" r="2" />
    </>
  ),
  prato: (
    <>
      <circle cx="12" cy="13" r="7" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M3 3v5a2 2 0 0 0 2 2M3 3v18M21 3c-1.5 1-2 3-2 5v3h2V3v18" />
    </>
  ),
  chopp: (
    <>
      <path d="M5 8h10v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M15 11h2.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H15" />
      <path d="M5 8a3 3 0 0 1 2.5-4.5A3.5 3.5 0 0 1 14 4a2.5 2.5 0 0 1 1 4" />
      <path d="M8.5 12v5M11.5 12v5" />
    </>
  ),
  pata: (
    <>
      <circle cx="7" cy="9" r="1.8" />
      <circle cx="11" cy="6" r="1.8" />
      <circle cx="15.5" cy="7" r="1.8" />
      <circle cx="18.5" cy="11" r="1.8" />
      <path d="M8 18c0-3 2.5-6 5-6s4.5 2.5 4.5 5a2.5 2.5 0 0 1-3 2.4c-1-.2-1.6-.4-2.5-.4s-1.6.4-2.4.5A1.7 1.7 0 0 1 8 18z" />
    </>
  ),
  sol: (
    <>
      <path d="M3 18h18M6 18a6 6 0 0 1 12 0" />
      <path d="M12 6V4M5.6 9.6 4.2 8.2M18.4 9.6l1.4-1.4M2 14h2M20 14h2" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
  fechar: <path d="M6 6l12 12M18 6 6 18" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
}

export type NomeIcone = keyof typeof caminhos

export function Icone({ nome, className }: { nome: NomeIcone; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {caminhos[nome]}
    </svg>
  )
}
