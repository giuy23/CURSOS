<script setup lang="ts">
import { useExample } from './store/useExample';
import HelloWorld from './components/HelloWorld.vue';

const store = useExample()
store.init();


</script>

<template>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment">Aumentar</button>

  <HelloWorld/>
</template>

<style scoped>

</style>
