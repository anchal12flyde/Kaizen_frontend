"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import AnimatedFadeUp from "./AnimatedFadeUp";


export default function OurApproachSection({ data }) {
  if (!data) return null;
  return (
    <Container variant="primarySpacing" className=" ">
      <div
        className="py-[140px]"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "730px",
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <AnimatedFadeUp>
            <Typography variant="header-6">{data.title}</Typography>
          </AnimatedFadeUp>
          {/* Highlight Statement */}
          <AnimatedFadeUp delay={0.15}>
            <Typography
              variant="header-4"
              style={{ marginTop: "46px" }}
              className=" !text-[var(--color-accent)]"
            >
              {data.highlight}
            </Typography>
          </AnimatedFadeUp>

          {/* Description */}
          <AnimatedFadeUp delay={0.25} >
          <Typography variant="para-2" style={{ marginTop: "26px" }}>
            {data.description}
          </Typography>
          </AnimatedFadeUp>
        </div>
      </div>
    </Container>
  );
}
