<template>
  <ul class="basic-interaction cus-container flex px-20 items-center">
    <li v-for="(item, index) in childrenNav" :key="index" class="mr-14" >
      <a href="javascript: void(0)" class="inline-block h-24">{{ item }}</a>
    </li>
  </ul>
</template>

<script setup lang='ts' name="BasicInteraction">
import { ref } from 'vue'
const childrenNav: Array<string> = ['糕点', '糖巧', '坚果', '蜜饯', '冲饮', '茗茶', '肉脯', '滋补品', '乳品', '咖啡', '速食品']

</script>

<style lang='scss' scoped>
.basic-interaction {
  li > a {
    line-height: 96px;
  }
}
</style>