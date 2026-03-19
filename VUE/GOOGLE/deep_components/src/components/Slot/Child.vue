<script setup>
import { inject } from 'vue';
import { myInjectionKey } from '../helpers/keys';


const text = 'A paragraph for the main content.'
const subText = 'And another one.'

const message = inject('textChildDeep');

const { textChildReactive, updateChildReactive } = inject('textChildReactive');

const symbol = inject(myInjectionKey)

</script>
<template>

  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :text="text" :sub-text="subText"></slot>
    </main>
    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>

    <br>

    <pre class="info"> {{ message }} </pre>

    <br>

    <button @click="updateChildReactive" class="info">
      The count of text provide is: {{ textChildReactive }} times
    </button>

    <br>

    <nav>{{ symbol }}</nav>
  </div>

</template>
<style scoped>
.info {
  border: 1px solid green;
  border-radius: 5px;
  padding: 1rem;
  font-weight: bold;
}
</style>