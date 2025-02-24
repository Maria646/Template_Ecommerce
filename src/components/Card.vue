<template>
  <div class="card 
    col-span-1 text-right
    bg-secondary opacity-70 rounded-xl 
    w-[230px] h-[350px] grid grid-rows-[auto_1fr_auto] p-4">
    
    <!-- Icônes avec transition et effet hover -->
    <div class="icone space-y-3 mb-4 flex flex-col items-end">
      <button @click="ajouterFav" class="transition-transform duration-300 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </button>
      <button @click="ajouterPan" class="transition-transform duration-300 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </button>
    </div>

    <!-- Conteneur de l'image plus large -->
    <div class="flex justify-center items-center h-[160px]">
      <img class="w-full min-w-[180px] max-h-full object-contain" 
        :src="`src/images/${props.image}`"
        :alt="props.nom"> 
    </div>

    <!-- Titre -->
    <h3 class="mt-2">{{ props.nom }}</h3>
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
  