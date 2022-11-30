<script setup lang='ts' name="HomeSpecial">
import HomePanel from '../home-panel/index.vue'
import useStore from '@/store'
import { useLazyData } from '@/utils/hooks'
const { home } = useStore()
const target = useLazyData(() =>{ 
  home.getSpecialList()
})
</script>

<template>
  <HomePanel title="最新专题" sub-title="" class="home_special" ref="target">
    <template #rightSlot>
      <FindMore />
    </template>
    <article class="grid pb-5 h-96 gap-x-2 ">
      <div class="" v-for="i in home.specialList" :key="i.id">
        <RouterLink to="/" class="h-72 block w-full relative">
          <img :src="i.cover" class="w-full h-full" />
          <div class="meta grid grid-rows-2 grid-flow-col gap-1.5 absolute left-0 bottom-0 w-full px-4 pb-2">
            <div class="col-span-2 truncate text-white text-xl">{{ i.title }}</div>
            <div class="col-span-2 truncate text-999 text-lg">{{ i.summary }}</div>
            <div class="row-span-2 flex items-center">
              <div class="text-priceColor py-0.5 px-1 bg-white text-base rounded-sm ">&yen;{{ i.lowestPrice }}起</div>
            </div>
          </div>
        </RouterLink>
        <!-- 点赞、评论 -->
        <div class="footer flex justify-between items-center px-5 py-0  ">
          <div>
            <span class="mr-6"><i class="iconfont icon-hart1"></i>{{ i.collectNum }}</span>
            <span><i class="iconfont icon-see"></i>{{ i.viewNum }}</span>
          </div>
          <span class="block"><i class="iconfont icon-message"></i>{{ i.replyNum }}</span>
        </div>
      </div>
    </article>
  </HomePanel>
</template>

<style lang='scss' scoped>
.home_special {
  article {
    grid-template-columns: 1fr 1fr 1fr;
    & > div {
      background-color: white;
      text-align: center;
      &:hover {
        @include hoverShadow()
      }
    }
    .meta { 
      background-image: linear-gradient(to top,rgba(0, 0, 0, 0.8),transparent 100%)
    }
    .footer {
      height: 72px;
      span {
        vertical-align: middle;
        &:hover {
          cursor: pointer;
          color: $xtxColor;
          i {
            color: $xtxColor;
          }
        }
      }
      i {
        display: inline-block;
        width: 15px;
        height: 14px;
        margin-right: 5px;
        color: #999;
      }
    }
  }
}
</style>