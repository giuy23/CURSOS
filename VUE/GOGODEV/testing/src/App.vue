<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0)

</script>

<template>
  <div>
    <h1 id="counter-info">{{ count }} </h1>
    <h1>Counter App</h1>
    <button @click="() => count++">Increment</button>
  </div>
</template>

<style scoped>

</style>