import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8000',
        // changeOrigin: true,
        // secure: false,
        // ws: true,
      },
    },
  },
})
