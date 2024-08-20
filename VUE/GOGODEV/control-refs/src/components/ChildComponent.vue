<script lang="ts" setup>
import { onMounted, ref, defineExpose } from 'vue';

const percentaje:any = ref(0);

onMounted(() => {
  percentaje.value = 24;
})

const recalculate = () => {
  percentaje.value = (Math.random()*100).toFixed(2);
}

defineExpose({
  recalculate
})

</script>

<template>
  <div>PORCENTAJE COMPLETADO: {{ percentaje }} %</div>
</template>

<style scoped>

</style>