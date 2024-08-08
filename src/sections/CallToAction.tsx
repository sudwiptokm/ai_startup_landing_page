"use client";

import GridBg from "@/assets/grid-lines.png";
import StarBg from "@/assets/stars.png";
import Button from "@/components/Button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { RefObject, useEffect } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (to.current) {
      const { left, top } = to.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const borderedDivRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="group relative overflow-hidden rounded-xl border border-white/15 py-24"
          style={{ backgroundImage: `url(${StarBg.src})`, backgroundPositionY }}
          animate={{ backgroundPositionX: StarBg.width }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay transition duration-700 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${GridBg.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] opacity-0 bg-blend-overlay transition duration-700 group-hover:opacity-100"
            style={{
              maskImage,
              backgroundImage: `url(${GridBg.src})`,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="mx-auto max-w-sm text-center text-5xl font-medium tracking-tighter md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mx-auto mt-5 max-w-xs px-4 text-center text-lg tracking-tight text-white/70 md:text-xl">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-8 flex justify-center">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
