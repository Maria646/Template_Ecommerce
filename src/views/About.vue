<template>
    <section class="banner p-20">
        <div class="banner__container max-w-[600px] mx-auto text-center">
            <h2>About</h2>
            <p>This is a simple Vue.js component that displays a welcome message.</p>
        </div>
    </section>
    <section class="history p-20">
        <div class="history__container grid grid-cols-2 max-w-[900px] mx-auto ">
        <div class="history__text">
            <h3>History</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel faucibus libero, ac tincidunt lorem. Nulla facilisi. Sed vitae neque euismod, consectetur metus ut, pulvinar diam. Donec vel turpis vel nunc elementum fermentum. Donec ac consectetur ipsum, at dictum velit. Sed fermentum, est a condimentum congue, nunc libero dignissim dui, non laoreet mauris velit ut felis. Donec vel diam auctor, lobortis arcu ut, dignissim neque. Nullam gravida, velit vel condimentum consectetur, est metus semper nunc, vel sagittis lacus tellus vel velit. Nullam auctor, ligula non consectetur efficitur, justo velit consectetur lectus, sed bibendum erat ipsum ac justo.</p>
        </div>
        <div class="history__image">
            <img src="" alt="History Image">
        </div>
      </div>
    </section>
    <section class="origin p-20">
      <div class="origin__container grid grid-cols-2 grid-rows-2 gap-10">

        <div class="origin__card col-span-1 row-span-1 grid grid-cols-7 " v-for="index in 4">

            <div class="origin__image col-span-5">
                <img src="" alt="">
            </div>

            <div class="origin__text col-span-2 p-5">
            <h2>Origin</h2>
           <p>Lorem ipsum dolor sit amet,
            onsectetur adipiscing elit. 
            Integer vel faucibus libero, ac tincidunt lorem. 
            Nulla facilisi. Sed vitae neque euismod, consectetur metus ut, </p>
            </div>

        </div>

      </div>
    </section>
</template>

<script setup>
import {ref, onMounted} from 'vue';


</script>

<style scoped>
</style>
