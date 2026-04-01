"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import { useSiteContent } from "@/context/SiteContentProvider";


export default function OurApproachSection({ data }) {
  if (!data) return null;
  return (
    <Container
      variant="primarySpacing"
      className=" bg-[var(--color-background-1)] "
    >
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
          <Typography variant="header-6">{data.title}</Typography>

          {/* Highlight Statement */}
          <Typography
            variant="header-4"
            style={{ marginTop: "46px" }}
            className=" !text-[var(--color-accent)]"
          >
            {data.highlight}
          </Typography>

          {/* Description */}
          <Typography variant="para-2" style={{ marginTop: "26px" }}>
            {data.description}
          </Typography>
        </div>
      </div>
    </Container>
  );
}
