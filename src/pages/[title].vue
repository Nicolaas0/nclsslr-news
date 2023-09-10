<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.ts"

const articleData = ref('')
const url = ref(window.location.pathname);

onMounted(async () => {
    const segments = url.value.split('/');
    const lastSegment = segments[segments.length - 1];
    const docRef = doc(db, "Article", lastSegment)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        articleData.value = docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
})
</script>
<template>
    <div class="flex flex-col justify-center items-center">
        <div>{{ articleData.title }}</div>
        <div>{{ articleData.sub }}</div>
        <div class="flex gap-2">
            <div class="border border-solid p-1 rounded-lg border-black" v-for="(item, index) in articleData.category">
                {{ item }}
            </div>
        </div>
        <div>{{ articleData.title }}</div>
        <div v-html="articleData.content"></div>
        <img :src="articleData.image" class="w-[300px]">
        <div>{{ articleData.author }}, {{ articleData.createdAt }}</div>
    </div>
</template>