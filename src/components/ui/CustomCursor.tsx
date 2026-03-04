"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isVisible]);

    if (!isVisible && typeof window !== 'undefined') return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 mix-blend-screen"
            style={{
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isClicking ? 0.7 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 800,
                damping: 40,
                mass: 0.1,
            }}
        >
            <div className="h-1.5 w-1.5 rounded-full bg-primary glow" style={{ boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.5)" }} />
        </motion.div>
    );
}
