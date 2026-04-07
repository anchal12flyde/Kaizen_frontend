"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import Button from "./ui-kit/button";
import Link from "next/link";
import AnimatedFadeUp from "./AnimatedFadeUp";

export default function AboutHeroSection({
  bgImage,
  title,
  description,
  buttons = [],
  align = "left", 
}) {


  return (
    <section className="hero-section relative">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Hero"
        fill
        className="hero-background"
        priority
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div
        className={`hero-content ${
          align === "right"
            ? "right-[50px] text-right"
            : align === "center"
              ? "left-1/2 -translate-x-1/2 text-center"
              : "left-[50px] text-left"
        }`}
      >
        <div className="flex flex-col">
          {/* Title */}
          <AnimatedFadeUp>
            <Typography
              variant="display-3"
              colorVariant="white"
              className="w-full"
            >
              {title}
            </Typography>
          </AnimatedFadeUp>

          {/* Description */}
          {description && (
            <AnimatedFadeUp delay={0.2}>
              <div className="md:w-[668px] w-full">
                <Typography
                  variant="para-2"
                  className="!text-white md:mt-[15px] mt-[12px]"
                >
                  {description}
                </Typography>
              </div>
            </AnimatedFadeUp>
          )}

          {/* Buttons */}
          {buttons?.length > 0 && (
            <AnimatedFadeUp delay={0.4}>
              <div className="mt-[26px] flex md:flex-row flex-col items-center gap-[16px]">
                {buttons.map((btn, index) => {
                  const isHashLink = btn.href?.startsWith("#");

                  const handleScroll = (e) => {
                    if (!isHashLink) return;

                    e.preventDefault();

                    const targetId = btn.href.replace("#", "");
                    const el = document.getElementById(targetId);

                    if (el) {
                      const headerOffset = 120;

                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.scrollY - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  };

                  return (
                    <Button
                      key={index}
                      aschild
                      variant={btn.variant || "primary"}
                      className="w-full md:w-auto"
                    >
                      <Link href={btn.href || "#"} onClick={handleScroll}>
                        {btn.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </AnimatedFadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
