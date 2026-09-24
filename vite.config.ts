import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { jsonLd } from './seo/jsonLd.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsonLd()],
})
