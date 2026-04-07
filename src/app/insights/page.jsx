"use client";
import { useState, useRef, useEffect } from "react";
import BlogGridSection from "@/components/blogCardsGrid";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurApproachSection from "@/components/ourApproachSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
import { motion, useInView } from "framer-motion";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";


export default function Insights() {
  const sitecontent = useSiteContent(); 
  const {insight}=sitecontent;
  const {
    insightsHero,
    insightsFilter,
    insightDetailHero,
    letsConnect,
    privateEquityHero,
  } = insight;
  const { title, enter, form } = letsConnect;
  const { industries } = privateEquityHero;
    const [email, setEmail] = useState("");
    const ref = useRef(null);

   
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!email) {
     
        return;
      }

      console.log("Submitted Email:", email);
      setEmail("");
    };

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // close on outside click
    useEffect(() => {
      function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [showEmail, setShowEmail] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectIndustry = (industry) => {
      setSelected(industry);
      setIsOpen(false);
      setShowEmail(true);
    };
  return (
    <div className=" bg-[var(--color-background-1)] ">
      <Header />
      <Container
        variant="sectionSp3"
        className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between "
      >
        <AnimatedFadeUp>
          <Typography variant="display-3">{insightsHero.title}</Typography>
        </AnimatedFadeUp>
        <AnimatedFadeUp delay={0.15}>
          <Typography variant="para-2" className="w-full md:w-[533px]">
            {insightsHero.description}
          </Typography>
        </AnimatedFadeUp>
      </Container>

      <div
        ref={ref}
        className="md:py-[12px] py-[12px] md:px-[100px] px-[21px] w-full borderInsightFilter "
      >
        {/* 🔥 TOP BORDER */}
        <div className="absolute top-0 left-0 w-full h-[1px]">
          <div className="h-full bg-[rgba(182,153,106,0.5)] w-[25%]" />

          <motion.div
            className="absolute top-0 left-[25%] h-full origin-left bg-[rgba(182,153,106,0.5)]"
            style={{ width: "75%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0,
            }}
          />
        </div>

        {/* 🔥 BOTTOM BORDER */}
        <div className="absolute bottom-0 left-0 w-full h-[1px]">
          <div className="h-full bg-[rgba(182,153,106,0.5)] w-[25%]" />

          <motion.div
            className="absolute bottom-0 left-[25%] h-full origin-left bg-[rgba(182,153,106,0.5)]"
            style={{ width: "75%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0,
            }}
          />
        </div>
        {/* Desktop Layout (unchanged) */}
        <div className=" flex items-center justify-between w-full md:gap-0 gap-[16px]">
          <div className="px-[16px] py-[12px] border border-[var(--color-accent)] rounded-[500px] w-[463px] flex items-center justify-between ">
            <input
              type="text"
              className="text-[var(--color-accent)] focus:outline-none w-full"
              placeholder={insightsFilter.searchPlaceholder}
            />

            <img
              src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(21).png"
              alt="search"
              className="w-[16px] h-[16px] ml-[10px] object-contain cursor-pointer"
            />
          </div>
          <div className="relative" ref={dropdownRef}>
            <Button
              variant="primary"
              className="!px-[36px] !py-[14px] "
              onClick={() => setOpen(!open)}
            >
              {insightsFilter.buttons}
            </Button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-[10px] min-w-[172px] w-[250px] bg-[#F7F4EB] shadow-[0px_4px_14px_0px_#00000040] py-[12px] overflow-hidden z-50">
                {/* Header */}

                {/* List */}
                <div className="">
                  {insightsFilter.options?.map((item, i) => (
                    <div
                      key={i}
                      className="px-[20px] py-[16px]  cursor-pointer hover:bg-[var(--color-accent)] transition"
                    >
                      <Typography variant="para-3">{item}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Container variant="header" className=" !py-[20px] group">
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
            <div className="flex flex-col gap-[16px] md:w-[642px] w-full">
              <div className=" px-[36px] py-[8px] border border-white !w-fit rounded-[500px]  ">
                <Typography variant="para-3" className=" !text-white  ">
                  {insightDetailHero.category}
                </Typography>
              </div>

              <Typography
                variant="header-hero"
                colorVariant="white"
                className="group-hover:!underline "
              >
                {insightDetailHero.title}
              </Typography>

              <Typography
                delay={0.6}
                variant="para-2"
                colorVariant="white"
                className="w-full flex-shrink-0"
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

      <BlogGridSection variant="stack" posts={insight.blogs} initialCount={5} />
      {/* <div className="hidden md:block">
        <LetsConnectSection />
      </div>

    
      <div className="block md:hidden px-[28px] py-[220px] bg-[var(--color-background-2)]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[56px] text-center relative"
        >
          <Typography
            variant="display-3"
            className="!text-[var(--color-para-2)]"
          >
            {title[0]} {title[1]}
          </Typography>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`${enter} ${form.placeholder}`}
            className="w-full bg-transparent outline-none 
      text-[var(--color-para-2)] placeholder:text-white/50 text-center"
            required
          />

          <button type="submit" className="w-full text-center">
            <Typography
              variant="header-2"
              className="!text-[var(--color-para-2)]"
            >
              {form.submitLabel}
            </Typography>
          </button>
        </form>
      </div> */}
      <Container
        variant="primarySpacing"
        className="relative w-full h-[700px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={privateEquityHero.bgImage}
            alt="Kaizen Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <>
          <AnimatedFadeUp>
            <div className=" relative flex justify-center z-10 ">
              <div className=" !w-full border border-[var(--color-accent)] p-[8px] h-full  ">
                <div className="w-full md:w-[500px] md:h-[500px] h-full  p-[36px] bg-[var(--color-accent)]  flex flex-col">
                  <AnimatedFadeUp>
                    <Typography
                      variant="header-5"
                      className=" !text-[var(--color-para-2)] "
                    >
                      {privateEquityHero.title}
                    </Typography>
                  </AnimatedFadeUp>
                  <AnimatedFadeUp delay={0.15}>
                    <Typography
                      variant="para-2"
                      className=" !text-[var(--color-para-2)] mt-[26px] "
                    >
                      {privateEquityHero.description}
                    </Typography>
                  </AnimatedFadeUp>

                  <div className="mt-[57px] flex flex-col gap-[16px]">
                    <Typography
                      variant="header-4"
                      className="!text-[var(--color-para-2)]"
                    >
                      {privateEquityHero.subText}
                    </Typography>
                    <div className="relative w-full">
                      {/* Dropdown container when open */}
                      {isOpen ? (
                        <div
                          className="absolute top-full left-0 w-full shadow-md px-[8px]"
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
                            <div className="min-w-0 flex-1">
                              <Typography
                                variant="para-2"
                                className="!text-white"
                              >
                                <span className="block w-full truncate">
                                  {selected ||
                                    privateEquityHero.selectIndustryText}
                                </span>
                              </Typography>
                            </div>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-[var(--color-para-2)] transition-transform duration-300"
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
                          <div className="min-w-0 flex-1">
                            <Typography
                              variant="para-2"
                              className="!text-white"
                            >
                              <span className="block w-full truncate">
                                {selected ||
                                  privateEquityHero.selectIndustryText}
                              </span>
                            </Typography>
                          </div>

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
                  {showEmail && (
                    <div className="mt-[24px] w-full">
                      <Typography variant="para-2" className="!text-white">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="inputs w-full h-[40px] px-2 border-b border-white bg-transparent text-white outline-none placeholder:text-white"
                        />
                      </Typography>
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
                    className=" md:px-[36px] px-[24px] mt-[32px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]"
                  >
                    {privateEquityHero.button.label}
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </AnimatedFadeUp>
        </>
      </Container>
      <Footer />
    </div>
  );
}
