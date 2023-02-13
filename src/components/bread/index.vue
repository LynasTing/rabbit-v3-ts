<script setup lang='ts' name="XtxBread">
// 分隔符数据 是位于Bread组件中, 而对于分隔符数据的使用却是在底层的组件中使用
// provide/inject
import { provide } from 'vue'
const props = defineProps({
  separator: {
    type: String,
    default: ''
  }
})
// 为底层组件提供数据
provide('separator', props.separator)
</script>

<template>
  <div class="flex px-2.5 py-6 xtx_bread ">
    <slot />
  </div>
</template>

<style lang='scss' scoped>
.xtx_bread {
  &_item {
    a {
      color: #666;
      transition: all .4s;
    }
    a:hover {
      color: $xtxColor;
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>