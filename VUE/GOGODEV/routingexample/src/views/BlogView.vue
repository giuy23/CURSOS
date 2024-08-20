<script lang="ts" setup>
import { onMounted } from "vue";
import PostService from "../services/PostService";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => await service.fetchAll());
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </li>
      <!-- <li v-for="post in posts" :key="post.id"> {{ post.title }}</li> -->
      <!-- <li><router-link :to="{name : 'post', params:{id: 1}}"> Primer Post </router-link></li>
      <li><router-link :to="{name : 'post', params:{id: 2}}"> Segundo Post </router-link></li>
      <li><router-link :to="{name : 'post', params:{id: 3}}"> Tercer Post </router-link></li>
      <li><router-link :to="{name : 'post', params:{id: 4}}"> Cuarto Post </router-link></li> -->
    </ul>
  </div>
</template>

<style scoped></style>
