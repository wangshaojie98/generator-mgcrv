import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '/assets': 'src/assets'
    }
  },
  server: {
    port: 8080,
    cors: true,
    proxy: {
      '/api': {
        target: `http://localhost:3300`,
        // rewrite: (path) => path.replace(/^\/api\/neptune/, ''),
        changeOrigin: true
      }
    }
  },
  css: {
    //* css模块化
    modules: {
      // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    //* 预编译支持less
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }),
    eslint(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
