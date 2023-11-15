import { ref, computed } from 'vue';

export function userFunctions(xPixelCount, yPixelCount, pixelRefs, updatePixels) {
  const userX = ref(1);
  const userY = ref(1);
  
  const userLength = ref(1);

  const prevUserX = ref(userX.value);
  const prevUserY = ref(userY.value); 

  const userDirection = ref('right');

  const userTickRate = ref(100);

  const changeDirection = (direction) => {
    switch(direction) {
      case 'up':
        userY.value--;
        break;
      case 'down':
        userY.value++;
        break;
      case 'left':
        userX.value--;
        break;
      case 'right':
        userX.value++;
        break;
    }
  };

  const updateUserPosition = () => {
    if(userY.value - 1 < 0 || userY.value + 1 > yPixelCount || userX.value - 1 < 0 || userX.value + 1 > xPixelCount)
      return;

    prevUserX.value = userX.value;
    prevUserY.value = userY.value;
    updatePixels(prevUserX.value, prevUserY.value, false);

    changeDirection(userDirection.value);
    updatePixels(userX.value, userY.value, true);
  };

  return { userX, userY, userDirection, userTickRate, changeDirection, updateUserPosition };
}
