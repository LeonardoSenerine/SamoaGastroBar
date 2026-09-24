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

## SEO

- `<title>`, descrição e Open Graph ficam no `index.html` (a imagem de compartilhamento é `public/og-samoa.jpg`).
- O plugin `seo/jsonLd.ts` gera o Schema.org no build: `Restaurant`/`BarOrPub` com endereço e horários
  e um `MusicEvent` para cada show futuro de `eventos.ts`.
- Enquanto `agendaDeExemplo = true` (em `src/data/eventos.ts`), os eventos **não** entram no JSON-LD, para o
  Google não indexar shows fictícios. Mude para `false` quando cadastrar a agenda real.

## Mídia

Fotos são servidas em WebP e vídeos em MP4 540p (cerca de 3,5 MB por minuto). Os loops do topo e dos drinks só tocam
quando estão na tela e ficam parados para quem ativou "reduzir movimento". Os originais ficam em `midia-original/`,
que não vai para o Git.
