<template>
  <div>
    <h2>Filtres</h2>

    <div>
      <label for="category">Catégories</label>
      <div v-for="category in filtersStore.origin" :key="category">
        <input 
          type="checkbox" 
          :value="category" 
          :checked="filtersStore.selectedOrigin.includes(category)" 
          @change="toggleCategory(category)"
        />
        {{ category }}
      </div>
    </div>

    <div>
      <label for="city">Villes</label>
      <div v-for="city in filtersStore.prices" :key="city"> <!-- Utilisation du store ici -->
        <input 
          type="checkbox" 
          :value="city" 
          :checked="filtersStore.selectedPrices.includes(city)" 
          @change="toggleCity(city)"
        />
        {{ city }}
      </div>
    </div>

    <div>
      <label for="radius">Rayon</label>
      <input 
        type="number" 
        v-model="filtersStore.selectedRadius" 
        min="1"
      />
    </div>

    <button @click="resetFilters">Réinitialiser</button>
  </div>
</template>

<script setup>
import { useFiltersStore } from '@/stores/filter';

const filtersStore = useFiltersStore();

const toggleCategory = (category) => {
  filtersStore.updateCategory(category);
};

const toggleCity = (city) => {
  filtersStore.updateCity(city);
};

const resetFilters = () => {
  filtersStore.resetFilters();
};
</script>
