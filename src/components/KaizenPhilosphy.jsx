"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function KaizenPhilosophySection() {
  return (
    <Container variant="sectionSp1" className="bg-[#B6996A]  flex items-start gap-[209px] ">
      <div className="shrink-0">
        <Typography variant="header-1" className="!text-white">
          The Kaizen <br /> Philosohpy
        </Typography>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-[26px]" >
        <Typography variant="header-1" className="!text-white">
          The word Kaizen means continuous improvement.
        </Typography>

        <Typography variant="para-2" className="!text-white">
          In transactional practice, outcomes are shaped through disciplined
          preparation, thoughtful structuring, and consistent execution — not
          shortcuts. Our philosophy focuses on refining strategy at every stage
          of a mandate to achieve clarity, manage risk, and protect long-term
          value.
        </Typography>
      </div>
    </Container>
  );
}
