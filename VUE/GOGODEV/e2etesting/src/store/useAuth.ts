import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("useAuth", () => {
  const isAuth = ref(false);

  const login = (email: string, password: string): boolean => {
    if (email == "admin@gmail.com" && password == "123456789") {
      isAuth.value = true;
      return true;
    }
    isAuth.value = false;
    return false;
  };
  return {
    isAuth,
    login,
  };
});
