interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export function createFirework(width: number) {
  const colors = ['#ff0', '#f0f', '#0ff', '#ff4444', '#44ff44'];
  const baseX = Math.random() * width;
  const baseY = window.innerHeight;
  const particles: Particle[] = [];
  let gravity = 0.1;

  const vy = -(Math.random() * 5 + 11);

  function createExplosion(x: number, y: number) {
    window.dispatchEvent(new Event('firework-explosion'));
    
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = Math.random() * 2 + 3;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  let phase = 'rise';
  let currentY = baseY;
  let currentVy = vy;
  const maxHeight = window.innerHeight * 0.13;

  window.dispatchEvent(new Event('firework-launch'));

  return {
    update(ctx: CanvasRenderingContext2D): boolean {
      if (phase === 'rise') {
        currentY += currentVy;
        currentVy += gravity;

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(baseX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();

        if (currentVy >= 0 || currentY < maxHeight) {
          phase = 'explode';
          createExplosion(baseX, currentY);
        }
        return false;
      }

      let done = true;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += gravity;
        p.alpha *= 0.96;

        if (p.alpha > 0.1) done = false;

        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      return done;
    },
  };
}

function hexToRgb(hex: string): string {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}