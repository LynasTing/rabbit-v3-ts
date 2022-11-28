import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  // 自动导入scss变量和mixins变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
        @import "@/assets/styles/mixins.scss";
        @import "@/assets/styles/common.scss";
        `
      }
    }
  },
  server: {
    port: 8964,
    // host: 'www.corho.com',
    open: true,
    cors: true // 允许ajax跨域
  }
})
