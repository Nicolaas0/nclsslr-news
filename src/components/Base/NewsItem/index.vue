<script setup lang='ts'>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'


const props = defineProps({
  data: {
    type: Object
  }
})

const router = useRouter()

const toArticle = (title:string) => {
  console.log(title)
  const url = title.split(' ').join('-')
  console.log(url)
  router.push(`/${url}`)
}
</script>

<template>
  <div class='group flex flex-col bg-white lg:w-[500px] justify-center items-center transition-all duration-300 border-2 border-gray-200 border-solid rounded-2xl hover:border-[#93A8AC]'>
    <img v-if='props.data?.urlToImage' :src='props.data?.urlToImage' class='rounded-t-2xl w-full h-[250px] object-cover cursor-pointer'>
    <div class='flex flex-col justify-between p-4'>
      <div>
        <div class="text-2xl font-bold cursor-pointer transition-all duration-300" @click="toArticle(props.data?.title)">{{ props.data?.title }}</div>
        <div class="text-sm mb-4 text-gray-500">
          {{ props.data?.author }} --  {{ dayjs(props.data?.publishedAt).format('MMM YYYY') }}</div>
      </div>
      <div>{{ props.data?.description }}</div>
    </div>
  </div>
</template>