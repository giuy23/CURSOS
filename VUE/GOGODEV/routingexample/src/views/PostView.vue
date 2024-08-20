
<script lang="ts" setup>
import { onMounted, Ref } from 'vue';
import { useRoute } from 'vue-router';
import PostService from "../services/PostService";

const service = new PostService();
const post:Ref = service.getPosts();


onMounted(async() => {
  const route = useRoute();
  await service.fetchPost(Number(route.params.id));
})

// let postId:Ref<string> = ref('');

// onMounted(() => {
  
//   postId.value = route.params.id;
// })

</script>

<template>
  <div>Post view {{ post.id }}</div>
  <h2>{{ post.title }}</h2>
  <h3>{{ post.body }}</h3>

  <span><router-link :to="{name: 'blog'}">Volver Atrás</router-link></span>
</template>

<style scoped>

</style>