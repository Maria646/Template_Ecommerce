import axios from 'axios';
import { ref } from 'vue';

// Définition de l'URL de base de l'API
const apiUrl = 'http://localhost:4721';

export function useProduits() {
  const error = ref(null);

  // Fonction pour récupérer les Articles par categorie
  const getAllProduits = async () => {
    try {
      const response = await axios.get(`${apiUrl}/produits`);
      return response.data;
    } catch (err) {
      error.value = "Impossible de récupérer les Articles.";
      console.error(err);
    }
  }

  // Fonction pour récupérer les Articles par categorie
  const getArticlesByCategorie = async (categorie) => {
    try {
      const response = await axios.get(`${apiUrl}/produits?categorie=${categorie}`);
      return response.data;
    } catch (err) {
      error.value = "Impossible de récupérer les Articles.";
      console.error(err);
    }
  };

  // Fonction pour récupérer une annonce par son ID
  const getAnnonceById = async (id) => {
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
    getAnnonceById,
    getArticlesByCategorie,
    error
  };
}

export default {
    useProduits
  };
  
