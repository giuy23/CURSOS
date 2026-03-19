<script setup lang="ts">
import { provide, ref } from 'vue';
import Template from './components/forms/Template.vue';
import Parent from './components/Slot/Parent.vue';
import FirstChild from './components/VOn/FirstChild.vue';
import { myInjectionKey } from './components/helpers/keys';
import MouseDirection from './components/composables/MouseDirection.vue';
import ParentEmit from './components/Emits/Parent.vue';
import VModelParent from './components/VModel/VModelParent.vue';
import { defineAsyncComponent } from 'vue';

const DirectiveAsync = defineAsyncComponent(() => import ('./components/Directives/DirectivePersonalizated.vue'))

const textChildDeep = 'Text from drilling parent';
const textChildReactive = ref(0);

const updateChildReactive = () => {
  textChildReactive.value++;
}

provide('textChildDeep', textChildDeep)
provide('textChildReactive', {
  textChildReactive,
  updateChildReactive
});
provide(myInjectionKey, 'Value with key like a symbol')
</script>

<template>
  <div>
    <!-- <Template></Template> -->
    <FirstChild></FirstChild>
  </div>

  <section style="">

    <h4>SLOT</h4>

    <Parent></Parent>

  </section>

  <section>
    <MouseDirection></MouseDirection>
  </section>

  <section>
    <ParentEmit></ParentEmit>
  </section>


  <section>
    <VModelParent></VModelParent>
  </section>

  <section>
    <DirectiveAsync></DirectiveAsync>
  </section>
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
