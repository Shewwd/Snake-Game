<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

  import { useUserMovement } from './functions/UserMovementFunctions.js'
  import { usePixelUpdating } from './functions/PixelFunctions.js'
  import { useKeyboardEvents } from './functions/KeyboardFunctions.js'

  const xPixels = 50;
  const yPixels = 50;

  const { userX, userY, changeDirection } = useUserMovement();
  const prevUserX = ref(userX.value);
  const prevUserY = ref(userY.value); 
  const userDirection = ref('right');

  const userTickRate = ref(500);

  const rowHeight = computed(() => `${(window.innerHeight - 80) / yPixels}px`);
  const pixelWidth = computed(() => `${(window.innerWidth - 20) / xPixels}px`);

  const { pixelRefs, updatePixels } = usePixelUpdating(xPixels, yPixels);

  const updateUserPosition = () => {
    if(userY.value - 1 < 0 || userY.value + 1 > yPixels || userX.value - 1 < 0 || userX.value + 1 > xPixels)
      return;

    prevUserX.value = userX.value;
    prevUserY.value = userY.value;
    updatePixels(prevUserX.value, prevUserY.value, false);

    changeDirection(userDirection.value);
    updatePixels(userX.value, userY.value, true);
  };

  const { handleKeyDown } = useKeyboardEvents(userDirection);


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
   <div class="y-pixel-row" v-for="(row, yIndex) in yPixels" :key="yIndex" :style="{ height: rowHeight }">
     <div v-for="(pixel, xIndex) in xPixels" :key="xIndex" :style="{ width: pixelWidth, backgroundColor: pixelRefs[yIndex][xIndex]}">
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
