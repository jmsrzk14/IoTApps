import React, { useEffect, useRef } from 'react';
import { createFirework } from '../utils/fireworksAnimation';

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks: ReturnType<typeof createFirework>[] = [];
    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const numFireworks = Math.random() < 0.3 ? 2 : 0;

      for (let i = 0; i < numFireworks; i++) {
        fireworks.push(createFirework(canvas.width));
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        const firework = fireworks[i];
        if (firework.update(ctx)) {
          fireworks.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
