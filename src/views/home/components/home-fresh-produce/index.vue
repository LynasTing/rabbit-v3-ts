<script setup lang='ts' name="HomeFreshProduce">
import HomePanel from '../home-panel/index.vue'
import useStore from '@/store'
import { useLazyData } from '@/utils/hooks';
import HomeSkeleton from '../home-skeleton/index.vue'
const { home } = useStore()
const target = useLazyData(()=>{
  home.getRecommend()
})
</script>

<template>
  <div class="recommend" ref="target">
    <HomePanel title="新鲜好物" subTitle="新鲜好物 品质靠谱">
      <!-- 组件内封装好的具名插槽，在此处使用 -->
      <template #rightSlot>
        <FindMore to="/">查看全部</FindMore>
      </template>
      <!-- 展示内容 -->
      <Transition name="fade">
      <ul class="flex justify-between" v-if="home.newGoodList.length">
        <li v-for="item in home.newGoodList" :key="item.id" class="bg-goods">
          <routerLink to="/">
            <img :src="item.picture" :alt="item.name" class="w-goods">
            <h4 class=" text-xl text-center pt-3 px-7 pb-3 truncate">{{ item.name }}</h4>
            <p class="text-priceColor text-center text-2xl">￥{{ item.price }}</p>
          </routerLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </Transition>
    </HomePanel>
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <Transition name="fade">
        <ul class="flex justify-between" v-if="home.hotGoodList.length">
          <li v-for="item in home.hotGoodList" :key="item.id">
            <routerLink to="/">
              <img :src="item.picture" :alt="item.alt">
              <h4 class=" text-xl text-center pt-3 px-7 pb-3 truncate">{{ item.title }}</h4>
              <p class="text-center text-lg text-999">{{ item.alt }}</p>
            </routerLink>
          </li>
        </ul>
        <HomeSkeleton v-else />
      </Transition>
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