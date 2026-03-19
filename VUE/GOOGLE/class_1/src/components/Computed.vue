<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const obj = {
  log: ["example", "test"],
  get prop() {
    return 'xd'
  },
  get latest() {
    return this.log.at(-1);
  },

}
console.log(publishedBooksMessage.value);

console.log(obj.prop);
console.log(obj.latest);




const count = ref(2)

// This computed will return the value of count when it's less or equal to 3.
// When count is >=4, the last value that fulfilled our condition will be returned
// instead until count is less or equal to 3
// const alwaysSmall = computed((previous) => {
//   if (count.value <= 3) {
//     return count.value
//   }

//   return previous
// })

const alwaysSmall = computed({
  get(previous) {
    if (count.value <= 9) {
      return count.value
    }

    return previous
  },
  set(newValue) {
    count.value = newValue * 2
  }
})

console.log(alwaysSmall.value = 3);

</script>

<template>
  <p class="" :class="$attrs.class">Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <section>
    <p>{{ count }}</p>
    <button @click="count++">Click me!</button>
    <code>{{ alwaysSmall }}</code>
  </section>
</template>