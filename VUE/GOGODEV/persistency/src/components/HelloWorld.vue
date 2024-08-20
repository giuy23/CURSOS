<script setup lang="ts">
// import { ref, watchEffect } from "vue";
import { ref, watch } from "vue";

const note = ref("");

watch(note, () => {
  console.log('ANT:',note.value,' DES: ',note.value );
  localStorage.setItem('note', note.value)
})

// watchEffect(() => {
//   alert("Ha habido un cambio");
//   localStorage.setItem("note", note.value);
// });
</script>

<template>
  <h1>Notas:</h1>
  <input type="text" v-model="note" />
</template>

<style scoped></style>
