<template>
    <div>
        <h2>Paiement</h2>
        <form>
            <div>
                <img :src="formState.image" alt="Image du produit">
                <h3>{{ formState.nom }}</h3>
                <h3>{{ formState.prix }} $</h3>
            </div>
            <input type="number" min="1" step="1" v-model.number="ajoutArticle">
            <p>Total : {{ totalPrix }} $</p>
            <button @click="redirectToCheckout" disabled="loading">Payer</button>
        </form>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFormState } from 'vue-composable';
import usePayment from '@/composables/donneesAPI'; // Importer le composable
  

const router = useRoute();
const ajoutArticle = ref(1);
const formState = ref({ nom: "", image: "", prix: 0 }); // Valeurs par défaut

onMounted(() => {
    const idParam = router.currentRoute.value.params.id;
    formState.value = useFormState(idParam);
});

const totalPrix = computed(() => formState.value.prix * ajoutArticle.value);

// Fonction pour rediriger vers Stripe Checkout après avoir créé la session
const redirectToCheckout = async () => {
    const stripe = await loadStripe('pk_test_51QRfFlGAQyEVLjupnIIkEZeNmQoGL9kVN5GlxMY5qUh8u6CDIic4oSCW5r3qHe1IzMX76pWz04JvkAB0mqnqaN1j00hKg3bNCe'); // Remplacer par ta clé publique Stripe
    try {
      // Appel à la fonction du composable pour créer la session
      const sessionId = await createCheckoutSession(price.value, days.value);
      // Si une session a été créée, redirige vers Stripe
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
    }
  };
</script>
