<script setup lang='ts' name="XtxBreadItem">
// 分隔符数据是位于Bread组件中，而分隔符数据的使用时是在底层的组件中
import { inject } from 'vue'
defineProps({
  to: {
    type: String
  }
})
// 为底层组件提供数据
const separator = inject('separator')
</script>

<template>
  <div class="xtx_bread_item">
    <!-- 如果to存在 有值 那就渲染一个router-link标签，否则 就渲染一个span标签 -->
    <router-link v-if="to" :to="to">
      <slot />
    </router-link>
    <span v-else></span>
    <!-- 分隔符 -->
    <i v-if="separator">{{ separator }}</i>
    <i v-else class="iconfont icon-angle-right"></i>
  </div>
</template>

<style lang='scss' scoped>
.xtx_bread_item {
  i {
    margin: 0 6px;
    font-size: 10px;
  }
  &:nth-last-of-type(1) {
    i {
      display: none;
    }
  }
}
</style>