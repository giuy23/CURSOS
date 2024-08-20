<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import PostServices from "../services/PostServices";

const PostService = new PostServices();
const post = PostService.getPost();

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id;
  await PostService.fetchById(id);
});
</script>

<template>
  <div>{{ post.title }}</div>
  <p>{{ post.body }}</p>
  <router-link :to="{ name: 'home' }" class="link">VOLVER ATRÁS</router-link>
</template>

<style scoped></style>
