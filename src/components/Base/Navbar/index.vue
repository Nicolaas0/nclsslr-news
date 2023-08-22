<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const clickHandler = () => {
  router.push('/')
}
</script>

<template>
  <div
    class="p-1 min-h-[50px] flex justify-between items-center font-semibold mb-5 nav-title cursor-pointer px-10 pt-12"
    @click="clickHandler">
    <div class="flex items-center gap-5">
      <img src="../../../../public/icons/barIcon.svg" />
      <div class="text-lg">Menu</div>
    </div>
    <div class="text-3xl font-bold">NCLSSLR</div>
    <div class="flex items-center gap-5">
      <div class="text-lg font-semibold">Newsletters</div>
      <img src="../../../../public/icons/magnifyIcon.svg">
    </div>
  </div>
</template>
