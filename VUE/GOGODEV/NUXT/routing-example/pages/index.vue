<script lang="ts" setup>
import NoteService from '~/server/services/NoteService';
import { onMounted } from 'vue';

const note = ref({
  title: 'loading...',
  content: 'loading...',
});
const noteService = new NoteService;

onMounted( async () => {
  note.value = await noteService.GetNote();
});

</script>

<template>
  <div class="">
    <h1>title: {{ note.title }}</h1>
    <h1>content: {{ note.content }}</h1>
  </div>
</template>

<style scoped>

</style>