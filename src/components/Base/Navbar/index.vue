<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const visible = ref(false)

const myBottomSheet = ref < InstanceType < typeof VueBottomSheet >> ()

const categoryList = ['All', 'Trending', 'Art & Photography', 'Fashion & Beauty', 'Sustainability', 'Culture', 'Opinion'];
const activeCategory = ref('all')

const open = () => {
    visible = true
}

const changeCategory = (cat) => {
    activeCategory.value = cat
}

const router = useRouter()

const clickHandler = () => {
    router.push('/')
}
</script>
<template>
    <div class="p-1 min-h-[50px] flex justify-between items-center font-semibold mb-10 md:mb-5 nav-title cursor-pointer px-10 pt-12" @click="clickHandler">
        <div class="flex items-center gap-5">
            <img src="../../../../public/icons/barIcon.svg" @click="open" />
            <div class="text-lg hidden md:block">Menu</div>
        </div>
        <div class="text-3xl font-bold">NCLSSLR</div>
        <div class="flex items-center gap-5">
            <div class="text-lg font-semibold hidden md:block">Newsletters</div>
            <img src="../../../../public/icons/magnifyIcon.svg">
        </div>
    </div>
</template>