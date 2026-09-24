# Samoa Gastrobar — site

Site institucional do **Samoa Gastrobar** (Itatiba, SP): espaço, cardápio, drinks, shows em vídeo e agenda de eventos.

Feito com **Vite + React + TypeScript**, sem dependências além do React.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente
```

## Deploy na Vercel

Importe o repositório em [vercel.com/new](https://vercel.com/new). A Vercel detecta o Vite sozinha:

- Build command: `npm run build`
- Output directory: `dist`

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Agenda de eventos | `src/data/eventos.ts` (eventos passados somem sozinhos) |
| Cardápio e carta de drinks (com preços) | `src/data/cardapio.ts` |
| Endereço, WhatsApp, links e horários | `src/data/site.ts` |
| Fotos e vídeos | `src/assets/midia/` + `src/data/midia.ts` |

> **Fontes dos dados.** Cardápio e preços: PDFs oficiais do Linktree (set/2026). Agenda: posts do Instagram
> @samoagastrobar_. Horário e telefone: perfil do Samoa no Google. Atualize a agenda toda semana em
> `src/data/eventos.ts`.
>
> **Fora do Google até a aprovação.** Enquanto `liberadoParaGoogle = false` (em `src/data/site.ts`), todas as
> páginas saem com `noindex`. Troque para `true` quando o Samoa aprovar e o site for para o domínio oficial.

## Páginas, cookies e LGPD

| Página | Endereço | Arquivo |
| --- | --- | --- |
| Início | `/` | `src/paginas/Inicio.tsx` |
| Política de privacidade | `/privacidade` | `src/paginas/Privacidade.tsx` |
| Política de cookies | `/cookies` | `src/paginas/Cookies.tsx` |
| Página não encontrada | qualquer outro endereço (`404.html`) | `src/paginas/NaoEncontrada.tsx` |

- A lista de páginas (título, descrição, se entra no Google) fica em `src/paginas.ts`; cada uma vira um HTML
  próprio no build. O `vercel.json` liga `cleanUrls`, então `/cookies` entrega `cookies.html`.
- **Consentimento de cookies** (`src/consentimento.ts` + `src/components/AvisoCookies.tsx`): o site não usa
  cookies de rastreamento; o único terceiro que grava cookies é o mapa do Google, que **só carrega depois do
  aceite**. A escolha fica no navegador por 12 meses e pode ser mudada em "Preferências de cookies", no rodapé.
- Preencha razão social, CNPJ e e-mail de privacidade em `empresa`, no `src/data/site.ts`. Cada linha só
  aparece nas políticas quando estiver preenchida.

## SEO e compartilhamento

- **HTML pré-renderizado no build** (`src/entry-server.tsx` + `scripts/prerender.mjs`): WhatsApp, Instagram,
  Facebook, buscadores e leitores de tela recebem a página completa sem rodar JavaScript; no navegador o React
  só assume a página (hidratação).
- `public/og-image.jpg` (1200×630) é a prévia do link. `<title>`, descrição e tags Open Graph ficam no `index.html`;
  `%SITE_URL%` é preenchido no build por `seo/siteMeta.ts` (na Vercel usa o endereço de produção; com domínio
  próprio, crie a variável de ambiente `SITE_URL`, ex.: `https://samoagastrobar.com.br`, e publique de novo).
- `seo/siteMeta.ts` também gera o Schema.org (`Restaurant`/`BarOrPub` + um `MusicEvent` por show), `robots.txt`
  e `sitemap.xml`.
- Enquanto `agendaDeExemplo = true` (em `src/data/eventos.ts`), os eventos **não** entram no JSON-LD, para o
  Google não indexar shows fictícios. Mude para `false` quando cadastrar a agenda real.
- Ícones PNG (`icon-192`, `icon-512`, `apple-touch-icon`) e `site.webmanifest` em `public/`.

## Mídia

Fotos são servidas em WebP e vídeos em MP4 540p (cerca de 3,5 MB por minuto). Os loops do topo e dos drinks só tocam
quando estão na tela e ficam parados para quem ativou "reduzir movimento". Os originais ficam em `midia-original/`,
que não vai para o Git.
