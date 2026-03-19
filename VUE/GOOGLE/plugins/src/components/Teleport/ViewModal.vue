<!-- App.vue -->

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal1 = ref(false);
const showModal2 = ref(false);
</script>

<template>
  <button @click="showModal1 = true">Open Modal 1</button>
  <button @click="showModal2 = true">Open Modal 2</button>

  <!-- Instance 1 -->
  <Modal :show="showModal1" @close="showModal1 = false">
    <template #header>
      <h3>Modal 1 Header</h3>
    </template>
    <p>This is the content for the first modal instance.</p>
  </Modal>

  <!-- Instance 2 -->

  <Modal :show="showModal2" @close="showModal2 = false">
    <template #header>
      <h3>Modal 2 Header</h3>
    </template>
    <p>This is the content for the second modal instance.</p>
  </Modal>
</template>
<script>

</script>
