import axios from 'axios';
import { ref } from 'vue';

// Définition de l'URL de base de l'API
const apiUrl = ' https://frontend-projet-ecommerce-55f810fe8476.herokuapp.com';

export function useProduits() {
  const error = ref(null);

  // Fonction pour récupérer les Articles par categorie
  const getAllProduits = async () => {
    try {
      const response = await axios.get(`${apiUrl}/produits`);
      console.log('Données reçues:', response.data);
      return response.data;
    } catch (err) {
      error.value = "Impossible de récupérer les Articles.";
      console.error(err);
    }
  }

  // Fonction pour récupérer les Articles par categorie
  const getProduitByCategorie = async (categorie) => {
    try {
      const response = await axios.get(`${apiUrl}/produits?categorie=${categorie}`);
      return response.data;
    } catch (err) {
      error.value = "Impossible de récupérer les Articles.";
      console.error(err);
    }
  };

  // Fonction pour récupérer une annonce par son ID
  const getProduitById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/produits/${id}`);
      return response.data;
    } catch (err) {
      error.value = "Erreur de chargement de l'annonce.";
      console.error(err);
    }
  };
  return {
    getAllProduits,
    getProduitById,
    getProduitByCategorie,
    error
  };
}

export default {
    useProduits
  };
  
