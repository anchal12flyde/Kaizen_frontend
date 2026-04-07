"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedFadeUp from "./AnimatedFadeUp";

function GuideItem({ item }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row md:items-center md:justify-between py-[38px] gap-[41px] md:gap-0"
    >
      {/* 🔥 Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-[0.5px]  overflow-hidden">
        <motion.div
          className="h-full bg-white/50 origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>

      <AnimatedFadeUp>
        <div className="w-[100px] h-[100px] flex items-center justify-center order-1 md:order-2">
          <img
            src={item.icon}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
      </AnimatedFadeUp>

      {/* Content */}
      <AnimatedFadeUp delay={ 0.15}>
        <div className="flex flex-col gap-[12px] order-2 md:order-1">
          <Typography variant="header-4" className="!text-white">
            {item.title}
          </Typography>
          <Typography variant="para-2" className="!text-white">
            {item.desc}
          </Typography>
        </div>
      </AnimatedFadeUp> 
    </div>
  );
}

export default function GuidesSection({ data }) {
  const { title, items } = data;

  return (
    <Container variant="primarySpacing" className="bg-[#0A193A]">
      <div className="flex flex-col md:gap-[96px] gap-[56px]">
        {/* Heading */}
        <AnimatedFadeUp>
          <Typography variant="header-6" className="!text-white">
            {title}
          </Typography>
        </AnimatedFadeUp>

        {/* List */}
        <div className="flex md:gap-[16px] gap-[2px] flex-col">
          {items.map((item, index) => (
            <GuideItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
