"use client";

import starsBg from "@/assets/stars.png";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "linear",
      }}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
    >
      {/* bg overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      {/* Planet */}
      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] md:size-96"></div>

      {/* 1st Ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute left-1/2 top-1/2 size-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20 md:size-[580px]"
      >
        <div className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border first-letter:border-white">
          <div className="size-2 rounded-full bg-white"></div>
        </div>
      </motion.div>

      {/* 2nd Ring */}
      <motion.div
        animate={{ rotate: "-1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:size-[780px]"
      ></motion.div>

      {/* 3rd Ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:size-[980px]"
      >
        <div className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_00%1_at_top_left_,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none">
          AI SEO
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
