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

export default function About() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    console.log("Submitted Email:", email);

    

    setEmail(""); 
  };
  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
        title={
          <>
            A Transaction-Focused
            <br />
            Law Firm Built on <br /> Precision and Execution
          </>
        }
        description={
          <>
            Kaizen Law is a corporate and transaction advisory firm delivering
            big-firm quality advice through a partner-led, boutique model.
          </>
        }
        align="left"
        buttons={[
          {
            label: "Explore Our Practise",
            variant: "primary",
          },
          {
            label: "Meet Our Team",
            variant: "white",
          },
        ]}
      />
      <OurStorySection />
      <KaizenPhilosophySection />
      <GuidesSection />
      <WhyChooseSection />
      <SectorExperience />
      <Recognization />
      <LeadershipTeam />
      <Container variant="primarySpacing" className=" privateEquityHeroCopy">
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
        <>
          <Container
            variant="sectionSp1"
            className=" absolute inset-0  flex items-center justify-center  "
          >
            <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
              <div className="w-full md:w-[500px] h-full p-[36px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
                  Ready To Talk?
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <div className="mt-[57px] mb-[32px] flex flex-col gap-[16px]">
                  <Typography variant="header-4" className="!text-white">
                    I want to talk to your experts in:
                  </Typography>
                  <div className="w-full h-[32px] border-b border-white flex items-center justify-between md:pr-[16px] pr-0">
                    <Typography variant="para-2" className="!text-white">
                      {" "}
                      Select an Industry
                    </Typography>

                    {/* Arrow */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
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
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                  View Representative Transactions
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
        Lets Connect
      </Typography>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
        className="w-full bg-transparent outline-none 
                   text-white placeholder:text-white/50 text-center"
        required
      />

      <button type="submit" className="w-full text-center">
        <Typography variant="header-2" className="!text-white">
          Submit
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
