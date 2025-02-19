<template>
    <div class="card 
    col-span-1 text-right
  bg-primary rounded-xl 
  h-[400px] grid grid-cols-1">
        <div class="icone space-y-5">
            <i @click="ajouterFav" class="block">Favoris</i>
            <i @click="ajouterPan" class="block">Panier</i>
        </div>
        <img class="text-center mb-8" 
        :src="`src/${props.image}`"
        :alt="nom"> 
        <h3>{{ nom }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from "vue";
const emit = defineEmits(['ajouterFav', 'ajouterPan'])
const props = defineProps({
    image: String,
    nom: String,
    price: Number
})

const ajouterFav= () =>{
    emit('ajouterFav',
        {
            image: props.image,
            nom: props.nom,
            prix: props.price
        }
    )
}

const ajouterPan= () =>{
    emit('ajouterPan',
        {
            image: props.image,
            nom: props.nom,
            prix: props.price
        }
    )
}
</script>

<style scoped>
</style>