

<script setup lang='ts' name="TopCategory">
// 调接口, 获取顶级分类数据  
import useStore from '@/store'; 
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const { category} = useStore()
const route = useRoute()
// 切换分类的时候，商品数据不会发生变化
// 因为setup的代码只会执行一次，因此需要监听路由的变化
// 如果监听了路由变化，那么从分类页跳至首页也会报错，所以需要判断路由地址
watch(
  () => route.params.id,
  (value) => {
    if(route.fullPath === `/category/${value}`) category.getTopCategory(value as string)
  },
  {
    immediate: true
  }
)
</script>
<template>
  <div class='top_category'>
    <div class="cus-container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/"> 首页</XtxBreadItem>
        <XtxBreadItem>分类</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>
<style lang='scss' scoped>

</style>