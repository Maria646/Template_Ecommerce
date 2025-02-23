<template>
    <header class="bg-primary opacity-30 relative">
      <div class="grid grid-cols-3 text-center p-5 items-center">
        <!-- LOGO -->
        <div class="logo col-span-1">
          <router-link to="/">Ecommerce</router-link>
        </div>
  
        <!-- MENU Desktop -->
        <nav class="navbar col-span-1 hidden md:block">
          <ul class="navList flex justify-center space-x-5">
            <li class="navItem relative group inline-flex items-center">
              <router-link :to="{ path: '/shop'}">Shop</router-link>
            </li>
            <li class="navItem"><router-link to="/about">About</router-link></li>
            <li class="navItem"><router-link to="/contact">Contact us</router-link></li>
          </ul>
        </nav>
  
        <!-- ICÔNES Desktop -->
        <div class="iconDivers col-span-1 hidden md:flex space-x-6 justify-end">
          <router-link to="/panier"><i class="iconPanier">🛒</i></router-link>
          <router-link to="/favoris"><i class="iconFavoris">❤️</i></router-link>
          <router-link to="/connexion"><i class="iconConnexion">🔑</i></router-link>
        </div>
  
        <!-- Bouton Hamburger (Mobile) -->
        <button @click="toggleMenu" class="md:hidden block text-3xl absolute right-5 top-3 focus:outline-none">
          <span>{{ isOpen ? "✖" : "☰" }}</span>
        </button>
      </div>
  
      <!-- MENU Mobile -->
      <nav
        :class="[
          'absolute right-0 top-14 w-full bg-white border border-gray-300 shadow-lg transition-all duration-300',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        ]"
      >
        <ul class="flex flex-col space-y-4 text-center p-5">
          <li class="navItem relative group inline-flex flex-col items-center">
            Shop
            <svg class="h-4 w-4 text-gray-500 group-hover:text-black transform group-hover:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            <ul class="hidden group-hover:block space-y-2 bg-gray-100 rounded p-2 w-full">
              <li class="hover:bg-gray-200"><router-link :to="{ path: '/shop', query: { category: 'Indian Thea' } }">Thea Indian</router-link></li>
              <li class="hover:bg-gray-200"><router-link :to="{ path: '/shop', query: { category: 'Chinise Thea' } }">Thea Chinois</router-link></li>
              <li class="hover:bg-gray-200"><router-link :to="{ path: '/shop', query: { category: 'Viet Thea' } }">Thea Vietnamien</router-link></li>
            </ul>
          </li>
          <li class="navItem"><router-link to="/about">About</router-link></li>
          <li class="navItem"><router-link to="/contact">Contact us</router-link></li>
          
          <!-- Icônes Mobile -->
          <div class="flex justify-center space-x-6 mt-4">
            <router-link to="/panier"><i class="iconPanier text-2xl">🛒</i></router-link>
            <router-link to="/favoris"><i class="iconFavoris text-2xl">❤️</i></router-link>
            <router-link to="/connexion"><i class="iconConnexion text-2xl">🔑</i></router-link>
          </div>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isOpen = ref(false);
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  

<style scoped>
</style>