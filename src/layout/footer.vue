<template>
    <footer class="bg-primary">
    <div class="grid grid-cols-3 text-center p-10">
       <div class="logo col-span-1">
        <router-link to='/'>E-commerce</router-link>
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
    </footer>
</template>

<script setup>
</script>

<style scoped>
</style>