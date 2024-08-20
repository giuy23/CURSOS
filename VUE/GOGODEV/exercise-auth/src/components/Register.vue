<script lang="ts" setup>
import axios from 'axios';
import { ref, reactive } from 'vue';
import { useAuthStore } from '../store/AuthStore';
import { useRouter } from 'vue-router';
import { saveInLocalStorage } from '../utils/saveTokenLS';

const newAccount = reactive({
  name: '',
  email: '',
  password: '',
})
const confirm_password = ref('')
const URL_API = 'http://127.0.0.1:8000/api'


//PINIA AND VUE-ROUTER
const store = useAuthStore();
const router = useRouter();

const createAccount = async() => {
  const isPasswordEqual = newAccount.password === confirm_password.value;
  
  if (isPasswordEqual) {
    try {
      const {data} = await axios.post(`${URL_API}/auth/register`, newAccount)
      savedTokenLogin(data.token);
      router.push({name: 'dashboard'})
    } catch (error) {
      console.log('Ocurrió un error', error);
      
    }
    
  } else {
    alert('las contraseñas no coinciden')
  }  
}

const savedTokenLogin = (token:string) => {
  store.savedTokenAuth(token);
  saveInLocalStorage(token, 'TOKEN_AUTH')
};


// const comparePassword = () => {
//   return newAccount.password === confirm_password.value
// }

</script>

<template>
  <div>
    <article>
      <form @submit.prevent="createAccount">
        <div class="">
          <section>
            <label for="email">Nombre: </label>
            <input type="text" id="email" v-model="newAccount.name" />
          </section>
          <section>
            <label for="email">Email: </label>
            <input type="email" id="email" v-model="newAccount.email" />
          </section>
          <section>
            <div class="">
              <label for="password">Contraseña: </label>
              <input type="password" id="password" v-model="confirm_password" />
            </div>
            <div class="">
              <label for="confirm_password">Confirme su contraseña: </label>
              <input type="password" id="confirm_password" v-model="newAccount.password" />
            </div>
          </section>
        </div>

        <button>Crear Cuenta</button>
      </form>
    </article>
  </div>
</template>

<style scoped></style>
