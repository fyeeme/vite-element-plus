import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  //https://vitejs.dev/config/#server-proxy
  server: {
    proxy: {
      // with options
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (route) => route.replace(/^\/api/, '')
      }
    }
  }
})
