import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    origin: ['Indien', 'Chinois', 'Vietnamien', 'Africain'],
    prices: [10.00, 20.00, 30.00, 40.00],
    selectedOrigin: [],
    selectedPrices: []
  }),
  actions: {
    resetFilters() {
      this.selectedOrigin = [];
      this.selectedPrices = [];
    },
    updateCategory(category) {
      if (this.selectedOrigin.includes(category)) {
        this.selectedOrigin = this.selectedOrigin.filter(item => item !== category);
      } else {
        this.selectedOrigin.push(category);
      }
    },

    updatePrix(prix) {
      const prixDecimal = parseFloat(prix);
      if (this.selectedPrices.includes(prixDecimal)) {
        this.selectedPrices = this.selectedPrices.filter(item => item !== prixDecimal);
      } else {
        this.selectedPrices.push(prixDecimal);
      }
    }
  },
});
