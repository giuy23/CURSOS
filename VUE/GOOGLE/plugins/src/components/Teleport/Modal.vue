<!-- Modal.vue -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<template>
  <Teleport to=".modal_global_status">
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <header>
          <slot name="header"></slot>
          <button @click="closeModal">X</button>
        </header>
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </Teleport>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: rgb(29, 20, 20);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  /* Ensure it's above other content */
}
</style>
