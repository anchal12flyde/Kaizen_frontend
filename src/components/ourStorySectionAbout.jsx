"use client";

import Button from "./ui-kit/button";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function OurStorySection({
  bgColor = "bg-[var(--color-background-1)]",
  textColor = "",
  showButton = true,
}) {
  return (
    <Container className="section-bg" variant="primarySpacing">
      <div>
        <Typography variant="header-6">Our Story</Typography>

        <div className="inprovementSection">
          <Typography className="text-block" variant="para-2" delay={0.4}>
            Founded in August 2022, Kaizen Law was established with a clear
            purpose — to build a focused corporate and transaction advisory firm
            that combines technical excellence with agility and personal
            accountability.
          </Typography>

          <Typography className="text-block" variant="para-2" delay={0.6}>
            In just over two and a half years, the firm has developed a strong
            presence in India’s mid-market Corporate and M&A space, advising
            founders, promoters, investors, and multinational clients on complex
            domestic and cross-border matters
          </Typography>
        </div>

        <Button className="inprovementSectionBtn">Read More</Button>
      </div>
    </Container>
  );
}
