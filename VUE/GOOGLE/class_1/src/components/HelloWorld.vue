    <script setup>
    import { ref, nextTick } from 'vue';

    const message = ref('Hello');
    const messageEl = ref(null);

    const updateMessage = async () => {
      message.value = 'Hello, Vue!';
      // The DOM element for messageEl might not be updated yet here
      await nextTick(); // Wait for the DOM to update
      console.log(messageEl.value.textContent); // Now it will be 'Hello, Vue!'
    };

    const target = {
      message1: "hello",
      message2: "everyone",
    };
    const handler2 = {
      get: (target, prop, reciever) => {
        return "world"
      },
    }

    const proxy3 = new Proxy(target, handler2)
</script>

    <template>
      <p ref="messageEl">{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </template>