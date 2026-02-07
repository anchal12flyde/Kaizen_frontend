"use client";

import Button from "./ui-kit/button";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function OurStorySection() {
  return (
    <Container variant="sectionSp1" >
      <div className=" flex flex-col gap-[60px] ">
        {/* Heading */}
        <Typography variant="header-1">Our Story</Typography>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[238px] items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-[50px] ">
            <Typography variant="para-2">
              Founded in August 2022, Kaizen Law was established with a clear
              purpose — to build a focused corporate and transaction advisory
              firm that combines technical excellence with agility and personal
              accountability.
            </Typography>

            <Button variant="primary">Read More</Button>
          </div>

          {/* Right Column */}
          <div>
            <Typography variant="para-2">
              In just over two and a half years, the firm has developed a strong
              presence in India’s mid-market Corporate and M&amp;A space,
              advising founders, promoters, investors, and multinational clients
              on complex domestic and cross-border matters.
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
