<script lang="ts" setup>
import PostServices from "../services/PostServices";
import { onMounted } from "vue";

const PostService = new PostServices();
const posts = PostService.getPosts();

onMounted(async () => {
  await PostService.fetchAll();
});
</script>

<template>
  <h1>LISTADO DE POST</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
    <RouterLink :to="{name: 'detail', params: {id:post.id}}">{{ post.title }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
