<template>
  <div class="favoris min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Mes Favoris</h2>
    <div v-if="favoritesStore.favorites.length === 0" class="text-gray-500">Aucun favori ajouté.</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="annonce in favoritesStore.favorites" :key="annonce.id" class="border p-4 rounded-lg shadow">
        <img :src="annonce.image" alt="" class="w-full h-48 object-cover mb-4 rounded">
        <p class="text-lg font-semibold">{{ annonce.nom }}</p>
        <p class="text-gray-700 mb-4">{{ annonce.description }}</p>
        <div class="flex justify-between items-center">
          <RouterLink :to="`/paiement/${annonce.id}`" class="text-blue-500 hover:underline">Acheter</RouterLink>
          <button @click="favoritesStore.removeFavorite(annonce.id)" class="text-red-500 hover:text-red-700">❌ Retirer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useFavoritesStore } from "@/stores/favoris.js";

const favoritesStore = useFavoritesStore();
</script>