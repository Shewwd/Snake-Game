import { ref } from 'vue';

export function useKeyboardEvents(userDirection) {
  const handleKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowUp':
        userDirection.value = 'up';
        break;
      case 'ArrowDown':
        userDirection.value = 'down';
        break;
      case 'ArrowLeft':
        userDirection.value = 'left';
        break;
      case 'ArrowRight':
        userDirection.value = 'right';
        break;
    }
  };

 return { handleKeyDown };
}