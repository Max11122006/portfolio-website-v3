"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, Settings, Activity } from "lucide-react";

export default function CarProject() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const logs = [
        { id: 1, date: "System Boot", title: "Engine Swap Initiated", type: "info", desc: "Removed factory standard 2.0L block. Prepared bay for 3.5L V6 integration." },
        { id: 2, date: "Phase 2", title: "Custom Wiring Harness", type: "alert", desc: "Found short in primary ignition circuit. Built custom harness to route power efficiently." },
        { id: 3, date: "Phase 3", title: "ECU Tuning", type: "success", desc: "Flashed custom fuel maps. Achieved stable idle at 850 RPM." },
        { id: 4, date: "Final Phase", title: "Suspension Geometry", type: "info", desc: "Adjusted camber and toe for aerodynamic stability at high speeds." },
    ];

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="min-h-[200vh] bg-[#02050a] text-gray-200 selection:bg-primary/30 relative">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.05]" />
            </div>

            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between pointer-events-auto">
                <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-none">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-widest">Return to Main</span>
                </Link>
                <div className="flex items-center gap-2 font-mono text-xs text-primary/70">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    MODULE: AUTOMOTIVE
                </div>
            </nav>

            <div ref={containerRef} className="relative z-10 pt-32 pb-40 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="relative h-[40vh] lg:h-screen pointer-events-none">
                    <div className="sticky top-32 w-full h-auto flex flex-col items-center justify-center">
                        <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <motion.path
                                d="M 150 250 L 150 200 L 250 150 L 500 150 L 650 200 L 650 250 Z M 200 250 A 40 40 0 1 1 280 250 A 40 40 0 1 1 200 250 M 520 250 A 40 40 0 1 1 600 250 A 40 40 0 1 1 520 250"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />
                            <motion.path
                                d="M 150 250 L 150 200 L 250 150 L 500 150 L 650 200 L 650 250 Z M 200 250 A 40 40 0 1 1 280 250 A 40 40 0 1 1 200 250 M 520 250 A 40 40 0 1 1 600 250 A 40 40 0 1 1 520 250"
                                fill="none"
                                stroke="rgba(59, 130, 246, 0.9)"
                                strokeWidth="4"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                        <div className="mt-8 font-mono text-xs text-center text-primary/60 tracking-[0.3em] uppercase">
                            Chassis Diagnostic View
                        </div>
                    </div>
                </div>

                <div className="relative pointer-events-auto mt-20 lg:mt-64">
                    <div className="absolute left-[27px] top-0 bottom-0 w-px bg-primary/10" />
                    <motion.div
                        className="absolute left-[27px] top-0 w-px bg-primary drop-shadow-[0_0_5px_rgba(59,130,246,1)]"
                        style={{ height: lineHeight }}
                    />
                    <div className="space-y-48 pb-[50vh]">
                        {logs.map((log) => (
                            <LogEntry key={log.id} log={log} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

type LogType = {
    id: number;
    date: string;
    title: string;
    type: string;
    desc: string;
};

function LogEntry({ log }: { log: LogType }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-16 group cursor-none"
        >
            <div className="absolute left-[24px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-[#02050a] group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />

            <div className="font-mono text-xs text-primary/70 mb-2 tracking-wider flex items-center gap-4">
                <span>{log.date}</span>
                <div className="h-px w-8 bg-primary/30" />
            </div>

            <div
                className="border border-primary/20 bg-[#0a0f1a]/80 backdrop-blur p-5 rounded-lg hover:border-primary/50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center justify-between">
                    <h3 className="font-sans text-[1.1rem] text-white flex items-center gap-3">
                        {log.type === 'alert' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                        {log.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                        {log.type === 'info' && <Settings className="w-5 h-5 text-primary" />}
                        {log.title}
                    </h3>
                    <Activity className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-90 text-primary' : ''}`} />
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 mt-4 border-t border-primary/10">
                                <p className="font-mono text-sm text-gray-400 leading-relaxed font-light">
                                    {`> ${log.desc}`}
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <div className="px-2 py-1 bg-primary/10 text-primary text-[10px] uppercase font-mono rounded">System Log</div>
                                    <div className="px-2 py-1 bg-primary/10 text-primary text-[10px] uppercase font-mono rounded">Status: Verified</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
