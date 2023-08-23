<script setup lang="ts"></script>

<template>
    <div class="w-full py-6 px-10 mb-10">
        <!-- Title -->
        <div class="flex items-center gap-3 mb-6">
            <div class="text-black text-2xl font-bold w-[270px] break-normal">Must - Reads</div>
            <div class="h-1 w-full bg-black"></div>
            <div
                class="flex items-center justify-between px-2 py-1 rounded-2xl border border-black w-full max-w-[100px] cursor-pointer">
                <div class="text-xs">VIEW ALL</div>
                <img src="../../../public/icons/arrowUpIcon.svg">
            </div>
        </div>
        <div class="flex gap-3">
            <NewsItem type="headline" class="w-2/3 h-[500px]" />
            <div class="w-1/3 flex flex-col justify-between">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    </div>
</template>