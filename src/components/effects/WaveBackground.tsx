import { useEffect, useRef } from 'react';

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let time = 0;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Multiple wave layers with different speeds and colors
      const waves = [
        { amplitude: 50, frequency: 0.02, speed: 0.04, color: '#00d4ff', opacity: 0.03 },
        { amplitude: 30, frequency: 0.03, speed: 0.05, color: '#00ff85', opacity: 0.02 },
        { amplitude: 20, frequency: 0.01, speed: 0.03, color: '#00d4ff', opacity: 0.01 }
      ];

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x += 2) { // Increased step for better performance
          const y = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, canvas.height / 2 + y);
        }

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `${wave.color}00`);
        gradient.addColorStop(0.5, `${wave.color}${Math.floor(wave.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${wave.color}00`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      time += 0.05;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}