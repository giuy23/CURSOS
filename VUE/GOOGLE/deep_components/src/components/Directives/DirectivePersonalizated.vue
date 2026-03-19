<script setup>
// enables v-highlight in templates
const vHighlight = {
  mounted: (el) => {
    el.classList.add('is-highlight')
  }
}
</script>

<template>
  <p v-highlight>This sentence is important!</p>
</template>

<style scoped>

.is-highlight {
  border: 2px solid darkorange;
  border-radius: 5px;
}

</style>