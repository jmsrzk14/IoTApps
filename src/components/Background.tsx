import React from 'react';
import { Snowflake, Star } from 'lucide-react';

export function Background() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <Snowflake
          key={`snow-${i}`}
          className="text-white/80 absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
      
      {Array.from({ length: 15 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className="text-yellow-300 absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </>
  );
}