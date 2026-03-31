"use client";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";



export default function OurApproachSection() {
  return (
    <Container variant="primarySpacing" className=" bg-[var(--color-background-1)] " >
      <div className="py-[140px]"
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
          <Typography variant="header-6">Our Approach</Typography>

          {/* Highlight Statement */}
          <Typography variant="header-4" style={{ marginTop: "46px" }} className=" !text-[var(--color-accent)] " >
            Our approach reflects the Kaizen philosophy — disciplined
            preparation, incremental refinement, and focused execution.
          </Typography>

          {/* Description */}
          <Typography variant="para-2" style={{ marginTop: "26px" }}>
            We prioritise early identification of deal-critical issues, clear
            articulation of rights and obligations, and practical support during
            negotiations. Senior team members remain closely involved throughout
            each mandate to ensure continuity and informed judgment.
          </Typography>
        </div>
      </div>
    </Container>
  );
}
