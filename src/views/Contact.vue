<template>
  <section class="contact min-h-screen flex items-center justify-center p-4 relative">
    <Header/>
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
    <div class="contact__container grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      <!-- Titre de la section -->
      <div class="contact__title col-span-1 md:col-span-3 mb-10 text-center">
        <h1 class="text-[70px] text-primary">Contactez-nous</h1>
      </div>

      <!-- Coordonnées -->
      <div class="contact__coordonnee bg-primary p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-white mb-5">Coordonnées</h3>
        <div class="contact__number flex items-center mb-4">
          <i class="fas fa-phone-alt text-white mr-3"></i>
          <p class="text-white">514-616-2657</p>
        </div>
        <div class="contact__email flex items-center">
          <i class="fas fa-envelope text-white mr-3"></i>
          <p class="text-white">diaby@gmail.com</p>
        </div>
      </div>

      <!-- Lieux -->
      <div class="contact__emplacement bg-primary p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-white mb-5">Lieux</h3>
        <ul class="text-white">
          <li>123, Rue de la République</li>
          <li>75000 Paris</li>
        </ul>
      </div>

      <!-- Horaires -->
      <div class="contact__horaire bg-primary p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-white mb-5">Horaires</h3>
        <ul class="text-white">
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
import Header from '../layout/Header.vue'; 
</script>

<style scoped>
</style>
