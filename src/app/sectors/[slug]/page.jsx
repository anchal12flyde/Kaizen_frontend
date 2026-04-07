"use client";
import { use } from "react";
import AboutHeroSection from "@/components/abouthero";
import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import OurStorySection from "@/components/ourStorySectionAbout";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
import { notFound } from "next/navigation";
import DigitalTransformationFamiliarSection from "@/components/DigitalTransformationFamiliarSection";
import Link from "next/link";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

export default function Startups({ params }) {
  const { slug } = use(params);
 
  const sitecontent = useSiteContent();
  const data = sitecontent.sectorpages[slug];
  if (!data) return notFound();
  console.log("slug:", slug);
  console.log("data:", sitecontent.sectorpages[slug]);
  const {
    startupHero,
    ourStory,
    overview,
    advisorySections,
    whyClients,
    pevcPractice,
    relatedInsights,
    privateEquityHero,
    cta,
    blogs,
  } = data;
  const description = startupHero?.description || "";
  return (
    <div>
      <Header />

      <section className="hero-section">
        {/* Background Image */}
        <Image
          src={startupHero.bgImage}
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
              <AnimatedFadeUp>
                <Typography variant="display-3" colorVariant="white">
                  {startupHero.title}
                </Typography>
              </AnimatedFadeUp>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  delay={0.4}
                  variant="header-hero"
                  className="lg:w-[623px] w-full flex-shrink-0 !text-[#F2F2F2]"
                >
                  {startupHero.description}
                </Typography>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>
      <Container className="section-bg !bg-[#B6996A]" variant="primarySpacing">
        <div>
          <AnimatedFadeUp>
            <Typography variant="header-6" className="!text-white">
              {ourStory.title}
            </Typography>
          </AnimatedFadeUp>

          <div className="inprovementSection">
            {ourStory.paragraphs.map((text, index) => (
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  key={index}
                  className="text-block !text-[#F7F4EB]"
                  variant="para-2"
                  delay={0.4 + index * 0.2}
                >
                  {text}
                </Typography>
              </AnimatedFadeUp>
            ))}
          </div>
        </div>
      </Container>
      <Container
        variant="primarySpacing"
        className=" flex flex-col md:gap-[16px] gap-[36px] items-center bg-[#F7F4EB]    "
      >
        <AnimatedFadeUp>
          <Typography variant="header-6">{overview.title}</Typography>
        </AnimatedFadeUp>
        <AnimatedFadeUp delay={0.15}>
          <Typography
            variant="para-2"
            className="md:w-[716px] w-full text-center "
          >
            {overview.description}
          </Typography>
        </AnimatedFadeUp>
      </Container>

      <AdvisorySection sections={advisorySections} />
      <WhyChooseSection data={whyClients} />
      <DigitalTransformationFamiliarSection
        title={pevcPractice.title}
        subtitle={pevcPractice.subtitle}
        cardsData={pevcPractice.cardsData}
      />
      {/* <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
        careersPage={false}
        startupPage={true}
      /> */}

      <Container
        variant="sectionSp1"
        className=" flex flex-col items-center  text-center gap-[16px] !pb-[20px] "
      >
        <AnimatedFadeUp>
          <Typography variant="header-6">{relatedInsights.title}</Typography>
        </AnimatedFadeUp>
        <Typography variant="para-2">{relatedInsights.description}</Typography>
      </Container>

      <BlogGridSection
        variant="scroll"
        buttonText={blogs.button}
        posts={blogs.items}
        buttonShow={true}
      />
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
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px]  pt-[36px] md:pb-[63px] pb-[48px] bg-[var(--color-accent)]  flex flex-col">
                <AnimatedFadeUp >
                  <Typography variant="header-5" className=" !text-[#F2F2F2] ">
                    {privateEquityHero.title}
                  </Typography>
                </AnimatedFadeUp>
                <AnimatedFadeUp  delay={0.15}>
                <Typography
                  variant="para-2"
                  className=" !text-[#F7F4EB] mt-[26px] "
                >
                  {privateEquityHero.description}
                </Typography></AnimatedFadeUp>

                <div className="mt-[36px] mb-[26px] flex flex-col gap-[16px]">
                  <Typography variant="para-2" className="!text-white">
                    {privateEquityHero.subText.text}
                    <Link href="/footprint">
                      <span
                        style={{
                          textDecoration: "underline",
                          textDecorationStyle: "solid",
                          textDecorationSkipInk: "auto",
                        }}
                      >
                        {privateEquityHero.subText.highlight}
                      </span>
                    </Link>
                  </Typography>
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]">
                  {privateEquityHero.button.label}
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>
      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between md:items-center"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            {cta.title}
          </Typography>
          <Typography
            variant="para-2"
            className="!text-[#F7F4EB] w-full md:w-[486px]"
          >
            {cta.description}
          </Typography>
        </div>
        <button className=" md:px-[36px] px-[24px] md:py-[12px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[18px] text-[18px]">
          {cta.buttonText}
        </button>
      </Container>
      <Footer />
    </div>
  );
}
