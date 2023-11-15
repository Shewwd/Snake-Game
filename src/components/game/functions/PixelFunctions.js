import { ref } from 'vue';

export function usePixelUpdating(xPixels, yPixels) {
  const pixelRefs = ref(Array(yPixels).fill(null).map(() => Array(xPixels).fill(null)));

  const updatePixels = (xIndex, yIndex, visible) => {
    pixelRefs.value[yIndex][xIndex] = visible ? 'black' : '#fff';
  };

  return { pixelRefs, updatePixels };
}