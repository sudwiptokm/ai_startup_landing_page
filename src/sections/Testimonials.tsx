"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Beyond Expectations.
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-lg tracking-tight text-white/70 md:text-xl">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>

        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex flex-none -translate-x-1/2 gap-5 pr-5"
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="max-w-xs flex-none rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:max-w-md md:p-10"
              >
                <div className="text-lg tracking-tight md:text-xl">
                  {testimonial.text}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 before:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-['']">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-white/50">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
