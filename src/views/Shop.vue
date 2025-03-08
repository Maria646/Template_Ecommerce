<template>
  <div class="dashboard-container flex flex-col lg:flex-row overflow-hidden relative bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${photo})` }">
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
    <Header />
<!-- Section des filtres avec animation fluide -->
<aside class="filters w-full lg:w-1/4 shadow-md p-6 mt-[80px] overflow-y-auto bg-secondary bg-opacity-60 z-40 rounded-xl  transition-all duration-300 ease-in-out">
  
  <button
  class="lg:hidden fixed top-[550px] right-3 shadow-lg z-50 transform -translate-y-1/2 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
  @click="toggleFilters"
>
  <!-- Icône de filtre Font Awesome -->
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

</button>


  <!-- Contenu des filtres visible lorsque showFilters est true -->
  <transition name="fade">
  <div 
    v-if="showFilters" 
    class="filters-content fixed top-0 right-0 bg-secondary mb-8 p-6 w-full sm:w-[300px] md:w-[350px] h-full z-50 shadow-lg transition-transform duration-300 ease-in-out transform"
    :class="{'translate-x-0': showFilters, 'translate-x-full': !showFilters}"
  >
    <!-- Conteneur Flex pour espacer le bouton et les filtres -->
    <div class="flex justify-between items-center mt-20">
      <!-- Bouton Masquer les filtres à droite -->
      <button 
        @click="toggleFilters"
        class="bg-primary text-white px-[125px] py-2 rounded-md hover:bg-secondary">
        Appliquer
      </button>
    </div>

    <!-- Contenu des filtres -->
    <Filters />
  </div>
</transition>


  <!-- Affichage des filtres pour les grands écrans -->
  <div class="hidden lg:block mt-4">
    <Filters />
  </div>
</aside>


    <!-- Section des annonces avec espacement au-dessus -->
    <section class="announcements flex-1 overflow-y-auto p-8 lg:p-20 rounded-lg shadow-md">
    <div class="absolute bg-secondary opacity-40"></div>
      <div>
        <h2 class="text-xl lg:text-2xl font-semibold mb-10">Toutes les catégories</h2>
        <div v-if="loading" class="text-center">Chargement...</div>
        <div v-else-if="error" class="text-center text-red-500">Une erreur est survenue : {{ error }}</div>
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 lg:gap-20">
  <div v-for="annonce in filteredgetAnnonces" :key="annonce.id" class="relative group shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-[230px]">
    <Card
      :id="annonce.id"
      :nom="annonce.nom"
      :image="annonce.image"
      :description="annonce.description"
      :price="annonce.prix"
      :category="annonce.categorie"
      :cardBestSellers="false"
      @ajouterFav="pushFavoris"
      @ajouterPan="pushPanier"
    />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-85 transition-opacity duration-300">
                <RouterLink :to="`/ficheDetailProduit/${annonce.id}`" class="text-white text-lg font-semibold hover:underline">
                  Voir les détails
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
import Filters from "../components/Filters.vue";
import { useProduits } from '@/composables/donneesAPI';
import { useFiltersStore } from '@/stores/filter';
import { useFavoritesStore } from "@/stores/favoris";
import { usePanierStore } from '@/stores/panier';
import Header from '../layout/Header.vue';
import photo from "/public/images/photo.png";

// Variables pour stocker les annonces et l'état de chargement
const annonces = ref([]);
const loading = ref(false);
const error = ref(null);

// Stores
const filtersStore = useFiltersStore();
const favoritesStore = useFavoritesStore();
const panierStore = usePanierStore();
// Variable réactive pour contrôler l'affichage des filtres
const showFilters = ref(false);


const { getProduitByCategorie, getAllProduits } = useProduits();

// Fonction pour récupérer les annonces
const fetchAnnonces = async () => {
  try {
    loading.value = true;
    error.value = null;
    annonces.value = await getAllProduits();
    console.log(annonces.value);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Exécuter `fetchAnnonces` au montage
onMounted(fetchAnnonces);

// Filtrage dynamique des annonces
const filteredgetAnnonces = computed(() => {
  return annonces.value.filter((annonce) => {
    const matchesCategory = 
      !filtersStore.selectedOrigin.length || 
      filtersStore.selectedOrigin.includes(annonce.categorie);

    const annoncePrix = parseFloat(annonce.prix);  // Assure-toi que c'est un décimal

    const matchesPrice = 
      !filtersStore.selectedPrices.length ||
      filtersStore.selectedPrices.includes(annoncePrix);

    return matchesCategory && matchesPrice;
  });
});

// Ajouter une annonce aux favoris
const pushFavoris = (annonce) => {
  favoritesStore.addFavorite(annonce);
};

// Ajouter une annonce au panier
const pushPanier = (annonce) => {
  panierStore.addPanier(annonce);
};

// Fonction pour alterner l'affichage des filtres
const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};
</script>

<style scoped>
/* Animation de fondu pour le contenu des filtres */
.filters-content-enter-active, .filters-content-leave-active {
  transition: opacity 0.3s ease;
}

.filters-content-enter, .filters-content-leave-to /* .filters-content-leave-active en <2.1.8 */ {
  opacity: 0;
}
</style>
