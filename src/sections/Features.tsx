"use client";

import ProductImage from "@/assets/product-image.png";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  ValueAnimationTransition,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { ComponentPropsWithoutRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const tabRef = React.useRef<HTMLDivElement>(null);
  const dotLottieRef = React.useRef<DotLottieCommonPlayer>(null);
  const handleTabHover = () => {
    if (dotLottieRef.current) {
      dotLottieRef.current.seek(0);
      dotLottieRef.current.play();
    }
  };
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const mask_image = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent`;

  React.useEffect(() => {
    const { height, width } = tabRef.current!.getBoundingClientRect();
    const circumference = 2 * (height + width);
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  return (
    <div
      className="relative flex items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1"
      onMouseEnter={handleTabHover}
      ref={tabRef}
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          className="absolute inset-0 -m-px rounded-xl border border-[#a369ff]"
          style={{ maskImage: mask_image }}
        ></motion.div>
      )}
      <div className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer
          src={props.icon}
          className="size-5"
          autoplay
          ref={dotLottieRef}
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const options: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      options,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      options,
    );

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      options,
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Elevate your SEO efforts.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg tracking-tight text-white/70 md:text-xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, index) => (
            <FeatureTab
              key={index}
              {...tab}
              onClick={() => {
                handleSelectTab(index);
              }}
              selected={selectedTab === index}
            />
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <motion.div
            className="aspect-video rounded-lg border border-white/20 bg-cover"
            style={{
              backgroundImage: `url(${ProductImage.src})`,
              backgroundSize,
              backgroundPosition,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
