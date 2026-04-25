import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

// R3F v9 requires extending THREE objects into the JSX catalog
extend(THREE);

const BatParticles = () => {
  const meshRef = useRef();
  const count = 800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const goldColor = new THREE.Color('#F5C518');
    const amberColor = new THREE.Color('#E8A500');
    const darkColor = new THREE.Color('#333333');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const t = Math.random();
      let c;
      if (t < 0.15) {
        c = goldColor;
      } else if (t < 0.25) {
        c = amberColor;
      } else {
        c = darkColor;
      }
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.015;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

/* Glowing gold ring */
const GlowRing = ({ radius, speed }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed;
      ref.current.rotation.z = clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#F5C518" transparent opacity={0.12} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <BatParticles />
        <GlowRing radius={3} speed={0.15} />
        <GlowRing radius={4.5} speed={-0.1} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
};

export default Scene;
