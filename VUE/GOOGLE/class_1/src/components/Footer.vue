<script setup>
import { ref } from 'vue';

const counter = ref(0);
const description = '<span style="color: red">Esto debería ser rojo.</span>'
</script>
<template>

  <nav>
    Here is a other component
  </nav>
  <button @click="counter++">Click me! {{ counter }}</button>

  <p>Using text interpolation {{ description }}</p>
  <p>Using v-html <code v-html="description"></code> </p>

</template>
<style></style>