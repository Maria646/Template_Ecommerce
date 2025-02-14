<template>
    <header class="bg-slate-400 text-red-400">
    <div class="container grid grid-cols-3">
       <div class="logo col-span-1">
        logo
           <img src="" class="logoImage" alt="">
       </div>
       <nav class="navbar col-span-1">
           <ul class="navList">
               <li class="navItem">
                <ul>
                    <li>
                        <router-link :to="{ path: '/shop', query: { category: 'Indian Thea' } }">Thea Indian</router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/shop', query: { category: 'Chinise Thea' } }">Thea Chinois</router-link>
                    </li>
                    <li>
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
       <div class="iconDivers col-span-1">
           <RouterLink>
               <i class="iconPanier">Panier</i>
           </RouterLink>
           <RouterLink>
               <i class="iconFavoris">Favoris</i>
           </RouterLink>
           <RouterLink>
               <i class="iconConnexion">Connexion</i>
           </RouterLink>
       </div>
     </div>
     </header>
</template>

<script setup>
</script>

<style scoped>
</style>