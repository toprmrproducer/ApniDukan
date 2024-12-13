import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const points = useRef<Array<{ x: number; y: number; alpha: number }>>([]);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mousePosition.x !== 0 && mousePosition.y !== 0) {
        // Add points along the path for smoother trail
        if (lastPoint.current) {
          const dx = mousePosition.x - lastPoint.current.x;
          const dy = mousePosition.y - lastPoint.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Add intermediate points for smoother trail
          if (distance > 10) {
            const steps = Math.floor(distance / 5);
            for (let i = 0; i < steps; i++) {
              points.current.push({
                x: lastPoint.current.x + (dx * i) / steps,
                y: lastPoint.current.y + (dy * i) / steps,
                alpha: 1
              });
            }
          }
        }

        points.current.push({
          x: mousePosition.x,
          y: mousePosition.y,
          alpha: 1
        });

        lastPoint.current = { x: mousePosition.x, y: mousePosition.y };
      }

      // Draw trail with constant width and more opacity
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      points.current.forEach((point, i) => {
        point.alpha *= 0.97; // Slower fade for more constant trail
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${point.alpha * 0.8})`;
        ctx.fill();
        
        if (points.current[i + 1]) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(points.current[i + 1].x, points.current[i + 1].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${point.alpha * 0.6})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      });

      points.current = points.current.filter(point => point.alpha > 0.02);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}