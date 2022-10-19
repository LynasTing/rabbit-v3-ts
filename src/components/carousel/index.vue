<template>
  <div class='carousel cus-container relative h-500px hover:carousel_hover' @mouseenter="play" @mouseleave="stop">
    <!-- 图 -->
    <ul class="ul_wrap w-full h-full relative">
      <li 
        class="carousel-item absolute left-0 top-0 z-0 opacity-0" 
        :class="{fade: actIndex === index}"
        v-for="(item, index) in props.slides" 
        :key="index"
      >
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl"/>
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <aside @click.stop="prev" class="opacity-0 prev_btn w-11 h-11 leading-loose cursor-pointer text-white absolute z-10 top-1/2 text-center bg-black rounded-full bg-opacity-20 ">
      <i class="iconfont text-sm icon-angle-left" />
    </aside>
    <!-- 下一张 -->
    <aside @click.stop="next" class="opacity-0 next_btn w-11 h-11 leading-loose cursor-pointer text-white absolute right-5 z-10 top-1/2 text-center bg-black rounded-full bg-opacity-20">
      <i class="iconfont text-sm icon-angle-right" />
    </aside>
    <!-- 底部指示器 -->
    <ul class="ul_indicator w-full max-h-4 pl-64 text-center absolute left-0 bottom-5 leading-4 opacity-100 z-30">
      <li v-for="(i, index) in props.slides" :key="index" class="inline-block w-3 h-3 rounded-full bg-black bg-opacity-20 mr-3" :class="{active: actIndex === index}"></li>
    </ul>
  </div>
</template>

<script setup lang='ts' name="Carousel">
import { ref, onMounted, onUnmounted, PropType } from 'vue'
import { BannerItem } from '@/types/data'
const props = defineProps({
  slides: {
    type: Array as PropType<BannerItem[]>,
    require: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  }
})
const actIndex = ref(0)
const prev = () => {
  actIndex.value <= 0 ? actIndex.value = props!.slides.length - 1 : actIndex.value--
}
const next = () => {
  actIndex.value >= props.slides.length - 1 ? actIndex.value = 0 : actIndex.value++
}
const play = () => {
  if(props.autoPlay) return
  timer = setInterval(()=> {
    next()
  }, props.duration)
}
let timer = ref(-1)
const stop = () => {
  clearInterval(timer)
}
onMounted(() => {
  play()
})
onUnmounted(() => {
  stop()
})

  
</script>

<style lang='scss' scoped>
.carousel {
  height: 500px;
  &:hover {
    .prev_btn, .next_btn {
      opacity: 1;
      transition: all 0.3s;
    }
  }
  .ul_wrap {
    li {
      transition: all 0.7s;
    }
    .fade {
      opacity: 1;
      z-index: 1;
    }
  }
  .prev_btn {
    margin-left: 270px;
    line-height: 2.5;
  }
  .next_btn {
    line-height: 2.5;
  }
  .active {
    background-color: white;
  }

}
</style>