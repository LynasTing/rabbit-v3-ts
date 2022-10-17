<template>
  <header class='basic-header bg-white z-40'>
    <div class="cus-container w-full h-full flex items-center justify-evenly">
      <!-- logo -->
      <h2 class="logo-img h-full mr-10">
        <RouterLink to="/" />
      </h2>
      <!-- tab -->
      <MenuNav />
      <!-- search -->
      <div class="search-box flex items-center rounded-full mx-10 pl-2 " :class="isFocus ? 'longInput':''">
        <i class="iconfont icon-search text-sm mr-1"></i>
        <input type="text" placeholder="请输入搜索商品" class="text-sm rounded-full pl-1" @change="searchBoxOnBlur" />
      </div>
      <!-- buyCar -->
      <div class="buy-car">
        <a class="block relative text-white" href="javascript: void(0)">
          <i class="iconfont icon-cart text-xl " />
          <em class="absolute text-xs not-italic py-0.5 px-1.5 ml-0.5 ">2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang='ts' name="BasicHeader">
import MenuNav from '@/views/layout/components/menu-nav/index.vue'
import { ref } from 'vue'
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
 
  
  .search-box {
    width: 170px;
    height: 32px;
    border-bottom: 1px solid #e7e7e7;
    input {
      outline: none;
    }
  }
  .buy-car {
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