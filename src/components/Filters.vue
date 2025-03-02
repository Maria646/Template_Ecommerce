<template>
   <h2 class="text-xl font-semibold mb-4">Filtres</h2>
  <div class="p-4 bg-gray-100 rounded-lg shadow-md">
  

    <!-- Catégories Filter -->
    <div class="mb-6">
      <h4 class="text-lg font-semibold mb-2">Catégories</h4>
      <div class="space-y-2">
        <button 
          v-for="category in filtersStore.origin" 
          :key="category"
          :class="{
            'bg-primary text-white': filtersStore.selectedOrigin.includes(category),
            'bg-gray-200 text-black': !filtersStore.selectedOrigin.includes(category)
          }"
          @click="filtersStore.updateCategory(category)"
          class="w-full px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Prix Filter -->
    <div>
      <h4 class="text-lg font-semibold mb-2">Prix</h4>
      <div class="space-y-2">
        <button
          v-for="prix in filtersStore.prices"
          :key="prix"
          :class="{
            'bg-primary text-white': filtersStore.selectedPrices.includes(prix),
            'bg-gray-200 text-black': !filtersStore.selectedPrices.includes(prix)
          }"
          @click="filtersStore.updatePrix(prix)"
          class="w-full px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-primary  focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          {{ prix }}
        </button>
      </div>
    </div>

    <!-- Reset Button -->
    <div class="mt-6">
      <button 
        @click="resetFilters"
        class="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary hover:font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Réinitialiser les filtres
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFiltersStore } from '@/stores/filter';

const filtersStore = useFiltersStore();

// Réinitialiser les filtres
const resetFilters = () => {
  filtersStore.resetFilters();
};
</script>
