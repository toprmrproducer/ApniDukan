import { useEffect } from 'react';

export function useHoverIllumination() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Create smaller illumination effect
      const illumination = document.createElement('div');
      illumination.className = 'pointer-events-none fixed z-40 opacity-0';
      illumination.style.cssText = `
        left: ${x - 75}px;
        top: ${y - 75}px;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.25) 0%, transparent 70%);
        transition: opacity 0.2s ease-out;
      `;

      document.body.appendChild(illumination);

      requestAnimationFrame(() => {
        illumination.style.opacity = '1';
      });

      // Shorter duration for more responsive feel
      setTimeout(() => {
        illumination.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(illumination);
        }, 200);
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}