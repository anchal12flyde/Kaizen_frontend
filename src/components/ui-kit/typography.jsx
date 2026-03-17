"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  background2: "#0a193a",
  accent: "#B6996A",
  background3: "#1F0808",
};

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
      delay,
    },
  }),
};

const Typography = ({
  variant = "para-1",
  as,
  children,
  className,
  colorVariant = "black",
  animate = true,
  delay = 0,
  ...props
}) => {
  const Tag = as || getDefaultTag(variant);

  const commonProps = {
    className: clsx(variant, className),
    style: {
      whiteSpace: "pre-line",
      color: colorMap[colorVariant] || colorMap.black,
    },
    ...props,
  };

  // ✅ FIX: use motion.create
  const MotionTag = motion[Tag] || motion.p;

  if (!animate) {
    return <Tag {...commonProps}>{children}</Tag>;
  }

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

function getDefaultTag(variant) {
  const map = {
    "hero-display": "h1",
    "header-hero": "h2",
    "display-1": "h3",
    "display-2": "h4",
    "display-3": "h5",
    "header-1": "p",
    "header-2": "p",
    "header-3": "p",
    "header-4": "p",
    "header-5": "p",
    "header-6": "p",
    "para-1": "p",
    "para-2": "p",
    "para-3": "p",
    "big-firm": "p",
    buttonText: "span",
    linkText: "span",
    punctuation: "span",
  };

  return map[variant] || "p";
}

export default Typography;
