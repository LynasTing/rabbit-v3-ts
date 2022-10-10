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
        `
      }
    }
  }
})
