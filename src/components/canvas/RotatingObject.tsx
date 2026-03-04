"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function RotatingObject() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
            groupRef.current.rotation.x += delta * 0.1;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Outer abstract wireframe */}
            <Icosahedron args={[1.5, 1]} >
                <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.2} />
            </Icosahedron>

            {/* Inner solid core */}
            <Icosahedron args={[0.7, 0]}>
                <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
            </Icosahedron>

            {/* Another wireframe offset slightly */}
            <Icosahedron args={[1.6, 2]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.1} />
            </Icosahedron>

            {/* Orbiting ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.2, 0.015, 16, 100]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
            </mesh>
        </group>
    );
}
