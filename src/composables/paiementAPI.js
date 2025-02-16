import axios from 'axios';
import { ref } from 'vue';

export default function usePayment() {
  const apiUrl = 'http://localhost:3311'; // Remplace par l'URL de ton backend

   // Fonction pour créer la session Stripe
   const createCheckoutSession = async (price, days) => {
    const loading = ref(false);
    const error = ref(null);

    try {
      // Appelle l'API pour créer la session de paiement Stripe
      const response = await axios.post(`${apiUrl}/payment/create-checkout-session`, {
        price: price,
        days: days
      });

      // Retourne l'ID de session à utiliser pour rediriger
      return response.data.id;
    } catch (err) {
      error.value = 'Erreur lors de la création de la session de paiement';
      console.error(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    createCheckoutSession
  };
}
