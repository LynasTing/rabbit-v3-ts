<template>
  <footer class="basic-footer bg-white">
    <!-- 上部 -->
    <div class="cus-container">
      <div class="top bg-white flex justify-between">
        <dl class="">
          <dt>客户服务</dt>
          <div class="have-border">
            <dd class="mr-3"><i class="iconfont icon-kefu"></i> 在线客服</dd>
            <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
          </div>
        </dl>
        <!-- 关注我们 -->
        <dl>
          <dt>关注我们</dt>
          <div class="have-border">
            <dd class="mr-3"><i class="iconfont icon-weixin"></i> 公众号</dd>
            <dd><i class="iconfont icon-weibo"></i> 微博</dd>
         </div>
        </dl>
        <!-- 下载 -->
        <dl>
          <dt>下载APP</dt>
          <div class="flex">
            <dd class="mr-3 w-24 h-24 flex items-center justify-center down-img"><img src="@/assets/imgs/qrcode.jpg" /></dd>
            <dd class="flex flex-col justify-center">
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <a href="javascript:void(0)" class="w-24 bg-down text-white leading-8 h-8">下载页面</a>
            </dd>
          </div>
        </dl>
        <!-- 服务热线 -->
        <dl class="no-border justify-evenly pr-0">
          <dt>服务热线</dt>
          <dd class=" text-center">
            <p class="break-normal">400-0000-000</p>
            <small class="text-base whitespace-nowrap">周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
      
    </div>
    <!-- 下部 -->
    <div class="bottom bg-333">
      底部2
    </div>
  </footer>
</template>
<script setup lang='ts' name="basicFooter">
import { ref } from 'vue'
</script>
<style lang='scss' scoped>
.basic-footer {
  .top {
    height: 290px;
    padding: 60px 25px 40px 25px;
    dl {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 340px;
      padding: 0 72px;
      border-right: 1px solid #F2F2F2;
      dt {
        font-size: 18px;
        color: #999;
        margin-bottom: 36px;
      }
      .have-border {
        display: flex;
        dd {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 92px;
          height: 92px;
          border: 1px solid #ededed;
          i {
            display: block;
            height: 50px;
            font-size: 36px;
            color: #666;
          }
          
        } 
      }
      dd {
        img {
            width: 76px;
            height: 76px;
          }
        span {
          font-size: 14px;
          color: #999;
          text-align: center;
        }
        a {
          font-size: 14px;
          text-align: center;
          color: white;
        }
      }
      .down-img {
        width: 92px;
        height: 92px;
        border: 1px solid #ededed;
      }
    }
    & > dl:first-child {
      padding-left: 0;
    }
    .no-border {
      border: none;
      p {
        font-size: 22px;
        color: #666
      }
      small {
        color: #999;
      }
    }
  }
  
}
</style>