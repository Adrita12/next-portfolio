"use client"
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
//@ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";


const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(5000), { radius: 1.2 })
    //The inSphere method is used to randomly place points inside a sphere.
    //The initial state is generated by the random.inSphere function, which creates 5000
    //random points inside a sphere of radius 1.2. The Float32Array(5000) creates an array to store 3D coordinates (x, y, z) of the points.
    );
  
    useFrame((state, delta) => {
    //The delta parameter provides the time difference between the current frame and the previous frame,
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    })
  
  return (
    <group rotation={[0,0, Math.PI / 4]}>
    <Points
    ref={ref}
    positions={sphere}
    stride={3}
    frustumCulled
    {...props}
    >
        <PointMaterial
            transparent
            color="$fff"
            size={0.002}
            sizeAttenuation={true}
            dethWrite={false}
        />
    </Points>
</group>
  )
};


const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)


export default StarsCanvas;
