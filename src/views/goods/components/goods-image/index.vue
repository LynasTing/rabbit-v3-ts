<script setup lang='ts' name="GoodsImage">
import { ref } from 'vue'
defineProps<{
  images: string[]
}>()
// 默认高亮的下标
const activeIndex = ref(0)
</script>

<template>
  <div class="positive flex goods_image">
    <div class="middle bg-page-f5">
      <img :src="images[activeIndex]"/>
    </div>
    <ul class="w-20">
      <li class="small" v-for="(item, index) in images" :key="index" :class="{ active: index === activeIndex }" @mouseenter="activeIndex = index">
        <img :src="item"/>
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
.goods_image {
  width: 480px;
  height: 400px;
  .middle {
    width: 400px;
    height: 400px;
  }
  .small {
    width: 68px;
    height: 68px;
    margin-left: 12px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover, &.active {
      border: 2px solid $xtxColor;
    }
  }
}
</style>