"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
import AnimatedFadeUp from "./AnimatedFadeUp";

export default function KaizenPhilosophySection() {

  const sitecontent = useSiteContent(); // 👈 CALL IT
  const { about } = sitecontent;
  const { philosophy } = about;
  return (
    <Container
      variant="primarySpacing"
      className="bg-[#B6996A] flex md:flex-row flex-col items-start md:gap-[209px] gap-[42px]"
    >
      {/* Left */}
      <div className="shrink-0">
        <AnimatedFadeUp>
          <Typography variant="header-6" className="!text-white">
            {philosophy.leftTitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
        </AnimatedFadeUp>
      </div>

      {/* Right */}
      <div className="flex flex-col md:gap-[26px] gap-[16px]">
        <AnimatedFadeUp delay={0.2}>
          <Typography variant="header-1" className="!text-white">
            {philosophy.right.heading}
          </Typography>
        </AnimatedFadeUp>

        <AnimatedFadeUp delay={0.4}>
          <Typography variant="para-2" className="!text-white">
            {philosophy.right.description}
          </Typography>
        </AnimatedFadeUp>
      </div>
    </Container>
  );
}
