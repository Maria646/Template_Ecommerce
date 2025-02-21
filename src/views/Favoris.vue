<template>
    <div>
      <h2>Mes Favoris</h2>
      <div v-if="favoritesStore.favorites.length === 0">Aucun favori ajouté.</div>
      <div v-else>
        <div v-for="annonce in favoritesStore.favorites" :key="annonce.id">
          <img :src="annonce.image" alt="">
          <p>{{ annonce.nom }}</p>
          <p>{{ annonce.description }}</p>
          <RouterLink :to="`/paiement/${annonce.id}`">Acheter</RouterLink>
          <button @click="favoritesStore.removeFavorite(annonce.id)">❌ Retirer</button>
        </div>
      </div>
    </div>
</template>  

<script setup>
import { RouterLink } from "vue-router";
import { useFavoritesStore } from "@/stores/favoris.js";

const favoritesStore = useFavoritesStore();
</script>