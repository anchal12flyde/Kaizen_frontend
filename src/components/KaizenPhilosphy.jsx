"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import sitecontent from "@/data/sitecontent.json";
import { getSiteContent } from "@/lib/siteContent";

export default function KaizenPhilosophySection() {

  const sitecontent = getSiteContent(); // 👈 CALL IT
  const { about } = sitecontent;
  const { philosophy } = about;
  return (
    <Container
      variant="primarySpacing"
      className="bg-[#B6996A] flex md:flex-row flex-col items-start md:gap-[209px] gap-[42px]"
    >
      {/* Left */}
      <div className="shrink-0">
        <Typography variant="header-6" className="!text-white">
          {philosophy.leftTitle.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
      </div>

      {/* Right */}
      <div className="flex flex-col md:gap-[26px] gap-[16px]">
        <Typography variant="header-1" className="!text-white">
          {philosophy.right.heading}
        </Typography>

        <Typography variant="para-2" className="!text-white">
          {philosophy.right.description}
        </Typography>
      </div>
    </Container>
  );
}
