<script setup lang='ts' name="GoodsInfo">
import useStore from '@/store'
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia';
const { goods } = useStore()
const route = useRoute()
// 当商品详情页跳转到分类页, 或分类页跳转到商品详情页时会报错, 因此需要使用 watchEffect 来进行判断
watchEffect(() => {
  const id = route.params.id as string
  goods.getGoodsInfo(id)
})
const { info } = storeToRefs(goods)
console.log(`info + ::>>`, info)
</script>

<template>
  <div class="cus-container" v-if="info.categories">
    <!-- 面包屑 -->
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/category/${info.categories[1].id}`">{{ info.categories[1].name }}</XtxBreadItem>
      <XtxBreadItem :to="`/category/${info.categories[0].id}`">{{ info.categories[0].name }}</XtxBreadItem>
      <XtxBreadItem to="/">{{ info.name }}</XtxBreadItem>
    </XtxBread>
    <!-- 商品信息 -->
    <div class="info_area bg-white"></div>
    <!-- 商品详情 -->
    <div class="flex mt-5"></div>    
    <div class="goods_article mr-5">
      <!-- 商品+评价 -->
      <div class="goods_tabs bg-white"></div>
    </div>
    <!-- 24热榜+专题推荐 -->
    <div class="goods_aside"></div>
  </div>
</template>

<style lang='scss' scoped>
.info_area {
  min-height: 600px;
}
.goods_article {
  width: 940px;
  .goods_tabs {
    min-height: 600px;
  }
}
.goods_aside {
  width: 280px;
  min-height: 1000px;
}
</style>