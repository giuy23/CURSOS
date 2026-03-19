<script setup>
import { ref } from 'vue';
import UserName from './UserName.vue';

const first = ref('Garviel');
const last = ref('Loken');


</script>
<template>
  <UserName v-model:first-name="first" v-model:last-name="last"></UserName>

  <br>
  <pre> {{ first }} {{ last }} </pre>
</template>
<style></style>