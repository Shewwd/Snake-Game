import { ref } from 'vue';

export function pixelFunctions(xPixelCount, yPixelCount) {
  const pixelRefs = ref(Array(yPixelCount).fill(null).map(() => Array(xPixelCount).fill(null)));

  const generateNewFood = () => {
    let newFoodX;
    let newFoodY;

    do {
      newFoodX = Math.floor(Math.random() * xPixelCount);
      newFoodY = Math.floor(Math.random() * yPixelCount);
    } while (newFoodX !== (1 || 2 || 3) && newFoodY !== 1);

    foodPixel.value.x = newFoodX;
    foodPixel.value.y = newFoodY;
    pixelRefs.value[foodPixel.value.y][foodPixel.value.x] = 'red';
  }

  const foodPixel = ref({y: 33, x: 24});
  generateNewFood();

  const updatePixel = (xIndex, yIndex, visible) => {
    pixelRefs.value[yIndex][xIndex] = visible ? 'black' : '#fff';
  };

  return { pixelRefs, foodPixel, updatePixel };
}