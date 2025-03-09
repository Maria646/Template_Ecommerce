<template>
    <section class="inscription h-screen flex items-center justify-center">
      <Header/>
      <div class="inscription__container w-full max-w-3xl mx-auto min-h-[400px] p-6 rounded-lg bg-white shadow-md">
        <h2 class="inscription__title text-xl font-semibold text-center mb-4">Inscription</h2>
        <form class="inscription__form">
          <div class="inscription__group mb-4">
            <label for="email" class="inscription__label block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              class="inscription__input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
            <span v-if="erreurs.email" class="inscription__error text-red-500 text-sm">{{ erreurs.email }}</span>
          </div>
          <div class="inscription__group mb-4">
            <label for="password" class="inscription__label block text-sm font-medium text-gray-700">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              v-model="form.password" 
              required
              class="inscription__input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
            <span 
              v-bind:class="{'text-red-500': erreurs.password, 'text-green-500': !erreurs.password && isPasswordValid}" 
              class="inscription__error text-sm"
            >
              {{ erreurs.password || (isPasswordValid ? 'Mot de passe valide' : '') }}
            </span>
          </div>
          <div class="inscription__group mb-4">
            <label for="passwordConfirm" class="inscription__label block text-sm font-medium text-gray-700">Confirmation mot de passe</label>
            <input 
              type="password" 
              id="passwordConfirm" 
              v-model="form.confirmPassword" 
              required
              class="inscription__input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
            <span v-if="erreurs.confirmPassword" class="inscription__error text-red-500 text-sm">{{ erreurs.confirmPassword }}</span>
          </div>
          <button 
            @click="validerFormulaire"
            type="submit"
            class="inscription__button w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            S'inscrire
          </button>
        </form>
        
        <div class="inscription__links mt-4 flex justify-between text-sm text-blue-500">
          <router-link to="/connexion" class="inscription__link hover:underline">Vous avez déjà un compte ? Connectez-vous</router-link>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/layout/Header.vue';

const form = reactive({
    email: '',
    password: '',
    confirmPassword: ''
});

const erreurs = reactive({
    email: '',
    password: '',
    confirmPassword: ''
});

const router = useRouter();

// Validation du mot de passe
const isPasswordValid = computed(() => {
    return form.password.length >= 6;  // Exemple de critère: mot de passe doit avoir au moins 6 caractères
});

const validerFormulaire = async () => {
    erreurs.email = form.email.includes('@') ? '' : "Email invalide";
    erreurs.password = isPasswordValid.value ? '' : "Le mot de passe doit contenir au moins 6 caractères";
    erreurs.confirmPassword = form.password === form.confirmPassword ? '' : "Les mots de passe ne correspondent pas";

    if (!erreurs.email && !erreurs.password && !erreurs.confirmPassword) {
        inscription();
    }
};

const inscription = async () => {
    // Simule un message de succès et redirige
    router.push('/connexion');
    alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
};
</script>


<style scoped>
</style>
