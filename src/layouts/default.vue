<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang='ts'>
console.log('Mounted')
</script>

<template>
  <div class="w-full h-full bg-[#F7F4F0]">
    <Navbar />
    <Category />
    <!-- Page Content -->
    <RouterView />
    <!-- Page Content -->
  </div>
</template>