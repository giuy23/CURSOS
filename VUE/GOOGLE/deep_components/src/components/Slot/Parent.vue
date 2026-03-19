<script setup>
import LoadingComponent from './LoadingComponent.vue';

import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent({
  loader: () => import('./Child.vue'),
  loadingComponent: LoadingComponent,
  delay: 2500,
  timeout: 3000
})
// import Child from './Child.vue';

</script>
<template>

  <Child>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default="{ text, subText }">
      <p>{{ text }}</p>
      <p>{{ subText }}</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </Child>

</template>
<style></style>