"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

/* ---------------- COLORS ---------------- */

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  background2: "#0a193a",
  accent: "#B6996A",
  background3: "#1F0808",
};

/* ---------------- ANIMATION VARIANT ---------------- */

const textFadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay, // ✅ yahin hona chahiye
    },
  }),
};

/* ---------------- COMPONENT ---------------- */

const Typography = ({
  variant = "para-1",
  as,
  children,
  className,
  colorVariant = "black",

  /* 🔥 Animation Controls */
  animate = true,
  delay = 0,

  ...props
}) => {
  const Tag = as || getDefaultTag(variant);
  const MotionTag = motion(Tag);

  const commonProps = {
    className: clsx(variant, className),
    style: {
      whiteSpace: "pre-line",
      color: colorMap[colorVariant] || colorMap.black,
    },
    ...props,
  };

  /* ❌ No animation */
  if (!animate) {
    return <Tag {...commonProps}>{children}</Tag>;
  }

  /* ✅ Animated text */
  return (
    <MotionTag
      {...commonProps}
      variants={textFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

/* ---------------- TAG MAP ---------------- */

function getDefaultTag(variant) {
  const map = {
    "hero-display": "h1",
    "header-hero": "h1",
    "display-1": "h1",
    "display-2": "h2",
    "display-3": "h3",
    "header-1": "h1",
    "header-2": "h2",
    "header-3": "h3",
    "para-1": "p",
    "para-2": "p",
    "para-3": "p",
    buttonText: "span",
    linkText: "span",
    punctuation: "span",
  };

  return map[variant] || "p";
}

export default Typography;
