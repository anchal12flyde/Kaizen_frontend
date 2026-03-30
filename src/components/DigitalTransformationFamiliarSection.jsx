"use client";

import React, { useRef, useLayoutEffect } from "react";
import Typography from "./ui-kit/typography";
import useDeviceType from "@/hooks/useDeviceType";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/styles/digital.css";

const DigitalTransformationFamiliarSection = ({
  title,
  subtitle,
  cardsData = [],
}) => {
  const device = useDeviceType();
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const familiarContainerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".dt-familiar__card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 0.4,
        },
      });

      // --- PHASE 1: ENTER ---
      tl.fromTo(
        leftColRef.current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" },
      )
        .fromTo(
          cards,
          { xPercent: 100, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<",
        )
        .to({}, { duration: 0.2 })

        // --- PHASE 2: EXIT ---
        .to(leftColRef.current, {
          xPercent: -120,
          opacity: 0,
          duration: 1.5,
          ease: "none",
        })
        .to(
          cards,
          {
            xPercent: 120,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.in",
          },
          "<",
        )
        .to(familiarContainerRef.current, { opacity: 0, duration: 1 }, ">-0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="dt-familiar h-screen relative flex items-center justify-center overflow-hidden !p-0"
      ref={containerRef}
    >
      <div className="dt-familiar__container w-full" ref={familiarContainerRef}>
        {/* Left Content */}
        <div className="dt-familiar__title-col" ref={leftColRef}>
          <Typography variant="para-1">{title}</Typography>
          <Typography variant="para-2" className="!text-[var(--color-secondary)]">
            {subtitle}
          </Typography>
        </div>

        {/* Right Cards */}
        <div className="dt-familiar__cards-col">
          {Array.isArray(cardsData) &&
            cardsData.map((item, index) => (
              <div key={index} className="dt-familiar__card">
                <Typography variant="para-2" className="dt-familiar__card-text">
                  {item}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationFamiliarSection;
