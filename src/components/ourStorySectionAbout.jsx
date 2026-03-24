"use client";

import Button from "./ui-kit/button";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import about from "@/data/about.json";

export default function OurStorySection({
  bgColor = "bg-[var(--color-background-1)]",
  textColor = "",
  showButton = true,
}) {

  const { ourStory } = about;
  return (
    <Container className="section-bg" variant="primarySpacing">
      <div>
        <Typography variant="header-6">{ourStory.title}</Typography>

        <div className="inprovementSection">
          {ourStory.paragraphs.map((text, index) => (
            <Typography
              key={index}
              className="text-block"
              variant="para-2"
              delay={0.4 + index * 0.2}
            >
              {text}
            </Typography>
          ))}
        </div>

        <Button className="inprovementSectionBtn">{ourStory.buttonText}</Button>
      </div>
    </Container>
  );
}
