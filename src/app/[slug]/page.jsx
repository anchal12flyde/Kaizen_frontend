
import React from "react";
import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import OurApproachSection from "@/components/ourApproachSection";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import StackedServicesSection from "@/components/stackedServices";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";
import Recognization from "@/components/recognization";
import sitecontent from "@/data/sitecontent.json";
import Testimonials from "@/components/ui-kit/testimonials";
import { notFound } from "next/navigation";
import { getSiteContent } from "@/lib/siteContent";
import DigitalTransformationFamiliarSection from "@/components/DigitalTransformationFamiliarSection";
import Link from "next/link";

export default async function privateEquity({ params }) {
  const sitecontent = getSiteContent();
  const { slug } = await params; 
  const showPEVC = ["private-equity", "mergers-acquisitions"].includes(slug);
  const showDigital = ["general-counsel", "technology-law"].includes(
    slug,
  );  
  const data = sitecontent.servicepages[slug];

  if (!data) return notFound();
  

  const { recognition } = data;
  const {
    title,
    description,
    testimonials,
    image,
    button,
    continent,
    testimonialUI,
  } = recognition;

  const {
    privateEquity,
    overview,
    pevcPractice,
    investmentLifecycle,
    stackedServices,
    whyClients,
    privateEquityHero,
    relatedInsights,
    cta,
    advisorySections,
    blogs,
    digitalTransformation,
    ourApproach,
  } = data;
  
  return (
    <div className="!overflow-x-none">
      <Header />
      <section className="hero-section">
        {/* Background Image */}
        <Image
          src={privateEquity.image}
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content md:!right-[100px]">
          <div>
            <div className="md:mb-[26px] mb-[42px]">
              <Typography variant="display-3" colorVariant="white">
                {privateEquity.title}
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0 "
              >
                {privateEquity.subtitle}
              </Typography>

              <Typography
                delay={0.6}
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0"
              >
                {privateEquity.description}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <Container className="section-bg " variant="primarySpacing">
        <div>
          <Typography variant="header-6" className="">
            {overview.title}
          </Typography>

          <div className="inprovementSection">
            {overview?.paragraphs?.map((text, index) => (
              <Typography
                key={index}
                className="text-block "
                variant="para-2"
                delay={0.4 + index * 0.2}
              >
                {text}
              </Typography>
            ))}
          </div>
        </div>
      </Container>

      <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
      />

  
      {showPEVC && pevcPractice && (
        <StackedServicesSection
          items={stackedServices}
          investmentLifecycle={investmentLifecycle}
        />
      )}
      <WhyChooseSection data={whyClients} />
      {showDigital && (
        <DigitalTransformationFamiliarSection
          title={digitalTransformation?.title}
          subtitle={digitalTransformation?.subtitle}
          cardsData={digitalTransformation?.cardsData || []}
        />
      )}
      <OurApproachSection data={ourApproach} />

      <Container variant="primarySpacing" className=" privateEquityHeroCopy">
        {/* Background Image */}
        <Image
          src={privateEquityHero.bgImage}
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <>
          <Container
            variant="sectionSp1"
            className=" absolute inset-0  flex items-center justify-center  "
          >
            <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px] pt-[36px] md:pb-[113px] pb-[48px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
                  {privateEquityHero.title}
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  {privateEquityHero.description}
                </Typography>
                <Link href={privateEquityHero.button.link}>
                  <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]">
                    {privateEquityHero.button.label}
                  </button>
                </Link>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>
      <Container
        variant="primarySpacing"
        className="flex flex-col items-center text-center overflow-hidden w-full "
      >
        <Typography variant="header-6">{title}</Typography>
        <div className="flex flex-col gap-[56px] items-center text-center">
          <Typography
            variant="para-2"
            className="mt-[32px] lg:w-[480px] w-full"
            delay={0.4}
          >
            {description}
          </Typography>

          <Testimonials
            bg={testimonialUI.bg}
            textColor={testimonialUI.textColor}
            dotActive={testimonialUI.dotActive}
            dotInactive={testimonialUI.dotInactive}
            leftArrow={testimonialUI.leftArrow}
            rightArrow={testimonialUI.rightArrow}
            data={testimonials}
          />

          <div className="flex flex-col gap-[74px]">
            <Typography variant="para-2" delay={0.6}>
              {" "}
              {continent}
            </Typography>
            <div className="relative w-full h-full hidden md:block">
              <Image
                src={image}
                width={183}
                height={154}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <Button
              as="a"
              href={recognition.button.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {recognition.button.label}
            </Button>
          </div>
        </div>
      </Container>
      <Container
        variant="primarySpacing"
        className=" flex flex-col items-center gap-[16px] !pb-[20px] "
      >
        <Typography variant="header-6">{relatedInsights.title}</Typography>
        <Typography variant="para-2">{relatedInsights.description}</Typography>
      </Container>

      <BlogGridSection
        variant="scroll"
        buttonText={blogs.button}
        posts={blogs.items}
        buttonShow={true}
      />
      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between md:items-start"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            {cta.title}
          </Typography>
          <Typography
            variant="para-2"
            className="!text-white w-full md:w-[486px]"
          >
            {cta.description}
          </Typography>
        </div>
        <button className=" md:px-[36px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
          {cta.buttonText}
        </button>
      </Container>
      <Footer />
    </div>
  );
}
