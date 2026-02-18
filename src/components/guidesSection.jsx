"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function GuidesSection({ serviceListPage = false }) {
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
    <Container variant="sectionSp1" className=" bg-[#0A193A] ">
      {serviceListPage ? (
        <div className=" flex flex-col gap-[96px]  ">
          {/* Heading */}
          <div className="flex items-center gap-[96px]">
            <Typography variant="para-1" className=" !text-white w-[250px] ">
              End to End <br /> Services
            </Typography>

            <Typography
              variant="para-2"
              className=" !text-white w-[716px] text-left  "
            >
              Kaizen Law is a corporate and transaction advisory firm delivering
              big-firm quality advice through a partner-led, boutique model.
            </Typography>
          </div>

          {/* List */}
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[306px] justify-between border-t border-white/30 py-[38px] "
              >
                <div className=" flex items-center gap-[96px] ">
                  <Typography
                    variant="header-2"
                    className=" !text-white !w-[250px]  "
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="para-2"
                    className=" !text-white w-[316px] text-left  "
                  >
                    {item.desc}
                  </Typography>
                </div>

                <div className="w-15 h-15 border border-white rounded-full flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <span className="text-white/60 text-sm">○</span>
                </div>
              </div>
            ))}

            {/* Bottom Border */}
            <div className="border-t border-white/30 "></div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-[96px]  ">
          {/* Heading */}
          <Typography variant="para-1" className=" !text-white ">
            What Guides Our Work
          </Typography>

          {/* List */}
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-t border-white/30 py-[38px] "
              >
                <div className="flex flex-col gap-[12px]">
                  <Typography variant="header-2" className=" !text-white ">
                    {item.title}
                  </Typography>
                  <Typography variant="para-2" className=" !text-white ">
                    {item.desc}
                  </Typography>
                </div>

                {/* Right Circle Placeholder */}
                <div className="w-15 h-15 border border-white rounded-full flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <span className="text-white/60 text-sm">○</span>
                </div>
              </div>
            ))}

            {/* Bottom Border */}
            <div className="border-t border-white/30 "></div>
          </div>
        </div>
      )}
    </Container>
  );
}
