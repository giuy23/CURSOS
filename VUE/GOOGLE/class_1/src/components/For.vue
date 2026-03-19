<script setup>
import { ref, watchEffect } from 'vue';

const stopped = watchEffect(() => {
  // console.log('Hello :3');
  
})

stopped();

const data = ref([
  {
    id: 12,
    label: 'Item 1'
  },
  {
    id: 26,
    label: 'Item 2'
  },
  {
    id: 89,
    label: 'Item 3'
  },
])
const sym = Symbol('string')
const filters = data.value.filter((el) => el.label.match(/Item/))
// console.log(filters);

filters.map((el) => {
  // console.log(el.label);

})

console.log(sym);


await new Promise((resolve) => {
  setTimeout(() => resolve, 100)
})

defineExpose({
  data
})
</script>
<template>
  <ul>
    <li v-for="value in data" :key="value.id">
      {{ value.label }}
    </li>
  </ul>
</template>
<style></style>
