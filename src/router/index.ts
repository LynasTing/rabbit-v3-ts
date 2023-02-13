import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  // 在路由切换的时候, 滚动到页面最顶部
  scrollBehavior: () => {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        // 利用参数匹配，动态生成路由
        {
          path: '/category/:id',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/category/sub.vue')
        },
        {
          path: '/goods:id',
          component: () => import('@/views/goods/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})
export default router
