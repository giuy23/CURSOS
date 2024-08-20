<script setup lang="ts">

// import { createSignal } from 'vue-signals/solid';
// const [count, setCount] = createSignal(0);

// import { signal } from "vue-signals/angular";
// const count = signal(0);

import { reactive } from 'vue';
const count = reactive({
  value: 0,
}) 
</script>

<template>
  <!-- <h3>{{ count() }}</h3>
<button @click="() => setCount((count) => count + 1)">Increment</button> -->

  <!-- <h3>{{ count() }}</h3>
  <button @click="() => count.update((count) => count + 1)">Increment</button>
  <button @click="count.set(0)">Reset</button> -->

<h3>{{ count.value }}</h3>
<button @click="count.value ++">Increment</button>

<br>
<h1>{{ $count() }}</h1>
<button @click="() => $saySomething()">Say Something</button>
</template>

<style scoped></style>
