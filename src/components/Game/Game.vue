<script setup lang="ts">
  import { ref, computed, onMounted, nextTick } from 'vue';

  const xPixels = 100;
  const yPixels = 100;
  
  const rowHeight = computed(() => `${(window.innerHeight - 80) / yPixels}px`);
  const pixelWidth = computed(() => `${(window.innerWidth - 20) / xPixels}px`);

  const pixelRefs = ref([]);

  const setPixelRef = (yIndex, xIndex) => (el) => {
    if (!pixelRefs.value[yIndex]) {
      pixelRefs.value[yIndex] = [];
    }
    pixelRefs.value[yIndex][xIndex] = el;
  };

  onMounted(async () => {
    await nextTick();

    pixelRefs.value[0][0].style.backgroundColor = 'black';
  });
</script>

<template>
  <div class="game-container">
    <div class="y-pixel-row" v-for="(row, yIndex) in yPixels" :key="yIndex" :style="{ height: rowHeight }">
      <div v-for="(pixel, xIndex) in xPixels" :key="xIndex" :ref="setPixelRef(yIndex, xIndex)" :style="{ width: pixelWidth}"
      ></div>
    </div>
  </div>
</template>

<style scoped>
  .game-container {
    height: calc(100vh - 80px);
    border: 1px solid black;
  }

  .y-pixel-row {
    display: flex;
    flex-direction: row;
  }
</style>