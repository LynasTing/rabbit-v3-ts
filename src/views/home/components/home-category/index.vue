<template>
  <div class="flex w-full">
    <!-- 左侧菜单 -->
    <nav class="home_category relative z-20" >
      <ul class="flex flex-col h-full">
        <li v-for="i in category.categoryList" :key="i.id" class="pl-10 leading-extra-loose hover:bg-xtxColor flex flex-1 items-center">
          <RouterLink :to="`/category/${i.id}`" class="text-white mr-1 text-base">{{ i.name }}</RouterLink>
          <RouterLink :to="`/category/sub/${sub.id}`" class="text-white mr-1 text-sm" v-for="sub in i.children?.slice(0,2)" :key="sub.id">
            {{ sub.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <!-- 右侧layer -->
    <article class="z-30 bg-opacity-80 bg-white flex-1">
      <div class="recommend flex items-center">
        <h5 class="text-xl font-normal">分类推荐</h5>
        <p class="ml-1">根据您的购买或浏览记录推荐</p>
      </div>
    </article>
  </div>
</template>
<script lang="ts" setup name="HomeCategory">
import useStore from '@/store'
const { category } = useStore()
category.getAllCategory()
</script>

<style scoped lang="scss">
.home_category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  color: #666;
}
.recommend {
  p {
    color: #666;
  }
}
</style>
