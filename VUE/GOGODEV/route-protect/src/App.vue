<script setup lang="ts">
import { ref } from "vue";

const note = ref("");

const sendToServer = async () => {
  const rawResponse = await fetch("http://xxxxx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer ",
    },
    body: JSON.stringify({
      title: "x",
      description: "x",
    }),
  });
  const response = await rawResponse.json();
};
</script>

<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'auth' }">Auth</router-link> | 
    <router-link :to="{ name: 'login' }">Login</router-link> |
    <router-link :to="{ name: 'dashboard' }">Dahborad</router-link> | 
  </nav>
  <router-view></router-view>

  <hr />
  <input type="text" v-model="note" />
  <button @click="sendToServer">Enviar nota al servidor</button>
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
