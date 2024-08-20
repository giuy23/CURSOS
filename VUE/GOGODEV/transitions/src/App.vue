<script setup lang="ts">
import { ref } from 'vue';

// const show = ref(true)
const notes = ref([]);
const note = ref('');

const handleNote = () => {
  notes.value.push(note.value)
  note.value = '';
}
</script>

<template>
  
  <TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note"><v-icon name="bi-file-code-fill" animation="float"></v-icon>{{ note }}</li>
  </TransitionGroup>
  <input type="text" v-model="note">
  <button @click="handleNote">Save Note</button>


  <!-- <button @click="show = !show">Mostrar / Ocultar</button>
  <Transition>
    <h1 v-if="show">Hello world animated</h1>
  </Transition> -->

</template>

<style scoped>
/* .v-enter-from, .v-leave-to{
  opacity: 0;
  color: aqua;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s ease-in-out;
} */

.list-enter-from, .list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.list-enter-active, .list-leave-active {
  transition: all .5s ease-in-out;
}


</style>
