<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const clickHandler = () => {
  router.push('/')
}
</script>

<template>
  <div style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" class='p-1 bg-white min-h-[50px] flex justify-center items-center font-semibold mb-5 nav-title cursor-pointer' @click="clickHandler">Nclsslr 💻</div>
</template>