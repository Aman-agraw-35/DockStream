import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // <--- Allows external access from your host machine
    port: 5173         // <--- Ensures it binds to this port (same as Docker)
  }
})
