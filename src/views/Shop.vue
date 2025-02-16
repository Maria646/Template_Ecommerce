<template>
  <main class="dashboard-container">
        <aside class="filters">
            <Filters />
        </aside>
        <section class="announcements">
          <div>
    <h2>The </h2>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Une erreur est survenue</div>
    <div v-else>
      <!-- Filtrage et affichage des annonces -->
      <div v-for="annonce in filteredgetAnnonces" :key="annonce.annonce_id">
        <p>{{ annonce.annonce_description }}</p>
        <p>Type: {{ annonce.annonce_type }}</p>
        <p>{{ annonce.photo_de_profil }}</p>
        <p>{{ annonce.ville }}</p>

        <!-- Lien vers la page des détails -->
        <NuxtLink :to="`/fiche_detailler/${annonce.annonce_id}`">
          Voir les détails
        </NuxtLink>
        
        <!-- Icône pour ajouter aux favoris -->
        <i @click="pushFavoris(annonce)">Favoris</i>
        <i>Panier</i>
      </div>
    </div>
  </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import Filters from "../components/Filters.vue"
import { useArticles } from '@/composables/donneesAPI';
import { useFiltersStore } from '@/stores/filter';
import { useFavoritesStore } from "@/stores/favoris";

// Variables pour stocker les annonces
const annonces = ref([]);
const { getArticlesByCategorie, error } = useArticles();

// Import du store pour les filtres
const filtersStore = useFiltersStore();
const favoritesStore = useFavoritesStore();

// Récupérer la route
const route = useRoute();
const selectedCategory = () => route.query.category;

// Fonction pour récupérer les annonces
const fetchAnnonces = async () => {
  try {
    loading.value = true;
    annonces.value = await getAnnonces(selectedCategory.value);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// 🔥 Exécuter `fetchAnnonces` au montage
onMounted(fetchAnnonces);

// Filtrage dynamique des annonces
const filteredgetAnnonces = computed(() => {
  return annonces.value.filter((annonce) => {
    const matchesCategory =
      filtersStore.selectedCategories.length === 0 ||
      filtersStore.selectedCategories.includes(annonce.annonce_type);
    const matchesCity =
      filtersStore.selectedCities.length === 0 ||
      filtersStore.selectedCities.includes(annonce.ville);
    return matchesCategory && matchesCity;
  });
});

// ✅ Correction : Ajouter une seule annonce aux favoris
const pushFavoris = (annonce) => {
  favoritesStore.addFavorite(annonce);
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