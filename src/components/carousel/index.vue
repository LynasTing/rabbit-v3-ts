<template>
  <div class='carousel cus-container relative h-500px'>
    <!-- 图 -->
    <ul class="ul_wrap w-full h-full">
      <li class="carousel-item fade">
        <RouterLink to="/">
          <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"/>
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <aside class="prev_btn w-11 h-11 leading-loose text-white absolute z-10 top-1/2 text-center bg-black rounded-full bg-opacity-20 ">
      <i class="iconfont text-sm icon-angle-left" />
    </aside>
    <!-- 下一张 -->
    <aside class="next_btn w-11 h-11 leading-loose text-white absolute right-5 z-10 top-1/2 text-center bg-black rounded-full bg-opacity-20">
      <i class="iconfont text-sm icon-angle-right" />
    </aside>
    <!-- 底部指示器 -->
    <ul class="ul_indicator w-full max-h-4 pl-64 text-center absolute left-0 bottom-5 leading-4">
      <li v-for="(i, index) in arr" :key="index" class="inline-block w-3 h-3 rounded-full bg-black bg-opacity-20 mr-3" :class="{active: actIndex === index}"></li>
    </ul>
  </div>
</template>

<script setup lang='ts' name="Carousel">
import { clearInterval } from 'timers';
import { ref, onMounted, onUnmounted } from 'vue'
const actIndex = ref(0)
const arr = ref(['1', '2', '3', '4', '5'])
// const timer = window.setInterval(()=> {
//   console.log(`1 + ::>>`, 1)
// }, 1000)
// onUnmounted(()=> {
//   clearInterval(timer)
// })


  
</script>

<style lang='scss' scoped>
.carousel {
  height: 500px;
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