<script setup lang="ts"></script>

<template>
    <div class="bg-[#E3F0F5] w-full py-6 px-5 md:px-10 mb-10">
        <!-- Title -->
        <div class="flex items-center gap-3 mb-6">
            <div class="text-[#426AA8] text-2xl font-bold w-[270px] break-normal">Trending News</div>
            <div class="h-1 w-full bg-[#426AA8]"></div>
            <div class="flex gap-4 items-center">
                <div class="flex justify-center rounded-full border border-[#426AA8] cursor-pointer">
                    <img class="w-[25px] h-[25px] mx-5 my-3 transform scale-x-[-1]" src="../../../public/icons/chevronRightIcon.svg">
                </div>
                <div class="flex justify-center rounded-full border border-[#426AA8] cursor-pointer">
                    <img class="w-[25px] h-[25px] mx-5 my-3" src="../../../public/icons/chevronRightIcon.svg">
                </div>
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