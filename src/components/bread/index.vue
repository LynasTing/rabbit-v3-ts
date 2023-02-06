<script setup lang='ts' name="XtxBread">
import { provide } from 'vue'
const props = defineProps({
  separator: {
    type: String,
    default: ''
  }
})
provide('separator', props.separator)
</script>

<template>
  <div>

  </div>
</template>

<style lang='scss' scoped>

</style>