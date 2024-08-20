<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import { useMouse } from "../composables/useMouse";

const ListLayout = defineAsyncComponent(() => import('../layouts/ListLayout.vue'));
const CardLayout = defineAsyncComponent(() => import('../layouts/CardLayout.vue'));
const TableLayout = defineAsyncComponent(() => import('../layouts/TableLayout.vue'));

const layout = ref(ListLayout);

const { x, y, update } = useMouse();

const users = ref([
  {
    name: "Luis",
    age: 50,
    position: "frontend",
  },
  {
    name: "Juanjo",
    age: 90,
    position: "fullstack",
  },
  {
    name: "Lucía",
    age: 25,
    position: "frontend",
  },
  {
    name: "Ana",
    age: 41,
    position: "backend",
  },
  {
    name: "Roberto",
    age: 55,
    position: "backend",
  },
]);

const handleLayout = (cmp) => {
  layout.value = cmp
}
</script>

<template>
  <MainLayout>
    <template #main>
      <h1>MY MAIN CONTENT</h1>
    </template>

    <template #aux>
      <h1>MY AUX CONTENT</h1>
      <p>X: {{ x }} , Y: {{ y }}</p>
    </template>
  </MainLayout>
  <h1>Listado de usuarios</h1>
  <div class="">
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
  </div>
  <component :is="layout" :content="users"/>
</template>

<style scoped></style>
