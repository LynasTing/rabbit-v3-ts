import { App } from 'vue'
import XtxSkeleton from '@/components/skeleton/index.vue'
import Carousel from '@/components/carousel/index.vue'
import FindMore from '@/components/find-more/index.vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/imgs/200.png'
import XtxBread from '@/components/bread/index.vue'
import XtxBreadItem from '@/components/bread/breadItem.vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('Carousel', Carousel)
    app.component('FindMore', FindMore)
    app.component('XtxBread', XtxBread)
    app.component('XtxBreadItem', XtxBreadItem)
    /**
     * vue3自定义指令
     * app = createApp(App)
     * app.directive('指令名', {
     *  指令的生命周期
     *    created: 创建后
     *    beforeMount: 渲染前
     *    mounted 渲染后
     *    beforeUpdate 更新后
     *    beforeUnmount 销毁前
     *    unmounted 销毁后
     *  mounted(dom, obj, vnode) {
     *    dom: 使用指令的dom
     *    obj: {
     *      属性, 修饰符, 值(value), instance(指令所在的组件的实例对象)
     *    }
     *    vnode: 节点信息
     *  }
     *  使用: v-指令名: 属性.修饰符 = '值'
     * })
     */
    // 自定义指令 实现图片懒加载
    app.directive('lazy', {
      mounted(el: HTMLImageElement, { value }) {
        /**
         * 实现图片懒加载的逻辑
         * 参数1: 回调函数
         * 参数2: 可选的配置
         */
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }])=>{
          if(isIntersecting) {
            // 停止监听
            stop()
            // 给el元素设置src属性
            el.src = value
            // 如果图片加载失败，就显示默认的图片
            el.onerror = () => {
              el.src = defaultImg
            }
          }
        }) 
      }
    })
  }
}