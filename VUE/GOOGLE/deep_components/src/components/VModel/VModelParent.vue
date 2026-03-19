<script setup>

import { ref } from 'vue';
import VModelChild from './VModelChild.vue';

const firstName = ref('Garviel');
const lastName = ref('Loken')
</script>
<template>

  <code style="font-family: 'Courier New', Courier, monospace; font-size: 20px; font-weight: 700; color: aqua;">
    {{ firstName }} {{ lastName }}
  </code>

  <br>

  <VModelChild v-model:name="firstName" v-model:sur-name="lastName"></VModelChild>

</template>
<style></style>