"use client";

import { useEffect, useRef } from "react";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import "./stacked-services.scss";
import Image from "next/image";

export default function StackedServicesSection({ items = [] }) {
  const cardRefs = useRef([]);
  

  return (
    <section className="stack-section  ">
      <div className="stack-inner">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="stack-card-wrapper"
            // style={{ zIndex: items.length - i }}
          >
            <ServiceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}


/* ---------------- CARD ---------------- */

function ServiceCard({ item }) {
  return (
    <Container
      variant="sectionSp1"
      className="stack-card bg-[var(--color-background-1)]   "
    >
      <div className="flex md:flex-row flex-col md:gap-[120px] gap-[100px] items-start">
        {item.icon && (
          <Image src={item.icon} alt={item.title} width={154} height={99} />
        )}

        <div className="flex flex-col gap-[16px]">
          <Typography
            variant="header-2"
            className="!text-[var(--color-accent)]"
          >
            {item.title}
          </Typography>

          <Typography variant="para-2">{item.description}</Typography>
        </div>
      </div>
    </Container>
  );
}
