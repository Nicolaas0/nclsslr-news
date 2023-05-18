<script setup lang='ts'>
import { useFetchNews } from '~/composables/useFetchNews'
import { Ref } from 'vue'
import { Data } from '~/components/Base/NewsItem/types'

const data: Ref<Data | undefined> = ref()
const loading = ref(false)

const categoryChangeHandler = async (category: string) => {
  data.value = undefined
  loading.value = true
  data.value = await useFetchNews(true, '', category)
  loading.value = false
}

onMounted(async () => {
  data.value = await useFetchNews(true)
})
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between">
  <Welcome class="hidden lg:block lg:min-w-[250px]" />
  <div class="flex flex-col justify-center items-center gap-2">
    <img v-if="!data || loading" src="../assets/loading.svg" class="self-center">
    <NewsItem v-for='(dat, index) in data?.data?.articles' :key='index' :data='dat' />
  </div>
  <CategoryList class="min-w-[250px]" @click:category="categoryChangeHandler" :data="data?.data?.articles" />
</div>
</template>