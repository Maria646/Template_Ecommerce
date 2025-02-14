<template>
    <div>
      <h2>Mes Favoris</h2>
      <div v-if="favoritesStore.favorites.length === 0">Aucun favori ajouté.</div>
      <div v-else>
        <div v-for="annonce in favoritesStore.favorites" :key="annonce.id">
          <h3>{{ annonce.title }}</h3>
          <p>{{ annonce.description }}</p>
          <button @click="favoritesStore.removeFavorite(annonce.id)">❌ Retirer</button>
        </div>
      </div>
    </div>
</template>  

<script setup>
import { useFavoritesStore } from "@/stores/useFavoritesStore";

const favoritesStore = useFavoritesStore();
</script>