<script lang="ts" setup>

defineProps([
  'notes'
])

</script>

<template>
  <div>
    <ul>
      <li v-for="note in notes">{{ note.content }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>