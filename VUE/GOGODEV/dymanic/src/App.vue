<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link> | 
    <router-link :to="{name: 'contact'}">Contact</router-link> | 
    <router-link :to="{name: 'service'}">Service</router-link> | 
    <router-link :to="{name: 'about'}">About</router-link>
  </nav>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
