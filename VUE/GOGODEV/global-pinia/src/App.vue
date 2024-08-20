<script lang="ts" setup>
</script>

<template>
  <nav class="text-center text-xl pt-3" :class="{ active: 'isActive' }">
    <router-link :to="{name: 'firebase'}">Firebase</router-link> | 
    <router-link :to="{name: 'home'}">Counter</router-link> | 
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.router-link-active{
  color: orange;
}
</style>