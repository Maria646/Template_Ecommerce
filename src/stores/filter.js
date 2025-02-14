import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    categories: ['Cuisine', 'Coiffure', 'Jardinage', 'Menage'],
    selectedCategories: [],
    selectedCities: ['Longueuil', 'Lemoyne', 'St-hubert', 'Greenfield-Park', 'Brossard'],
    selectedRadius: 10,
  }),
  actions: {
    // Réinitialiser les filtres
    resetFilters() {
      this.selectedCategories = [];
      this.selectedCities = [];
      this.selectedRadius = 10;
    },
    // Ajouter/retirer une catégorie
    updateCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(item => item !== category);
      } else {
        this.selectedCategories.push(category);
      }
    },
    // Ajouter/retirer une ville
    updateCity(city) {
      if (this.selectedCities.includes(city)) {
        this.selectedCities = this.selectedCities.filter(item => item !== city);
      } else {
        this.selectedCities.push(city);
      }
    },
    // Mettre à jour le rayon
    updateRadius(radius) {
      this.selectedRadius = radius;
    },
  },
});
