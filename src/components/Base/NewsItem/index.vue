<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang='ts'>
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  data: {
    type: Object,
    default: () => ({
      image: '../../../../public/newsExam.png',
      title: 'Lorem Ipsum',
      author: 'Lorem lorem',
      date: '11 Aug 2023',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    })
  }
})
const categories = ['Culture', 'Music', 'Artist']
</script>

<template>
  <div>
    <div
      v-if="props.type === 'headline'" class='background-div flex flex-col justify-between py-5 px-6'
      style="background-image: url('https://cdn.discordapp.com/attachments/1112433851491426304/1143559663028293762/newsExam.png');">
      <!-- Categories -->
      <div class="flex gap-3">
        <div v-for="(item, index) in categories" :key="index"
          class="px-2 py-1 border border-white rounded-md text-white w-fit cursor-default text-xs md:text-sm">{{ item }}</div>
      </div>
      <!-- Desc -->
      <div class="flex flex-col gap-2">
        <div class="text-[#D0D0D0] text-xs">6 August, 2023</div>
        <div class="text-[#99CCFF] text-xl md:text-2xl cursor-pointer">Kanye West Starring in : The Devil Wears Yeezy</div>
        <div class="max-w-[415px] text-sm text-white">Lorem ipsum dolor sit amet consectetur. Integer velit ultricies sed
          a vulputate pellentesque. Quam at etiam faucibus ipsum etiam sit tristique. Porttitor quis id tellus sit at.
        </div>
        <btn class="bg-white text-black text-sm rounded-lg p-[10px] w-fit mt-4 cursor-pointer">Read More</btn>
      </div>
    </div>
    <div v-else-if="props.type === 'regular'" class="w-full space-y-2">
      <img class="min-h-[280px] w-full object-cover" src="../../../../public/newsExam2.png">
      <div class="text-[#426AA8] text-sm font-bold cursor-pointer">Kanye West Starring in : The Devil Wears Yeezy</div>
      <div class="text-xs mb-1">Lorem ipsum dolor sit amet consectetur. Integer velit ultricies sed a vulputate
        pellentesque. Quam at etiam faucibus ipsum etiam sit tristique. Porttitor quis id tellus sit at.</div>
      <div class="text-[#426AA8] text-[8px]">6 August, 2023 | <span class="cursor-pointer">By Nicolaas</span></div>
    </div>
    <div v-else class="flex gap-2 items-center h-full">
      <img class="max-w-[140px] h-full object-cover" src="../../../../public/newsExam2.png">
      <div>
        <div class="text-[#426AA8] text-sm font-bold cursor-pointer">Kanye West Starring in : The Devil Wears Yeezy</div>
        <div class="text-xs mb-1">Lorem ipsum dolor sit amet consectetur. Integer velit ultricies sed a vulputate
          pellentesque. Quam at etiam faucibus ipsum etiam sit tristique. Porttitor quis id tellus sit at.</div>
        <div class="text-[#426AA8] text-[8px]">6 August, 2023 | <span class="cursor-pointer">By Nicolaas</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-div {
  width: 100%;
  /* Set the width as needed */
  height: 100%;
  /* Set the height as needed */
  background-size: cover;
  /* Adjust the size of the background image */
  background-repeat: no-repeat;
  /* Prevent image repetition */
}
</style>