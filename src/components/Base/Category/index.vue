<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const categoryList = ['All', 'Trending', 'Art & Photography', 'Fashion & Beauty', 'Sustainability', 'Culture', 'Opinion'];
</script>

<template>
  <div class="px-10 mb-5">
    <div class=" py-5 border-y border-black flex justify-center items-center gap-14">
      <div v-for="(item, index) in categoryList" :key="index" class="text-black cursor-pointer text-sm">{{ item }}</div>
    </div>
  </div>
</template>