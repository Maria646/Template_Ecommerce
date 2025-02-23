<template>
    <!-- Section Bannière -->
    <section class="banner p-5 md:p-20">
      <div class="banner__container max-w-[600px] mx-auto text-center">
        <h2 class="text-2xl md:text-4xl font-bold">About</h2>
        <p class="mt-4 text-base md:text-lg">
          This is a simple Vue.js component that displays a welcome message.
        </p>
      </div>
    </section>
  
    <!-- Section Histoire -->
    <section class="history p-5 md:p-20">
      <div class="history__container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto">
        <div class="history__text">
          <h3 class="text-xl md:text-3xl font-semibold">History</h3>
          <p class="mt-4 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            faucibus libero, ac tincidunt lorem. Nulla facilisi. Sed vitae neque
            euismod, consectetur metus ut, pulvinar diam. Donec vel turpis vel
            nunc elementum fermentum. Donec ac consectetur ipsum, at dictum
            velit. Sed fermentum, est a condimentum congue, nunc libero dignissim
            dui, non laoreet mauris velit ut felis. Donec vel diam auctor,
            lobortis arcu ut, dignissim neque. Nullam gravida, velit vel
            condimentum consectetur, est metus semper nunc, vel sagittis lacus
            tellus vel velit. Nullam auctor, ligula non consectetur efficitur,
            justo velit consectetur lectus, sed bibendum erat ipsum ac justo.
          </p>
        </div>
        <div class="history__image">
          <img src="" alt="History Image" class="w-full h-auto" />
        </div>
      </div>
    </section>
  
    <!-- Section Origine -->
    <section class="origin p-5 md:p-20">
      <div class="origin__container grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          class="origin__card grid grid-cols-5 gap-4"
          v-for="index in 4"
          :key="index"
        >
          <div class="origin__image col-span-5 md:col-span-3">
            <img src="" alt="" class="w-full h-auto" />
          </div>
          <div class="origin__text col-span-5 md:col-span-2 p-5">
            <h2 class="text-lg md:text-xl font-semibold">Origin</h2>
            <p class="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
              faucibus libero, ac tincidunt lorem. Nulla facilisi. Sed vitae neque
              euismod, consectetur metus ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  

<script setup>
import {ref, onMounted} from 'vue';


</script>

<style scoped>
</style>
