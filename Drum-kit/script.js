
const soundMap = {
    'A': 'sounds/kick.wav',
    'S': 'sounds/snare.wav',
    'D': 'sounds/hihat.wav',
    'F': 'sounds/tom.wav',
    'G': 'sounds/tink.wav',
    'H': 'sounds/ride.wav',
    'J': 'sounds/openhat.wav',
    'K': 'sounds/kick.wav',
    'L': 'sounds/tink.wav'
  };
  
  
  function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  }
  
  
  function addAnimation(key) {
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if (button) {
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100);
    }
  }
  
  
  document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-key');
      playSound(key);
      addAnimation(key);
    });
  });
  
  
  document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    if (soundMap[key]) {
      playSound(key);
      addAnimation(key);
    }
  });
  