<script setup>
import { ref, reactive } from 'vue';


const saveSubmit = (e) => {
  console.log(e);

}

const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0
console.log(count.value) // 0

state.count = 10
console.log(count.value) // 1
console.log(state.count) // 10

const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// original ref is now disconnected from state.count
console.log(count.value) // 10


const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))

// need .value here
console.log(map.get('count').value)
</script>
<template>

  <form @submit.prevent="saveSubmit">

    <input type="text" name="name">

    <button class="p-2 bg-sky-600" type="submit">Enviar</button>

  </form>

</template>
<style></style>