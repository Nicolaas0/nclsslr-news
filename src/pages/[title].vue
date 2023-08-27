<script setup lang='ts'>
import {useRoute, useRouter} from 'vue-router'
import dayjs from 'dayjs'
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

const route = useRoute()
const router = useRouter()

watch(()=> route.params, async (newValue)=> {
    if(!newValue) {
        router.push('/')
        return 
    }
    data.value = undefined
    data.value = await useFetchNews(true, route.params.title.toString().split('-').join(' '))
})

onMounted(async () => {
    const q = ref(route.params.title.toString().split('-').join(' '))
    data.value = await useFetchNews(true, q.value)
})
</script>

<template>
    <div class="flex flex-col lg:justify-between lg:flex-row">
        <template v-if="data?.data?.articles">
        <div class="flex flex-col justify-center items-center">
        <img :src="data?.data?.articles[0].urlToImage" class="w-full lg:w-[850px] lg:h-[400px] rounded-t-xl object-cover">

            <div class="rounded-b-xl bg-white p-4 lg:w-[850px]">
            <div class="text-2xl font-bold transition-all duration-300">{{ data?.data?.articles[0].title }}</div>
            <div class="text-sm mb-4 text-gray-500">
                {{ data?.data?.articles[0].author }} --  {{ dayjs(data?.data?.articles[0].publishedAt).format('MMM YYYY') }}</div>
            <div>{{ data?.data?.articles[0].content }} (Formatted by NEWSAPI)</div>
            </div>
        </div>
        </template>
        <img v-else src="../assets/loading.svg" class="w-[850px] self-center">
        <CategoryList class="min-w-[250px]" no-category :data="data?.data?.articles" @click:category="categoryChangeHandler" />
    </div>
</template>