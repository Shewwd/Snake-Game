import { ref } from 'vue';

export function useUserMovement() {
  const userX = ref(1);
  const userY = ref(1);

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

  return { userX, userY, changeDirection };
}