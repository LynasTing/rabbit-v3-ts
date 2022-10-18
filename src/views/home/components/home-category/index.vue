<template>
  <nav class="home_category relative z-20" >
    <ul>
      <li v-for="i in category.categoryList" :key="i.id" class="pl-10 h-14 leading-extra-loose hover:bg-xtxColor">
        <RouterLink :to="`/category/${i.id}`" class="text-white mr-1 text-base">{{ i.name }}</RouterLink>
        <RouterLink :to="`/category/sub/${sub.id}`" class="text-white mr-1 text-sm" v-for="sub in i.children?.slice(0,2)" :key="sub.id">
          {{ sub.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
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
  li {
    line-height: 3.5;
  }
}
</style>
