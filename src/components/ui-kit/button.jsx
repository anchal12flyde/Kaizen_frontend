"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANT ---------------- */

const buttonFadeUp = {
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

const Button = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  showIcon = true,
  className,
  as,
  disabled = false,
  animate = true,
  delay = 0,
  ...props
}) => {
  const Tag = as || "button";
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      disabled={disabled}
      variants={buttonFadeUp}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true }}
      custom={delay}
      className={clsx(
        "btn",
        `btn--${variant}`,
        disabled && "btn--disabled",
        icon && showIcon && "btn--with-icon",
        className
      )}
      {...props}
    >
      {icon && showIcon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}

      {children}

      {icon && showIcon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </MotionTag>
  );
};

export default Button;
