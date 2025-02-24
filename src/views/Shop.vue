<template>
  <main class="dashboard-container flex flex-col lg:flex-row overflow-hidden">
    <aside class="filters w-full lg:w-1/4 bg-gray-100 p-4 overflow-y-auto">
      <Filters />
    </aside>
    
    <section class="announcements flex-1 p-4 overflow-y-auto">
      <div>
        <h2 class="text-xl lg:text-2xl font-semibold mb-4">Liste des annonces</h2>
        <div v-if="loading" class="text-center">Chargement...</div>
        <div v-else-if="error" class="text-center text-red-500">Une erreur est survenue : {{ error }}</div>
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="annonce in filteredgetAnnonces" :key="annonce.id" 
              class="relative group shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Card
                :id="annonce.id"
                :nom="annonce.nom"
                :image="annonce.image"
                :description="annonce.description" 
                :price="annonce.prix" 
                @ajouterFav="pushFavoris"
                @ajouterPan="pushPanier">
              </Card>
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-85 transition-opacity duration-300">
                <RouterLink :to="`/ficheDetailProduit/${annonce.id}`" 
                  class="text-white text-lg font-semibold hover:underline">
                  Voir les détails
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import Card from '@/components/Card.vue';
import Filters from "../components/Filters.vue";
import { useProduits } from '@/composables/donneesAPI';
import { useFiltersStore } from '@/stores/filter';
import { useFavoritesStore } from "@/stores/favoris";
import { usePanierStore } from '@/stores/panier';

// Variables pour stocker les annonces et l'état de chargement
const annonces = ref([]);
const loading = ref(false);
const error = ref(null);

// Stores
const filtersStore = useFiltersStore();
const favoritesStore = useFavoritesStore();
const panierStore = usePanierStore();

const { getProduitByCategorie, getAllProduits } = useProduits();

// Récupération de la catégorie depuis la route
// const route = useRoute();
// const selectedCategory = computed(() => route.query.category);

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
</script>

