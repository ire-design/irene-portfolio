import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind(), // ✅ add tailwind plugin here
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
