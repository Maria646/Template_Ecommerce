import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    origin: ['Indien', 'Chinois', 'Vietnamien', 'Africain'],
    prices:[10, 20, 30, 40],
    selectedOrigin: [],
    selectedPrices: []
  }),
  actions: {
    // Réinitialiser les filtres
    resetFilters() {
      this.selectedOrigin = [];
      this.selectedPrices = [];
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
    updatePrix(prix) {
      if (this.selectedPrices.includes(prix)) {
        this.selectedPrices = this.selectedPrices.filter(item => item !== prix);
      } else {
        this.selectedPrices.push(prix);
      }
    }
  },
});
