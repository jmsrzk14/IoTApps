import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',
  };

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}