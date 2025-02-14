<template>
    <div>
      <h2>Panier</h2>
      <div v-if="panierStore.panier.length === 0">Aucun article ajouté.</div>
      <div v-else>
        <div v-for="annonce in panierStore.panier" :key="annonce.id">
          <h3>{{ annonce.title }}</h3>
          <p>{{ annonce.description }}</p>
          <button @click="panierStore.removeFavorite(annonce.id)">❌ Retirer</button>
        </div>
      </div>
    </div>
</template>  

<script setup>
import { usePanierStore } from "@/stores/panier";

const panierStore = usePanierStore();
</script>