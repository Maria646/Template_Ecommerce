<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Paiement</h2>

          <div class="mb-8 text-center">
              <img :src="formState.image" alt="Image du produit" class="w-32 h-32 object-cover mx-auto mb-4 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold text-gray-800">{{ formState.nom }}</h3>
              <p class="text-lg text-gray-500">{{ formState.prix }} $</p>
          </div>

          <form class="space-y-4">
              <div class="flex justify-between items-center">
                  <label for="quantity" class="text-sm font-medium text-gray-700">Quantité</label>
                  <input 
                      id="quantity" 
                      type="number" 
                      min="1" 
                      step="1" 
                      v-model.number="ajoutArticle" 
                      class="w-16 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
              </div>

              <!-- Affichage de la valeur de ajoutArticle -->
              <div class="mb-4">
                  <p>Quantité : {{ ajoutArticle }}</p>
              </div>

              <div class="flex justify-between items-center">
                  <p class="text-lg font-semibold text-gray-800">Total : <span class="text-blue-600">{{ totalPrix }} $</span></p>
              </div>

              <div class="mt-6">
                  <button 
                      type="submit" 
                      :disabled="loading"
                      class="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                      Payer
                  </button>
              </div>
          </form>
      </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProduits } from '@/composables/donneesAPI';
import usePayment from '@/composables/paiementAPI.js';

const router = useRoute();
const ajoutArticle = ref(1);
const formState = reactive({ nom: "", image: "", prix: 0 });
const loading = ref(false);

onMounted(async () => {
    const idParam = router.params.id;
    const data = await useProduits(idParam); // Assurer l'attente de la réponse
    formState.nom = data.nom;
    formState.image = data.image;
    formState.prix = data.prix;
});

const totalPrix = computed(() => {
    return formState.prix * ajoutArticle.value;
});

// Fonction pour rediriger vers Stripe Checkout après avoir créé la session
// const redirectToCheckout = async () => {
//     const stripe = await loadStripe('pk_test_51QRfFlGAQyEVLjupnIIkEZeNmQoGL9kVN5GlxMY5qUh8u6CDIic4oSCW5r3qHe1IzMX76pWz04JvkAB0mqnqaN1j00hKg3bNCe'); // Remplacer par ta clé publique Stripe
//     try {
//       // Appel à la fonction du composable pour créer la session
//       const sessionId = await createCheckoutSession(price.value, days.value);
//       // Si une session a été créée, redirige vers Stripe
//       if (sessionId) {
//         const { error } = await stripe.redirectToCheckout({ sessionId });
//         if (error) {
//           console.error('Erreur lors de la redirection Stripe:', error);
//         }
//       } else {
//         console.error('La création de la session a échoué');
//       }
//     } catch (err) {
//       console.error('Erreur lors de la redirection vers Stripe Checkout:', err);
//     }
// };
</script>



<style scoped>
/* Styles personnalisés pour améliorer la présentation */
</style>
