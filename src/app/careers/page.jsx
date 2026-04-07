"use client";
import { useRef,useState,useEffect } from "react";
import AboutHeroSection from "@/components/abouthero";
import JobCard from "@/components/jobCard";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";


export default function Careers() {
  const sitecontent = useSiteContent();
    const { career } = sitecontent;
   const {
     careerHero,
     pevcPractice,
     insightsHero,
     insightsFilter,
     contactInfo,
     quote,
     jobsData,
   } = career;

   const sectionRef = useRef(null);
   const handleScroll = () => {
     sectionRef.current?.scrollIntoView({
       behavior: "smooth",
     });
   };
   const ref = useRef(null);
   const isInView = useInView(ref, {
     once: true,
     amount: 0.2, 
   });
    const [open, setOpen] = useState(false);
    const [selectedMode, setSelectedMode] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
   const dropdownRef = useRef(null);
   const [openSection, setOpenSection] = useState({
     mode: false, 
     time: false,
   });
   const toggleSection = (key) => {
     setOpenSection((prev) => ({
       ...prev,
       [key]: !prev[key],
     }));
   };
   const filteredJobs = jobsData.filter((job) => {
     const modeMatch = selectedMode ? job.mode === selectedMode : true;
     const timeMatch = selectedTime ? job.type === selectedTime : true;

     const searchMatch = searchTerm
       ? job.title.toLowerCase().includes(searchTerm.toLowerCase())
       : true;

     return modeMatch && timeMatch && searchMatch;
   });
   useEffect(() => {
     function handleClickOutside(e) {
       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
         setOpen(false);
       }
     }
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <section className="hero-section relative">
        {/* Background Image */}
        <Image
          src={careerHero.bgImage}
          alt="Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content  text-left w-full overflow-hidden">
          <div className="flex flex-col">
            <div className="flex flex-col !pr-[48px] w-full  ">
              <AnimatedFadeUp>
                <Typography
                  variant="display-3"
                  colorVariant="white"
                  className="w-full"
                >
                  {careerHero.title}
                </Typography>
              </AnimatedFadeUp>
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  variant="para-2"
                  className="!text-white md:mt-[15px] mt-[12px] md:!w-[668px] !w-full max-w-full "
                >
                  {careerHero.description}
                </Typography>
              </AnimatedFadeUp>
              <AnimatedFadeUp delay={0.15}>
                <div className="mt-[26px] flex flex-col md:flex-row items-center gap-[16px]">
                  <Button
                    variant="primary"
                    onClick={handleScroll}
                    className="w-full md:w-auto"
                  >
                    {careerHero.buttons[0].label}
                  </Button>
                </div>
              </AnimatedFadeUp>{" "}
            </div>
            {/* Icons */}
            <div className="md:pr-[200px] pr-[24px]">
              <AnimatedFadeUp delay={0.15}>
                <div className="w-full overflow-x-auto md:overflow-hidden mt-[86px] md:mt-[100px]  border-t border-t-[#F7F4EB80]  pt-[30px]">
                  <div className="flex w-max md:w-full gap-[48px] md:gap-0 md:justify-between">
                    {careerHero.logos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className="w-[152px] h-[58px] object-contain flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>
      <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
        careersPage={false}
        startupPage={true}
      />
      <section ref={sectionRef}>
        <Container
          variant="primarySpacing"
          className="bg-[var(--color-background-1)] flex md:flex-row flex-col items-start md:gap-[303px] gap-[16px]"
        >
          <Typography variant="para-1" className=" shrink-0 ">
            {insightsHero.title}
          </Typography>
          <Typography variant="para-2">{insightsHero.description}</Typography>
        </Container>

        <div
          ref={ref}
          className="md:py-[12px] py-[12px] md:px-[100px] px-[21px] w-full borderInsightFilter  bg-[var(--color-background-1)]"
        >
          {/* 🔥 TOP BORDER */}
          <div className="absolute top-0 left-0 w-full h-[0.5px]">
            <div className="h-full bg-[rgba(182,153,106,0.5)] w-[25%]" />

            <motion.div
              className="absolute top-0 left-[25%] h-full origin-left bg-[rgba(182,153,106,0.5)]"
              style={{ width: "75%" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
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
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full focus:outline-none opacity-[80%] placeholder:!text-[#B6996A] !text-[#B6996A]"
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
                <div className="absolute right-0 mt-[10px] w-[250px] bg-[#F7F4EB] shadow-[0px_4px_14px_0px_#00000040] pb-[12px] z-50">
                  {/* MODE SECTION */}
                  <div className="border-b border-black/10">
                    {/* Header */}
                    <div
                      onClick={() => {
                        setSelectedMode(null);
                        setSelectedTime(null);
                      }}
                      className="flex items-center justify-between px-[20px] py-[12px] cursor-pointer"
                    >
                      <div className="flex items-center gap-[8px]">
                        <span>
                          {" "}
                          <img
                            src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/cross-small%201.png"
                            className="w-[12px] h-[12px] object-contain"
                          />
                        </span>
                        <Typography
                          variant="para-3"
                          className=" !text-[#231F20] !opacity-[80%]"
                        >
                          Clear
                        </Typography>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleSection("mode")}
                      className="flex items-center justify-between px-[20px] py-[12px] cursor-pointer"
                    >
                      <div className="flex items-center gap-[8px]">
                        <span>
                          {" "}
                          <img
                            src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Frame%20(7).png"
                            className="w-[14px] h-[14px] object-contain"
                          />
                        </span>
                        <Typography variant="para-3">Mode</Typography>
                      </div>

                      {/* Arrow */}
                      <span
                        className={`transition-transform duration-300 -rotate-90 ${
                          openSection.mode ? "rotate-0" : ""
                        }`}
                      >
                        <img
                          src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(25).png"
                          className=" w-[10px] h-[5px] object-contain"
                        />
                      </span>
                    </div>

                    {/* Options */}
                    {openSection.mode &&
                      insightsFilter.filters.mode.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedMode(item)}
                          className={`px-[20px] py-[14px]  cursor-pointer hover:bg-[var(--color-accent)]
                          ${selectedMode === item ? "bg-[var(--color-accent)]" : ""}
                        `}
                        >
                          <Typography variant="para-3">{item}</Typography>
                        </div>
                      ))}
                  </div>

                  {/* TIME SECTION */}
                  <div>
                    {/* Header */}
                    <div
                      onClick={() => toggleSection("time")}
                      className="flex items-center justify-between px-[20px] py-[12px] cursor-pointer"
                    >
                      <div className="flex items-center gap-[8px]">
                        <span>
                          {" "}
                          <img
                            src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%207%20(1).png"
                            className="w-[14px] h-[14px] object-contain"
                          />
                        </span>
                        <Typography variant="para-3">Time</Typography>
                      </div>

                      <span
                        className={`transition-transform duration-300 -rotate-90 ${
                          openSection.time ? "rotate-0" : ""
                        }`}
                      >
                        <img
                          src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(25).png"
                          className=" w-[10px] h-[5px] object-contain"
                        />
                      </span>
                    </div>

                    {/* Options */}
                    {openSection.time &&
                      insightsFilter.filters.time.map((item, i) => (
                        <div
                          onClick={() => setSelectedTime(item)}
                          className={`px-[20px] py-[14px] cursor-pointer hover:bg-[var(--color-accent)]
                          ${selectedTime === item ? "bg-[var(--color-accent)]" : ""}
                        `}
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

        <div className="md:px-[100px] px-[24px] md:pt-[40px] pt-[32px] md:pb-[100px] pb-[64px] bg-[var(--color-background-1)] flex flex-col gap-[16px] ">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
      <div className="md:px-[100px] px-[24px] py-[60px] flex justify-center !bg-[var(--color-background-2)]">
        <Typography
          variant="para-2"
          className="!text-white text-center md:w-[734px] w-full"
        >
          {quote.title}
        </Typography>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 bg-[var(--color-background-2)] overflow-hidden">
        {/* LEFT */}
        <Container
          variant="sectionSp1"
          className="flex items-center justify-center gap-[16px] w-full"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
              fill="white"
            />
          </svg>

          <Typography variant="header-2" className="!text-white">
            {contactInfo.items[0].value}
          </Typography>
        </Container>

        {/* RIGHT */}
        <Container
          variant="sectionSp1"
          className="flex items-center justify-center gap-[16px] w-full"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M11.6714 12.2536C11.1739 12.5853 10.5959 12.7606 10 12.7606C9.40414 12.7606 8.82617 12.5853 8.32859 12.2536L0.133164 6.78977C0.087922 6.75952 0.0435173 6.72803 0 6.69535L0 15.6484C0 16.6748 0.833008 17.4895 1.84113 17.4895H18.1588C19.1853 17.4895 20 16.6565 20 15.6484V6.69531C19.9564 6.72808 19.9119 6.75963 19.8665 6.78992L11.6714 12.2536Z"
              fill="white"
            />
            <path
              d="M0.783204 5.81487L8.97863 11.2787C9.28887 11.4855 9.64441 11.5889 9.99996 11.5889C10.3555 11.5889 10.7111 11.4855 11.0214 11.2787L19.2168 5.81487C19.7072 5.48812 20 4.94124 20 4.35101C20 3.33612 19.1743 2.5105 18.1595 2.5105H1.84051C0.825665 2.51054 0 3.33616 0 4.35198C0 4.92662 0.344372 5.43713 0.783204 5.81487Z"
              fill="white"
            />
          </svg>

          <Typography variant="header-2" className="!text-white">
            {contactInfo.items[1].value}
          </Typography>
        </Container>

        {/* 🔥 TOP LINE */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[0.5px] bg-white/50 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* 🔥 BOTTOM LINE */}
        <motion.div
          className="block md:hidden absolute top-1/2 left-0 w-full h-[0.5px] bg-white/50 origin-center -translate-y-1/2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* 🔥 CENTER VERTICAL LINE */}
        <motion.div
          className="hidden md:block absolute top-0 left-1/2 w-[0.5px] h-full bg-white/50 origin-center"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
      </div>
      <Footer />
    </div>
  );
}
