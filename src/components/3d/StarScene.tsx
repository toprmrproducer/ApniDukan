import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls, Float } from '@react-three/drei';
import { RotatingStar } from './RotatingStar';

export function StarScene() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-32 w-[180px] h-[180px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="star-canvas"
      >
        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-1, 0.75]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <RotatingStar />
            </PresentationControls>
          </Float>
          
          <Environment preset="city" />
          
          {/* Enhanced lighting */}
          <directionalLight position={[10, 10, 5]} intensity={2} color="#00d4ff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#00ff85" />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}