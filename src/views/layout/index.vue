<template>
  <div class="layout bg-page-f5 h-full">
    <BasicTopNav />
    <BasicHeader />
    <!-- <BasicSticky /> -->
    <!-- 路由出口 -->
    <main class="basic-main">
      <RouterView />
    </main>
    <BasicFooter />
  </div>
</template>
<script setup lang='ts' name="Layout">
// 公共布局组件
import BasicTopNav from '@/views/layout/components/basic-top-nav/index.vue'
import BasicHeader from '@/views/layout/components/basic-header/index.vue'
import BasicFooter from '@/views/layout/components/basic-footer/index.vue'
import BasicSticky from '@/views/layout/components/basic-sticky/index.vue'
// test
</script>
<script lang='ts' name="Layout">
  export default {
    name: 'Layout'
  }
</script>


<style lang='scss' scoped>
.basic-main {
  min-height: 600px;
}
</style>