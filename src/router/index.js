import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Shop from '../views/Shop.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Connexion from '@/views/Connexion.vue'
import Favoris from '@/views/Favoris.vue'
import Inscription from '@/views/Inscription.vue'
import Paiement from '@/views/Paiement.vue'
import Panier from '@/views/Panier.vue'
import FicheDetailProduit from '@/views/FicheDetailProduit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

          path: '/',
          name: 'accueil',
          component: Acceuil
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/shop',
          name: 'shop',
          component: Shop
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        },
        {
          path: '/connexion',
          name: 'connexion',
          component: Connexion
        },
        {
          path: '/favoris',
          name: 'favoris',
          component: Favoris
        },
        {
          path: '/inscription',
          name: 'inscription',
          component: Inscription
        },
        {
          path: '/paiement/:id',
          name: 'paiement',
          component: Paiement
        },
        {
          path: '/panier',
          name: 'panier',
          component: Panier
        },
        {
          path: '/ficheDetailProduit',
          name: 'ficheDetailProduit',
          component: FicheDetailProduit
        },
      ]
    },
)

export default router
