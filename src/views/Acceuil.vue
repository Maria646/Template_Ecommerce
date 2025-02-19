<template>
    <div class="banner grid grid-cols-2 p-5">
      <div class="banner__text col-start-2">FEEL MORE <br> THAN CAN...</div>
      <div class="banner__about col-start-1 col-end-2 max-w-[400px] ml-[250px]">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Sed posuere, dui at consectetur fermentum,
          nunc urna ullamcorper neque, vel hendrerit mauris felis non velit.
          Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
          in condimentum nunc turpis in urna.
        </p>
      </div>
    </div>
  
    <section class="p-5">
      <div class="bestSelers max-w-[1000px] mx-auto text-center">
      <div class="bestSelers__title">
        <h2>Best Selers</h2>
      </div>
      <div class="bestSelers__cards grid grid-cols-4 gap-4">
        <Card
          v-for="annonce in filteredArticles.slice(0, 4)"
          :key="annonce.annonce_id"
          :nom="annonce.nom"
          :image="annonce.image"
          @ajouterFav="pushFavoris"
          @ajouterPan="pushPanier"
        />
      </div>
    </div>
    </section>
  
    <div class="ceremony grid grid-cols-2">
      <div class="ceremony__image">
        <img src="" alt="Ceremony"/>
      </div>
      <div class="ceremony__text p-20">
        <h2>Ceremony</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque, vel hendrerit mauris felis non velit. Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis, in condimentum nunc turpis in urna.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
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
    favoritesStore.addFavorite(annonce);
  };
  
  // Fonction pour ajouter au panier
  const pushPanier = (annonce) => {
    panierStore.addPanier(annonce);
  };
  
  // Appeler la fonction pour récupérer les articles à l'initialisation du composant
  onMounted(async () => {
    const articles = await getAllProduits();
    filteredArticles.value = articles || [];
    console.log(filteredArticles.value); 
  });
  </script>
  
  <style scoped>
  </style>
  