<template>
  <div class="layout bg-page-f5">
    <BasicTopNav />
    <BasicHeader />
    <BasicInteraction />
  </div>
</template>
<script setup lang='ts' name="Layout">
import BasicTopNav from '@/views/layout/components/basic-top-nav/index.vue'
import BasicHeader from '@/views/layout/components/basic-header/index.vue'
import BasicInteraction from '@/views/layout/components/basic-interaction/index.vue'
// test
</script>
<script lang='ts' name="Layout">
  export default {
    name: 'Layout'
  }
</script>


<style lang='scss' scoped>

</style>