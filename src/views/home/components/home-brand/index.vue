<script setup lang='ts' name="HomeBrand">
import useStore from '@/store';
import HomePanel from '../home-panel/index.vue'
import { ref } from 'vue'
import { useLazyData } from '@/utils/hooks';
const { home } = useStore()
const target = useLazyData(()=>{
  home.getBrandList()
})
const brandIndex = ref(0)
const slideIndex = (params: number)=> {
  if(brandIndex.value === params) return
  brandIndex.value = params
  console.log(`brandIndex + ::>>`, brandIndex)
}
</script>


<template>
  <HomePanel title="热门品牌" sub-title="国际品牌 品质保证" ref="target">
    <template #rightSlot>
      <a 
        href="javascript:;" 
        class="iconfont inline-block text-xl ml-1 text-white text-center bg-xtxColor icon-angle-left prev"
        :class="{ disabled: brandIndex === 0 }"
        @click="slideIndex(0)"
      ></a>
      <a 
        href="javascript:;" 
        class="iconfont inline-block text-xl ml-1 text-white text-center bg-xtxColor icon-angle-right next"
        :class="{ disabled: brandIndex === 1 }"
        @click="slideIndex(1)"
      ></a>
    </template>
    <div class="brand_box flex w-full overflow-hidden pb-10">
      <Transition name="fade">
        <ul class="flex" v-if="home.brandList.length" :style="{ transform: `translateX(${-brandIndex * 1240}px)` }">
          <li v-for="i in home.brandList " :key="i.id" class="w-60">
            <RouterLink to="/">
              <img :src="i.picture" />
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton flex w-full">
          <XtxSkeleton
            class="item mr-2"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            :width="240"
            :height="305"
          />
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<style lang='scss' scoped>
.home_panel {
  background-color: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  &::before {
    position: relative;
    top: -6px;
    font-size: 12px;
  }
  &.disabled {
    background-color: #ccc;
    cursor: default;
  }
}
.brand_box {
  height: 345px;
  ul {
    width: 200%;
    transition: all 1s;
    li {
      width: 240px;
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
  .skeleton {
    .item:nth-child(5n) {
      margin-right: 0;
    }
  }
}
</style>