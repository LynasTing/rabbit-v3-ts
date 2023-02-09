
    
<template>
  <div class="basic-sticky w-full h-20 bg-white z-50 fixed left-0 top-0" :class="{stickyShow: y >= 80}">
    <div class="flex items-center cus-container"> 
      <RouterLink class="logo" to="/" />
      <ul class="flex-1 flex items-center justify-between px-10">
        <li v-for="(item, index) in category.categoryList" :key="index">
          <RouterLink :to="`/category/${item.id}`" class="pb-2 hover:text-xtxColor">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="right flex items-center w-56 pl-10">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="BasicSticky">
import useStore from '@/store'
import { useWindowScroll } from '@vueuse/core'
const { category } = useStore()
// category.getAllCategory()
// 控制是否显示吸顶组件
const { y } = useWindowScroll()
</script>
<style scoped lang="scss">
.basic-sticky {
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/imgs/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    border-left: 2px solid $xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: $xtxColor;
      }
    }
  }
}
.stickyShow {
  transition: all 0.3s linear;
  transform: translateY(0%);
}
</style>
    