import { ref } from 'vue';

export function pixelFunctions(xPixels, yPixels) {
  const pixelRefs = ref(Array(yPixels).fill(null).map(() => Array(xPixels).fill(null)));

  const updatePixel = (xIndex, yIndex, visible) => {
    pixelRefs.value[yIndex][xIndex] = visible ? 'black' : '#fff';
  };

  return { pixelRefs, updatePixel };
}