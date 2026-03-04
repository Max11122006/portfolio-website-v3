"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Cpu, Printer, Car, Github, ChevronRight } from "lucide-react";

const projects = [
    { id: "car", title: "Automotive Systems", icon: Car, href: "/projects/car", x: "-35%", y: "-30%", delay: 0.1, status: "Active" },
    { id: "printer", title: "Fabrication Engine", icon: Printer, href: "/projects/3d-printer", x: "35%", y: "-15%", delay: 0.3, status: "Active" },
    { id: "github", title: "Software Core", icon: Github, href: "#github-engine", x: "0%", y: "45%", delay: 0.5, status: "Routing" },
];

export default function ProjectShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
    const pathProg = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[250vh]">
            <motion.div
                className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
                style={{ opacity }}
            >
                <div className="absolute top-12 text-center text-primary pointer-events-none">
                    <p className="font-mono text-xs tracking-widest uppercase">System Initialization Complete</p>
                    <div className="h-px w-32 bg-primary/30 mx-auto mt-2" />
                    <p className="mt-4 font-sans text-xl tracking-tight text-white block">Modules Activated</p>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        /* Lines connecting Center to Car, Printer, Github */
                        d="M 50% 50% L 35% 35% M 50% 50% L 65% 42.5% M 50% 50% L 50% 72.5%"
                        stroke="url(#lineGrad)"
                        strokeWidth="2"
                        fill="none"
                        style={{ pathLength: pathProg }}
                    />
                </svg>

                <motion.div style={{ scale }} className="relative w-full max-w-5xl aspect-video flex items-center justify-center z-10">

                    {/* Central Hub Node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
                        <div className="h-20 w-20 md:h-28 md:w-28 rounded-full border border-primary/40 bg-background/80 flex items-center justify-center backdrop-blur-sm relative glow shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                            <Cpu className="text-primary w-8 h-8 md:w-12 md:h-12" />
                            <div className="absolute inset-0 rounded-full animate-[ping_3s_ease-in-out_infinite] opacity-20 border border-primary" />
                        </div>
                        <div className="mt-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-primary font-mono text-[10px] uppercase tracking-wider">
                            Main Board
                        </div>
                    </div>

                    {/* Project Node Cards */}
                    {projects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            className="absolute"
                            style={{ top: "50%", left: "50%", x: proj.x, y: proj.y, translateX: "-50%", translateY: "-50%" }}
                        >
                            <Link href={proj.href}>
                                <motion.div
                                    className="group flex flex-col items-start gap-4 p-5 md:p-6 rounded-xl border border-primary/20 bg-background/80 backdrop-blur hover:border-primary/80 transition-all cursor-none w-[200px] md:w-[260px] shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <proj.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-primary transition-colors" />
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[10px] font-mono text-gray-500 uppercase">{proj.status}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1 w-full">
                                        <span className="font-sans font-medium text-sm md:text-base tracking-wide text-gray-200 group-hover:text-white transition-colors block">
                                            {proj.title}
                                        </span>
                                        <span className="font-mono text-[10px] text-primary/70 flex items-center gap-1 group-hover:text-primary transition-colors">
                                            Enter Module <ChevronRight className="w-3 h-3" />
                                        </span>
                                    </div>

                                    <div className="h-[2px] w-full bg-primary/10 mt-2 rounded-full overflow-hidden">
                                        <div className="h-full w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </section>
    );
}
