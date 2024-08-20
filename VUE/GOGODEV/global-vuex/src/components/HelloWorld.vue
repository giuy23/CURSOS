<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const counter = computed(() => store.state.counter);
const times2 = computed(() => store.getters.times2);
const increment = () => store.commit("setCounter", counter.value + 1);
</script>

<template>
  <h3>COUNTER</h3>
  <h4>{{ counter }} x 2 = {{ times2 }}</h4>
  <button @click="increment">Increment</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
