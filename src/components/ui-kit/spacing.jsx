"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

/* ---------------- SPACING VARIANTS ---------------- */

const spacingVariants = {
  header: "header-spacing",
  heroSpacing: "hero-spacing",
  primarySpacing: "primary-spacing",
  secondarySpacing: "secondary-spacing",
  sectionSp1: "section-sp-1",
  sectionSpTop: "section-sp-top",
  sectionSpBottom: "section-sp-bottom",
  footerSpacing: "footer-spacing",
  metricSpacing: "metric-spacing",
};

/* ---------------- ANIMATION VARIANT ---------------- */

const containerFadeUp = {
  hidden: {
    opacity: 0,
    y: 60, // thoda zyada so movement dikhe
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
      staggerChildren: 0.12,
    },
  }),
};



export const Container = ({
  children,
  variant = "primarySpacing",
  className,


  animate = true,
  delay = 0,

  as = "div",
}) => {
  const Tag = as;
  const MotionTag = motion(Tag);

  const commonClass = clsx(spacingVariants[variant], className);


  if (!animate) {
    return <Tag className={commonClass}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={commonClass}
      variants={containerFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={delay}   
    >
      {children}
    </MotionTag>
  );
};
