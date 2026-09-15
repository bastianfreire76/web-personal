import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Para GitHub Pages en un repo de proyecto (usuario.github.io/mi-repo),
  // descomenta la siguiente línea y reemplaza "mi-repo" por el nombre real del repositorio.
  // Para Vercel o un dominio propio, deja base en "/".
  // base: '/mi-repo/',
})
