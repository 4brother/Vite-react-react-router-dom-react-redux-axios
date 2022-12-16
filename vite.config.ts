import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import viteEslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default ({ mode }) =>  defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    createHtmlPlugin({
      inject: {
        data: loadEnv(mode, process.cwd())
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:8443',
        rewrite: (path) => path.replace(/^\/api/, '/'),
        ws: false,
        changeOrigin: true
      }
    }
  },
})
