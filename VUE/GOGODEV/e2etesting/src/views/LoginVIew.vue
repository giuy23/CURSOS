<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../store/useAuth";
import router from "../router";

const email = ref("");
const password = ref("");
const error = ref(false);

const store = useAuthStore();
const login = () => {
  error.value = !store.login(email.value, password.value);
  if (store.isAuth) {
    router.push({ name: "home" });
  } 
};
</script>

<template>
  <div>
    <input type="text" placeholder="email" v-model="email" id="email" /> <br />
    <input
      type="password"
      placeholder="password"
      v-model="password"
      id="password"
    />
    <br />
    <button @click="login">Login</button>
    <div class="" v-if="error">
      <p>Wrong email or password</p>
    </div>
  </div>
</template>

<style scoped></style>
