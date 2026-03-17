"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function GuidesSection({ s}) {
  const items = [
    {
      title: "Execution Excellence",
      desc: "Relentless focus on quality, timelines, and outcomes.",
    },
    {
      title: "Senior Ownership",
      desc: "Direct partner and senior lawyer involvement throughout every mandate.",
    },
    {
      title: "Commercial Insight",
      desc: "Advice grounded in business realities, not theoretical risk.",
    },
    {
      title: "Integrity",
      desc: "Independent judgment, discretion, and professional responsibility.",
    },
    {
      title: "Client Partnership",
      desc: "Long-term relationships over one-off transactions.",
    },
  ];

  return (
    <Container variant="primarySpacing" className=" bg-[#0A193A] ">
      <div className=" flex flex-col md:gap-[96px] gap-[56px] ">
        {/* Heading */}
        <Typography variant="header-6" className=" !text-white ">
          What Guides Our Work
        </Typography>

        {/* List */}
        <div className="flex md:gap-[16px] gap-[2px] flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-white/30 py-[38px] gap-[41px] md:gap-0"
            >
              {/* Icon */}
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center order-1 md:order-2">
                {/* Placeholder Icon */}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[12px] order-2 md:order-1">
                <Typography variant="header-4" className="!text-white">
                  {item.title}
                </Typography>
                <Typography variant="para-2" className="!text-white">
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}

          {/* Bottom Border */}
          <div className="border-t border-white/30 "></div>
        </div>
      </div>
    </Container>
  );
}
