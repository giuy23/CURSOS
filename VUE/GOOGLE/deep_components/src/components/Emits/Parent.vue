<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const showPanel = ref(false)

</script>
<template>

  <Child @some-event.once="showPanel = !showPanel"></Child>

  <nav v-if="showPanel">
    Emits has activated
  </nav>
  <nav v-else>
    Emits has not clicked
  </nav>
</template>
<style></style>