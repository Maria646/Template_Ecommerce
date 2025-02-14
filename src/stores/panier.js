import { defineStore } from "pinia";
import { ref } from "vue";

export const usePanierStore = defineStore("panier", () => {
  const panier = ref([]);

  const addPanier = (ad) => {
    if (!panier.value.some((item) => item.id === ad.id)) {
      panier.value.push(ad);
    }
  };

  const removePanier = (adId) => {
    panier.value = panier.value.filter((item) => item.id !== adId);
  };

  return { panier, addPanier, removePanier };
});
