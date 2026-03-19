<script setup>

const name = defineModel('name')
const surName = defineModel('surName')

</script>
<template>

  <input type="text" v-model="name">
  <input type="text" v-model="surName">

</template>
<style></style>