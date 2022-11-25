<script setup lang='ts' name="HomePanel">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  })
</script>


<template>
  <div class="home_panel mb-4">
    <div class="cus-container">
      <div class="flex items-center py-10">
        <h3 class="flex-1 text-3xl font-normal pl-2">
          {{ title }}
          <small class="text-base text-999 ml-5">{{ subTitle }}</small>
        </h3>
         <!-- 具名插槽 -->
         <slot name="rightSlot"></slot>
      </div>
      <!-- 默认的内容插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.home_panel {}
</style>