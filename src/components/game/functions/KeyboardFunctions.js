import { ref } from 'vue';

export function keyboardFunctions(userDirection) {
  const handleKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowUp':
        if(userDirection.value !== 'down')
          userDirection.value = 'up';
        break;
      case 'ArrowDown':
        if(userDirection.value !== 'up')
          userDirection.value = 'down';
        break;
      case 'ArrowLeft':
        if(userDirection.value !== 'right')
          userDirection.value = 'left';
        break;
      case 'ArrowRight':
        if(userDirection.value !== 'left')
          userDirection.value = 'right';
        break;
    }
  };

 return handleKeyDown;
}