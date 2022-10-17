
    
<template>
  <div class="basic-sticky w-full h-20 bg-white z-50 fixed left-0 top-0" :class="{stickyShow: stickyTop >= 78}">
    <div class="flex items-center"> 
      <RouterLink class="logo" to="/" />
      <BasicHeader />
      <div class="right flex items-center w-56 pl-10">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="BasicSticky">
import MenuNav from '@/views/layout/components/basic-header/index.vue'
import {ref, onMounted, onBeforeUnmount} from 'vue'
const stickyTop = ref(0)
const onScroll = () => {
  stickyTop.value = document.documentElement.scrollTop
  console.log(`x + ::>>`, stickyTop.value)
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, true)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})


</script>
<style scoped lang="scss">
.basic-sticky {
  border-bottom: 1px solid #e4e4e4;
  // transform: translateY(-100%);
  
 
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
    