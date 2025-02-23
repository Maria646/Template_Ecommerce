<template>
  <div class="panier min-h-screen ">
    <h2 class="text-2xl font-bold mb-4">Mon Panier</h2>
    <div v-if="panierStore.panier.length === 0" class="text-gray-500">Aucun produit ajouté.</div>
    <div v-else>
      <div v-for="annonce in panierStore.panier" :key="annonce.id">
        <img :src="annonce.image" alt="">
        <p>{{ annonce.nom }}</p>
        <p>{{ annonce.description }}</p>
        <p>{{ annonce.price }}</p>
        <RouterLink :to="`/paiement/${annonce.id}`">Acheter</RouterLink>
        <RouterLink to="/ficheDetailProduit">Detail</RouterLink>
        <button @click="panierStore.removePanier(annonce.id)">❌ Retirer</button>
      </div>
    </div>
  </div>
</template>  

<script setup>
import { usePanierStore } from "@/stores/panier.js";

const panierStore = usePanierStore();
</script>