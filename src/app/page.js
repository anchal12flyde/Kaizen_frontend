"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Button from "@/components/ui-kit/button";
import Image from "next/image";
import Testimonials from "@/components/ui-kit/testimonials";
import { getSiteContent } from "@/lib/siteContent";
import Link from "next/link";


export default function Home() {
  const { home } = getSiteContent();
  const { recognition } = home;
  const { hero, improvement, evaluation, bannerImage, overlayImage } = home;

  return (
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
            <div className="mb-[42px]">
              <Typography variant="hero-display" colorVariant="white">
                {hero.title}
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                delay={0.4}
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

              <Typography
                delay={0.6}
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0"
              >
                {hero.description}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <Container className="section-bg" variant="primarySpacing">
        <div>
          <Typography variant="header-1">{improvement.title}</Typography>

          <div className="inprovementSection">
            {improvement.paragraphs.map((text, index) => (
              <Typography
                key={index}
                className="text-block"
                variant="para-2"
                delay={0.4 + index * 0.2}
              >
                {text}
              </Typography>
            ))}
          </div>

          <Button className="inprovementSectionBtn">
            {improvement.buttonText}
          </Button>
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

          <div className="group flex flex-col md:gap-0 gap-[8px]">
            <Typography
              colorVariant="white"
              variant="display-3"
              delay={0.4}
              className="group-hover:!text-[var(--color-accent)]"
            >
              {evaluation.steps.map((step, i) => (
                <span key={i}>
                  {step}
                  <br />
                </span>
              ))}
            </Typography>

            <Typography
              variant="punctuation"
              delay={0.6}
              className="group-hover:!text-[var(--color-accent)]"
            >
              {evaluation.highlight}
            </Typography>

            <Link href="/practice-areas">
              <Button
                className="evaluationBtn !w-fit group-hover:!bg-[var(--color-accent)]"
                variant="white"
                delay={0.8}
              >
                {evaluation.buttonText}
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      <Container
        variant="primarySpacing"
        className="flex flex-col items-center overflow-hidden w-full"
      >
        <Typography variant="header-1">{recognition.title}</Typography>

        <div className="flex flex-col gap-[56px] items-center text-center">
          <Typography
            variant="para-2"
            className="mt-[32px] lg:w-[480px] w-full"
            delay={0.4}
          >
            {recognition.description}
          </Typography>

          <Testimonials data={recognition.testimonials} />

          <div className="flex flex-col md:gap-[74px] gap-[36px]">
            <Typography variant="para-2" delay={0.6}>
              {recognition.award.year}
            </Typography>

            <div className="relative w-full h-full">
              <Image
                src={recognition.award.image}
                width={183}
                height={154}
                className="object-cover w-full h-full"
                alt={recognition.award.alt}
              />
            </div>

            <Button variant="primary" delay={0.4}>
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
  );
}
