<script lang="ts" setup>
import { onMounted } from "vue";
import PostService from "../services/PostService";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => await service.fetchAll());
</script>

<template>
  <h1 class="btn btn-success">LISTADO DE POSTS</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<style scoped lang="scss">
  .post-list{
    width: 95%;
    height: 75px;
    padding: 20px;
    list-style-type: none;
  }

  .post-list li {
    padding: 10px;
    width: 100%;
    border: 1px solid $red;
  }
</style>
