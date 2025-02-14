<template>
      <div>
        <h2>Nom du produit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse voluptatum cum aperiam magnam necessitatibus enim est beatae 
            iusto veniam tenetur quisquam repellat dolorem unde quasi ipsum quia 
            distinctio, molestias praesentium!</p>
        <div class="valeurNutritive">

        </div>
            <NuxtLink :to="`/fiche_detailler/${annonce.annonce_id}`">Acheter maintenant</NuxtLink>
            <i>Favoris</i>
            <i>Panier</i>
          </div>
    </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  // Import composable annoncesByID

  let annoncesByID = ref([]);

  const route = useRoute();
  const idParam = route.params.id;

 annoncesByID.value = annoncesByID(idParam);

 onMounted(annoncesByID)

  

  </script>
  
    