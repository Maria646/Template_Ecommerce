<template>
    <footer class="b-red-400 text-red-400">
    <div class="container grid grid-cols-3">
       <div class="logo col-span-1">
        logo
           <img src="" class="logoImage" alt="">
       </div>
       <nav class="nav  col-span-1">
           <ul class="navList">
               <li class="navItem">
                   <router-link to="/" exact>Home</router-link>
               </li>
               <li class="navItem">
                   <router-link to="/about">About</router-link>
               </li>
               <li class="navItem">
                   <router-link to="/contact">Contact</router-link>
               </li>
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
    </footer>
</template>

<script setup>
</script>

<style scoped>
</style>