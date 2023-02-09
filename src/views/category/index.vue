

<script setup lang='ts' name="TopCategory">
// 调接口, 获取顶级分类数据  
import useStore from '@/store'; 
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from './components/goods-item/index.vue'
const { category, home } = useStore()
const route = useRoute()
// 切换分类的时候，商品数据不会发生变化
// 因为setup的代码只会执行一次，因此需要监听路由的变化
// 如果监听了路由变化，那么从分类页跳至首页也会报错，所以需要判断路由地址
// 1.
// watch(
//   () => route.params.id,
//   (value) => {
//     if(route.fullPath === `/category/${value}`) category.getTopCategory(value as string)
//   },
//   {
//     immediate: true
//   }
// )
// 2. watchEffect的使用: 会立即执行一次, 谁使用就监听谁
watchEffect(()=> {
  // 只有在一级分类的情况下才发送这个请求, 点首页不发送请求
  const id = route.params.id as string
  if(route.fullPath === `/category/${id}`) {
    category.getTopCategory(id)
    // 应该需要发送请求, 获取分类页的轮播图数据
    home.getBannerList()
  }
})
const { topCategory } = storeToRefs(category)
</script>
<template>
  <div class='top_category bg-page-f5'>
    <div class="cus-container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/"> 首页</XtxBreadItem>
        <XtxBreadItem>分类</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <Carousel :slides="home.bannerList" style="height: 500px" auto-play />
      <!-- 所有二级分类 -->
      <div class="sub_list mt-5 bg-white">
        <h3 class="text-3xl text-666 font-normal text-center">全部分类</h3>
        <ul class=" flex flex-wrap py-0 px-5">
          <li v-for="i in topCategory.children" :key="i.id" class="hover:text-xtxColor">
            <a href="javascript:void(0)" class=" text-center block text-base">
              <!-- text-align: center可以让img标签也居中, 前提是img的display属性没有被更改 -->
              <img :src="i.picture" class="inline-block" />
              <p>{{ i.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 关联商品 -->
      <div class="relative bg-white mt-5" v-for="item in topCategory.children" :key="item.id">
        <div>
          <h3 class="text-3xl text-666 font-normal text-center">- {{ item.name }} -</h3>
          <p class="relative -top-5 text-center text-999 text-xl">温暖柔软，品质之选</p>
          <FindMore class="absolute top-5 right-5" />
        </div>
        <div class="flex justify-start flex-wrap pt-0 px-16 pb-8">
          <GoodsItem v-for="goods in item.goods" :key="goods.id" :goods="goods" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.top_category {
  h3 {
    line-height: 100px;
  }
  .sub_list {
    li {
      width: 168px;
      height: 160px;
      img {
        width: 100px;
        height: 100px;
      }
      p {
        line-height: 40px;
      }
    }
  }
}
</style>