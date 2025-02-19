<template>
    <header class="bg-primary opacity-30">
    <div class="grid grid-cols-3 text-center p-10">
       <div class="logo col-span-1">
        logo
           <img src="" class="logoImage" alt="">
       </div>
       <nav class="navbar col-span-1">
           <ul class="navList flex justify-center space-x-5">
               <li class="navItem relative group inline-flex items-center">
                Shop
                  <svg class="ml-2 h-4 w-4 text-gray-500 group-hover:text-black transform group-hover:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                <ul class="absolute w-40 top-[25px] left-[-55px] hidden bg-white shadow-lg group-hover:block space-y-2">
                    <li class="hover:bg-primary">
                        <router-link :to="{ path: '/shop', query: { category: 'Indian Thea' } }">Thea Indian</router-link>
                    </li class="hover:bg-primary">
                    <li class="hover:bg-primary">
                        <router-link :to="{ path: '/shop', query: { category: 'Chinise Thea' } }">Thea Chinois</router-link>
                    </li>
                    <li class="hover:bg-primary">
                        <router-link :to="{ path: '/shop', query: { category: 'Viet Thea' } }">Thea Vietnamien</router-link>
                    </li>
                </ul>
               </li>
               <li class="navItem">
                   <router-link to="/about">About</router-link>
               </li>
               <li class="navItem">
                   <router-link to="/contact">Contact us</router-link>
               </li>
           </ul>
       </nav>
       <button id="header__btn-hamburger" class="md:hidden block text-3xl absolute right-5 top-3">
            <span id="menu-icon">☰</span>
        </button>
        <nav id="header__navbar-mobile" class="hidden bg-white border border-gray-300 w-100">
          <ul class="flex flex-col space-y-2 text-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
       <div class="iconDivers col-span-1 space-x-6">
        <router-link to="/panier">
            <i class="iconPanier">Panier</i>
        </router-link>

<router-link to="/favoris">
    <i class="iconFavoris">Favoris</i>
</router-link>
<router-link to="/connexion">
    <i class="iconConnexion">Connexion</i>
</router-link>
       </div>
     </div>
     </header>
</template>

<script setup>
</script>

<style scoped>
</style>