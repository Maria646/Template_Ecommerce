import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    origin: ['Indien', 'Chinois', 'Vietnamien', 'Africain'],
    prices:[10, 20, 30, 40],
    selectedOrigin: [],
    selectedPrices: [],
    selectedRadius: 10,
  }),
  actions: {
    // Réinitialiser les filtres
    resetFilters() {
      this.selectedOrigin = [];
      this.selectedPrices = [];
      this.selectedRadius = 10;
    },
    // Ajouter/retirer une catégorie
    updateCategory(category) {
      if (this.selectedOrigin.includes(category)) {
        this.selectedOrigin = this.selectedOrigin.filter(item => item !== category);
      } else {
        this.selectedOrigin.push(category);
      }
    },
    // Ajouter/retirer une ville
    updateCity(city) {
      if (this.selectedPrices.includes(city)) {
        this.selectedPrices = this.selectedPrices.filter(item => item !== city);
      } else {
        this.selectedPrices.push(city);
      }
    },
    // Mettre à jour le rayon
    updateRadius(radius) {
      this.selectedRadius = radius;
    },
  },
});
