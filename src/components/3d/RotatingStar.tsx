import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RotatingStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (meshRef.current && materialRef.current) {
      // Create a more complex star shape
      const starShape = new THREE.Shape();
      const points = 5;
      const outerRadius = 1;
      const innerRadius = 0.4;
      const depth = 0.25;
      
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / points;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) starShape.moveTo(x, y);
        else starShape.lineTo(x, y);
      }
      starShape.closePath();

      const extrudeSettings = {
        depth,
        bevelEnabled: true,
        bevelSegments: 5,
        bevelSize: 0.1,
        bevelThickness: 0.1
      };

      const geometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
      meshRef.current.geometry = geometry;
      
      // Enhanced material properties
      materialRef.current.color = new THREE.Color('#00d4ff');
      materialRef.current.metalness = 0.9;
      materialRef.current.roughness = 0.1;
      materialRef.current.envMapIntensity = 1.5;
    }
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Mouse interaction
      const targetRotationX = mousePosition.current.y * 0.5;
      const targetRotationY = mousePosition.current.x * 0.5;
      
      // Smooth rotation
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.1;
      
      // Continuous rotation
      meshRef.current.rotation.y += delta * 0.5;
      
      // Floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Scale pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
      
      // Material color pulse
      if (materialRef.current) {
        const hue = (Math.sin(state.clock.elapsedTime * 0.5) + 1) * 0.1;
        materialRef.current.color.setHSL(hue, 1, 0.5);
        materialRef.current.emissive.setHSL(hue, 1, 0.2);
      }
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.2, 1.2, 1.2]} position={[0, 0, 0]}>
      <meshStandardMaterial
        ref={materialRef}
        attach="material"
        toneMapped={false}
        emissive="#00d4ff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}