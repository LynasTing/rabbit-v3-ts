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
  <div class="home_panel">
    <div class="cus-container">
      <div class="flex items-center py-10">
        <h3 class="flex-1 text-3xl font-normal pl-2">{{ title || '新鲜好物'}}<small class="text-base text-999 ml-5">{{ subTitle || '新鲜出炉 品质靠谱'}}</small></h3>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.home_panel {}
</style>