"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

/* ---------------------------------- */
/* Data */
/* ---------------------------------- */

const services = [
  {
    title: "Startups & Emerging Companies",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%208.png",
  },
  {
    title: "Financial Services & Fintech",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%208%20(1).png",
  },
  {
    title: "Renewable Energy & Infrastructure",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%208%20(2).png",
  },
  {
    title: "Digital Businesses",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%208%20(3).png",
  },
  {
    title: "Consumer & Retail",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%209%20(1).png",
  },
  {
    title: "Education & EdTech",
    img: "https://ik.imagekit.io/a9uxeuyhx/Kaizen/Rectangle%208%20(4).png",
  },
];

/* ---------------------------------- */
/* Animation */
/* ---------------------------------- */

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardReveal = {
  hidden: { height: 0 },
  show: { height: "100%", transition: { duration: 1.4, ease: "easeInOut" } },
};


export default function EndToEndServices() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  
  return (
    <Container
      variant="primarySpacing"
      className="bg-[var(--color-background-2)]"
    >
      <div>
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[96px]">
          <Typography variant="header-6" className="!text-white w-[250px]">
            Lorem Ipsum
            <br />
            Dolor
          </Typography>

          <Typography variant="para-2" className="!text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Typography>
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] mt-[100px]"
        >
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}


function ServiceCard({ title, img, isMobile }) {
  return (
    /* Fixed height wrapper */
    <div
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-[500px]" : "h-[500px]"
      }`}
    >
      {/* Animated container */}
      <motion.div
        variants={!isMobile ? cardReveal : {}}
        initial={!isMobile ? "hidden" : false}
        animate={!isMobile ? "show" : false}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <Image src={img} alt={title} fill className="object-cover" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content wrapper */}
        <div className="relative h-full flex items-start">
          {/* Title */}
          <div
            className={`${
              isMobile ? "pt-[20px] px-[16px]" : "pt-[36px] px-[26px]"
            }`}
          >
            <Typography variant="header-2" className="!text-white">
              {title}
            </Typography>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
