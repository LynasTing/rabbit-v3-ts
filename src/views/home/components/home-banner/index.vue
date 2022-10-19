<template>
  <article class="home_banner cus-container absolute left-0 top-0 z-10">
    <!-- <img :src="item.imgUrl" v-for="item in home.bannerList" :key="item.id" /> -->
    <!-- 轮播图组件 -->
    <Carousel :slides="home.bannerList" autoPlay :duration="3000" />
  </article>
</template>

<script lang="ts" setup>
import useStore from '@/store'
import Carousel from '@/components/carousel/index.vue'
const { home } = useStore()
</script>

<style scoped lang="scss">
.home_banner {
  height: 500px;
}
</style>
