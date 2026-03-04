"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import RotatingObject from '../canvas/RotatingObject';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const fontStretch = useTransform(scrollY, [0, 200], [0, 10]); // Morphing name style

    return (
        <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                    <ambientLight intensity={4} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                    <RotatingObject />
                </Canvas>
            </div>

            <motion.div
                className="z-10 flex flex-col items-center justify-center text-center pointer-events-none"
                style={{ y, opacity }}
            >
                <motion.h1
                    className="text-6xl md:text-[8rem] font-sans tracking-tight text-white mb-2"
                    style={{ letterSpacing: fontStretch }}
                >
                    MAX
                </motion.h1>

                <motion.div
                    className="flex items-center gap-4 text-primary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="h-px w-16 md:w-24 bg-primary/50" />
                    <p className="font-mono text-sm tracking-[0.2em] uppercase glow-text">Systems Engineer</p>
                    <div className="h-px w-16 md:w-24 bg-primary/50" />
                </motion.div>
            </motion.div>

            {/* Status indicator */}
            <motion.div
                className="absolute bottom-12 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
            >
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" style={{ boxShadow: "0 0 10px 2px rgba(239, 68, 68, 0.5)" }} />
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">System Inactive : Scroll to Initialize</p>
                </div>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
