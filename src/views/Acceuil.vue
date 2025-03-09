<template>
<section 
  class="bannerflex h-screen bg-cover bg-center bg-no-repeat p-[90px] flex flex-col justify-center items-center md:items-start text-center md:text-left"
  :style="{ backgroundImage: `url(${banner})` }"
>
  <Header />

  <div class="h-full flex flex-col justify-center md:grid md:grid-cols-2 ">
    <!-- Section "About" -->
    <div class="banner__about col-span-1 sm:col-start-1 sm:col-end-2 
    sm:mt-[220px] xl:mt-[220px] sm:ml-[250px] max-w-[300px] h-[200px] mx-auto p-6 
    bg-opacity-20 backdrop-blur-md shadow-lg rounded
    md:bg-opacity-0 md:backdrop-blur-none md:shadow-none md:rounded-none">

      <div>
        <h2 class="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-primary uppercase font-medium">About</h2>
        <p class="text-primary text-sm sm:text-base md:text-base lg:text-lg leading-relaxed mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
          vel hendrerit mauris felis non velit.
        </p>
      </div>
      ....
    </div>

    <!-- Texte "FEEL MORE THAN CAN" -->
    <div class="banner__text col-span-1  md:col-start-2 md:col-end-2  mt-[120px] px-6 md:px-12 z-10 sm:mt-20 sm:mr-[200px] md:ml-[60px] lg:ml-[150px] xl:ml-[150px] ">
  <h2 class="flex flex-col text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl text-primary sm:p-2  md:bg-none lg:bg-none xl:bg-none">
    <span class="mb-5 text-primary pr-[150px] sm:pr-12 md:pr-16 lg:pr-20 whitespace-nowrap">
      FEEL <span class="font-bold">MORE</span>
    </span>
    <span class="text-gradient pl-[10px] sm:pl-20 md:pl-16 lg:pl-20 whitespace-nowrap">
      THAN CAN...
    </span>
  </h2>
</div>

  </div>
</section>




  <section class="bestSelers p-20 bg-cover bg-center bg-no-repeat relative text-primary" :style="{ backgroundImage: `url(${photo})` }">
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
    <div class="bestSelers max-w-[1000px] mx-auto text-center relative z-10">
      <div class="bestSelers__title mb-20">
        <h2 class="text-5xl mb-10 uppercase">Best Sellers</h2>
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
          :cardBestSellers="true"      
          @ajouterFav="pushFavoris"
          @ajouterPan="pushPanier"
        />
      </div>

      <router-link to="/shop" class="text-[20px] hover:text-2xl mt-10 inline-block bg-primary text-white px-14 py-5 rounded-lg transition-all duration-300 hover:bg-opacity-80">
        Shop
      </router-link>
    </div>
  </section>

  <section class="ceremony md:grid md:grid-cols-2">
    <div class="ceremony__image w-full">
      <img src="/public/images/photo.png" alt="Ceremony" class="w-full object-cover"/>
    </div>

    <div class="ceremony__text text-primary bg-clair p-12 md:p-20 text-center md:text-left bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url(${photo})` }">
      <div class="absolute inset-0 bg-secondary opacity-80 z-0"></div>
      <div class="relative z-10">
        <h2 class="text-5xl mb-10 uppercase">Ceremony</h2>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
          vel hendrerit mauris felis non velit. 
          Donec congue, arcu vel consectetur vestibulum, ipsum ex viverra felis,
          in condimentum nunc turpis in urna.
        </p>
      </div>
    </div>
  </section>
</template>

  
  <script setup>
  import Header from '@/layout/header.vue'; 
  import banner from "/public/images/banner1.png"; 
  import photo from "/public/images/photo.png";
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
  