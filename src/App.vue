<script setup lang="ts">
  import Header from './components/layout/Header.vue';
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<style>
  main {
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 20px;
  }
</style>
