<template>
  <section class="contact min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="contact__container grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      <!-- Titre de la section -->
      <div class="contact__title col-span-1 md:col-span-3 mb-10 text-center">
        <h2 class="text-3xl font-bold text-gray-800">Contactez-nous</h2>
      </div>

      <!-- Coordonnées -->
      <div class="contact__coordonnee bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-5">Coordonnées</h3>
        <div class="contact__number flex items-center mb-4">
          <i class="fas fa-phone-alt text-gray-600 mr-3"></i>
          <p class="text-gray-600">514-616-2657</p>
        </div>
        <div class="contact__email flex items-center">
          <i class="fas fa-envelope text-gray-600 mr-3"></i>
          <p class="text-gray-600">diaby@gmail.com</p>
        </div>
      </div>

      <!-- Lieux -->
      <div class="contact__emplacement bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-5">Lieux</h3>
        <ul class="text-gray-600">
          <li>123, Rue de la République</li>
          <li>75000 Paris</li>
        </ul>
      </div>

      <!-- Horaires -->
      <div class="contact__horaire bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-5">Horaires</h3>
        <ul class="text-gray-600">
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
</script>

<style scoped>
</style>
