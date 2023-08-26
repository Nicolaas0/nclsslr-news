<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { ref } from "vue";

const myBottomSheet = ref < InstanceType < typeof VueBottomSheet >> ()

const categoryList = ['All', 'Trending', 'Art & Photography', 'Fashion & Beauty', 'Sustainability', 'Culture', 'Opinion'];
const activeCategory = ref('all')

const open = () => {
    myBottomSheet.value.open();
}

const close = () => {
    myBottomSheet.value.close();
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
        <vue-bottom-sheet ref="myBottomSheet">
            <div class="px-5 pb-5 space-y-4">
                <h1>Select category:</h1>
                <div class="flex items-center gap-2 flex-wrap">
                    <div
                        v-for="(item, index) in categoryList"
                        :key="index"
                        :class="{
                            'px-3 py-1 rounded-full border border-black text-sm': true,
                            'bg-black text-white': activeCategory.toLowerCase() === item.toLowerCase()
                        }"
                        @click="()=> changeCategory(item)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </vue-bottom-sheet>
    </div>
</template>