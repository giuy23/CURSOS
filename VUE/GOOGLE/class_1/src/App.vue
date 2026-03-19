<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue';
import Computed from './components/Computed.vue';
import For from './components/For.vue';
import Ref from './components/Ref.vue';
import Props from './components/Props.vue';
import Slot from './components/Slot.vue';
import { useTemplateRef, ref, onMounted } from 'vue';

const forComponent = ref(null);


onMounted(() => {
  console.log(forComponent.value);

  console.table(forComponent.value.data)
  console.table(forComponent.value.target)
})

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
]);

const postFontSize = ref(1);

</script>

<template>
  <!-- <div>
    <Form />
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <!-- <Computed class="bg-sky-600" /> -->

  <!-- <For ref="forComponent" />

  <Ref /> -->
  <div :style="{ fontSize: `${postFontSize}em` }">

    <Props v-for="post in posts" :post-title="post.title" :key="post.id" @enlarge-text="postFontSize += 0.1" />

  </div>

  <legend>
    <Slot>
      <div>Something bad happening</div>
    </Slot>
  </legend>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
