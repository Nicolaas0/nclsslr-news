<script setup lang="ts"></script>

<template>
    <div class="hidden md:block w-full py-6 px-10 mb-10">
        <!-- Title -->
        <div class="flex items-center gap-3 mb-6">
            <div class="text-black text-2xl font-bold w-[200px] break-normal">Features</div>
            <div class="h-1 w-full bg-black"></div>
            <div
                class="flex items-center justify-between px-2 py-1 rounded-2xl border border-black w-full max-w-[100px] cursor-pointer">
                <div class="text-xs">VIEW ALL</div>
                <img src="../../../public/icons/arrowUpIcon.svg">
            </div>
        </div>
        <div class="space-y-4 md:space-y-0 md:flex gap-3">
            <NewsItem type="regular" />
            <NewsItem type="regular" />
            <NewsItem type="regular" />
            <NewsItem type="regular" />
        </div>
    </div>
</template>