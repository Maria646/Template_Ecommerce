<template>
    <section class="connexion min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8
    bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${photo})` }">
    <div class="absolute inset-0 bg-secondary opacity-40"></div>
      <Header/>
      <div class="connexion__container z-100 w-full max-w-2xl bg-secondary opacity-70 p-6 rounded-lg shadow-md">
        <h2 class="connexion__title text-2xl font-semibold text-center mb-6">Connexion</h2>
        <form class="connexion__form space-y-4">
          <div class="connexion__group">
            <label for="email" class="connexion__label block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="connexion__input mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
            <span v-if="erreurs.email" class="connexion__error text-red-500 text-sm">{{ erreurs.email }}</span>
          </div>
          <div class="connexion__group">
            <label for="password" class="connexion__label block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              required
              class="connexion__input mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
            <span v-if="erreurs.password" class="connexion__error text-red-500 text-sm">{{ erreurs.password }}</span>
          </div>
          <button
            @click="validerFormulaire"
            class="connexion__button w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary  hover:text-primary transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <div class="connexion__links mt-6 flex justify-between text-sm text-primary">
          <router-link to="/inscription" class="connexion__link hover:underline">Créer un compte</router-link>
          <router-link to="/mot-de-passe-oublie" class="connexion__link hover:underline">Mot de passe oublié ?</router-link>
        </div>
      </div>
    </section>
  </template>
  


<script setup>
import { ref, reactive } from 'vue';
import Header from '@/layout/header.vue'; 
import photo from "/public/images/photo.png";

import { useRouter } from 'vue-router';
const route = useRouter();


const form = reactive({
    email: '',
    password: ''
});

const erreurs = reactive({
    email: '',
    password: ''
});

const validerFormulaire = () => {
    erreurs.email = form.email.includes('@') ? '' : 'Email invalide';
    erreurs.password = form.password.length >= 6 ? '' : 'Le mot de passe doit contenir au moins 6 caractères';

    if (!erreurs.email && !erreurs.password) {
        connexion();
    }
};

const connexion = () => {
    route.push('/shop');
    alert("Connexion reussi, vous pouvez commencer a magasiner");
};
</script>

<style scoped>
</style>
