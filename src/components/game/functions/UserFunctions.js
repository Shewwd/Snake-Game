import { ref, computed } from 'vue';

export function userFunctions(xPixelCount, yPixelCount, pixelRefs, foodPixel, updatePixel) {
  const userX = ref(3);
  const userY = ref(1);
  
  const userTail = ref([{y: 1, x: 2},{y: 1, x: 1}]);

  const userDirection = ref('right');

  const userTickRate = ref(100);

  const changeDirection = (newDirection) => {
    switch(newDirection) {
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

  const generateNewFood = () => {
    let newFoodX;
    let newFoodY;

    do {
    newFoodX = Math.floor(Math.random() * xPixelCount);
    newFoodY = Math.floor(Math.random() * yPixelCount);
    } while (userTail.value.some(segment => segment.x === newFoodX && segment.y === newFoodY));

    foodPixel.value.x = newFoodX;
    foodPixel.value.y = newFoodY;
    pixelRefs.value[foodPixel.value.y][foodPixel.value.x] = 'red';
  }

  const updateUserPosition = () => {
    if(userY.value - 1 < 0 || userY.value + 1 > yPixelCount || userX.value - 1 < 0 || userX.value + 1 > xPixelCount)
      return;
   
    for(var i = userTail.value.length - 1; i >= 0; i--){
      if(i === 0){
        userTail.value[i].x = userX.value;
        userTail.value[i].y = userY.value;
      } else if(i === userTail.value.length - 1){
        updatePixel(userTail.value[i].x, userTail.value[i].y, false);
        userTail.value[i].x = userTail.value[i - 1].x;
        userTail.value[i].y = userTail.value[i - 1].y;
      } else {
        userTail.value[i].x = userTail.value[i - 1].x;
        userTail.value[i].y = userTail.value[i - 1].y;
      }
    }

    if(userX.value === foodPixel.value.x && userY.value === foodPixel.value.y){
      userTail.value.push({x: userTail.value[userTail.value.length - 1].x, y: userTail.value[userTail.value.length - 1].y});
      generateNewFood();
    }
   
    changeDirection(userDirection.value);
    updatePixel(userX.value, userY.value, true);
   };

  return { userX, userY, userTail, userDirection, userTickRate, changeDirection, updateUserPosition };
}
