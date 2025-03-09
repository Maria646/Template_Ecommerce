<template>
    <div class="mot-de-passe-oublie ">
        <Header/>
        <h2>Réinitialiser le mot de passe</h2>
        <form @submit.prevent="envoyerEmail">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
            </div>

            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/layout/header.vue';

const email = ref('');

const envoyerEmail = () => {
    email.value = ''; // Efface l'input après l'envoi
    alert("Verifier votre boite a mail ! Un lien vous a ete envoyer pour changer votre mot de passe.");
};
</script>

<style scoped>
.mot-de-passe-oublie {
    max-width: 400px;
    margin: auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: block;
    width: 100%;
    margin-top: 10px;
}
</style>
