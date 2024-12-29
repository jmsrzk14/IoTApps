import React from 'react';
import { motion } from 'framer-motion';
import { sparkleVariants } from '../animations/variants';

export default function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          initial="initial"
          animate="animate"
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.3)',
          }}
        />
      ))}
    </div>
  );
}