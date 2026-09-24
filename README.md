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
| Pratos do cardápio | `src/data/cardapio.ts` |
| Endereço, WhatsApp, links e horários | `src/data/site.ts` |
| Fotos e vídeos | `src/assets/midia/` + `src/data/midia.ts` |

Fotos são servidas em WebP e vídeos em MP4 540p. Os arquivos originais ficam em `midia-original/`, que não vai para o Git.
