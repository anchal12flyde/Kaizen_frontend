"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

const accordionData = [
  {
    title: "About",
    content: `Harsh is a highly experienced and recommended transactional lawyer with over 18 years of experience in advising on Indian laws. He specializes in mergers & acquisitions of listed and unlisted companies, private equity, and venture capital transactions. He has worked on complex, high-end transactions involving domestic and cross-border investments and acquisitions for leading Indian corporates, MNCs, and Indian start-ups and unicorns across diverse industry sectors such as manufacturing, healthcare, pharmaceuticals, e-commerce & logistics, I.T. & services, and new-age/sunrise sectors.

    In addition to transactional work, Harsh advises companies on commercial and contractual matters and acts as an external advisor to the board of directors of leading Indian companies. He has previously worked as a partner at Cyril Amarchand Mangaldas and Shardul Amarchand Mangaldas and in the London office of Herbert Smith Freehills LLP, an international law firm, on international corporate law transactions.
    
    Harsh has been recognized for his legal expertise and leadership in the legal profession by Indian and international publications.`,
  },
  {
    title: "Areas of Specialisation",
    content: `Mergers & Acquisitions,
Private Equity,
Venture Capital,
Corporate Restructuring,
Commercial Contracts.`,
  },
  {
    title: "Memberships and Associations",
    content: `Bar Council of India,
International Bar Association,
Indian National Bar Association.`,
  },
  {
    title: "Education",
    content: `LLB – Delhi University,
LLM – University of London.`,
  },
];

export default function ProfileAboutSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container variant="sectionSp1" className=" mt-[86px] !pt-0  ">
      <div className=" flex items-start gap-[68px]  ">
        {/* LEFT SIDE */}
        <div className="flex flex-col        ">
          {/* Profile Image */}

          <div className="shrink-0 !w-[472px] !h-[627px] ">
            <Image
              src="https://ik.imagekit.io/flyde/7e916c61a95f330254422851242e8bd9019db722.png"
              alt="Profile"
              width={200}
              height={150}
              className=" w-full h-full !object-cover"
            />
          </div>

          <div className="flex flex-col gap-[36px] mt-[68px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
            >
              <path
                d="M60.8657 59.1287C65.939 59.1287 70.8046 57.1133 74.3921 53.5258C77.9795 49.9384 79.9949 45.0728 79.9949 39.9995C79.9949 32.1947 75.9325 24.6474 69.8703 23.1901C67.5296 22.6267 65.6688 19.6251 66.0688 16.1992C66.6044 11.6152 70.7503 6.98244 78.9619 3.3305C80.7914 2.51664 80.0262 -0.234493 78.0402 0.0159264C56.6399 2.69402 41.806 16.6444 41.7365 36.3823C41.7365 49.9571 49.7568 59.1287 60.8657 59.1287ZM19.1292 59.1287C24.2026 59.1287 29.0682 57.1133 32.6556 53.5258C36.243 49.9384 38.2584 45.0728 38.2584 39.9995C38.2584 32.1947 34.1961 24.6474 28.1339 23.1901C25.7931 22.6267 23.9324 19.6251 24.3324 16.1992C24.868 11.6152 29.0138 6.98244 37.2254 3.3305C39.0549 2.51664 38.2897 -0.234493 36.3038 0.0159264C14.9034 2.69402 0.0695608 16.6444 0 36.3823C0 49.9571 8.02036 59.1287 19.1292 59.1287Z"
                fill="#B6996A"
              />
            </svg>
            <Typography variant="header-2">
              We proactively engage and partner with our clients to manage their
              commercial and legal risks and to enhance, build and protect their
              assets and opportunities.
            </Typography>
          </div>
        </div>

        {/* RIGHT SIDE - ACCORDION */}
        <div className="  ">
          {accordionData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={
                  index == 0
                    ? "  border-t border-b border-[#31110F] py-[28px] px-[26px] "
                    : "  border-b border-[#31110F] py-[28px] px-[26px] "
                }
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between  text-left"
                >
                  <Typography variant="header-2">{item.title}</Typography>

                  <span className="text-[#C8A26A]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300  ${
                    isOpen
                      ? "max-h-[1000px] opacity-100 mt-[36px]"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Typography variant="para-2">{item.content}</Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </Container>
  );
}
