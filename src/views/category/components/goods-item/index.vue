<script setup lang='ts' name="GoodsItem">
// 商品信息组件
import { GoodsItem } from '@/types/data'
import { PropType } from 'vue';
defineProps({
  goods: {
    type: Object as PropType<GoodsItem>,
    default: () => ({})
  }
})
</script>
<template>
  <RouterLink to="/" class="goods_item block w-56 px-7 py-5 text-center">
    <img v-lazy="goods.picture" class="w-40 h-40">
    <p class="text-base text_ellipsis">{{ goods.name }}</p>
    <p class="text-999 h-7 text_ellipsis">{{ goods.desc }}</p>
    <p class="text-priceColor text-xl">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style lang='scss' scoped >
.goods_item {
  p {
    margin-top: 10px;
  }
}
</style>