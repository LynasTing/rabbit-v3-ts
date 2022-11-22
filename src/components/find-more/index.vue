<script setup lang='ts' name="FindMore">
  import { defineProps } from 'vue'
  const props = defineProps({
    path: {
      type: String,
      default: '/'
    }
  })
</script>
<template>
  <div class="find_more">
    <RouterLink :to="props.path">
      <span class="text-base mr-1 text-999 ">
        <slot>查看更多</slot>
      </span>
      <i class="iconfont icon-angle-right pl-1 text-sm text-ccc "></i>
    </RouterLink>
  </div>
</template>
<style lang="scss">
.find_more:hover {
  span, i {
    color: $xtxColor;
  }
}
</style>
