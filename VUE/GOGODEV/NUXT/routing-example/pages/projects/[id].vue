<script lang="ts" setup>
const route = useRoute();

const projectId = ref();
projectId.value = route.params.id;
</script>

<template>
  <NuxtLayout name="projects">
    <div>Project Number {{ projectId }}</div>
  </NuxtLayout>
</template>

<style scoped></style>
