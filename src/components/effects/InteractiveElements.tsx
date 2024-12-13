import { useEffect } from 'react';

export function useInteractiveElements() {
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      
      // Create glow effect
      const glow = document.createElement('div');
      glow.className = 'pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300';
      glow.style.cssText = `
        background: radial-gradient(circle at center, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
        filter: blur(10px);
      `;
      
      target.style.position = 'relative';
      target.appendChild(glow);
      
      requestAnimationFrame(() => {
        glow.style.opacity = '1';
      });
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const glow = target.querySelector('div:last-child');
      if (glow) {
        glow.style.opacity = '0';
        setTimeout(() => {
          glow?.remove();
        }, 300);
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}