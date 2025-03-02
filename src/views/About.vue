<template>
  <!-- Section Bannière -->
  <section class="banner p-5 md:p-20 bg-primary text-white">
    <div class="banner__container max-w-[800px] mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold tracking-wide">About</h2>
      <p class="mt-4 text-base md:text-lg leading-relaxed">
        This is a simple Vue.js component that displays a welcome message.
      </p>
    </div>
  </section>

  <!-- Section Histoire -->
  <section class="history p-5 md:p-20 bg-gray-50">
    <div class="history__container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto">
      <div class="history__text">
        <h3 class="text-2xl md:text-3xl font-semibold text-gray-800">History</h3>
        <p class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel faucibus libero, ac tincidunt lorem. Nulla facilisi.
          Sed vitae neque euismod, consectetur metus ut, pulvinar diam. Donec vel turpis vel nunc elementum fermentum.
        </p>
      </div>
      <div class="history__image flex justify-center items-center bg-gray-100 p-5 rounded-xl">
        <img src="" alt="History Image" class="w-full h-auto rounded-xl shadow-md" />
      </div>
    </div>
  </section>

  <!-- Section Origine -->
  <section class="origin p-5 md:p-20 bg-gray-100">
    <div class="origin__container grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="origin__card grid grid-cols-1 md:grid-cols-2 gap-5" v-for="index in 4" :key="index">
        <div class="origin__image col-span-1">
          <img src="" alt="" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="origin__text col-span-1 p-5">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">Origin</h2>
          <p class="mt-2 text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel faucibus libero, ac tincidunt lorem. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
</script>

<style scoped>
</style>
