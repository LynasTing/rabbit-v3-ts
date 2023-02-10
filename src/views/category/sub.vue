<script setup lang='ts'  name="SubCategory">
import useStore from '@/store';
import { CategoryItem } from '@/types/data';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue'
const { category } = useStore()
const route = useRoute()
watchEffect(()=> {
  const id = route.params.id as string
  if(route.fullPath === `/category/sub/${id}`)category.getSubFilter(id)
})
// 1. 通过route获取到当前二级分类的id
// 2. 根据二级分类的id去list中查找对应二级分类的一级分类
const bread = computed(() => {
  const id = route.params.id as string
  const obj = {
    firstLevel: {} as CategoryItem,
    secondLevel: {} as CategoryItem
  }
  category.categoryList?.forEach(item => {
    item.children?.forEach(sub => {
      if(sub.id === id) {
        obj.secondLevel = sub
        obj.firstLevel = item
      }
    })
  })
  return obj
})


</script>
<template>
  <div class="cus-container bg-page-f5">
    <!-- 面包屑 -->
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/category/${bread.firstLevel.id}`">
        {{ bread.firstLevel.name }}
      </XtxBreadItem>
    </XtxBread>
    <!-- 二级类目筛选 -->
    <article class="bg-white p-6 text-sm">
      <div class="flex leading-10">
        <h4 class="w-20 text-999 font-normal">品牌:</h4>
        <div class="flex-1 specification">
          <a href="javascript:void(0)">全部</a>
          <a href="javascript:void(0)" v-for="item in category.subCategory.brands" :key="item.id">{{ item.name }}</a>
        </div>
      </div>
      <div class="flex leading-10" v-for="sub in category.subCategory.saleProperties" :key="sub.id">
        <h4 class="w-20 text-999 font-normal">{{ sub.name }}</h4>
        <div class="flex-1 specification">
          <a href="javascript:void(0)">全部</a>
          <a href="javascript:void(0)" v-for="subCate in sub.properties" :key="subCate.id">{{ subCate.name }}</a>
        </div>
      </div>
    </article>
    <!-- 商品区域 -->
    <main>
      <div class="flex justify-between">
        <!-- 排序区 -->
        <ul class="flex items-center justify-between h-20">
          <li><a href="javascript:void(0)" class="inline-block">默认排序</a></li>
          <li><a href="javascript:void(0)" class="inline-block">最新商品</a></li>
          <li><a href="javascript:void(0)" class="inline-block">最高人气</a></li>
          <li><a href="javascript:void(0)" class="inline-block">评论最多</a></li>
          <li>
            <a href="javascript:void(0)">
              价格排序
              <i class="arrow up"></i>
              <i class="arrow down"></i>
            </a>
          </li>
        </ul>
        <!-- 筛选条件 -->
        <div></div>
      </div>
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
</style>