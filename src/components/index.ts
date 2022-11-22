import { App } from 'vue'
import XtxSkeleton from '@/components/skeleton/index.vue'
import Carousel from '@/components/carousel/index.vue'
import FindMore from '@/components/find-more/index.vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('Carousel', Carousel)
    app.component('FindMore', FindMore)
  }
}