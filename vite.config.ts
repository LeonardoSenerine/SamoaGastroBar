import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { siteMeta } from './seo/siteMeta.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMeta()],
  define: {
    // "agora" usado na pré-renderização da agenda (ver src/hooks/useAgora.ts)
    __BUILD_TIME__: JSON.stringify(Date.now()),
  },
})
