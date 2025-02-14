<template>
    <div class="inscription">
        <h2>Créer un compte</h2>
        <form @submit.prevent="validerFormulaire">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required>
                <span v-if="erreurs.email" class="error">{{ erreurs.email }}</span>
            </div>

            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required>
                <span v-if="erreurs.password" class="error">{{ erreurs.password }}</span>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirmer le mot de passe</label>
                <input type="password" id="confirmPassword" v-model="form.confirmPassword" class="form-control" required>
                <span v-if="erreurs.confirmPassword" class="error">{{ erreurs.confirmPassword }}</span>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="isLoading">
                S'inscrire
            </button>
        </form>

        <div class="links">
            <router-link to="/connexion">Déjà un compte ? Se connecter</router-link>
            <router-link to="/mot-de-passe-oublie">Mot de passe oublié ?</router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

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

const validerFormulaire = async () => {
    erreurs.email = form.email.includes('@') ? '' : "Email invalide";
    erreurs.password = form.password.length >= 6 ? '' : "Le mot de passe doit contenir au moins 6 caractères";
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
.inscription {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
}

.form-group {
    margin-bottom: 15px;
}

.error {
    color: red;
    font-size: 0.9em;
}

.links {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.links a {
    color: #007bff;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}
</style>
