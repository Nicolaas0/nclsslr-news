<script setup lang="ts">
const selection = ['Bad😢', 'Good😊', 'Very Good😁', 'Amazing🤩']

const result = ref('')

const clickHandler = (value: string) => {
    result.value = value
}
</script>

<template>
    <div class="bg-white rounded-lg p-4 h-fit w-[300px]">
        <div class="mb-2 text-lg font-semibold nav-title">Hi welcome! How are you doing today?👀</div>
        <div class="space-y-3 mb-3">
            <div v-for="(select,i) in selection" :key="i" @click="clickHandler(select)" class="nav-title cursor-pointer" >{{ `${i+1}. ${select}` }}</div>
        </div>
        <div v-if="result" class="nav-title">I hope tomorrow will be a better day! Cheer up!</div>
    </div>
</template>