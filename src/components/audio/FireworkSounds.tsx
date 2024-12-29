import React, { useEffect, useCallback, useRef } from 'react';
import SoundPlayer from '../../utils/audio/soundPlayer';

interface FireworkSoundsProps {
  enabled?: boolean;
  volume?: number;
}

export default function FireworkSounds({ enabled = true, volume = 0.3 }: FireworkSoundsProps) {
  const playerRef = useRef<SoundPlayer>();

  useEffect(() => {
    playerRef.current = new SoundPlayer(volume);
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume);
    }
  }, [volume]);

  const handleLaunch = useCallback(() => {
    if (enabled && playerRef.current) {
      playerRef.current.playFireworkLaunch();
    }
  }, [enabled]);

  const handleExplosion = useCallback(() => {
    if (enabled && playerRef.current) {
      playerRef.current.playFireworkExplosion();
    }
  }, [enabled]);

  useEffect(() => {
    window.addEventListener('firework-launch', handleLaunch);
    window.addEventListener('firework-explosion', handleExplosion);
    
    return () => {
      window.removeEventListener('firework-launch', handleLaunch);
      window.removeEventListener('firework-explosion', handleExplosion);
    };
  }, [handleLaunch, handleExplosion]);

  return null;
}