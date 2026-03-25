"use client";
import { useState } from "react";
import AboutHeroSection from "@/components/abouthero";
import GuidesSection from "@/components/guidesSection";
import KaizenPhilosophySection from "@/components/KaizenPhilosphy";
import LeadershipTeam from "@/components/leadershipTeam";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurStorySection from "@/components/ourStorySectionAbout";
import SectorExperience from "@/components/sectorExperiences";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import WhyChooseSection from "@/components/whyChooseSection";
import Recognization from "@/components/recognization";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import aboutData from "@/data/about.json";


const industries = [
  "Finance",
  "Healthcare",
  "Technology",
  "Real Estate",
  "Energy",
];

export default function About() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter email");
      return;
    }
    setEmail(""); 
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectIndustry = (industry) => {
    setSelected(industry);
    setIsOpen(false);
  };
  const { aboutHero, privateEquityHero, letsConnect,whyClients } = aboutData;
  
    const { title, form, thankYou } = letsConnect;
    const { industries } = privateEquityHero;
  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage={aboutHero.bgImage}
        align={aboutHero.align}
        buttons={aboutHero.buttons}
        title={
          <>
            {aboutHero.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        description={<>{aboutHero.description}</>}
      />
      <OurStorySection />
      <KaizenPhilosophySection />
      <GuidesSection data={aboutData.guides} />
      <WhyChooseSection data={whyClients} />
      <SectorExperience />
      <Recognization />
      <LeadershipTeam />
      <Container variant="primarySpacing" className=" privateEquityHeroCopy">
        {/* Background Image */}
        <Image
          src={privateEquityHero.bgImage}
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
            className=" absolute inset-0  flex  justify-center  "
          >
            <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
              <div className="w-full md:w-[500px] h-full p-[36px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
                  {privateEquityHero.title}
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  {privateEquityHero.description}
                </Typography>

                <div className="mt-[57px] mb-[32px] flex flex-col gap-[16px]">
                  <Typography variant="header-4" className="!text-white">
                    {privateEquityHero.subText}
                  </Typography>
                  <div className="relative w-full">
                    {/* Dropdown container when open */}
                    {isOpen ? (
                      <div
                        className="absolute  w-full shadow-md px-[8px]"
                        style={{
                          boxShadow: "1px 0px 8px 1px #00000033",
                          backgroundColor: "#B6996A",
                          zIndex: 10,
                        }}
                      >
                        {/* Trigger inside dropdown */}
                        <div
                          onClick={toggleDropdown}
                          className="w-full h-[32px] border-b border-white flex items-center justify-between cursor-pointer"
                        >
                          <Typography variant="para-2" className="!text-white">
                            {selected || privateEquityHero.selectIndustryText}
                          </Typography>

                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-white transition-transform duration-300"
                            style={{ transform: "rotate(180deg)" }} // Arrow flips when open
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Options */}
                        <div className="mt-2">
                          {industries.map((industry) => (
                            <div
                              key={industry}
                              onClick={() => selectIndustry(industry)}
                              className="px-[12px] py-[6px] hover:bg-white/20 cursor-pointer text-white "
                            >
                              {industry}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Trigger when closed
                      <div
                        onClick={toggleDropdown}
                        className="w-full h-[32px] border-b border-white flex items-center justify-between md:pr-[16px] pr-0 cursor-pointer px-2"
                      >
                        <Typography variant="para-2" className="!text-white">
                          {selected || privateEquityHero.selectIndustryText}
                        </Typography>

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white transition-transform duration-300"
                          style={{ transform: "rotate(0deg)" }}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                  {privateEquityHero.button.label}
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>

      {/* Desktop only */}
      <div className="hidden md:block">
        <LetsConnectSection />
      </div>

      {/* Mobile only */}
      <div className="block md:hidden px-[28px] py-[220px] bg-[#0A193A]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[56px] text-center relative"
        >
          <Typography variant="display-3" className="!text-white">
            {title[0]} {title[1]}
          </Typography>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`${letsConnect.enter} ${form.placeholder}`}
            className="w-full bg-transparent outline-none 
                   text-white placeholder:text-white/50 text-center"
            required
          />

          <button type="submit" className="w-full text-center">
            <Typography variant="header-2" className="!text-white">
              {form.submitLabel}
            </Typography>
          </button>
        </form>
      </div>
      {/* <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between md:items-start"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            Speak With Our Team
          </Typography>
          <Typography
            variant="para-2"
            className="!text-white w-full md:w-[486px]"
          >
            If you are evaluating an investment, planning a fundraising round,
            or considering an exit, we would be pleased to discuss how Kaizen
            Law can support your objectives.
          </Typography>
        </div>
        <button className=" md:px-[36px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white  text-[18px]">
          Schedule A Consulation →
        </button>
      </Container> */}
      <Footer />
    </div>
  );
}
