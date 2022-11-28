<script setup lang='ts' name="XtxSkeleton">
// defineProps是v3的子组件接受参数的写法
defineProps({
  bg: {
    type: String,
    default: '#efefef'
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  animated: {
    type: Boolean,
    default: true
  },  
  fade: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div 
    class='skeleton inline-block relative overflow-hidden align-middle' 
    :class="{ flash: animated, fade: fade }"
    :style="{width: width + 'px', height: height + 'px'}" 
  >
    <div class="flashing_box w-full h-full rounded-sm" :style="{ backgroundColor: bg}"></div>
  </div>
</template>
<style lang='scss' scoped>
// 闪动动画
@keyframes flash {
  0% {
    left: -100%
  }
  100% {
    left: 120%
  }
}
.flash::after {
  content: '';
  position: absolute;
  animation: flash 1.5s ease 0s infinite;
  top: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: skewX(-45deg);
}

// 褪色动画
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
.fade {
  animation: fade 1s linear infinite alternate;
}
</style>