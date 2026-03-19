<script setup lang="ts">
import { inject } from 'vue';
import ViewModal from './components/Teleport/ViewModal.vue'
import MainT from './components/Transitions/MainT.vue';
const i18n: any = inject('i18n')

console.log(i18n.greetings.hello);

</script>

<template>
  <h1>{{ $translate('greetings.goodBye') }}</h1>

  <nav>
    <MainT></MainT>
  </nav>

  <nav>
    <ViewModal></ViewModal>
  </nav>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
