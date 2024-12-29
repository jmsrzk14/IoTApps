import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

interface CardContentProps {
  title: string;
  message: string;
  emoji?: string;
}

export default function CardContent({ title, message, emoji }: CardContentProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-center space-y-6"
    >
      {emoji && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-5xl mb-4"
        >
          {emoji}
        </motion.div>
      )}
      <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {title}
      </h2>
      <p className="text-xl text-white/90 leading-relaxed">
        {message}
      </p>
    </motion.div>
  );
}