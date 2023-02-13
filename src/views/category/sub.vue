<script setup lang='ts'  name="SubCategory">
import useStore from '@/store';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue'
import GoodsItem from './components/goods-item/index.vue'
const { category } = useStore()
const route = useRoute()
watchEffect(()=> {
  const id = route.params.id as string
  if(route.fullPath === `/category/sub/${id}`)category.getSubFilter(id)
})
// 1. 通过route获取到当前二级分类的id
// 2. 根据二级分类的id去list中查找对应二级分类的一级分类
// const bread = computed(() => {
//   const id = route.params.id as string
//   const obj = {
//     firstLevel: {} as CategoryItem,
//     secondLevel: {} as CategoryItem
//   }
//   category.categoryList?.forEach(item => {
//     item.children?.forEach(sub => {
//       if(sub.id === id) {
//         obj.secondLevel = sub
//         obj.firstLevel = item
//       }
//     })
//   })
//   return obj
// })


</script>
<template>
  <div class="cus-container bg-page-f5">
    <!-- 面包屑 -->
    <XtxBread>
      {{ category.subCategory.parentName }}啊啊啊啊啊啊
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/category/${category.subCategory.parentId}`">{{ category.subCategory.parentName }}</XtxBreadItem>
      <XtxBreadItem>{{ category.subCategory.name }}</XtxBreadItem>
    </XtxBread>
    <!-- 二级类目筛选 -->
    <article class="bg-white p-6 text-sm">
      <div class="flex leading-10">
        <h4 class="w-20 text-999 font-normal">品牌：</h4>
        <div class="flex-1 specification">
          <a href="javascript:void(0)">全部</a>
          <a href="javascript:void(0)" v-for="item in category.subCategory.brands" :key="item.id">{{ item.name }}</a>
        </div>
      </div>
      <div class="flex leading-10" v-for="sub in category.subCategory.saleProperties" :key="sub.id">
        <h4 class="w-20 text-999 font-normal">{{ sub.name }}：</h4>
        <div class="flex-1 specification">
          <a href="javascript:void(0)">全部</a>
          <a href="javascript:void(0)" v-for="subCate in sub.properties" :key="subCate.id">{{ subCate.name }}</a>
        </div>
      </div>
    </article>
    <!-- 商品区域 -->
    <main class="bg-white py-0 px-6 mt-6">
      <!-- 排序 -->
      <div class="flex h-20 items-center justify-between">
        <div class="flex sort_box">
          <a href="javascript:;">默认排序</a>
          <a href="javascript:;">最新商品</a>
          <a href="javascript:;">最高人气</a>
          <a href="javascript:;">评论最多</a>
          <a href="javascript:;">价格排序
            <i class="arrow up" />
            <i class="arrow down" />
          </a>
        </div>
      </div>
      <!-- 商品列表 -->
      <ul class="flex flex-wrap py-0 px-1 goods_list">
        <li class="mr-5 mb-5" v-for="goods in category.subCategory.goods" :key="goods.id">
          <GoodsItem :goods="goods" />
        </li>
      </ul>
    </main>
  </div>
</template>



<style lang='scss' scoped>
.specification {
  a {
    margin-right: 36px;
    transition: all .3s;
    display: inline-block;
    &.active, &:hover {
      color: $xtxColor;
    }
  }
}
.sort_box {
  a {
    position: relative;
    height: 30px;
    line-height: 30px;
    color: 999;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    transition: all .3s;
    &.active {
      color: white;
      border-color: $xtxColor;
      background: $xtxColor;
    }
    .arrow {
      position: absolute;
      right: 8px;
      border: 5px solid transparent;
      &.up {
        top: 3px;
        border-bottom-color: #bbb;
        &.active {
          border-bottom-color:  $xtxColor;
        }
      }
      &.down {
        top: 15px;
        border-top-color: #bbb;
        &.active {
          border-top-color:  $xtxColor;
        }
      }
    }
  }
}
.goods_list:nth-child(5n) {
  margin-right: 0;
}
</style>