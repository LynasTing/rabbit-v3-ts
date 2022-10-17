<template>
  <ul class="flex goods items-center justify-between relative">
    <li v-for="(item, index) in category.categoryList" :key="index" @mouseenter="category.show(item.id)" @mouseleave="category.hide(item.id)">
      <RouterLink :to="`/category/:${item.id}`" class="pb-2">{{ item.name }}</RouterLink>
      <!-- 二级菜单 -->
      <div class="cus-container bg-white absolute h-0 overflow-hidden opacity-0 submenu" :class="{subShow: item.open}">
        <ul class="flex flex-wrap px-16 items-center h-full">
          <li v-for="sub in item.children" :key="sub.id" class="w-28 flex flex-col items-center">
            <RouterLink :to="`/category/sub/${sub.id}`">
              <img :src="sub.picture" alt="好吃的" class="w-16 h-16">
              <p class="pt-3 text-center text-sm">{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang='ts' name="MenuNav">
import useStore from '@/store'
const { category } = useStore()
category.getAllCategory()
  
</script>

<style lang='scss' scoped>
.goods {
  flex: 1;
  & > li > a:hover {
    color: $xtxColor;
    border-bottom: 1px solid $xtxColor;
  }
}
.submenu {
  left: -200px;
  top: 56px;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  a:hover {
    color: $xtxColor;
  }
}
.subShow {
  height: 132px;
  opacity: 1;
}
</style>