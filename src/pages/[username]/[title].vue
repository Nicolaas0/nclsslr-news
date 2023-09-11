<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { doc, getDocs, updateDoc, increment, collection, where, query } from "firebase/firestore";
import { db } from "../../firebase.ts"

const articleData = ref('')
const url = ref(window.location.pathname);

onMounted(async () => {
    const segments = url.value.split('/');
    const lastSegment = segments[segments.length - 1].replaceAll('-', ' ')
    console.log(lastSegment)
    const colRef = collection(db, "Article");
    const q = query(colRef, where("title", "==", lastSegment));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (value) => {
        articleData.value = value.data();
        const docRef = doc(db, "Article", value.data().uid)
        await updateDoc(docRef, {
            views: increment(1)
        })
});
})

function convertToTitleCase(input: string): string {
  return input
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}
</script>
<template>
    <div class="flex flex-col justify-center items-center" v-if="articleData">
        <div>{{ convertToTitleCase(articleData.title) }}</div>
        <div>{{ articleData.sub }}</div>
        <div class="flex gap-2">
            <div class="border border-solid p-1 rounded-lg border-black" v-for="(item, index) in articleData.category">
                {{ item }}
            </div>
        </div>
        <div>{{ convertToTitleCase(articleData.title) }}</div>
        <div v-html="articleData.content"></div>
        <img :src="articleData.image" class="w-[300px]">
        <div>Views: {{ articleData.views }}</div>
        <div>{{ articleData.author }}, {{ articleData.createdAt }}</div>
    </div>
</template>