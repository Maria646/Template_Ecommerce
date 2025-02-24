<template>
  <div 
    class="bannerflex h-screen w-full bg-cover bg-center bg-no-repeat p-[90px] "
    :style="{ backgroundImage: `url(${banner})` }">
    <Header/>
    <div class="flex-col-reverse md:grid md:grid-cols-2 h-screen ">
      <div class="banner__text text-center col-start-2">
        <h2 class="flex flex-col">
          <span class="mr-[80px]">FEEL <span class="font-bold">MORE</span></span>
          <span class="ml-[250px]">THAN CAN...</span>
        </h2>
      </div>
      <div class="banner__about col-start-1 col-end-2 max-w-[400px] w-full mx-auto md:ml-[250px]">
        <h2 class="text-xl">About</h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
          vel hendrerit mauris felis non velit.
          Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
          in condimentum nunc turpis in urna.
        </p>
      </div>
    </div>
  </div>

  <section class="p-20 bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url(${photo})` }">
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
    <div class="bestSelers max-w-[1000px] mx-auto text-center relative z-10">
      <div class="bestSelers__title mb-4">
        <h2 class="text-2xl">Best Sellers</h2>
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
          class="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  </section>

  <div class="ceremony flex flex-col md:grid md:grid-cols-2">
    <div class="ceremony__image w-full">
      <img src="/src/images/images/photo.png" alt="Ceremony" class="w-full object-cover"/>
    </div>

    <div class="ceremony__text bg-clair p-5 md:p-20 text-center md:text-left bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url(${photo})` }">
      <div class="absolute inset-0 bg-secondary opacity-60 z-0"></div>
      <div class="relative z-10">
        <h2 class="text-xl">Ceremony</h2>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
          vel hendrerit mauris felis non velit.
          Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
          in condimentum nunc turpis in urna.
        </p>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import Header from '../layout/Header.vue'; 
  import banner from "../images/images/banner1.png"; 
  import photo from "../images/images/photo.png";
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
    h2{
    font-size: 70px;
    text-transform: uppercase;
    color:#32312f;
    margin-bottom: 40px;
  }

  </style>
  