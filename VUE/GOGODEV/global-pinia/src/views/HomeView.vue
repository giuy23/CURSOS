<script lang="ts" setup>
import { useCounterStore } from '../store/counter';
const store = useCounterStore();
</script>

<template>
  <div>
    <div>
    <h3>{{ store.count }}</h3>
    <hr>
    <h3>{{ store.count }} x 2 ={{ store.times2 }}</h3>
    <hr>
    <button @click="store.increment(1)">Increment</button>
  </div>

  <hr>
  </div>
</template>

<style scoped>

</style>