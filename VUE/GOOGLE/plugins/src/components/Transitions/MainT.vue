<script setup>

import { ref } from 'vue';
const show = ref(false);
const showBunce = ref(false);

</script>
<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="slide-fade">
    <p v-if="show" style="
      font-size: medium; 
      font-family: 'Courier New', Courier, monospace;
      ">hello</p>
  </Transition>

  <button @click="showBunce = !showBunce">Toggle</button>
  <Transition name="bounce">
    <p v-if="showBunce" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>
</template>
<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}



.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>