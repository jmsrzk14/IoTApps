import React from 'react';
import { Heart, Stars } from 'lucide-react';

interface CardPreviewProps {
  to: string;
  from: string;
  message: string;
  theme?: 'love' | 'classic';
}

export default function CardPreview({ to, from, message, theme = 'love' }: CardPreviewProps) {
  const themes = {
    love: 'bg-gradient-to-br from-pink-500 via-red-500 to-purple-500',
    classic: 'bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600'
  };

  return (
    <div className={`${themes[theme]} rounded-xl p-8 text-white shadow-xl`}>
      <div className="flex justify-between items-start mb-6">
        <Stars className="w-6 h-6 text-yellow-300" />
        <Heart className="w-6 h-6 text-pink-300" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Dear {to}</h3>
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{message}</p>
        <p className="text-right mt-6">With love,<br/>{from}</p>
      </div>
    </div>
  );
}