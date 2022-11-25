<script setup lang='ts' name="HomeFreshProduce">
import HomePanel from '../home-panel/index.vue'
import useStore from '@/store'
const { home } = useStore()
home.getRecommend()
</script>

<template>
  <div class="recommend">
    <HomePanel title="新鲜好物" subTitle="新鲜好物 品质靠谱">
      <!-- 组件内封装好的具名插槽，在此处使用 -->
      <template #rightSlot>
        <FindMore to="/">查看全部</FindMore>
      </template>
      <!-- 展示内容 -->
      <ul class="flex justify-between">
        <li v-for="item in home.newGoodList" :key="item.id" class="bg-goods">
          <routerLink to="/">
            <img :src="item.picture" :alt="item.name" class="w-goods">
            <h4 class=" text-xl text-center pt-3 px-7 pb-3 truncate">{{ item.name }}</h4>
            <p class="text-priceColor text-center text-2xl">￥{{ item.price }}</p>
          </routerLink>
        </li>
      </ul>
    </HomePanel>
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <ul class="flex justify-between">
        <li v-for="item in home.hotGoodList" :key="item.id">
          <routerLink to="/">
            <img :src="item.picture" :alt="item.alt">
            <h4 class=" text-xl text-center pt-3 px-7 pb-3 truncate">{{ item.title }}</h4>
            <p class="text-center text-2xl">{{ item.alt }}</p>
          </routerLink>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<style lang='scss' scoped>
.recommend {
  li {
    width: 306px;
    height: 406px;
    img {
      width: 306px;
      height: 306px;
    }
    &:hover {
      @include hoverShadow()
    }
  }
}

</style>