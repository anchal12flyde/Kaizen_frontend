"use client";
import { useState } from "react";
import BlogGridSection from "@/components/blogCardsGrid";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurApproachSection from "@/components/ourApproachSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Data from "@/data/insights.json";




export default function Insights() {
  const {
    insightsHero,
    insightsFilter,
    insightDetailHero,
    letsConnect,
    privateEquityHero,
  } = Data;
  const { title, enter, form } = letsConnect;
  const { industries } = privateEquityHero;
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
  return (
    <div className=" bg-[var(--color-background-1)] ">
      <Header />
      <Container
        variant="sectionSp3"
        className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between "
      >
        <Typography variant="display-3">{insightsHero.title}</Typography>
        <Typography variant="para-2" className="w-full md:w-[533px]">
          {insightsHero.description}
        </Typography>
      </Container>

      <div className="md:py-[12px] py-0 md:px-[100px] px-0 w-full borderInsightFilter border">
        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Button variant="primary" className="!px-[36px] !py-[12px]">
            {insightsFilter.buttons[0].label}
          </Button>

          <div className="!px-[36px] !py-[12px] border border-[var(--color-accent)] rounded-[500px] !w-[463px]">
            <input
              type="text"
              className="text-[var(--color-accent)] focus:outline-none text-center w-full"
              placeholder={insightsFilter.searchPlaceholder}
            />
          </div>

          <Button variant="primary" className="!px-[36px] !py-[12px]">
            {insightsFilter.buttons[1].label}
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full flex flex-col">
          {/* Row 1 - Search */}
          <div className="px-[24px] py-[12px] border-b border-[var(--color-accent)]">
            <div className="border border-[var(--color-accent)] rounded-[500px] px-[16px] py-[10px]">
              <input
                type="text"
                className="text-[var(--color-accent)] focus:outline-none text-center w-full"
                placeholder={insightsFilter.searchPlaceholder}
              />
            </div>
          </div>

          {/* Row 2 - Filters */}
          <div className="px-[24px] py-[12px] flex gap-[12px]">
            {insightsFilter.buttons.map((btn, i) => (
              <Button key={i} variant="primary" className="w-full !py-[12px]">
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Container variant="header" className=" !py-[20px] ">
        <section className="hero-section  !h-[558px]">
          <Image
            src={insightDetailHero.bgImage}
            alt="Kaizen Hero"
            fill
            className="hero-background"
            priority
          />

          {/* Overlay */}
          <div className="hero-overlay"></div>

          {/* Content */}
          <div className="hero-content right-[50px]">
            <div className="flex flex-col gap-[16px]">
              <div className=" px-[36px] py-[8px] border border-white !w-fit rounded-[500px]  ">
                <Typography variant="para-3" className=" !text-white  ">
                  {insightDetailHero.category}
                </Typography>
              </div>

              <Typography variant="header-hero" colorVariant="white">
                {insightDetailHero.title}
              </Typography>

              <Typography
                delay={0.6}
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0"
              >
                {insightDetailHero.description}
              </Typography>

              <Typography variant="button" className=" dateHeroIn  ">
                {insightDetailHero.meta.readTime} |{" "}
                {insightDetailHero.meta.date}
              </Typography>
            </div>
          </div>
        </section>
      </Container>

      <BlogGridSection variant="stack" posts={Data.blogs} />
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
            placeholder={`${enter} ${form.placeholder}`}
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
      <Footer />
    </div>
  );
}
