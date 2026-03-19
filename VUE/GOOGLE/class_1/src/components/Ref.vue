<script setup>

import { onMounted, ref, useTemplateRef } from 'vue';

// const myInput = ref(null)

// onMounted(() => {
//   console.log(myInput.value);

//   myInput.value.value = 'Hello'
//   myInput.value.focus()
  
// })

const otherInput = useTemplateRef('myInput')


onMounted(() => {
  console.log(otherInput.value);
  
})
</script>

<template>
  <input type="text" ref="myInput">
</template>

<style scoped>
</style>