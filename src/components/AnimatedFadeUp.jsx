"use client";
import { motion } from "framer-motion";
import { ultraSmoothFade } from "@/animate/animations";

export default function AnimatedFadeUp({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={ultraSmoothFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true,}} 
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
