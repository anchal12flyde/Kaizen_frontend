"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "./ui-kit/typography";


const sections = [
  {
    id: 1,
    title: "Who We Advise",
    desc: `Kaizen Law works with private equity funds, venture capital investors, and growth-stage companies across sectors. We support both sides of the investment ecosystem — investors deploying capital and founders raising capital to build and scale businesses.`,
    image: "https://ik.imagekit.io/flyde/Frame%202147238636.png",
    reverse: false,
  },
  {
    id: 2,
    title: "What We Do",
    desc: `Our practice covers the full lifecycle of investments, including early stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.`,
    image: "https://ik.imagekit.io/flyde/Frame%202147238636.png",
    reverse: true,
  },
  {
    id: 3,
    title: "How We Think",
    desc: `We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.`,
    image: "https://ik.imagekit.io/flyde/Frame%202147238636.png",
    reverse: false,
  },
];

const fadeVariant = (from) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -80 : 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
});

export default function AdvisorySection() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F4EB] ">
      {sections.map((item) => {
        const direction = item.reverse ? "left" : "right";

        return (
          <div
            key={item.id}
            className="flex  h-full !w-full border-b border-[#31110F]  "
          >
            {/* Image */}
            <motion.div
              variants={fadeVariant(direction)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative w-[499px] h-[238px]  ${
                item.reverse ? "md:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale"
                priority={item.id === 1}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeVariant(direction === "left" ? "right" : "left")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex items-center  flex-1 px-[80px_100px] py-[61px] ${
                item.reverse ? "md:order-1 px-[100px_80px] " : ""
              }`}
            >
              <div className=" flex flex-col gap-[16px] ">
                {/* Title */}
                <Typography variant="header-2" >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="para-2" >
                  {item.desc}
                </Typography>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
