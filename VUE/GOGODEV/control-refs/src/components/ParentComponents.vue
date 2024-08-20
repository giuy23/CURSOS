<script lang="ts" setup>
import { ref, VNode } from "vue";
import ChildComponent from "./ChildComponent.vue";
const percentageComponent: any = ref(null);

const banco = () => {
  alert("Cuenta Subida");

  percentageComponent.value.recalculate();
};

// <!-- LAZY LOAD -->
const lazyOptions = ref({
  src: "https://picsum.photos/1200/800",
  delay: 500,
  lyfecycle: {
    loading: (el:VNode) => {
      console.log("Cargando imagen", el);
    },
    error: (el:VNode) => {
      console.log("Error en la carga", el);
    },
    loaded: (el:VNode) => {
      console.log("Imagen cargada", el);
    },
  },
});
</script>

<template>
  <ChildComponent ref="percentageComponent" />
  <button @click="banco">Añadir Cuenta Bancaria</button>

  <!-- LAZY LOAD -->
  <img
    v-lazy="{
      src: lazyOptions.src,
      lifecycle: lazyOptions.lyfecycle,
      delay: lazyOptions.delay,
    }"
    lazy="loading"
    alt=""
  />
</template>

<style scoped>
  img[lazy=loading]{
    background-color: aquamarine;
    width: 800px;
  }
  img[lazy=loaded]{
    
  }
  img[lazy=error]{
    
  }
</style>
