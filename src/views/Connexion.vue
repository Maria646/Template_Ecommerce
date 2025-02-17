<template>
    <section class="connexion h-screen flex items-center justify-center">
        <div class="connexion__container w-[100%] max-w-3xl mx-auto min-h-[400px] p-6 rounded-lg bg-white shadow-md">
            <h2 class="connexion__title text-xl font-semibold text-center mb-4">Connexion</h2>
            <form class="connexion__form">
                <div class="connexion__group mb-4">
                    <label for="email" class="connexion__label block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        v-model="form.email" 
                        required
                        class="connexion__input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                    <span v-if="erreurs.email" class="connexion__error text-red-500 text-sm">{{ erreurs.email }}</span>
                </div>
                <div class="connexion__group mb-4">
                    <label for="password" class="connexion__label block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="form.password" 
                        required
                        class="connexion__input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                    <span v-if="erreurs.password" class="connexion__error text-red-500 text-sm">{{ erreurs.password }}</span>
                </div>
                <button 
                    @click="validerFormulaire"
                    class="connexion__button w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    Se connecter
                </button>
            </form>
            
            <div class="connexion__links mt-4 flex justify-between text-sm text-blue-500">
                <router-link to="/inscription" class="connexion__link hover:underline">Créer un compte</router-link>
                <router-link to="/mot-de-passe-oublie" class="connexion__link hover:underline">Mot de passe oublié ?</router-link>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, reactive } from 'vue';

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
