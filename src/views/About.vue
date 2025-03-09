<template>
  <div class="relative bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${photo})` }">
    <div class="absolute inset-0 bg-secondary opacity-40"></div>

    <!-- Section Bannière -->
    <section class="mb-20 md:p-20 relative h-[500px]">
      <Header />
      <div class="absolute inset-0 bg-secondary opacity-50"></div>
      <div class="max-w-screen-md mx-auto text-center relative z-10 px-4 text-primary">
        <h1 class="text-6xl md:text-6xl mt-20 uppercase mb-10">About</h1>
        <p class="mt-4 text-base md:text-lg leading-relaxed max-w-[90%] mx-auto">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque corporis porro deleniti corrupti beatae praesentium possimus ea, harum sequi expedita, obcaecati culpa nihil doloribus! Fuga inventore magnam quos exercitationem.
        </p>
      </div>
          <!-- Ligne de séparation moderne -->
    <div class="flex items-center justify-center gap-4 my-10">
      <div class="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      <div class="bg-gray-200 p-2 rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m-6-6 6 6 6-6" />
        </svg>
      </div>
      <div class="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </div>
    </section>

    <!-- Section Histoire -->
    <section class="py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-lg mx-auto px-4 rounded-lg">
        <!-- Texte -->
        <div class="md:max-w-[600px] z-10">
          <h2 class="text-6xl uppercase text-primary mb-10">History</h2>
          <p class="mt-4 text-sm md:text-lg text-primary leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores corrupti reprehenderit illo perferendis quod quos nulla commodi ratione porro voluptas, optio sit consequatur hic, sed inventore numquam! Qui, iure!
          </p>
        </div>
        <!-- Image -->
        <div class="min-h-[350px] w-full bg-gray-100 rounded-xl bg-cover bg-center bg-no-repeat relative"
          style="background-image: url('https://media.istockphoto.com/id/1479931930/photo/fresh-tea-leaves-background.jpg?s=612x612&w=0&k=20&c=-RnIbmx3e8_nluYF2JzxEuu2B24yHRZv-L8pHto7dO4=');">
          <div class="absolute inset-0 bg-primary bg-opacity-40 rounded-xl"></div>
        </div>
      </div>
    </section>

    <!-- Ligne de séparation moderne -->
    <div class="flex items-center justify-center gap-4 my-10">
      <div class="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      <div class="bg-gray-200 p-2 rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m-6-6 6 6 6-6" />
        </svg>
      </div>
      <div class="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </div>

    <!-- Section Origine -->
    <section class="py-10 text-primary">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-4">
        <div v-for="(card, index) in cardsOrigin" :key="index"
          class="grid grid-cols-1 md:grid-cols-[3fr_2fr] rounded-lg shadow-md overflow-hidden relative">
          
          <!-- Image -->
          <div class="bg-cover bg-center bg-no-repeat h-48 md:h-64 relative"
            :style="{ backgroundImage: `url(${card.image})` }">
            <div class="absolute inset-0 bg-primary bg-opacity-50"></div>
          </div>
          
          <!-- Texte -->
          <div class="p-5 flex flex-col justify-center bg-opacity-30 shadow-xl bg-secondary">
            <h3 class="text-lg md:text-2xl drop-shadow-md uppercase">{{ card.title }}</h3>
            <p class="mt-2 text-sm md:text-base drop-shadow-md">{{ card.text }}</p>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
import Header from '@/layout/header.vue'; 
import photo from "/public/images/photo.png";

const cardsOrigin = reactive([
  { 
    image: 'https://plus.unsplash.com/premium_photo-1682092047778-a5ebda1804e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Inde',
    text: 'Découvrez la richesse culturelle et spirituelle de l’Inde.',
  },
  { 
    image: 'https://media.istockphoto.com/id/942146594/photo/smiling-chinese-tea-picker.jpg?s=612x612&w=0&k=20&c=cHpRuxIPhrAnGI8K4IfBn4LUHyBrflCPr2nUF10yU3M=', 
    title: 'Chine',
    text: 'Un mélange fascinant de traditions anciennes et de technologies modernes.',
  },
  { 
    image: 'https://media.istockphoto.com/id/2151548010/photo/the-workers-are-harvesting-tea-leaves-at-tea-plantation-in-long-coc-tea-hills-in-tan-son.jpg?s=612x612&w=0&k=20&c=fMqT0U3Hcb4gMPH1XFVAMudA_ViXGAmdcoHI4ojO5Dw=', 
    title: 'Vietnam',
    text: 'Des souks colorés aux dunes du désert, une aventure unique.',
  },
  { 
    image: 'https://media.istockphoto.com/id/2193446855/photo/tea-plantation-production-in-kericho.jpg?s=612x612&w=0&k=20&c=Cmb3fg9ROn_7diH8Hds83JsTCQwy4YmEGtvu5yDwRPg=', 
    title: 'Afrique',
    text: 'Voyagez au cœur de la Dolce Vita et découvrez un patrimoine riche.',
  },
]);
</script>


<style scoped>
</style>