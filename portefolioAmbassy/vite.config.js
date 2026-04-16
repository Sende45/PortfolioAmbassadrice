import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Vérifie cette ligne

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Et celle-ci
  ],
})