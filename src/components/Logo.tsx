/**
 * Logo SAMOA desenhado em SVG (traço arredondado, "A" sem travessa, como na
 * fachada da casa) — dispensa carregar uma fonte só para ele.
 */
export function Logo({ grande = false }: { grande?: boolean }) {
  return (
    <span className={`logo ${grande ? 'logo--grande' : ''}`} role="img" aria-label="Samoa Gastrobar">
      <svg className="logo__nome" viewBox="-5 -5 230 58" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M31 10.5C27 5 9 4 8.5 14.5 8 25 31 22 31 34 31 46 10 46 6 39" />
          <path d="M41 45 57 4 73 45" />
          <path d="M84 45V6l19.5 25L123 6v39" />
          <circle cx="152" cy="25" r="20" />
          <path d="M183 45 199 4l16 41" />
        </g>
      </svg>
      <span className="logo__sub" aria-hidden="true">
        gastrobar
      </span>
    </span>
  )
}
