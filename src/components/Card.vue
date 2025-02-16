<template>
    <div class="col-span-1 text-right bg-primary rounded-xl">
        <img class="text-center" :src="image" :alt="produit.nom">
        <h3>{{ nom }}</h3>
        <i @click="ajouterFav">Favoris</i>
        <i @click="ajouterPan">Panier</i>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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