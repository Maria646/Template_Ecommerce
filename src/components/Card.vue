<template>
    <div class="card 
      col-span-1 text-right
      bg-primary rounded-xl 
      h-[400px] grid grid-cols-1 p-5">
      
      <div class="icone space-y-5">
        <i @click="ajouterFav" class="block">Favoris</i>
        <i @click="ajouterPan" class="block">Panier</i>
      </div>
      
      <img class="text-center mb-8" 
        :src="`src/images/${props.image}`"
        :alt="props.nom"> 
      
      <h3>{{ props.nom }}</h3>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(["ajouterFav", "ajouterPan"]);
  
  const props = defineProps({
    id: Number,
    image: String,
    nom: String,
    description: String, // Passer mais ne pas afficher
    price: Number,       // Passer mais ne pas afficher
  });
  
  const ajouterFav = () => {
    emit("ajouterFav", {
      id: props.id,
      image: props.image,
      nom: props.nom,
      description: props.description, // Passer la description
      price: props.price              // Passer le prix
    });
  };
  
  const ajouterPan = () => {
    emit("ajouterPan", {
      id: props.id,
      image: props.image,
      nom: props.nom,
      description: props.description,
      price: props.price
    });
  };
  </script>
  