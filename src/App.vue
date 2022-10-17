<template>
  <RouterView />
</template>

<script setup lang='ts'>
import request from './utils/request'
</script>

<style lang='scss' scoped>
.app {
  background-color: $warnColor;
  @include hoverShadow()
}
</style>    