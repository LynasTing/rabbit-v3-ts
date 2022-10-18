<template>
  <div class='home'>
    <div class="cus-container relative">
      <HomeBanner />
      <HomeCategory />
    </div>
  </div>
</template>

<script setup lang='ts' name="Home">
import { ref } from 'vue'
import useStore from '@/store'
import HomeBanner from './components/home-banner/index.vue' 
import HomeCategory from './components/home-category/index.vue' 
const { home }  = useStore() 
home.getBannerList()
  
</script>

<style lang='scss' scoped>
.home {}
</style>  