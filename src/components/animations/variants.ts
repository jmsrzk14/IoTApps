import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
};

export const sparkleVariants: Variants = {
  initial: { scale: 0, rotate: -45 },
  animate: { 
    scale: [0, 1, 0.8, 1],
    rotate: [-45, 0],
    transition: { duration: 0.5 }
  }
};