<script setup lang="ts">
import { Ref } from 'vue'
import { Data } from '~/components/Base/NewsItem/types'
import { useRouter } from 'vue-router'
import { useFetchNews } from '~/composables/useFetchNews'

const props = defineProps({
    noCategory:{
        type:Boolean
    }
})

const router = useRouter()

const categoryList = [{title: 'Business', value: 'business'}, {title: 'Entertainment', value: 'entertainment'}, {title: 'General', value: 'general'}, {title: 'Health', value: 'health'}, {title: 'Science', value: 'science'}, {title: 'Sports', value: 'sports'}, {title: 'Technology', value: 'technology'}]
const emit = defineEmits(['click:category'])

const data: Ref<Data | undefined> = ref()

const clickHandler = (category: string) => {
    console.log(category)
    emit('click:category', category)
}


const toArticle = (title:string) => {
  console.log(title)
  const url = title.split(' ').join('-')
  console.log(url)
  router.push(`/${url}`)
}

onMounted(async () => {
  data.value = await useFetchNews(true, '' ,'', '4')
})
</script>

<template>
    <div class="p-4 h-fit w-[350px] sticky top-6">
        <template v-if="!props.noCategory">
        <div class="mb-2 text-lg font-semibold nav-title">Discover something new!🔍</div>
        <div class="flex flex-wrap gap-2 mb-4">
            <div v-for="(c,i) in categoryList" :key="i"  class="bg-white w-fit px-2 rounded-2xl border border-1 border-gray-400 text-center cursor-pointer transition-all duration-150 hover:bg-[#93A8AC] hover:text-white" @click="clickHandler(c.value)">{{ c.title }}</div>
        </div>
    </template>
        <div class="mb-2 text-lg font-semibold nav-title">trending -- today</div>
        <template v-if="data">
        <div class="space-y-2">
            <div v-for="(d, i) in data?.data?.articles" :key="i" @click="toArticle(d.title)" class="text-sm leading-6 cursor-pointer hover:bg-white p-4">💭 {{ d.title }}</div>
        </div>
        </template>
        <img v-if="!data" src="../../../assets/loading.svg" class="self-center">
    </div>
</template>
