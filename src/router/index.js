import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Shop from '../views/Shop.vue'
import About from '@/views/About.vue'

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
      ]
    },
)

export default router
