import { useIntersectionObserver } from "@vueuse/core"
import { ref } from "vue"
// 数据懒加载工具函数
export function useLazyData(callback: () => void) {
  // 通过ref获得组件实例
  const target = ref(null)
  const { stop } =useIntersectionObserver(
    // 此处target是观察目标dom的容器，必须是dom容器，而且是vue3中绑定的dom对象
    target,
    // inIntersecting: 是否进入可视区域, true是进入, false是移除
    ([{ isIntersecting }], observerElement)=>{
      if(isIntersecting) {
        stop()
        callback()
      }
    },
    {
      // 只要交叉, 立马触发
      threshold: 0
    }
  )
  return target
}