import axios from 'axios';
import { ref } from 'vue';

// Définition de l'URL de base de l'API
const apiUrl = 'http://localhost:3335';

export function useArticles() {
  const error = ref(null);

  // Fonction pour récupérer les Articles par categorie
  const getArticlesByCategorie = async (categorie) => {
    try {
      const response = await axios.get(`${apiUrl}/api/articles?categorie=${categorie}`);
      return response.data;
    } catch (err) {
      error.value = "Impossible de récupérer les Articles.";
      console.error(err);
    }
  };

  // Fonction pour récupérer une annonce par son ID
  const getAnnonceById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/api/articles/${id}`);
      return response.data;
    } catch (err) {
      error.value = "Erreur de chargement de l'annonce.";
      console.error(err);
    }
  };
  return {
    getArticlesByCategorie,
    error,
    getAnnonceById
  };
}

export default {
    useArticles
  };
  
