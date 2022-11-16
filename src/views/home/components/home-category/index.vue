<script lang="ts" setup name="HomeCategory">
  import useStore from '@/store'
  import { ref, computed } from 'vue'
  const { category } = useStore()
  category.getAllCategory()
  // 当前分类id
  const categoryId = ref('')
  // 计算属性，获取当前分类下的商品数据
  const goods = computed(() => category.categoryList.find(i=> i.id === categoryId.value)?.goods)
  const enterFn = (params: any)=> {
    if(!params?.children?.length ) return
    categoryId.value = params.id
  }
</script>
<template>
  <div class="side_box flex w-full"  @mouseleave="categoryId = ''" >
    <!-- 左侧菜单 -->
    <nav class="home_category relative z-10">
      <ul class="flex flex-col h-full">
        <li 
          v-for="i in category.categoryList" 
          :key="i.id" 
          class="pl-10 leading-extra-loose flex flex-1 items-center"
          :class="{active: categoryId === i.id, hover: categoryId === i.id }"
          @mouseenter="enterFn(i)"
        >
          <RouterLink :to="`/category/${i.id}`" class="text-white mr-1 text-base">{{ i.name }}</RouterLink>
          <template v-if="i.children">
            <RouterLink :to="`/category/sub/${sub.id}`" class="text-white mr-1 text-sm" v-for="sub in i.children?.slice(0,2)" :key="sub.id">
              {{ sub.name }}
            </RouterLink>
          </template>
          <template v-else>
            <XtxSkeleton :width="60" :height="18" style="margin-right: 5px" bg="rgba(255, 255, 255, .2)" animated />
            <XtxSkeleton :width="50" :height="18" style="margin-right: 5px" bg="rgba(255, 255, 255, .2)" animated />
          </template>
        </li>
      </ul>
    </nav>
    <!-- 右侧layer -->
    <article class="z-30 bg-opacity-80 bg-white flex flex-col flex-1 p-6" v-show="categoryId">
      <div class="recommend flex flex-1 items-center mb-6">
        <h5 class="text-xl font-normal">分类推荐</h5>
        <p class="ml-2 text-666">根据您的购买或浏览记录推荐</p>
      </div>
      <ul class="grid grid-cols-3 gap-4">
        <li class="" v-for="item in goods" :key="item.id">
          <RouterLink to="/" class="bg-white hover:bg-layerBg flex p-2">
            <img :src="item.picture" class="w-24 h-24 mr-3">
            <div class="layer_info flex flex-col justify-center overflow-hidden text-666">
              <h4 class="text-base truncate">{{ item.name }}</h4>
              <p class="text-xs text-999 py-1.5 truncate">{{ item.desc }}</p>
              <span class="text-base text-priceColor">￥<em class="text-xl not-italic">{{ item.price }}</em></span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </article>
  </div>
</template>
<style scoped lang="scss">
.home_category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  li:hover, li.active {
    background: $xtxColor;
  }
}
// .side_box:hover {
//   article {
//     display: block;
//   }
// }
</style>
