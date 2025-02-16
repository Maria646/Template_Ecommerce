<template>
    <footer class="bg-secondary">
    <div class="grid grid-cols-3 text-center p-10">
       <div class="logo col-span-1">
        logo
           <img src="" class="logoImage" alt="">
       </div>
       <nav class="nav col-span-1">
           <ul class="navList navList flex justify-center space-x-5">
               <li class="navItem">
                   <router-link to="/" exact>Shop</router-link>
               </li>
               <li class="navItem">
                   <router-link to="/about">About</router-link>
               </li>
               <li class="navItem">
                   <router-link to="/contact">Contact Us</router-link>
               </li>
           </ul>
       </nav>
       <div class="iconDivers col-span-1 space-x-6">
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
    </footer>
</template>

<script setup>
</script>

<style scoped>
</style>