import { defineStore } from "pinia"
import { ref } from "vue";

// export const useAuthStore = defineStore('token_auth', {
//   state: () => {
//     return {
//       TOKEN_AUTH: null
//     }
//   },
//   getters: {
//     getTokenAuth: (state) => state.TOKEN_AUTH
//   },
//   actions: {
//     savedTokenAuth(value = null){
//       this.TOKEN_AUTH = value;
//     }
//   }
// }) 


export const useAuthStore = defineStore('auth', () => {
  const TOKEN_AUTH = ref('');

  const savedTokenAuth = (value:string) => {
    TOKEN_AUTH.value = value;
  }

  return {TOKEN_AUTH, savedTokenAuth}
}
)

