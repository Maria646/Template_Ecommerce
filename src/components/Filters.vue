<template>
    <div>
      <h2>Filtres</h2>
      <div>
        <label for="category">Catégories</label>
        <div v-for="category in categories" :key="category">
          <input 
            type="checkbox" 
            :value="category" 
            :checked="filtersStore.selectedCategories.includes(category)" 
            @change="toggleCategory(category)"
          />
          {{ category }}
        </div>
      </div>
  
      <div>
        <label for="city">Villes</label>
        <div v-for="city in selectedCities" :key="city">
          <input 
            type="checkbox" 
            :value="city" 
            :checked="filtersStore.selectedCities.includes(city)" 
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
  import { useFiltersStore } from '@/stores/filters';
  
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
  