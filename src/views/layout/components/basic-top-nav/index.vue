<template>
  <header class="basic-top-nav bg-333 h-14">
    <div class="cus-container w-full h-full flex justify-between items-center">
      <div><a href="javascript:void(0)" class="text-ccc"><i class="iconfont icon-user mr-2"></i>丁凌</a></div>
      <ul class="menu-list text-ccc text-sm flex items-center h-full">
        <li><a href="javascript:void(0)" class="no-border">请先登录</a></li>
        <li><a href="javascript:void(0)">免费注册</a></li>
        <li><a href="javascript:void(0)">我的订单</a></li>
        <li><a href="javascript:void(0)">会员中心</a></li>
        <li><a href="javascript:void(0)">帮助中心</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)"><i class="iconfont icon-phone text-xs" />手机版</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang='ts' name="BasicTopNav">
import { ref } from 'vue'
  
</script>

<style lang='scss' scoped>
.basic-top-nav {
  .menu-list {
    li {
      padding-left: 7px;
      a {
        display: inline-block;
        padding-left: 7px;
        border-left: 2px solid #666;
        i {
          margin: 2px;
        }
        &:hover {
          color: $xtxColor
        }
      }
      .no-border {
        border-left: 0;
      }
    }
  }
}
</style>