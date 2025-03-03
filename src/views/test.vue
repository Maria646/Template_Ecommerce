<template>
          <div class="bestSelers__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          v-for="annonce in filteredArticles.slice(0, 4)"
          :key="annonce.id"
          :id="annonce.id"
          :nom="annonce.nom"
          :image="annonce.image"
          :description="annonce.description" 
          :price="annonce.prix" 
          :cardBestSellers="true"      
          @ajouterFav="pushFavoris"
          @ajouterPan="pushPanier"
        />
      </div>
</template>

<script setup>
import Header from '../layout/Header.vue'; 
import banner from "/public/images/banner1.png"; 
// import photo from "/public/images/photo1.png";
import { ref, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import { useProduits } from '@/composables/donneesAPI';
import { useFavoritesStore } from '@/stores/favoris';
import { usePanierStore } from '@/stores/panier';

// Utiliser useProduits pour récupérer les données d'articles
const { getAllProduits, error } = useProduits();
const filteredArticles = ref([]); // Variable qui contiendra les articles filtrés

const favoritesStore = useFavoritesStore();
const panierStore = usePanierStore();

// Fonction pour ajouter à favoris
const pushFavoris = (annonce) => {
  console.log(annonce);
  favoritesStore.addFavorite(annonce);
};

// Fonction pour ajouter au panier
const pushPanier = (annonce) => {
  console.log(annonce);
  panierStore.addPanier(annonce);
};

// Appeler la fonction pour récupérer les articles à l'initialisation du composant
onMounted(async () => {
  const articles = await getAllProduits();
  filteredArticles.value = articles || [];
  console.log(filteredArticles.value); 
});
</script>
