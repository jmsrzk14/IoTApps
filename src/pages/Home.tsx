import React from 'react';
import Fireworks from '../components/Fireworks';
import FireworkSounds from '../components/audio/FireworkSounds';
import WalkingCard from '../components/WalkingCard';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FireworkSounds />
      <Fireworks />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <WalkingCard />
      </div>
    </div>
  );
}