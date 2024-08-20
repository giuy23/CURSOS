<script lang="ts" setup>
import MainLayout from "../layouts/MainLayout.vue";
import { useMouse } from "../composables/useMouse";

const { x, y, update } = useMouse();

</script>

<template>
  <MainLayout>
    <template #main>
      <h1>MY MAIN CONTENT</h1>
    </template>

    <template #aux>
      <h1>MY AUX CONTENT</h1>
      <p>X: {{ x }} , Y: {{ y }} </p>
    </template>
  </MainLayout>
</template>

<style scoped>

</style>