"use client";
// export default StarsCanvas;
import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="$ffffff" size={0.002} sizeAttenuation={true} dethWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures this runs only on the client
  }, []);

  if (!isMounted) return null; // Prevents rendering on the server

  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
