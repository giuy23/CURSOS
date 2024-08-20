<script setup lang="ts">
</script>

<template>
  <nav class="text-center text-xl pt-3" :class="{ active: 'isActive' }">
    <router-link :to="{name: 'home'}">Home</router-link> | 
    <router-link :to="{name: 'auth'}">Backend</router-link> | 
    <router-link :to="{name: 'firebase'}">Firebase</router-link> | 
    <router-link :to="{name: 'social'}">Social</router-link> | 
    <router-link :to="{name: 'aws'}">AWS</router-link> | 
  </nav>
  <router-view/>
</template>

<style scoped>
.router-link-active{
  color: orange;
}
</style>
