"use client";

import Button from "./ui-kit/button";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";

export default function OurStorySection({
  bgColor = "bg-[var(--color-background-1)]",
  textColor = "",
  showButton = true,
}) {
 
  const sitecontent = useSiteContent(); // 👈 CALL IT
  const { about } = sitecontent;
  const { ourStory } = about;
  return (
    <section className="section-bg">
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
      </div>
    </section>
  );
}
