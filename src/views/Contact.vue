<template>
  <section class="contact min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat" 
  :style="{ backgroundImage: `url(${photo})` }">
    <Header/>
    <div class="absolute inset-0 bg-secondary opacity-40"></div>

    <div class="contact__container grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-lg mx-auto px-4 z-10">
      <!-- Titre de la section -->
      <div class="contact__title col-span-1 md:col-span-3 text-center p-[70px]">
        <h1 class="text-[40px] md:text-[55px] lg:text-6xl text-primary uppercase">Contactez-nous</h1>
      </div>

      <!-- Coordonnées -->
      <div class="contact__coordonnee bg-secondary text-primary bg-opacity-60 p-6 rounded-lg shadow-md flex flex-col">
        <h3 class="text-xl font-semibold mb-5">Coordonnées</h3>
        <div class="contact__number flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <p>514-616-2657</p>
        </div>
        <div class="contact__email flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>

          <p>diaby@gmail.com</p>
        </div>
      </div>

      <!-- Lieux -->
      <div class="contact__emplacement bg-secondary text-primary bg-opacity-60 p-6 rounded-lg shadow-md flex flex-col">
        <h3 class="text-xl font-semibold mb-5">Lieux</h3>
        <ul class="flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
  
  <div>
    <li>123, Rue de la République</li>
    <li>75000 Paris</li>
  </div>
</ul>

      </div>

      <!-- Horaires -->
      <div class="contact__horaire bg-secondary bg-opacity-60 p-6 rounded-lg shadow-md flex flex-col text-primary">
        <h3 class="text-xl font-semibold mb-5">Horaires</h3>
        <ul>
          <li>Lundi: 9h - 18h</li>
          <li>Mardi: 9h - 18h</li>
          <li>Mercredi: 9h - 18h</li>
          <li>Jeudi: 9h - 18h</li>
          <li>Vendredi: 9h - 18h</li>
          <li>Samedi: 10h - 17h</li>
          <li>Dimanche: Fermé</li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/layout/header.vue'; 
import photo from "/public/images/photo.png";
</script>

<style scoped>
</style>
