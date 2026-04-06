"use client";

import { useEffect, useRef } from "react";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import "./stacked-services.scss";
import Image from "next/image";

export default function StackedServicesSection({ items = [], investmentLifecycle }) {
  const cardRefs = useRef([]);

  return (
    <>
      <section className="stack-section">
        <div className="stack-inner">
          {/* 👇 THIS becomes first sticky item */}
          <div className="heading-wrapper">
            <Container 
              className="!pb-[60px] flex flex-col gap-[16px] items-center bg-[var(--color-background-1)] text-center"
            >
              <Typography variant="header-6">
                {investmentLifecycle?.title}
              </Typography>
              <Typography variant="para-2" className="md:w-[624px] w-full">
                {investmentLifecycle?.description}
              </Typography>
            </Container>
          </div>

          {/* 👇 Cards */}
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="stack-card-wrapper"
            >
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}



function ServiceCard({ item }) {
  return (
    <>
      <Container
        variant="sectionSp1"
        className="stack-card bg-[var(--color-background-1)]   "
      >
        <div className="py-[60px] flex md:flex-row flex-col md:gap-[120px] gap-[178px] items-start">
         
            <img
              src={item.icon}
              alt={item.title}
              className="h-[150px] w-[266px] object-fill"
            />
         
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
    </>
  );
}
