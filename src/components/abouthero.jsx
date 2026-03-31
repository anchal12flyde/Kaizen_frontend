"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import Button from "./ui-kit/button";
import Link from "next/link";

export default function AboutHeroSection({
  bgImage,
  title,
  description,
  buttons = [],
  align = "left", 
}) {

  const handleScrollToTeam = (e) => {
    e.preventDefault();

    const el = document.getElementById("leadership-team");

    if (el) {
      const yOffset = -120; // header height adjust karo
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
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
          <Typography
            variant="display-3"
            colorVariant="white"
            className="w-full"
          >
            {title}
          </Typography>
          <div className="md:w-[668px] w-full">
            {description && (
              <Typography
                variant="para-2"
                className="!text-white md:mt-[15px] mt-[12px]"
              >
                {description}
              </Typography>
            )}
          </div>

          {buttons?.length > 0 && (
            <div className="mt-[26px] flex md:flex-row flex-col items-center gap-[16px]">
              {buttons.map((btn, index) => {
                const isTeamBtn = btn.href === "#leadership-team";

                const handleScroll = (e) => {
                  if (!isTeamBtn) return;

                  e.preventDefault();

                  const el = document.getElementById("leadership-team");

                  if (el) {
                    const yOffset = -120; // header height adjust karo
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                };

                return (
                  <Button
                    key={index}
                    asChild
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
          )}
        </div>
      </div>
    </section>
  );
}
