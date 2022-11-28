<script setup lang='ts' name="HomeSkeleton">
</script>

<template>
  <div class="home_skeleton flex justify-between">
    <div class="skeleton_item" v-for="i in 4" :key="i" :style="{ backgroundColor: '#F0F9F4'}">
      <XtxSkeleton bg="#e4e4e4" :width="306" :height="306"></XtxSkeleton>
      <XtxSkeleton bg="#e4e4e4" :width="160" :height="24"></XtxSkeleton>
      <XtxSkeleton bg="#e4e4e4" :width="120" :height="24"></XtxSkeleton>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.home_skeleton {
  width: 1240px;
  height: 406px;
  .skeleton_item {
    height: 306px;
    .skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>