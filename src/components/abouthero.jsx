"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import Button from "./ui-kit/button";

export default function AboutHeroSection() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <Image
        src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
        alt="Kaizen Hero"
        fill
        className="hero-background"
        priority
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content right-[50px]">
        <div>
          <div className="flex flex-col ">
            <Typography
              delay={0.4}
              variant="display-3"
              colorVariant="white"
              className="w-full flex-shrink-0 "
            >
              A Transaction-Focused <br /> Law Firm Built on <br /> Precision
              and Execution
            </Typography>
            <Typography variant="para-2" className="!text-white mt-[10px] ">
              Kaizen Law is a corporate and transaction advisory firm delivering
              big-firm quality advice <br /> through a partner-led, boutique
              model.
            </Typography>
            <div className="mt-[26px] flex items-center gap-[16px] ">
              <Button variant="primary">Explore Our Practise</Button>
              <Button variant="white">Meet Our Team</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
