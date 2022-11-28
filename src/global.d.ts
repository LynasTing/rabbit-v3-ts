// 用来注册一些全局组件
import XtxSkeleton from '@/components/skeleton/index.vue'
import Carousel from '@/components/carousel/index.vue'
import FindMore from '@/components/find-more/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    Carousel: typeof Carousel
    FindMore: typeof FindMore
  }
}
export {}