import { createRouter, createWebHistory } from 'vue-router'
import layoutDefault from '../layout/default.vue'
import Acceuil from '../views/Acceuil.vue'
import Shop from '../views/Shop.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'layoutDefault',
      component: layoutDefault,
      children: [
        {
          path: '/accueil',
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
  ],
})

export default router
