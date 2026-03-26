"use client";
import { useState } from "react";
import AboutHeroSection from "@/components/abouthero";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Link from "next/link";
import sitecontent from "@/data/sitecontent.json";
import { getSiteContent } from "@/lib/siteContent";


export default function ServicesListing () {
  const sitecontent = getSiteContent(); 
  const {practiceAreas}=sitecontent;
const { practiceHero, pevcPractice, privateEquityHero } = practiceAreas;
const { industries } = privateEquityHero;
  
const { cardsData } = pevcPractice;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const selectIndustry = (industry) => {
      setSelected(industry);
      setIsOpen(false);
    };
    return (
      <div>
        <Header />
        <AboutHeroSection
          bgImage={practiceHero.bgImage}
          align={practiceHero.align}
          buttons={practiceHero.buttons}
          title={
            <>
              {practiceHero.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </>
          }
          description={<>{practiceHero.description}</>}
        />

        <Container variant="primarySpacing" className=" bg-[#0A193A] ">
          <div className=" flex flex-col md:gap-[100px] gap-[80px] ">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[96px] gap-[36px]">
              <Typography variant="header-6" className="!text-white w-[250px]">
                {pevcPractice.topContent.title}
              </Typography>

              <Typography variant="para-2" className="!text-white">
                {pevcPractice.topContent.subtitle}
              </Typography>
            </div>

            {/* List */}
            <div className="flex md:gap-[16px] gap-[2px] flex-col">
              {pevcPractice.cardsData.map((item, index) => (
                 <Link href={item.link} className="cursor-pointer">
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:items-center md:justify-between border-t border-white/30 py-[38px]"
                >
                  {/* Content */}
                  <div className="flex md:flex-row flex-col md:gap-[96px] gap-[16px]">
                    <div className="flex justify-between items-center md:block md:w-auto w-full">
                      <Typography
                        variant="header-1"
                        className="!text-white w-[250px]"
                      >
                        {item.title}
                      </Typography>

                     
                        <div className="md:hidden w-[30px] h-[30px] cursor-pointer">
                          <img
                            src={item.icon}
                            className="h-full w-full object-contain"
                            alt={item.title}
                          />
                        </div>
                    
                    </div>

                    {/* Description */}
                    <Typography
                      variant="para-2"
                      className="!text-white w-[316px]"
                    >
                      {item.desc}
                    </Typography>
                  </div>
                  
                    <div className="hidden md:block md:w-[45px] md:h-[45px]">
                      <img
                        src={item.icon}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  
                </div>
                </Link>
              ))}

              <div className="border-t border-white/30"></div>
            </div>
          </div>
        </Container>

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
              className=" absolute inset-0  flex justify-center  "
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
                            <Typography
                              variant="para-2"
                              className="!text-white"
                            >
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
                  <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]">
                    {privateEquityHero.button.label}
                  </button>
                </div>
                <div></div>
              </div>
            </Container>
          </>
        </Container>
        <Footer />
      </div>
    );
}