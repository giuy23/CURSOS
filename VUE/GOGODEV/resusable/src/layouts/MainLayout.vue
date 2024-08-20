<script lang="ts" setup>
import AuxBar from '../components/AuxBar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
  <div class="container">
    <div class="auxbar">
      <AuxBar/>
    </div>

    <div class="main-content-container">
      <div class="menu">
        <Sidebar/>
      </div>
      
      <div class="main-content">
        <slot name="main"></slot>

      </div>

      <div class="aux-content">
        <slot name="aux"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>