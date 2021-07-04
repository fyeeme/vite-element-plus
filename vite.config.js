import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'

import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), Pages(), WindiCSS()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    https: false,
    port: 8083,
    compress: true,
    open: false, // opens browser window automatically
    proxy: {
      // with options
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    brotliSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            //设置需要独立打包的npm包
            const modules = ['windicss']
            const chunk = modules.find((module) => id.includes(`/node_modules/${module}`))
            return chunk ? `vendor-${chunk}` : 'vendor'
          }
        },
      },
    },
  },
})
