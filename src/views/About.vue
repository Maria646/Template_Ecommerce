<template>
<!-- Section Bannière -->
<section class="banner p-10 md:p-20 bg-primary text-white bg-cover bg-center bg-no-repeat relative">
  <Header/>
  
  <div class="absolute inset-0 bg-primary bg-opacity-50"></div> <!-- Overlay sombre -->
  
  <div class="banner__container max-w-screen-md mx-auto text-center relative z-10 px-4">
    <h1 class="text-[40px] md:text-[70px] mt-10">About</h1>
    <p class="mt-4 text-base md:text-lg leading-relaxed max-w-[90%] mx-auto">
      This is a simple Vue.js component that displays a welcome message.
    </p>
  </div>
</section>


<!-- Section Histoire -->
<section class="history py-20 relative">
  <div class="absolute inset-0 bg-secondary opacity-40"></div>
  <div class="history__container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md mx-auto px-4">

    <!-- Texte -->
    <div class="history__text md:max-w-[600px]">
      <h2 class=" text-[40px] uppercase text-primary ">History</h2>
      <p class="mt-4 text-sm md:text-lg text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel faucibus libero, ac tincidunt lorem. Nulla facilisi.
        Sed vitae neque euismod, consectetur metus ut, pulvinar diam. Donec vel turpis vel nunc elementum fermentum.
      </p>
    </div>
        <!-- Image en premier sur mobile -->
    <div class="history__image min-h-[350px] w-full bg-gray-100 rounded-xl bg-cover bg-center bg-no-repeat relative md:order-none"
      style="background-image: url('https://media.istockphoto.com/id/1479931930/photo/fresh-tea-leaves-background.jpg?s=612x612&w=0&k=20&c=-RnIbmx3e8_nluYF2JzxEuu2B24yHRZv-L8pHto7dO4=');">
      <div class="absolute inset-0 bg-primary bg-opacity-40 rounded-xl"></div> <!-- Overlay coloré -->
    </div>
  </div>
</section>


<!-- Section Origine -->
<section class="origin py-10 relative">
  <div class="absolute inset-0 bg-secondary opacity-40"></div>
  <h2 class="text-center text-[40px] uppercase text-primary md:text-[55px] lg:text-[70px] mb-[40px] md:p-20">
    Origin
  </h2>
  
  <div class="origin__container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-4">
    <div v-for="(card, index) in cardsOrigin" :key="index" 
      class="origin__card grid grid-cols-1 md:grid-cols-[3fr_2fr] rounded-lg shadow-md overflow-hidden relative">
      
      <!-- Image -->
      <div class="origin__image bg-cover bg-center bg-no-repeat h-48 md:h-64 relative"
        :style="{ backgroundImage: `url(${card.image})` }">
        <div class="absolute inset-0 bg-primary bg-opacity-50"></div> <!-- Overlay léger -->
      </div>
      
      <!-- Texte -->
      <div class="origin__text p-5 flex flex-col justify-center bg-secondary bg-opacity-80 shadow-xl">
        <h3 class="text-[20px] text-gray-600 drop-shadow-md uppercase md:text-[40px]">{{ card.title }}</h3>
        <p class="mt-2 text-sm md:text-base text-gray-600 drop-shadow-md">{{ card.text }}</p>
      </div>
      
    </div>
  </div>
</section>


</template>

<script setup>
import { reactive } from 'vue';
import Header from '../layout/Header.vue'; 

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