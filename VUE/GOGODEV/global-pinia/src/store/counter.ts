import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count : 1
    }
  },
  getters: {
    times2: (state) => state.count * 2
  },
  actions: {
    increment(value = 1){
      this.count += value
    } 
  } 
});
