// Utility for managing audio playback
export const playFireworkSound = () => {
  const sounds = [
    'https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3', // Soft pop
    'https://assets.mixkit.co/active_storage/sfx/2871/2871-preview.mp3'  // Burst
  ];
  
  const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  audio.volume = 0.3; // Reduce volume to 30%
  
  return audio.play().catch(error => {
    console.log('Audio playback failed:', error);
  });
};