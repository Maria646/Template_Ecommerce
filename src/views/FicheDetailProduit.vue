<template>
  <div>
    <h2>{{ produit?.nom || 'Nom du produit' }}</h2>
    <p>{{ produit?.description || 'Description du produit non disponible.' }}</p>

    <img v-if="produit?.image" :src="produit.image" :alt="produit.nom" class="produit-image" />

    <p v-if="produit?.prix">Prix: {{ produit.prix }} €</p>

    <div class="valeurNutritive">
      <ul v-if="produit?.valeurs_nutritives">
        <li v-for="(valeur, key) in produit.valeurs_nutritives" :key="key">
          {{ key }}: {{ valeur }}
        </li>
      </ul>
      <p v-else>Aucune information nutritionnelle disponible.</p>
    </div>

    <NuxtLink v-if="produit" :to="`/paiement/${produit.id}`" class="btn-acheter">
      Acheter maintenant
    </NuxtLink>

    <div class="actions">
      <i @click="pushFavoris(produit)" class="icon">Favoris</i>
      <i @click="pushPanier(produit)" class="icon">Panier</i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProduits } from '../composables/donneesAPI';
import { useFavoritesStore } from "@/stores/favoris";
import { usePanierStore } from "@/stores/panier";

// **1. Déclaration des stores**
const favoritesStore = useFavoritesStore();
const panierStore = usePanierStore();

// **2. Récupération des données**
const route = useRoute();
const idParam = route.params.id;
const produit = ref(null);

const { getProduitById } = useProduits();

// **3. Fonctions d'ajout aux favoris et au panier**
const pushFavoris = (annonce) => {
  if (annonce) {
    const produitData = {
      id: annonce.id,
      nom: annonce.nom,
      description: annonce.description,
      prix: annonce.prix,
      image: annonce.image
    };
    favoritesStore.addFavorite(produitData);
  }
};

const pushPanier = (annonce) => {
  if (annonce) {
    const produitData = {
      id: annonce.id,
      nom: annonce.nom,
      description: annonce.description,
      prix: annonce.prix,
      image: annonce.image
    };
    panierStore.addPanier(produitData);
  }
};

// **4. Récupération des données produit**
onMounted(async () => {
  produit.value = await getProduitById(idParam);
});
</script>

<style scoped>
</style>
