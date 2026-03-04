"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, GitMerge, Star } from "lucide-react";

const repos = [
    { name: "autonomous-rover", desc: "ROS2 based navigation system for custom 3D printed rover", stars: 124, forks: 32 },
    { name: "cad-automation", desc: "Python scripts for automated parametric generation in Fusion360", stars: 89, forks: 12 },
    { name: "embedded-rtos", desc: "Custom RTOS implementation for STM32 microcontrollers", stars: 256, forks: 45 },
    { name: "telemetry-dashboard", desc: "React/Next.js realtime dashboard for telemetry data", stars: 45, forks: 8 },
];

export default function GitHubEngine() {
    return (
        <section id="github-engine" className="relative min-h-screen py-32 flex flex-col items-center overflow-hidden border-t border-primary/20 bg-background/50 backdrop-blur-sm">

            {/* Dense Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-20" />

                {/* Animated data lines */}
                <motion.div
                    className="absolute top-0 left-[20%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-primary to-transparent"
                    animate={{ y: ["-100vh", "200vh"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-0 right-[25%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
                    animate={{ y: ["-100vh", "200vh"] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.8 }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
                <motion.div
                    className="flex flex-col items-center mb-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <div className="h-20 w-20 rounded-full border-2 border-primary bg-background/80 flex items-center justify-center mb-6 relative glow shadow-[0_0_30px_rgba(59,130,246,0.3)] pointer-events-none">
                        <Github className="w-10 h-10 text-primary" />
                        <div className="absolute inset-0 rounded-full border border-primary animate-[ping_2s_ease-in-out_infinite] opacity-30" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-sans tracking-tight text-white">Software Core</h2>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="h-px w-8 bg-primary/40" />
                        <span className="font-mono text-xs tracking-[0.2em] text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                            GitHub Engine Online
                        </span>
                        <div className="h-px w-8 bg-primary/40" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {repos.map((repo, i) => (
                        <motion.div
                            key={repo.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-[#040812]/80 backdrop-blur-md border border-primary/20 hover:border-primary/60 p-6 rounded-xl overflow-hidden cursor-none transition-all shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                        >
                            {/* Scanline hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="font-mono text-lg text-gray-200 group-hover:text-white transition-colors">
                                            {repo.name}
                                        </h3>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
                                </div>

                                <p className="text-sm font-sans text-gray-400 mb-8 min-h-[40px] group-hover:text-gray-300 transition-colors">
                                    {repo.desc}
                                </p>

                                <div className="flex items-center gap-6 mt-auto">
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-primary/80 transition-colors">
                                        <Star className="w-3 h-3" />
                                        {repo.stars}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-primary/80 transition-colors">
                                        <GitMerge className="w-3 h-3" />
                                        {repo.forks}
                                    </div>

                                    <div className="ml-auto w-2 h-2 rounded-full bg-primary/20 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
