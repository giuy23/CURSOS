<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld />
  <nav :class="{ active: 'isActive' }">
    <router-link to="/" >Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/services">Services</router-link> | 
    <router-link to="/contact">Contact</router-link> | 
    <router-link to="/blog">Blog</router-link>
  </nav>
  <router-view />
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

.router-link-active{
  color: aquamarine;
}
</style>
