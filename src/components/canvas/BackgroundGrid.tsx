"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MovingGrid() {
    const gridRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        if (gridRef.current) {
            // Very slow vertical float
            gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2 - 2;

            // Reactive tilt to mouse
            gridRef.current.rotation.x = THREE.MathUtils.lerp(
                gridRef.current.rotation.x,
                mouse.y * 0.1,
                0.05
            );
            gridRef.current.rotation.z = THREE.MathUtils.lerp(
                gridRef.current.rotation.z,
                -mouse.x * 0.05,
                0.05
            );
        }
    });

    return (
        <group ref={gridRef}>
            <Grid
                args={[40, 40]}
                cellSize={0.6}
                cellThickness={1}
                cellColor="#1e3a8a"
                sectionSize={3}
                sectionThickness={1.5}
                sectionColor="#3b82f6"
                fadeDistance={20}
                fadeStrength={1.5}
            />
            {/* Second grid layer for depth/parallax */}
            <Grid
                position={[0, -0.5, 0]}
                args={[40, 40]}
                cellSize={0.6}
                cellThickness={0.5}
                cellColor="#0f172a"
                sectionSize={3}
                sectionThickness={0.8}
                sectionColor="#1e3a8a"
                fadeDistance={20}
                fadeStrength={2}
            />
        </group>
    );
}

export default function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <fog attach="fog" args={['#050505', 4, 15]} />
                <ambientLight intensity={0.5} />
                <MovingGrid />
            </Canvas>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
        </div>
    );
}
