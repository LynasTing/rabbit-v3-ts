<script setup lang='ts' name="HomeProduct">
import HomePanel from '../home-panel/index.vue'
import useStore from '@/store'
import { useLazyData } from '@/utils/hooks'
const { home } = useStore()
const target = useLazyData(()=>{
  home.getProductList()
})
</script>

<template>
  <div  class="home_product" ref="target">
    <HomePanel :title="item.name" sub-title="" v-for="item in home.productList" :key="item.id">
      <!-- 标题及横列二级分类 -->
      <template #rightSlot>
        <div class="row_title" v-for="sub in item.children" :key="sub.id">
          <RouterLink to="/">{{ sub.name }}</RouterLink>
        </div>
        <FindMore />
      </template>
      <main class="flex">
        <!-- 左侧竖图 -->
        <RouterLink to="/" class="cover relative mr-3">
          <img :src="item.picture" class="w-full h-full  object-cover" />
          <strong class="label absolute font-normal flex text-lg text-white">
            <div>{{ item.name }}</div>
            <div>{{ item.saleInfo.slice(0, 4)}}</div>
          </strong>
        </RouterLink>
        <ul class="grid grid-cols-4 gap-4 flex-1">
          <li v-for="good_item in item.goods" :key="good_item.id" class="goods_item py-2 px-7 overflow-hidden relative" >
            <img v-lazy="good_item.picture" class="w-40 h-40 block my-0 mx-auto">
            <h4 class="h-11 font-normal text-base mt-1">{{ good_item.name }}</h4>
            <div class="text-666 h-5 truncate w-full mb-3 mt-3">{{ good_item.desc }}</div>
            <p class="text-xl text-priceColor">&yen;{{ good_item.price }}</p>
            <article class="extra absolute flex flex-col items-center justify-center left-0 bottom-0 w-full bg-xtxColor text-center">
              <RouterLink to="/" class="text-lg pb-1">
                找相似
              </RouterLink>
              <RouterLink to="/" class="text-sm">
                发现更多宝贝&gt;
              </RouterLink>
            </article>
          </li>
        </ul>
      </main>
    </HomePanel>
  </div>
</template>

<style lang='scss' scoped>
.home_product {
  .row_title {
    margin-bottom: 2px;
    a {
      font-size: 16px;
      padding: 2px 12px;
      border-radius: 4px;
      &:hover {
        color: white;
        background: $xtxColor;
      }
    }
  }
  .cover {
    width: 240px;
    height: 610px;
    .label {
      left: 0;
      top: 50%;
      width: 188px;
      height: 66px;
      div {
        line-height: 66px;
        text-align: center;
        &:first-child {
          width: 76px;
          background: rgba(0, 0, 0, 0.9);
        }
        &:last-child {
          flex: 1;
          background: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  .goods_item {
    border: 1px solid transparent;
    transition: all .5s;

    .extra {
      height: 86px;
      transform: translate3d(0, 100%, 0);
      transition: all .5s;
      a {
        display: block;
        width: 120px;
        color: white;
        margin: 0 auto;
        &:first-child {
          margin-bottom: 4px;
          border-bottom: 1px solid white;
        }
      }
    }
    &:hover {
      border: 1px solid $xtxColor;
      .extra {
        transform: none;
      }
    }
  }
}
</style>