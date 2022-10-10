<template>
  <RouterView></RouterView>
</template>

<script setup lang='ts'>
import request from './utils/request'
const testData = async() => {
  const res = await request.get('/home/index')
  console.log(`res + ::>>`, res)
}
testData()
</script>

<style lang='scss' scoped>
.app {
  background-color: $warnColor;
  @include hoverShadow()

}
</style>    