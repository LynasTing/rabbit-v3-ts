<template>
  <div class='home'>
    <!-- 轮播图和侧边分类导航 -->
    <main class="bg-page-f5">
      <div class="cus-container relative">
        <HomeBanner />
        <HomeCategory />
      </div>
    </main>
    <!-- 新鲜好物和人气推荐 -->
    <HomeFreshProduce />
    
  </div>
</template>

<script setup lang='ts' name="Home">
import useStore from '@/store'
import HomeBanner from './components/home-banner/index.vue' 
import HomeCategory from './components/home-category/index.vue' 
import HomeFreshProduce from './components/home-fresh-produce/index.vue'
const { home }  = useStore() 
home.getBannerList()
  
</script>

<style lang='scss' scoped>
.home {}
</style>  