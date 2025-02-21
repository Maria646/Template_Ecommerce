<template>
  <div>
    <h2>Mon Panier</h2>
    <div v-if="panierStore.panier.length === 0">Aucun produit ajouté.</div>
    <div v-else>
      <div v-for="annonce in panierStore.panier" :key="annonce.id">
        <img :src="annonce.image" alt="">
        <p>{{ annonce.nom }}</p>
        <p>{{ annonce.description }}</p>
        <p>{{ annonce.price }}</p>
        <RouterLink to="/paiement">Acheter</RouterLink>
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