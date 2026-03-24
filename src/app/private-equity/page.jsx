"use client";
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
import equity from "@/data/privateEquity.json";
import Testimonials from "@/components/ui-kit/testimonials";


const data = [
  {
    id: 1,
    title: "Transaction Structuring & Risk Allocation",
    desc: "Private equity and venture capital transactions demand careful structuring, commercial sensitivity, and a clear approach to risk allocation. We help design deal frameworks that protect value while remaining practical to execute.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
  {
    id: 2,
    title: "Working Across the Investment Table",
    desc: "We work closely with investment teams, founders, boards, and management to structure transactions that balance investor protection with operational flexibility and long-term business needs.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Ebene%201.png?updatedAt=1773733504376",
  },
  {
    id: 3,
    title: "Advising Across the Capital Lifecycle",
    desc: "We regularly advise startups and emerging companies on institutional capital raises, while also supporting investors deploying capital across diverse sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(17).png?updatedAt=1773733504363",
  },
];
const topContent = {
  title: "Our PE & VC Practice",
  subtitle:
    "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
};
export default function privateEquity({ data }) {
  const { recognition } = data || equity;
  const {
    title,
    description,
    testimonials,
    image,
    button,
    continent,
    testimonialUI,

  } = recognition;
  const services = [
    {
      title: "Early-Stage Fundraising",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Growth-Stage & Late-Stage Investments",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Governance & Shareholder Frameworks",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Follow-on Investments & Restructuring",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Secondary Transactions & Exits",
      description:
        "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
    },
  ];
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
  } = equity;

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
                delay={0.4}
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0 "
              >
                {privateEquity.subtitle.split("<br />").map((line, idx) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
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

      <Container
        variant="primarySpacing"
        className=" flex flex-col md:gap-[16px] gap-[36px] items-center bg-[#F7F4EB]    "
      >
        <Typography variant="header-6">{overview.title}</Typography>
        <Typography
          variant="para-2"
          className="md:w-[716px] w-full text-center "
        >
          {overview.description}
        </Typography>
      </Container>

      <AdvisorySection />
      <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
      />
      <Container
        variant="sectionSp3"
        className=" !pb-[60px] flex flex-col gap-[16px] items-center bg-[var(--color-background-1)] "
      >
        <Typography variant="header-6">{investmentLifecycle.title}</Typography>
        <Typography variant="para-2">
          {investmentLifecycle.description}
        </Typography>
      </Container>
      <StackedServicesSection items={stackedServices} />
      <WhyChooseSection data={whyClients} />
      <OurApproachSection />

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
                <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                  {privateEquityHero.button.label}
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>
      <Container
        variant="primarySpacing"
        className="flex flex-col items-center text-center overflow-hidden w-full"
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

            <Button variant="primary" delay={0.4}>
              {button.label}
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
        posts={equity.blogs}
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
