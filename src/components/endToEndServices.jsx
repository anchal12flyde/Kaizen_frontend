"use client";

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
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Financial Services & Fintech",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3b16c2a4",
  },
  {
    title: "Renewable Energy & Infrastructure",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
  },
  {
    title: "Digital Businesses",
    img: "https://images.unsplash.com/photo-1526378722445-9d0c0c2f8c36",
  },
  {
    title: "Consumer & Retail",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
  },
  {
    title: "Education & EdTech",
    img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
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
  hidden: {
    height: 0,
  },
  show: {
    height: "100%",
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};

/* ---------------------------------- */
/* Main */
/* ---------------------------------- */

export default function EndToEndServices() {
  return (
    <Container variant="sectionSp1" className="bg-[var(--color-background-2)]">
      <div>
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[96px]">
          <Typography variant="para-1" className="!text-white">
            End-to-End <br /> Services
          </Typography>

          <Typography variant="para-2" className="!text-white">
            Kaizen Law is a corporate and transaction advisory firm delivering
            big-firm quality advice through a partner-led, boutique model.
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
            <ServiceCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

/* ---------------------------------- */
/* Card */
/* ---------------------------------- */

function ServiceCard({ title, img }) {
  return (
    /* Fixed height wrapper */
    <div className="relative aspect-[3/4] overflow-hidden">
      {/* Animated container */}
      <motion.div
        variants={cardReveal}
        className="relative w-full overflow-hidden"
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
          <div className="pt-[36px] px-[26px]">
            <Typography variant="header-2" className="!text-white">
              {title}
            </Typography>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
