"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Button from "@/components/ui-kit/button";
import Image from "next/image";
import Testimonials from "@/components/ui-kit/testimonials";
import { useSiteContent } from "@/context/SiteContentProvider";
import Link from "next/link";
import DisclaimerModal from "@/components/disclaimer";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

import { motion } from "framer-motion";

export default function Home() {
  const { home } = useSiteContent();
  // console.log("homedata",home);
  const {
    recognition,
    hero,
    improvement,
    evaluation,
    bannerImage,
    overlayImage,
  } = home;
 
  return (
    <>
      <div>
        <Header />
        <section className="hero-section">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="hero-background"
            priority
          />

          <div className="hero-overlay"></div>

          <div className="hero-content md:right-[100px]">
            <div>
              {/* Title */}
              <AnimatedFadeUp className="mb-[42px]">
                <Typography variant="display-3" colorVariant="white">
                  {hero.title}
                </Typography>
              </AnimatedFadeUp>

              <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
                {/* Heading with line breaks */}
                <AnimatedFadeUp delay={0.4}>
                  <Typography
                    variant="header-hero"
                    colorVariant="white"
                    className="lg:w-[623px] w-full flex-shrink-0"
                  >
                    {hero.heading.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </AnimatedFadeUp>

                {/* Description */}
                <AnimatedFadeUp delay={0.6}>
                  <Typography
                    variant="para-2"
                    colorVariant="white"
                    className="md:w-[370px] w-full flex-shrink-0"
                  >
                    {hero.description}
                  </Typography>
                </AnimatedFadeUp>
              </div>
            </div>
          </div>
        </section>
        {/* Second Section */}
        <Container className="section-bg" variant="primarySpacing">
          <div>
            {/* Title */}
            <AnimatedFadeUp>
              <Typography variant="header-1">{improvement.title}</Typography>
            </AnimatedFadeUp>

            <div className="inprovementSection">
              {improvement.paragraphs.map((text, index) => (
                <AnimatedFadeUp key={index} delay={0.4 + index * 0.2}>
                  <Typography className="text-block" variant="para-2">
                    {text}
                  </Typography>
                </AnimatedFadeUp>
              ))}
            </div>

            {/* Button */}
            <AnimatedFadeUp delay={0.4 + improvement.paragraphs.length * 0.2}>
              <Link href="/about">
                <Button className="inprovementSectionBtn">
                  {improvement.buttonText}
                </Button>
              </Link>
            </AnimatedFadeUp>
          </div>
        </Container>

        <div className="relative w-full h-[280px] md:h-full">
          <Image
            src={bannerImage.src}
            width={bannerImage.width}
            height={bannerImage.height}
            className="object-cover w-full h-full"
            alt={bannerImage.alt}
          />
        </div>

        <div className="evaluation">
          <Container className="evaluationSection" variant="primarySpacing">
            {/* Title */}
            <AnimatedFadeUp>
              <div>
                <Typography colorVariant="white" variant="header-1">
                  {evaluation.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Typography>
              </div>
            </AnimatedFadeUp>

            <div className="group flex flex-col md:gap-0 gap-[8px]">
              {/* Steps */}
              <AnimatedFadeUp delay={0.4}>
                <Typography colorVariant="white" variant="display-3">
                  {evaluation.steps.map((step, i) => (
                    <span
                      key={i}
                      className="block transition-colors duration-300 hover:!text-[var(--color-accent)] cursor-pointer"
                    >
                      {step}
                    </span>
                  ))}
                </Typography>
              </AnimatedFadeUp>

              {/* Highlight */}
              <AnimatedFadeUp delay={0.6}>
                <Typography
                  variant="punctuation"
                  className="hover:!text-[var(--color-accent)]"
                >
                  {evaluation.highlight}
                </Typography>
              </AnimatedFadeUp>

              {/* Button */}
              <AnimatedFadeUp delay={0.8}>
                <Link href="/practice-areas">
                  <Button className="evaluationBtn !w-fit" variant="white">
                    {evaluation.buttonText}
                  </Button>
                </Link>
              </AnimatedFadeUp>
            </div>
          </Container>
        </div>

        <Container
          variant="primarySpacing"
          className="flex flex-col items-center overflow-hidden w-full"
        >
          <AnimatedFadeUp>
            <Typography variant="header-1">{recognition.title}</Typography>{" "}
          </AnimatedFadeUp>

          <div className="flex flex-col gap-[56px] items-center text-center">
            <AnimatedFadeUp delay={0.15}>
              <Typography
                variant="para-2"
                className="mt-[32px] lg:w-[480px] w-full"
                delay={0.4}
              >
                {recognition.description}
              </Typography>
            </AnimatedFadeUp>

            <Testimonials data={recognition.testimonials} />

            <div className="flex flex-col md:gap-[56px] gap-[36px]">
              {/* <Typography variant="para-2" delay={0.6}>
                {recognition.award.year}
              </Typography> */}
              <AnimatedFadeUp delay={0.25}>
              <div className="relative w-full h-full">
                <Image
                  src={recognition.award.image}
                  width={183}
                  height={154}
                  className="object-cover w-full h-full"
                  alt={recognition.award.alt}
                />
              </div>
              </AnimatedFadeUp>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(recognition.buttonLink, "_blank");
                }}
              >
                {recognition.buttonText}
              </Button>
            </div>
          </div>
        </Container>

        <div className="relative w-full h-[280px] md:h-full">
          <Image
            src={overlayImage.src}
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            alt=""
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        <Footer />
      </div>

      <DisclaimerModal />
    </>
  );
}
