<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <RouterView></RouterView>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
