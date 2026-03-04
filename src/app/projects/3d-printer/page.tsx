"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Box, Cylinder, Hexagon } from "lucide-react";

export default function PrinterProject() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const extruderY = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
    const bedY = useTransform(scrollYProgress, [0, 0.5], [150, 0]);
    const infoX = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const infoOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

    return (
        <main className="min-h-[250vh] bg-[#03060a] text-gray-200 selection:bg-cyan-500/30 relative overflow-hidden">
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between pointer-events-auto">
                <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-none">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-widest">Return to Main</span>
                </Link>
                <div className="px-3 py-1 bg-cyan-950/50 border border-cyan-500/30 rounded text-cyan-400 font-mono text-[10px] uppercase tracking-wider">
                    Fabrication Engine Online
                </div>
            </nav>

            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex flex-col justify-end opacity-20">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-full h-px bg-cyan-500 mb-[4vh]"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                ))}
            </div>

            <div ref={containerRef} className="relative z-10 w-full h-full">
                <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden max-w-6xl mx-auto px-6 pointer-events-none">

                    <div className="relative w-full md:w-1/2 h-[500px] flex justify-center perspective-1000">

                        <motion.div
                            style={{ y: extruderY, opacity }}
                            className="absolute top-[10%] w-64 p-5 bg-[#0a0f1a]/80 border border-cyan-500/40 rounded-xl backdrop-blur flex flex-col items-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.15)] pointer-events-auto"
                        >
                            <Cylinder className="w-10 h-10 text-cyan-400" />
                            <h3 className="font-mono text-xs uppercase tracking-widest text-white mt-2">Extruder Assembly</h3>
                            <p className="text-xs text-gray-400 text-center font-sans">Custom direct drive setup. Copperhead heatbreak capable of 300°C.</p>
                        </motion.div>

                        <motion.div
                            style={{ opacity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[150px] bg-gradient-to-b from-cyan-500/50 to-primary/50"
                        />

                        <motion.div
                            style={{ y: bedY, opacity }}
                            className="absolute bottom-[10%] w-80 p-5 bg-[#0a0f1a]/80 border border-primary/40 rounded-xl backdrop-blur flex flex-col items-center gap-2 shadow-[0_-10px_30px_rgba(59,130,246,0.15)] pointer-events-auto"
                        >
                            <Box className="w-10 h-10 text-primary" />
                            <h3 className="font-mono text-xs uppercase tracking-widest text-white mt-2">Heated Build Plate</h3>
                            <p className="text-xs text-gray-400 text-center font-sans">CoreXY kinematics platform. Silicone AC heater pad drawing 600W.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ x: infoX, opacity: infoOpacity }}
                        className="w-full md:w-1/2 max-w-sm mt-12 md:mt-0 ml-0 md:ml-12 pointer-events-auto"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Hexagon className="w-8 h-8 text-cyan-400" />
                            <h2 className="text-4xl font-sans tracking-tight text-white">Fabrication Specs</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="border-l-2 border-cyan-500/50 pl-5 py-1 hover:border-cyan-400 transition-colors">
                                <span className="block font-mono text-xs text-gray-500 mb-1">Volume</span>
                                <span className="block font-sans text-xl text-gray-200">350 x 350 x 400 mm</span>
                            </li>
                            <li className="border-l-2 border-cyan-500/50 pl-5 py-1 hover:border-cyan-400 transition-colors">
                                <span className="block font-mono text-xs text-gray-500 mb-1">Firmware</span>
                                <span className="block font-sans text-xl text-gray-200">Klipper via Raspberry Pi 4</span>
                            </li>
                            <li className="border-l-2 border-cyan-500/50 pl-5 py-1 hover:border-cyan-400 transition-colors">
                                <span className="block font-mono text-xs text-gray-500 mb-1">Max Acceleration</span>
                                <span className="block font-sans text-xl text-gray-200">15,000 mm/s²</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
