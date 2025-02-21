import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const addFavorite = (ad) => {
    if (!favorites.value.some((item) => item.id === ad.id)) {
      favorites.value.push(ad);
    }
    console.log("Liste des favoris:", favorites.value);
  };

  const removeFavorite = (adId) => {
    favorites.value = favorites.value.filter((item) => item.id !== adId);
  };

  return { favorites, addFavorite, removeFavorite };
});
