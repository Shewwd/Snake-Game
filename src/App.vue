<script setup lang="ts">
  import { ref } from 'vue';

  import Header from './Components/Header.vue'

  const clicks = ref(0);

  const ClickFunction = () => {
    clicks.value++;
  };
</script>

<template>
  <Header />

  <main>
    <h1>Hello World</h1>
    <button @click="ClickFunction()">Click me!</button>
    <p>the amount of clicks is {{ clicks }}</p>
  </main>
</template>

<style>
</style>
