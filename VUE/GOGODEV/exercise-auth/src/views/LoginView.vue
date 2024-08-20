<script lang="ts" setup>
import { reactive } from "vue";
import axios from "axios";
import { useAuthStore } from "../store/AuthStore";
import { useRouter } from "vue-router";
import { saveInLocalStorage } from "../utils/saveTokenLS";

const store = useAuthStore();
const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
});

const URL_API = "http://127.0.0.1:8000/api";

const sendCredentials = async () => {
  try {
    const { data } = await axios.post(`${URL_API}/auth/login`, credentials);
    savedTokenLogin(data.token);
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log("Ocurrió un error");
  }
};

const savedTokenLogin = (token: string) => {
  store.savedTokenAuth(token);
  saveInLocalStorage(token, "TOKEN_AUTH");
};
</script>

<template>
  <div>
    <form action="">
      <div class="">
        <label for="email">Nombre:</label>
        <input type="email" id="email" v-model="credentials.email" />
      </div>
      <div class="">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="credentials.password" />
      </div>
      <button type="button" @click="sendCredentials">Enviar</button>
    </form>
  </div>

  <h1>{{ store.TOKEN_AUTH }}</h1>

  <article>
    <span
      >No tienes una cuenta?
      <strong
        ><router-link :to="{ name: 'register' }"
          >Registrate</router-link
        ></strong
      ></span
    >
  </article>
</template>

<style scoped></style>
