<template>
  <div class="favoris min-h-screen px-8 py-12 bg-gray-50">
    <h2 class="text-3xl font-bold text-center mb-6">Mes Favoris</h2>
    
    <!-- Message si aucun favori ajouté -->
    <div v-if="favoritesStore.favorites.length === 0" class="text-gray-500 text-center text-lg">
      Aucun favori ajouté.
    </div>

    <!-- Liste des favoris -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="annonce in favoritesStore.favorites" :key="annonce.id" 
        class="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">

        <!-- Image du produit -->
        <img 
          v-if="annonce.image" 
          :src="`src/images/${annonce.image}`" 
          :alt="annonce.nom" 
          class="w-40 h-40 object-cover rounded-lg mb-4"
        />

        <!-- Contenu du produit -->
        <div class="text-center">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ annonce.nom || 'Nom du produit' }}</h2>
          <p class="text-gray-600 text-sm mb-4">{{ annonce.description || 'Description du produit non disponible.' }}</p>

          <p v-if="annonce.prix" class="text-lg font-bold text-gray-900">Prix: {{ annonce.prix }} €</p>

          <div class="mt-4">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Valeurs nutritives</h3>
            <ul v-if="annonce.valeurs_nutritives" class="text-gray-600 space-y-1">
              <li v-for="(valeur, key) in annonce.valeurs_nutritives" :key="key">
                {{ key }}: <span class="font-semibold text-gray-800">{{ valeur }}</span>
              </li>
            </ul>
            <p v-else class="text-gray-500">Aucune information nutritionnelle disponible.</p>
          </div>

          <!-- Boutons -->
          <div class="mt-6 space-x-4">
            <router-link
              v-if="annonce" 
              :to="`/paiement/${annonce.id}`" 
              class="inline-block bg-primary cursor-pointer text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 hover:bg-secondary hover:border border-primary hover:text-primary"
            >
              Acheter
            </router-link>

            <button 
              @click="favoritesStore.removeFavorite(annonce.id)"
              class="inline-block bg-red-500 cursor-pointer text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 hover:bg-red-600 hover:border border-red-500 hover:text-white"
            >
              Retirer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "@/stores/favoris.js";

const favoritesStore = useFavoritesStore();
</script>

<style scoped>
.bg-primary {
  background-color: #4caf50; /* Exemple de couleur primaire */
}
.bg-secondary {
  background-color: #f9f9f9; /* Exemple de couleur secondaire */
}
</style>
