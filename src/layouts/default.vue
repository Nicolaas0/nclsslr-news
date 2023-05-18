<script setup lang='ts'>
console.log('Mounted')
</script>

<template>
  <div class="bg-[#F6F6F6]">
    <Navbar />
    <!-- Page Content -->
    <RouterView class="px-6 lg:px-10 lg:pb-10" />
    <!-- Page Content -->
  </div>
</template>