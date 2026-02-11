import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY 
    ? '/' 
    : process.env.NODE_ENV === 'production' 
      ? '/Regal-Cravings/' 
      : '/',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
