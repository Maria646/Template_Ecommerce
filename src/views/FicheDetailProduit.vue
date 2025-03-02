<template>
  <div class="h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
    <div class="bg-secondary shadow-lg rounded-2xl p-6 w-[900px] h-[400px] flex items-center gap-6 animate-fade-in relative">
      
      <!-- Bouton Favoris en haut à droite -->
      <button 
      @click="pushFavoris(produit)" 
         class="absolute top-8 right-10 text-gray-600 hover:text-red-500  transition duration-300 text-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 transition-transform duration-150 ease-out active:scale-75 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </button>

      <!-- Image à gauche -->
      <img 
        v-if="produit.image" 
        :src="`/public/${produit.image}`"
        :alt="produit.nom" 
        class="w-60 h-60 object-cover rounded-lg shadow-md"
      />

      <!-- Contenu à droite -->
      <div class="flex-1">
        <h2 class="text-2xl font-semibold text-gray-800">{{ produit?.nom || 'Nom du produit' }}</h2>
        <p class="text-gray-600 mt-2">{{ produit?.description || 'Description du produit non disponible.' }}</p>

        <p v-if="produit?.prix" class="text-lg font-bold text-gray-900 mt-4">Prix: {{ produit.prix }} €</p>

        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-700">Valeurs nutritives</h3>
          <ul v-if="produit?.valeurs_nutritives" class="mt-2 text-gray-600 space-y-1">
            <li v-for="(valeur, key) in produit.valeurs_nutritives" :key="key">
              {{ key }}: <span class="font-semibold text-gray-800">{{ valeur }}</span>
            </li>
          </ul>
          <p v-else class="text-gray-500 mt-2">Aucune information nutritionnelle disponible.</p>
        </div>

        <router-link
          v-if="produit" 
          :to="`/paiement/${produit.id}`" 
          class="mt-6 inline-block bg-primary cursor-pointer text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 hover:bg-secondary hover:border border-primary hover:text-primary"
        >
          Acheter maintenant
        </router-link>
      </div>
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
  console.log(produit.value);
});
</script>

<style scoped>
</style>
