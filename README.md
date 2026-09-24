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

> ⚠️ **Dados fictícios.** Agenda, preços, nomes de pratos e drinks e o horário noturno são exemplos.
> Troque pelos dados reais antes de divulgar o site.

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
