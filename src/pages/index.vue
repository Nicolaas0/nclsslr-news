<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang='ts'>
</script>

<template>
  <div class="pb-12">
    <!-- Headline -->
    <NewsItem type="headline" class="mb-2 px-5 md:px-10 h-[350px]" />
    <!-- Sub Headline -->
    <div class="space-y-4 md:space-y-0 md:flex gap-4 mb-10 px-5 md:px-10">
      <NewsItem type="regular" />
      <NewsItem type="regular" />
      <NewsItem type="regular" />
    </div>
    <!-- Trending -->
    <TrendingSection />
    <!-- Must Read -->
    <MustReadSection />
    <!-- Other Section -->
    <OtherSection />
  </div>
</template>