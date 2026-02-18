"use client";

import Image from "next/image";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

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

export default function EndToEndServices() {
  return (
    <Container
      variant="sectionSp1"
      className=" bg-[var(--color-background-2)] "
    >
      <div className="">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[96px] ">
          <Typography variant="para-1" className=" !text-white ">
            End-to-End <br /> Services
          </Typography>

          <Typography variant="para-2" className=" !text-white ">
            Kaizen Law is a corporate and transaction advisory firm delivering
            big-firm quality advice through a partner-led, boutique model.
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] mt-[100px]  ">
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

/* ---------------------------------- */
/* Card Component */
/* ---------------------------------- */

function ServiceCard({ title, img }) {
  return (
    <div className="group relative overflow-hidden  aspect-[3/4] cursor-pointer">
      {/* Image */}
      <Image
        src={img}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/40
          to-transparent
          opacity-90
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Title */}
      <div className="absolute top-[36px] left-[26px] right-[26px] z-10">
        <Typography
          variant="header-2"
          className="
            !text-white    
          "
        >
          {title}
        </Typography>
      </div>
    </div>
  );
}
