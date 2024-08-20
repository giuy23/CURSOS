<script setup lang="ts">
import { useAuthStore } from "./store/AuthStore";
import { useRouter } from 'vue-router';
import { deleteFromLocalStorage } from "./utils/saveTokenLS";

const store = useAuthStore();
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && store.TOKEN_AUTH) {
    return next({ name: 'dashboard' });
  }
  next();
});

const closeSession = () => {
  const logout = confirm('Estas seguro de salir?')

  if (!logout) {
    return
  }
  deleteFromLocalStorage('TOKEN_AUTH');
  store.savedTokenAuth('');
  router.push({name: 'home'})
}

</script>

<template>
  <nav>
    <!-- {{ store.TOKEN_AUTH ?  :  }} -->
    <!-- <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link> |
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> -->
    <router-link :to="{ name: 'home' }">| Home | </router-link> 
    <router-link v-if="!store.TOKEN_AUTH" :to="{ name: 'login' }"> Login | </router-link> 
    <router-link v-if="store.TOKEN_AUTH" :to="{ name: 'dashboard' }"> Dashboard | </router-link>
    <button v-if="store.TOKEN_AUTH" @click="closeSession">Logout</button> 
  </nav>
  <router-view></router-view>
</template>
