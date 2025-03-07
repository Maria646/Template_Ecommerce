<template>
<header class="bg-secondary text-primary opacity-60 fixed top-0 left-0 w-full z-50 backdrop-blur-lg">

      <div class="absolute inset-0 bg-secondary "></div>

      <div class="relative z-10 grid grid-cols-3 text-center p-5 items-center">
        <div class="logo col-span-1">
          <router-link to="/">Ecommerce</router-link>
        </div>
  
        <nav class="navbar col-span-1 hidden md:block">
          <ul class="navList flex justify-center space-x-5">
            <li class="navItem relative group inline-flex items-center">
              <router-link :to="{ path: '/shop'}">Shop</router-link>
            </li>
            <li class="navItem"><router-link to="/about">About</router-link></li>
            <li class="navItem"><router-link to="/contact">Contact us</router-link></li>
          </ul>
        </nav>
  
        <div class="iconDivers col-span-1 hidden md:flex space-x-6 justify-end">

          <router-link to="/panier">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
          </router-link>
          <router-link to="/favoris">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
          </router-link>
          <router-link to="/connexion">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </router-link>
        </div>
  
        <button @click="toggleMenu" class="md:hidden block text-3xl absolute right-5 top-3 focus:outline-none">
          <span>{{ isOpen ? "✖" : "☰" }}</span>
        </button>
      </div>
  
      
<nav
  :class="[
    'absolute top-0 right-0 bg-primary border border-gray-300 shadow-lg transition-all duration-500 ease-in-out',
    isOpen ? 'opacity-100 w-full h-screen' : 'opacity-0 w-0 h-0 pointer-events-none'
  ]"
  style="background-color: rgba(0, 0, 0, 0.8);" 
>
  <ul class="flex flex-col justify-center items-center space-y-10 text-white h-full p-5">
    <!-- Nom du logo -->
    <li class="text-5xl font-bold text-center mb-10">
      <router-link to="/" class="text-white">Ecommerce</router-link>
    </li>

    <!-- Liens de navigation -->
    <li class="navItem w-full text-3xl font-semibold text-center leading-snug">
      <router-link to="/shop" class="hover:text-gray-300">Shop</router-link>
    </li>
    <li class="navItem w-full text-3xl font-semibold text-center leading-snug">
      <router-link to="/about" class="hover:text-gray-300">About</router-link>
    </li>
    <li class="navItem w-full text-3xl font-semibold text-center leading-snug">
      <router-link to="/contact" class="hover:text-gray-300">Contact us</router-link>
    </li>

    <!-- Icônes Mobile -->
    <div class="flex justify-center space-x-8 mt-12">
      <router-link to="/panier" class="text-4xl hover:text-gray-300">🛒</router-link>
      <router-link to="/favoris" class="text-4xl hover:text-gray-300">❤️</router-link>
      <router-link to="/connexion" class="text-4xl hover:text-gray-300">🔑</router-link>
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