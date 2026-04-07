"use client";

import Button from "./ui-kit/button";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import { useSiteContent } from "@/context/SiteContentProvider";
import AnimatedFadeUp from "./AnimatedFadeUp"; // make sure it's imported

export default function OurStorySection({
  bgColor = "bg-[var(--color-background-1)]",
  textColor = "",
  showButton = true,
}) {
  const sitecontent = useSiteContent();
  const { about } = sitecontent;
  const { ourStory } = about;

  return (
    <section className="section-bg">
      <div>
        {/* Title */}
        <AnimatedFadeUp>
          <Typography variant="header-6">{ourStory.title}</Typography>
        </AnimatedFadeUp>

        {/* Paragraphs */}
        <div className="inprovementSection">
          {ourStory.paragraphs.map((text, index) => (
            <AnimatedFadeUp key={index} delay={0.4 + index * 0.2}>
              <Typography className="text-block" variant="para-2">
                {text}
              </Typography>
            </AnimatedFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
