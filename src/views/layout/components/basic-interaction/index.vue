<template>
  <div class="basic-interaction">
    <ul>
      <li v-for="(item, index) in childrenNav" :key="index"><a href="javascript: void(0)">{{ item }}</a></li>
    </ul>
  </div>
</template>

<script setup lang='ts' name="BasicInteraction">
import { ref } from 'vue'
const childrenNav: Array<string> = ['糕点', '糖巧', '坚果', '蜜饯', '冲饮', '茗茶', '肉脯', '滋补品', '乳品', '咖啡', '速食品']

</script>

<style lang='scss' scoped>
.basic-interaction {

}
</style>