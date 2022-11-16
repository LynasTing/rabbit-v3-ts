<template>
  <header class='basic-header bg-white z-40'>
    <div class="cus-container w-full h-full flex items-center justify-evenly">
      <!-- logo -->
      <h2 class="logo-img h-full mr-10">
        <RouterLink to="/" />
      </h2>
      <!-- tab -->
      <ul class="flex goods items-center justify-between relative">
        <li v-for="(item, index) in category.categoryList" :key="index" @mouseenter="category.show(item.id)" @mouseleave="category.hide(item.id)">
          <RouterLink :to="`/category/:${item.id}`" class="pb-2">{{ item.name }}</RouterLink>
          <!-- 二级菜单 -->
          <div class="cus-container bg-white absolute h-0 overflow-hidden opacity-0 submenu z-40" :class="{subShow: item.open}">
            <ul class="flex flex-wrap px-16 items-center h-full">
              <li v-for="sub in item.children" :key="sub.id" class="w-28 ">
                <RouterLink :to="`/category/sub/${sub.id}`" class="flex flex-col items-center">
                  <img :src="sub.picture" alt="好吃的" class="w-16 h-16">
                  <p class="pt-3 text-center text-sm">{{ sub.name }}</p>
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- search -->
      <div class="search-box flex items-center rounded-full mx-10 pl-2 " :class="isFocus ? 'longInput':''">
        <i class="iconfont icon-search text-sm mr-1"></i>
        <input type="text" placeholder="请输入搜索商品" class="text-sm rounded-full pl-1" @change="searchBoxOnBlur" />
      </div>
      <!-- buyCar -->
      <div class="buy-car">
        <a class="block relative text-white" href="javascript: void(0)">
          <i class="iconfont icon-cart text-xl" />
          <em class="absolute text-xs not-italic py-0.5 px-1.5 ml-0.5 ">2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang='ts' name="BasicHeader">
import { ref } from 'vue'
import useStore from '@/store'
const { category } = useStore()
// category.getAllCategory()
const isFocus = ref(false)
const searchBoxOnBlur = () :void =>  {
  isFocus.value = true
}

</script>

<style lang='scss' scoped>
.basic-header {
  height: 132px;
  .logo-img {
    width: 180px;
    a {
      display: block;
      height: 100%;
      background: url('@/assets/imgs/logo.png') no-repeat center 18px / contain;
    }
  }
  .goods {
    flex: 1;
    & > li > a:hover {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
  .submenu {
    left: -220px;
    top: 56px;
    box-shadow: 0 0 5px #ccc;
    transition: all 0.2s 0.1s;
    a:hover {
      color: $xtxColor;
    }
  }
  .subShow {
    height: 132px;
    opacity: 1;
  }
  
  
  .search-box {
    width: 170px;
    height: 32px;
    border-bottom: 1px solid #e7e7e7;
    input {
      outline: none;
    }
  }
  .buy-car {
    i {
      color: #333;
    }
    em {
      color: white;
      background-color: $helpColor;
      border-radius: 10px;
    }
  }
  .longInput {
    animation-duration: 10s;
    @keyframes inputChange {
      0% {
        width: 170px;
       }
       100% {
        width: 240px
       }
    }
  }
}
</style>