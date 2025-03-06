<template>
  <section 
  class="bannerflex h-screen bg-cover bg-center bg-no-repeat p-[90px] flex flex-col justify-center items-center md:items-start text-center md:text-left"
  :style="{ backgroundImage: `url(${banner})` }">
  
  <Header />
  
  <div class="flex flex-col md:grid md:grid-cols-2 h-screen  border border-red-700">
    
<!-- Texte principal -->
<div class="banner__text col-start-2 border border-green-700">
  <h2 class="flex flex-col text-xl md:text-3xl lg:text-2xl xl:text-sm">
    <span class=" self-start ml-5 md:ml-20 lg:mr-[150px]">FEEL <span class="font-bold">MORE</span></span>
    <span class=" self-end mr-5 md:mr-20 lg:ml-[150px]">THAN CAN...</span>
  </h2>
</div>

    
    <!-- Section "About" -->
    <div class="banner__about col-start-1 col-end-2 max-w-[400px] w-full mx-auto md:ml-[250px] border border-yellow-700">
      <h2 class="text-xl md:text-2xl lg:text-3xl">About</h2>
      <p class="text-primary text-sm md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed posuere, dui at consectetur fermentum, nunc urna ullamcorper neque,
        vel hendrerit mauris felis non velit.
      </p>
    </div>

  </div>
</section>


  <!-- Section Best Sellers (Meilleures ventes) -->
  <section class="bestSelers p-20 bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url(${photo})` }">
    <!-- Superposition de fond avec une couleur secondaire semi-transparente -->
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
    <!-- Contenu central de la section Best Sellers -->
    <div class="bestSelers max-w-[1000px] mx-auto text-center relative z-10">
      <!-- Titre de la section Best Sellers -->
      <div class="bestSelers__title mb-20">
        <h2 class="text-5xl mb-10 uppercase">Best Sellers</h2>
      </div>
      <!-- Grille des cartes de produits (Best Sellers) -->
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

      <!-- 🔹 Bouton qui redirige vers la page Shop (Bouton Shop) -->
      <router-link to="/shop" class="text-[20px] hover:text-2xl mt-10 inline-block bg-primary text-white px-14 py-5 rounded-lg transition-all duration-300 hover:bg-opacity-80">
        Shop
      </router-link>
    </div>
  </section>

  <!-- Section Ceremony (Cérémonie) -->
  <section class="ceremony md:grid md:grid-cols-2">
    <!-- Image de la section Ceremony -->
    <div class="ceremony__image w-full">
      <img src="/public/images/photo.png" alt="Ceremony" class="w-full object-cover"/>
    </div>

    <!-- Texte de la section Ceremony avec un fond de type "cover" -->
    <div class="ceremony__text bg-clair p-12 md:p-20 text-center md:text-left bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url(${photo})` }">
      <!-- Superposition semi-transparente de couleur secondaire -->
      <div class="absolute inset-0 bg-secondary opacity-60 z-0"></div>
      <!-- Contenu de la section Ceremony -->
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
  
  <style scoped>

  </style>
  