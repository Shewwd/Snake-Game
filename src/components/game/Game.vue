<script setup lang="ts">
  import { computed, onMounted, onUnmounted, nextTick } from 'vue';
  import { userFunctions } from './functions/UserFunctions.js'
  import { pixelFunctions } from './functions/PixelFunctions.js'
  import { keyboardFunctions } from './functions/KeyboardFunctions.js'

  const xPixelCount = 50;
  const yPixelCount = 50;
  const rowHeight = computed(() => `${(window.innerHeight - 80) / yPixelCount}px`);
  const pixelWidth = computed(() => `${(window.innerWidth - 20) / xPixelCount}px`);

  const { pixelRefs, updatePixel } = pixelFunctions(xPixelCount, yPixelCount);

  const { userX, userY, userDirection, userTickRate, updateUserPosition } = userFunctions(xPixelCount, yPixelCount, pixelRefs, updatePixel);

  const { handleKeyDown } = keyboardFunctions(userDirection);

  let userInterval: number;

  onMounted(async () => {
    await nextTick();

    document.addEventListener('keydown', handleKeyDown);

    pixelRefs.value[userY.value][userX.value] = 'black';

    userInterval = setInterval(updateUserPosition, userTickRate.value);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
    clearInterval(userInterval);
  });
</script>

<template>
 <div class="game-container">
   <div class="y-pixel-row" v-for="(row, yIndex) in yPixelCount" :key="yIndex" :style="{ height: rowHeight }">
     <div v-for="(pixel, xIndex) in xPixelCount" :key="xIndex" :style="{ width: pixelWidth, backgroundColor: pixelRefs[yIndex][xIndex]}">
     </div>
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
