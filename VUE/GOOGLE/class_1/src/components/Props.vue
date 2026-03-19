<script setup>
defineProps(['postTitle'])
const emit = defineEmits(['enlarge-text'])

const xd = () => {
  emit('enlarge-text')

}
</script>

<template>
  <div class="blog-post">
    <h4>{{ postTitle }}</h4>
    <button @click="xd">Enlarge text</button>
  </div>

  <!-- <table>
  <tr is="vue:blog-post-row"></tr>
</table> -->
</template>

<style scoped></style>