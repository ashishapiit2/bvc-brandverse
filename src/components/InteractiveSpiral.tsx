import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  angle: number;
  distance: number;
  size: number;
  baseSize: number;
  color: string;
  speed: number;
  vx: number;
  vy: number;
}

export const InteractiveSpiral: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    // Track window resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Initialize particles in a beautiful double spiral pattern (softened to prevent hero clutter)
    const initParticles = () => {
      particles = [];
      const isMobile = width < 768;
      const numParticles = isMobile ? 100 : 220;
      
      const centers = [
        { x: width * 0.8, y: height * 0.3, scale: isMobile ? 120 : 220, count: numParticles * 0.6 },
        { x: width * 0.15, y: height * 0.75, scale: isMobile ? 60 : 100, count: numParticles * 0.2 },
        { x: width * 0.5, y: height * 0.9, scale: isMobile ? 50 : 80, count: numParticles * 0.2 }
      ];

      centers.forEach((center, cIdx) => {
        const { x: cx, y: cy, scale, count } = center;
        
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * (cIdx === 0 ? 8 : 5);
          const distance = Math.pow(i / count, 1.2) * scale;
          
          const baseX = cx + Math.cos(angle) * distance;
          const baseY = cy + Math.sin(angle) * distance;
          
          const baseSize = (0.2 + (i / count) * 0.8) * (cIdx === 0 ? 9 : 5);
          
          const hue = cIdx === 0 ? 32 + (i / count) * 8 : 200 + (i / count) * 20; 
          const saturation = 90;
          const lightness = cIdx === 0 ? 55 : 40;
          
          particles.push({
            x: baseX,
            y: baseY,
            baseX,
            baseY,
            angle,
            distance,
            size: baseSize,
            baseSize,
            // MUCH softer opacities (0.28 / 0.15) to preserve the design shape without creating a cluttered overlap
            color: `hsla(${hue}, ${saturation}%, ${lightness}%, ${cIdx === 0 ? 0.28 : 0.15})`,
            speed: 0.02 + Math.random() * 0.02,
            vx: 0,
            vy: 0
          });
        }
      });
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const computedStyle = getComputedStyle(document.documentElement);
      const isDark = computedStyle.getPropertyValue('color-scheme').includes('dark');
      
      particles.forEach((p, idx) => {
        // Slow background orbital motion (floating spiral)
        p.angle += p.speed * 0.05;
        // Let them expand and contract slightly (breathing)
        const breathe = Math.sin(Date.now() * 0.001 + p.distance * 0.01) * 0.08;
        const currentSize = p.size * (1 + breathe);

        // Physics: mouse interaction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxForceDist = 180;

        if (dist < maxForceDist && mouseRef.current.active) {
          const force = (maxForceDist - dist) / maxForceDist;
          // Push particles away from mouse
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * -3.5;
          const pushY = Math.sin(angle) * force * -3.5;
          
          p.vx += pushX;
          p.vy += pushY;
          
          // Hover size increase
          p.size = Math.min(p.baseSize * 2.2, p.size + 0.4);
        } else {
          // Return to base position
          p.vx += (p.baseX - p.x) * 0.06;
          p.vy += (p.baseY - p.y) * 0.06;
          
          // Cool down to base size
          p.size = Math.max(p.baseSize, p.size - 0.2);
        }

        // Apply friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        
        ctx.fillStyle = p.color;
        
        // Add subtle shadow glows in dark mode for stunning premium aesthetics
        if (isDark) {
          ctx.shadowBlur = currentSize * 1.5;
          ctx.shadowColor = p.color.replace('0.85', '0.5').replace('0.45', '0.2');
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw connections between very close particles to create a digital universe constellation mesh
        if (idx % 8 === 0) {
          for (let j = idx + 1; j < idx + 4; j++) {
            if (j >= particles.length) break;
            const p2 = particles[j];
            const connDx = p.x - p2.x;
            const connDy = p.y - p2.y;
            const connDist = Math.sqrt(connDx * connDx + connDy * connDy);
            
            if (connDist < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = isDark 
                ? `rgba(226, 135, 23, ${0.1 * (1 - connDist / 80)})` 
                : `rgba(11, 31, 63, ${0.05 * (1 - connDist / 80)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
