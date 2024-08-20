import { defineStore } from "pinia"
import { ref } from "vue"

export const useExample = defineStore('useExample', () => {
    const count = ref(1);

    const increment = () => {
      count.value += 1;
      localStorage.setItem('count', count.value.toString());
    }

    const init = () => {
      const initCount = localStorage.getItem('count');
      if (initCount) {
        count.value = parseInt(initCount);
      }
    }

    return {count, increment, init}
  }, {persist: {
    storage: sessionStorage,
    paths: ['count']
  }})
