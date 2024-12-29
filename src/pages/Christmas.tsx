import React from 'react';
import { Background } from '../components/Background';
import { Gift, Tree, Bell } from 'lucide-react';

export function Christmas() {
  return (
    <div className="relative min-h-[calc(100vh-56px)] flex items-center justify-center overflow-hidden">
      <Background />
      <div className="text-center z-10 space-y-8">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
          Merry Christmas
        </h1>
        <div className="flex justify-center gap-4 mb-6">
          <Gift className="text-red-500 w-12 h-12 animate-bounce" />
          <Tree className="text-green-500 w-12 h-12 animate-bounce delay-100" />
          <Bell className="text-yellow-500 w-12 h-12 animate-bounce delay-200" />
        </div>
        <div className="space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <p className="text-xl text-white/90">May your days be merry and bright!</p>
          <p className="text-lg text-white/80">
            Let the spirit of Christmas fill your home with joy, your heart with love,
            and your life with laughter.
          </p>
          <p className="text-lg text-white/80 mt-4">
            Wishing you and your loved ones a blessed Christmas season filled with
            warmth, love, and wonderful memories.
          </p>
        </div>
      </div>
    </div>
  );
}