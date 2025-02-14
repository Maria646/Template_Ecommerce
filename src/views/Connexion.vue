<template>
    <div class="connexion">
        <h2>Connexion</h2>
        <form @submit.prevent="validerFormulaire">
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="form.email" 
                    required
                >
                <span v-if="erreurs.email" class="error">{{ erreurs.email }}</span>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    v-model="form.password" 
                    required
                >
                <span v-if="erreurs.password" class="error">{{ erreurs.password }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
        
        <div class="links">
            <router-link to="/inscription">Créer un compte</router-link>
            <router-link to="/mot-de-passe-oublie">Mot de passe oublié ?</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

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
    router.push('/shop');
    alert("Connexion reussi, vous pouvez commencer a magasiner");
};
</script>

<style scoped>
.connexion {
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
