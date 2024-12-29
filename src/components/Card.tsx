import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}