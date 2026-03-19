<script setup>
import { ref } from 'vue';
import Custom from './Custom.vue';

const value = ref(0)
const colorBtn = ref('#A2F4FD')

const onClick = () => {
  value.value++;

  if (value.value >= 5 && value.value < 10) {
    colorBtn.value = '#46ECD5'
  } else if (value.value >= 10) {
    colorBtn.value = '#21BCFF'
  }
}

</script>
<template>

  <Custom @click="onClick" :style="{ 'color': colorBtn }"></Custom>

  <pre> The button has clicked {{ value }} times </pre>
</template>
<style></style>