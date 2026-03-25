"use client";
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
import startup from "@/data/startups.json";


export default function Startups() {
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
   } = startup;
  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage={startupHero.bgImage}
        align={startupHero.align}
        buttons={startupHero.buttons}
        title={
          <>
            {startupHero.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        description={<>{startupHero.description}</>}
      />
      <Container className="section-bg !bg-[#B6996A]" variant="primarySpacing">
        <div>
          <Typography variant="header-6" className="!text-white">
            {ourStory.title}
          </Typography>

          <div className="inprovementSection">
            {ourStory.paragraphs.map((text, index) => (
              <Typography
                key={index}
                className="text-block !text-white"
                variant="para-2"
                delay={0.4 + index * 0.2}
              >
                {text}
              </Typography>
            ))}
          </div>
        </div>
      </Container>
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

      <AdvisorySection sections={advisorySections} />
      <WhyChooseSection data={whyClients} />

      <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
        careersPage={false}
        startupPage={true}
      />

      <Container
        variant="sectionSp1"
        className=" flex flex-col items-center  text-center gap-[16px] !pb-[20px] "
      >
        <Typography variant="header-6">{relatedInsights.title}</Typography>
        <Typography variant="para-2">{relatedInsights.description}</Typography>
      </Container>

      <BlogGridSection
        variant="scroll"
        buttonText={startup.blogs.button}
        posts={startup.blogs.items}
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
                <Typography variant="header-5" className=" !text-white ">
                  {privateEquityHero.title}
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  {privateEquityHero.description}
                </Typography>

                <div className="mt-[36px] mb-[26px] flex flex-col gap-[16px]">
                  <Typography variant="para-2" className="!text-white">
                    {privateEquityHero.subText.text}
                    <span
                      style={{
                        textDecoration: "underline",
                        textDecorationStyle: "solid",
                        textDecorationSkipInk: "auto",
                      }}
                    >
                      {privateEquityHero.subText.highlight}
                    </span>
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
