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
    <!-- 热门品牌 -->
    <HomeBrand />
    <!-- 主要商品 -->
    <HomeProduct />
    <!-- 最新专题 -->
    <HomeSpecial class="bg-page-f5" />
  </div>
</template>

<script setup lang='ts' name="Home">
import HomeBanner from './components/home-banner/index.vue' 
import HomeCategory from './components/home-category/index.vue' 
import HomeFreshProduce from './components/home-fresh-produce/index.vue'
import HomeBrand from './components/home-brand/index.vue'
import HomeProduct from './components/home-product/index.vue'
import HomeSpecial from './components/home-special/index.vue'
</script>

<style lang='scss' scoped>
.home {}
</style>  