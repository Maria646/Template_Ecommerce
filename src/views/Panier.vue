<template>
  <div class="min-h-screen bg-white px-4 md:px-6 py-8">
    <Header/>
    <h2 class="text-3xl font-bold text-primary mb-6 text-center mt-20">🛒 Mon Panier</h2>

    <div v-if="panierStore.panier.length === 0" class="text-gray-500 text-center text-lg">
      Votre panier est vide.
    </div>

    <div v-else class="flex flex-col space-y-6 max-w-4xl mx-auto">
      <div 
        v-for="annonce in panierStore.panier" 
        :key="annonce.id"
        class="bg-white shadow-lg rounded-xl p-5 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
      >
        <img 
          :src="annonce.image" 
          :alt="annonce.nom" 
          class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
        />

        <div class="flex-1 text-center md:text-left">
          <p class="text-xl font-semibold text-gray-800">{{ annonce.nom }}</p>
          <p class="text-gray-600 text-sm mt-1">{{ annonce.description }}</p>
          <p class="text-lg font-bold text-primary mt-2">{{ annonce.price }} €</p>

          <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <RouterLink 
              :to="`/paiement/${annonce.id}`" 
              class="bg-primary text-white px-4 py-2 rounded-lg shadow-md font-medium transition duration-300 hover:bg-secondary hover:border border-primary hover:text-primary"
            >
              Acheter
            </RouterLink>
            
            <RouterLink 
              :to="`/ficheDetailProduit/${annonce.id}`"
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 hover:bg-gray-300"
            >
              Détails
            </RouterLink>

            <button 
              @click="panierStore.removePanier(annonce.id)" 
              class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md font-medium transition duration-300 hover:bg-red-600"
            >
              Retirer
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="panierStore.panier.length > 0" class="flex flex-col md:flex-row justify-between items-center mt-8 bg-white p-4 shadow-lg rounded-lg max-w-4xl mx-auto">
      <p class="text-xl font-semibold text-gray-800">Total: {{ totalPrix }} €</p>
      <button 
        @click="redirectToCheckout"
        class="bg-primary text-white px-6 py-2 rounded-lg text-center font-medium transition duration-300 hover:bg-secondary hover:text-primary mt-4 md:mt-0"
      >
        Aller au Paiement
      </button>
    </div>
  </div>
</template>



<script setup>
import { computed, ref } from 'vue';  
import { RouterLink } from 'vue-router';  
import { usePanierStore } from "@/stores/panier.js";
import usePayment from '@/composables/paiementAPI.js';
import { loadStripe } from '@stripe/stripe-js';
import Header from '@/layout/header.vue';

const { createCheckoutSession } = usePayment();

// Accéder au store du panier
const panierStore = usePanierStore();
const loading = ref(false);

// Calculer le prix total du panier
const totalPrix = computed(() => {
  return panierStore.panier
    .reduce((total, annonce) => {
      // Vérifie si le prix est bien un nombre et le convertit si nécessaire
      const price = parseFloat(annonce.price);
      if (!isNaN(price)) {
        return total + price;
      }
      return total;
    }, 0)
    .toFixed(2); // Appel à toFixed seulement après avoir obtenu un nombre valide
});
// Fonction pour rediriger vers Stripe Checkout après avoir créé la session
// Fonction pour rediriger vers Stripe Checkout après avoir créé la session
const redirectToCheckout = async () => {
    loading.value = true;
    const stripe = await loadStripe('pk_test_51QRfFlGAQyEVLjupnIIkEZeNmQoGL9kVN5GlxMY5qUh8u6CDIic4oSCW5r3qHe1IzMX76pWz04JvkAB0mqnqaN1j00hKg3bNCe'); // Remplace par ta clé publique Stripe

    try {
        // Création de la session Stripe avec le prix et la quantité
        const sessionId = await createCheckoutSession(totalPrix.value); // Utilisation de totalPrix ici

        if (sessionId) {
            const { error } = await stripe.redirectToCheckout({ sessionId });
            if (error) {
                console.error('Erreur lors de la redirection Stripe:', error);
            }
        } else {
            console.error('La création de la session a échoué');
        }
    } catch (err) {
        console.error('Erreur lors de la redirection vers Stripe Checkout:', err);
    } finally {
        loading.value = false;
    }
};

</script>
