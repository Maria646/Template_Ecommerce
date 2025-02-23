import axios from 'axios';

export default function usePayment() {
  const apiUrl = 'http://localhost:13534'; // Remplace par l'URL de ton backend

  // Fonction pour créer la session Stripe
  const createCheckoutSession = async (prixTotal) => {
    try {
      // Appelle l'API pour créer la session de paiement Stripe
      const response = await axios.post(`${apiUrl}/paiement/create-checkout-session`, {
        prixTotal: prixTotal // Correction ici
      });

      // Retourne l'ID de session à utiliser pour rediriger
      return response.data.id;
    } catch (err) {
      console.error('Erreur lors de la création de la session de paiement:', err);
      return null;
    }
  };

  return {
    createCheckoutSession
  };
}
