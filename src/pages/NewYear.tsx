import React from 'react';
import { Background } from '../components/Background';
import { PartyPopper, Sparkles, Rocket } from 'lucide-react';

export function NewYear() {
  return (
    <div className="relative min-h-[calc(100vh-56px)] flex items-center justify-center overflow-hidden">
      <Background />
      <div className="text-center z-10 space-y-8">
        <h1 className="text-6xl font-bold text-white mb-4 animate-scale">
          Happy New Year 2024
        </h1>
        <div className="flex justify-center gap-4 mb-6">
          <PartyPopper className="text-yellow-400 w-12 h-12 animate-party" />
          <Sparkles className="text-pink-400 w-12 h-12 animate-party delay-100" />
          <Rocket className="text-purple-400 w-12 h-12 animate-party delay-200" />
        </div>
        <div className="space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <p className="text-xl text-white/90">Here's to new beginnings!</p>
          <p className="text-lg text-white/80">
            May the New Year bring you joy, peace, and prosperity.
            Let's welcome 2024 with hope and determination.
          </p>
          <p className="text-lg text-white/80 mt-4">
            May each day of the new year be filled with exciting opportunities,
            meaningful moments, and beautiful memories.
          </p>
        </div>
      </div>
    </div>
  );
}