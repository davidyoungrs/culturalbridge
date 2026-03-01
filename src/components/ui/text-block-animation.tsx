"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { cn } from "../../lib/utils";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface TextBlockAnimationProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockColor?: string;
    duration?: number;
    className?: string;
}

/**
 * TextBlockAnimation
 * A high-impact reveal animation that uses a block "shutter" to reveal text.
 * Revised to work without the GSAP SplitText (Premium) plugin.
 */
export default function TextBlockAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = "#6366f1", // Default Indigo
    duration = 0.6,
    className
}: TextBlockAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !blockRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            scrollTrigger: animateOnScroll ? {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            } : null,
            delay: delay
        });

        // Set initial state
        gsap.set(contentRef.current, { opacity: 0 });
        gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left center" });

        // Animation Sequence
        tl.to(blockRef.current, {
            scaleX: 1,
            duration: duration,
        })
            .set(contentRef.current, { opacity: 1 }, `<${duration * 0.5}`)
            .to(blockRef.current, {
                scaleX: 0,
                transformOrigin: "right center",
                duration: duration,
            }, `<${duration * 0.4}`);

    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay, blockColor, duration]
    });

    return (
        <div ref={containerRef} className={cn("relative inline-block", className)}>
            <div ref={contentRef} className="relative z-0">
                {children}
            </div>
            <div
                ref={blockRef}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ backgroundColor: blockColor }}
            />
        </div>
    );
}
