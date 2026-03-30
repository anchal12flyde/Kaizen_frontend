"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "./ui-kit/typography"


const slideVariant = (from) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -150 : 150,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

export default function AdvisorySection({ sections = [] }) {
 

  return (
    <section className="w-full overflow-hidden bg-[var(--color-background-1)]">
      {sections.map((item, index) => {
        const direction = index % 2 === 0 ? "right" : "left";

        return (
          <motion.div
            key={item.id}
            variants={slideVariant(direction)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row h-full w-full ${
              index == 0
                ? "border-t border-b border-[#31110F]"
                : "border-b border-[#31110F]"
            }`}
          >
            {/* Image */}
            <div
              className={`relative w-full md:w-[499px] h-[250px] md:h-auto ${
                item.reverse ? "md:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover "
                priority={item.id === 1}
              />
            </div>

            {/* Content */}
            <div
              className={`flex items-center flex-1 px-[20px] md:px-[80px_100px] py-[30px] md:py-[61px] ${
                item.reverse ? "md:order-1 md:px-[100px_80px]" : ""
              }`}
            >
              <div className="flex flex-col gap-[16px]">
                <Typography variant="header-4">{item.title}</Typography>
                <Typography variant="para-2">{item.desc}</Typography>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
