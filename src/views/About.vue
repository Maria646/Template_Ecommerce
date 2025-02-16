<template>
    <div class="About">
        <div class="About__banner">
            <h2>About</h2>
            <p>This is a simple Vue.js component that displays a welcome message.</p>
        </div>
        <div class="About__history">
        <div class="About__history-text">
            <h3>History</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel faucibus libero, ac tincidunt lorem. Nulla facilisi. Sed vitae neque euismod, consectetur metus ut, pulvinar diam. Donec vel turpis vel nunc elementum fermentum. Donec ac consectetur ipsum, at dictum velit. Sed fermentum, est a condimentum congue, nunc libero dignissim dui, non laoreet mauris velit ut felis. Donec vel diam auctor, lobortis arcu ut, dignissim neque. Nullam gravida, velit vel condimentum consectetur, est metus semper nunc, vel sagittis lacus tellus vel velit. Nullam auctor, ligula non consectetur efficitur, justo velit consectetur lectus, sed bibendum erat ipsum ac justo.</p>
        </div>
        <div class="About__history-image">
            <img src="" alt="History Image">
        </div>
      </div>
      <div class="origin">
        <div class="origin__cards" v-for="index in 4">
            <img src="" alt="">
        <h2>Origin</h2>
        <p>Lorem ipsum dolor sit amet,
            onsectetur adipiscing elit. 
            Integer vel faucibus libero, ac tincidunt lorem. 
            Nulla facilisi. Sed vitae neque euismod, consectetur metus ut, 
            pulvinar diam. Donec vel turpis vel nunc elementum fermentum. Donec ac consectetur ipsum, 
            at dictum velit. Sed fermentum, est a condimentum congue, nunc libero dignissim dui, 
            non laoreet mauris velit ut felis. Donec vel diam</p>
      </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>
