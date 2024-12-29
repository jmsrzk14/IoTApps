import React from 'react';
import Card from '../components/Card';
import Fireworks from '../components/Fireworks';

const cards = [
  {
    id: 1,
    to: 'Friends & Family',
    from: 'John',
    message: 'Wishing you a year filled with joy and success!',
  },
  {
    id: 2,
    to: 'Everyone',
    from: 'Sarah',
    message: 'May the new year bring you happiness and prosperity!',
  },
  // Add more sample cards
];

export default function Gallery() {
  return (
    <div className="relative min-h-screen">
      <Fireworks />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          New Year Cards Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} className="transform hover:scale-105 transition-transform">
              <div className="text-white">
                <p className="text-sm text-purple-300 mb-2">To: {card.to}</p>
                <p className="text-lg mb-4">{card.message}</p>
                <p className="text-sm text-right text-purple-300">From: {card.from}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}