<template>
  <!-- <div class="h-screen bg-cover bg-center bg-no-repeat bg-primary" >
    <Header/> -->
  <div class="bannerflex flex-col-reverse md:grid md:grid-cols-2 p-20 
  h-screen bg-cover bg-center bg-no-repeat bg-primary"
  style="background-image: url('https://cdn.pixabay.com/photo/2016/12/06/17/33/tee-1887042_640.jpg')"
  >
    <div class="banner__text text-center text-3xl font-bold col-start-2">
      FEEL MORE <br> THAN CAN...
    </div>
    <div class="banner__about col-start-1 col-end-2 max-w-[400px] w-full mx-auto md:ml-[250px]">
      <h2 class="text-xl font-semibold mb-2">About</h2>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
        vel hendrerit mauris felis non velit.
        Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
        in condimentum nunc turpis in urna.
      </p>
    </div>
  </div>
<!-- </div> -->

  <section class="p-20">
    <div class="bestSelers max-w-[1000px] mx-auto text-center">
      <div class="bestSelers__title mb-4">
        <h2 class="text-2xl font-bold">Best Sellers</h2>
      </div>
      <div class="bestSelers__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          v-for="annonce in filteredArticles.slice(0, 4)"
          :key="annonce.id"
          :id="annonce.id"
          :nom="annonce.nom"
          :image="annonce.image"
          :description="annonce.description" 
          :price="annonce.prix"       
          @ajouterFav="pushFavoris"
          @ajouterPan="pushPanier"
        />
      </div>
    </div>
  </section>

  <div class="ceremony flex flex-col md:grid md:grid-cols-2 bg-secondary">
    <div class="ceremony__image w-full">
      <img src="https://cdn.pixabay.com/photo/2021/03/08/16/30/matcha-6079527_640.jpg" alt="Ceremony" class="w-full object-cover"/>
    </div>
    <div class="ceremony__text bg-clair p-5 md:p-20 text-center md:text-left">
      <h2 class="text-xl font-semibold mb-2">Ceremony</h2>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
        vel hendrerit mauris felis non velit.
        Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
        in condimentum nunc turpis in urna.
      </p>
    </div>
  </div>
</template>

  
  <script setup>
  import Header from '../layout/Header.vue'; // Correction ici
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
  
  <style scoped>
  </style>
  