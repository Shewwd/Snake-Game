<script setup lang="ts">
  import Header from './components/layout/Header.vue';
  import Welcome from './components/Welcome.vue';
</script>

<template>
  <Header />

  <main>
    <Welcome />
  </main>
</template>

<style>
  main {
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 20px 0;
  }
</style>
