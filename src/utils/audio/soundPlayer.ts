import { FIREWORK_SOUNDS } from './constants';

class SoundPlayer {
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private volume: number = 0.3;
  private explosionIntervalId: number | null = null;

  constructor(volume?: number) {
    if (volume !== undefined) {
      this.volume = Math.max(0, Math.min(1, volume));
    }
  }

  private getRandomSound(category: keyof typeof FIREWORK_SOUNDS): string {
    const sounds = FIREWORK_SOUNDS[category];
    return sounds[Math.floor(Math.random() * sounds.length)];
  }

  private getAudio(url: string): HTMLAudioElement {
    let audio = this.audioCache.get(url);

    if (!audio) {
      audio = new Audio(url);
      audio.volume = this.volume;
      this.audioCache.set(url, audio);
    }

    return audio;
  }

  async playFireworkLaunch(): Promise<void> {
    const url = this.getRandomSound('launch');
    const audio = this.getAudio(url);

    try {
      if (audio.paused) {
        audio.currentTime = 0;
        await audio.play();
      }
    } catch (error) {
      console.warn('Failed to play launch sound:', error);
    }
  }

  async playFireworkExplosion(): Promise<void> {
    const url = this.getRandomSound('explosion');
    const audio = this.getAudio(url);

    try {
      if (audio.paused) {
        audio.currentTime = 0;
        await audio.play();
      }
    } catch (error) {
      console.warn('Failed to play explosion sound:', error);
    }
  }

  startExplosionLoop(interval: number = 30000): void {
    if (this.explosionIntervalId !== null) {
      return;
    }

    this.explosionIntervalId = window.setInterval(() => {
      this.playFireworkExplosion().catch(error => {
        console.warn('Error playing explosion sound in loop:', error);
      });
    }, interval);
  }

  stopExplosionLoop(): void {
    if (this.explosionIntervalId !== null) {
      clearInterval(this.explosionIntervalId);
      this.explosionIntervalId = null;
    }
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
    this.audioCache.forEach(audio => {
      audio.volume = this.volume;
    });
  }
}

export default SoundPlayer;
