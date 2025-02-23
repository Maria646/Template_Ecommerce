<template>
  <main class="dashboard-container">
    <aside class="filters">
      <Filters />
    </aside>
    
    <section class="announcements">
      <div>
        <h2>Liste des annonces</h2>
        <div v-if="loading">Chargement...</div>
        <div v-else-if="error">Une erreur est survenue : {{ error }}</div>
        <div v-else>
          <div v-for="annonce in filteredgetAnnonces" :key="annonce.id" class="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card
              :id="annonce.id"
              :nom="annonce.nom"
              :image="annonce.image"
              :description="annonce.description" 
              :price="annonce.prix"       
            >
                <NuxtLink :to="`/fiche_detailler/${annonce.annonce_id}`" class="text-blue-500 hover:underline">
                  Voir les détails
                </NuxtLink>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
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

// Récupération des produits par catégorie
const { getProduitByCategorie } = useProduits();

// Stores
const filtersStore = useFiltersStore();
const favoritesStore = useFavoritesStore();
const panierStore = usePanierStore();

// Récupération de la catégorie depuis la route
const route = useRoute();
const selectedCategory = computed(() => route.query.category);

// Fonction pour récupérer les annonces
const fetchAnnonces = async () => {
  try {
    loading.value = true;
    error.value = null;
    annonces.value = await getProduitByCategorie(selectedCategory.value);
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
      filtersStore.selectedOrigin.includes(annonce.annonce_type);

    const matchesCity =
      !filtersStore.selectedPrices.length ||
      filtersStore.selectedPrices.includes(annonce.ville);

    return matchesCategory && matchesCity;
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


<style scoped>
.dashboard-container {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  
  .filters {
    width: 25%; /* Largeur de la colonne des filtres */
    background: #f4f4f4;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .announcements {
    flex: 1; /* La section des annonces prend tout l'espace restant */
    padding: 1rem;
    overflow-y: auto;
  }
  
</style>