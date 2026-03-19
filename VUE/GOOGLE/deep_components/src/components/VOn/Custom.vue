<script setup>

import { useAttrs } from 'vue';

const attrs = useAttrs();

console.log(attrs);


</script>
<template>

  <button @click="attrs.onClick"> Click Me </button>

  <button :style="attrs.style"> Not Click Me! </button>

</template>
<style></style>