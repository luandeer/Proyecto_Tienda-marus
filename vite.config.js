import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginGhPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePluginGhPages({
      branch: 'gh-pages', // Rama en la que se desplegará
      dir: 'dist', // Carpeta de salida de la compilación
      push: true, // Realizar push a la rama gh-pages automáticamente
    }),], 
})
