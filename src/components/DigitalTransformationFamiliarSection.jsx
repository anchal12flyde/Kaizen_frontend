"use client";

import React, { useRef, useLayoutEffect } from "react";
import Typography from "./ui-kit/typography";
import useDeviceType from "@/hooks/useDeviceType";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/styles/digital.css";

const DigitalTransformationFamiliarSection = () => {
  const device = useDeviceType();
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const familiarContainerRef = useRef(null);
  const structuralRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".dt-familiar__card");
      const parts = [".part-1", ".part-2"];

      // Initial state: Structural is hidden
      gsap.set(structuralRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(parts, {
        clipPath: "inset(0 100% 0 0)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", 
          scrub: 1,
          // delay: 9,
          pin: true,
          anticipatePin: .4,
        },
      });

      // --- PHASE 1: FAMILIAR ENTRANCE ---
      tl.fromTo(
        leftColRef.current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          cards,
          { xPercent: 100, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
          "<"
        )
        .to({}, { duration: 0.2 }) // Hold phase for Familiar

        // --- PHASE 2: FAMILIAR EXIT ---
        .to(leftColRef.current, {
          xPercent: -120,
          opacity: 0,
          duration: 1.5,
          ease: "none",
        })
        .to(
          cards,
          { xPercent: 120, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.in" },
          "<"
        )
        .to(familiarContainerRef.current, { opacity: 0, duration: 1 }, ">-0.5")

        // --- PHASE 3: STRUCTURAL REVEAL ---
        .to(structuralRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0,
          ease: "none",
        })
        .to(".part-1", {
          clipPath: "inset(0 0% 0 0)",
          duration: 2,
          ease: "none",
        })
        .to(
          ".part-2",
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 2,
            ease: "none",
          },
          ">-0.4"
        )
        .to({}, { duration: .3 }); // Final Hold
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typoConfig = {
    title: {
      desktop: { variant: "h3" },
      tablet: { variant: "h2" },
      mobile: { variant: "h4" },
    },
    card: {
      desktop: { variant: "bodyPrimary" },
      tablet: { variant: "bodyPrimary" },
      mobile: { variant: "bodySecondary" },
    },
    statement: {
      desktop: { variant: "h3" },
      mobile: { variant: "h4" },
      tablet: { variant: "h2" },
    },
  };

  const styles = {
    title: isMobile
      ? typoConfig.title.mobile
      : isTablet
      ? typoConfig.title.tablet
      : typoConfig.title.desktop,
    card: isMobile
      ? typoConfig.card.mobile
      : isTablet
      ? typoConfig.card.tablet
      : typoConfig.card.desktop,
    statement: isMobile
      ? typoConfig.statement.mobile
      : isTablet
      ? typoConfig.statement.tablet
      : typoConfig.statement.desktop,
  };

  const painPoints = [
    "Decisions that used to be simple now require three conversations.",
    "Work that used to flow now stalls at handoffs nobody owns.",
    "The same information lives in multiple places and none of them agree.",
    "New tools were introduced, but the coordination problems remained.",
  ];

  return (
    <section 
      className="dt-familiar h-screen relative flex items-center justify-center overflow-hidden !p-0" 
      ref={containerRef}
    >
      {/* PHASE 1 & 2: Familiar Content */}
      <div 
        className="dt-familiar__container w-full" 
        ref={familiarContainerRef}
      >
        {/* Title Column */}
        <div className="dt-familiar__title-col" ref={leftColRef}>
          <Typography variant={styles.title.variant} as="h2" className="dt-familiar__title">
            If any of these <br /> sound familiar
          </Typography>
        </div>

        {/* Cards Column */}
        <div className="dt-familiar__cards-col" ref={rightColRef}>
          {painPoints.map((point, index) => (
            <div key={index} className="dt-familiar__card">
              <Typography variant={styles.card.variant} className="dt-familiar__card-text">
                {point}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* PHASE 3: Structural Statement Content */}
      <div 
        ref={structuralRef}
        className="dt-structural-layer absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="dt-structural__container text-center w-full px-4">
          <Typography
            variant={styles.statement.variant}
            as="h2"
            className="dt-structural__statement !bg-none"
          >
            <div className="part-1 block dt-actually-is__title-highlight-top">
              The Problem is Structural
            </div>
            <div className="part-2 block dt-actually-is__title-highlight">
              Not Technological.
            </div>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationFamiliarSection;
