"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AboutHeroSection from "@/components/abouthero";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Link from "next/link";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

// Create a separate component for each practice area item
function PracticeAreaItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <Link href={item.link} className="cursor-pointer group block">
      <div
        ref={ref}
        className="relative flex md:flex-row flex-col md:items-center md:justify-between py-[38px]"
      >
        {/* 🔥 Animated Border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] overflow-hidden">
          <motion.div
            className="h-full bg-white/50 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        {/* Content */}
        <div className="flex md:flex-row flex-col md:gap-[96px] gap-[16px]">
          <div className="flex justify-between items-center md:block md:w-auto w-full">
            <AnimatedFadeUp>
              <Typography
                variant="header-1"
                className="!text-white w-[250px]"
              >
                {item.title}
              </Typography>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.15}>
              <div className="md:hidden w-[30px] h-[30px] cursor-pointer">
                <img
                  src={item.icon}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:rotate-[-45deg]"
                  alt={item.title}
                />
              </div>
            </AnimatedFadeUp>
          </div>

          {/* Description */}
          <AnimatedFadeUp delay={0.25}>
            <Typography
              variant="para-2"
              className="!text-white w-[316px]"
            >
              {item.desc}
            </Typography>
          </AnimatedFadeUp>
        </div>

        {/* Right Icon */}
        <div className="hidden md:block md:w-[45px] md:h-[45px]">
          <img
            src={item.icon}
            className="h-full w-full object-contain transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
              opacity-70 group-hover:opacity-100 
              group-hover:brightness-[3] group-hover:contrast-500 
              group-hover:rotate-[-45deg]"
            alt={item.title}
          />
        </div>
      </div>
    </Link>
  );
}

export default function ServicesListing() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    console.log("Submitted Email:", email);
    setEmail("");
    setShowEmail(false);
    setSelected("");
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectIndustry = (industry) => {
    setSelected(industry);
    setIsOpen(false);
    setShowEmail(true);
  };

  // Fetch services listing data from API
  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/pages/practice-areas');
        
        if (response.data.success && response.data.data) {
          const apiData = response.data.data;
          const transformedData = transformServicesData(apiData);
          setPageData(transformedData);
        } else {
          setError("Failed to load services page");
        }
      } catch (err) {
        console.error("Error fetching services page:", err);
        setError(err.message || "Failed to load page");
      } finally {
        setLoading(false);
      }
    };
    
    fetchServicesData();
  }, []);

  const transformServicesData = (apiData) => {
    // Hero Section - practice_hero
    const heroSection = apiData.sections?.find(s => s.sectionId === 'practice_hero');
    const practiceHero = {
      bgImage: heroSection?.fields?.find(f => f.key === 'bgImage')?.value || '',
      title: heroSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: heroSection?.fields?.find(f => f.key === 'description')?.value || '',
      align: heroSection?.fields?.find(f => f.key === 'align')?.value || 'left',
      buttons: heroSection?.fields?.find(f => f.key === 'buttons')?.value || [],
    };
    
    // Services Section - practice_services
    const servicesSection = apiData.sections?.find(s => s.sectionId === 'practice_services');
    const pevcPractice = {
      topContent: servicesSection?.fields?.find(f => f.key === 'topContent')?.value || { title: '', subtitle: '' },
      cardsData: servicesSection?.fields?.find(f => f.key === 'cardsData')?.value || [],
    };
    
    // CTA Section - practice_cta
    const ctaSection = apiData.sections?.find(s => s.sectionId === 'practice_cta');
    const privateEquityHero = {
      bgImage: ctaSection?.fields?.find(f => f.key === 'bgImage')?.value || '',
      title: ctaSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: ctaSection?.fields?.find(f => f.key === 'description')?.value || '',
      subText: ctaSection?.fields?.find(f => f.key === 'subText')?.value || '',
      selectIndustryText: ctaSection?.fields?.find(f => f.key === 'selectIndustryText')?.value || '',
      industries: ctaSection?.fields?.find(f => f.key === 'industries')?.value || [],
      button: ctaSection?.fields?.find(f => f.key === 'button')?.value || { label: '' },
    };
    
    return { practiceHero, pevcPractice, privateEquityHero };
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services page...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !pageData) {
    return (
      <>
        <Header />
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center m-8">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Data</h3>
          <p className="text-red-600">{error || "Failed to load services page"}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const { practiceHero, pevcPractice, privateEquityHero } = pageData;
  const { industries } = privateEquityHero;
  const { cardsData } = pevcPractice;

  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage={practiceHero.bgImage}
        align={practiceHero.align}
        buttons={practiceHero.buttons}
        title={
          <>
            {practiceHero.title?.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        description={<>{practiceHero.description}</>}
      />
      <section id="End-to-End-Services">
        <Container variant="primarySpacing" className="bg-[#0A193A]">
          <div className="flex flex-col md:gap-[100px] gap-[80px]">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[96px] gap-[36px]">
              <AnimatedFadeUp>
                <Typography
                  variant="header-6"
                  className="!text-white w-[250px]"
                >
                  {pevcPractice.topContent?.title}
                </Typography>
              </AnimatedFadeUp>
              <AnimatedFadeUp delay={0.15}>
                <Typography variant="para-2" className="!text-white">
                  {pevcPractice.topContent?.subtitle}
                </Typography>
              </AnimatedFadeUp>
            </div>

            {/* List - Using the separate component */}
            <div className="flex md:gap-[16px] gap-[2px] flex-col">
              {cardsData?.map((item, index) => (
                <PracticeAreaItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>
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
          <div className="relative flex justify-center z-10">
            <div className="!w-full border border-[var(--color-accent)] p-[8px] h-full">
              <div className="w-full md:w-[500px] md:h-[500px] h-full p-[36px] bg-[var(--color-accent)] flex flex-col">
                <AnimatedFadeUp>
                  <Typography
                    variant="header-5"
                    className="!text-[var(--color-para-2)]"
                  >
                    {privateEquityHero.title}
                  </Typography>
                </AnimatedFadeUp>
                <AnimatedFadeUp delay={0.15}>
                  <Typography
                    variant="para-2"
                    className="!text-[var(--color-background-1)] mt-[26px]"
                  >
                    {privateEquityHero.description}
                  </Typography>
                </AnimatedFadeUp>

                <div className="mt-[57px] flex flex-col gap-[16px]">
                  <AnimatedFadeUp delay={0.15}>
                    <Typography
                      variant="header-4"
                      className="!text-[var(--color-para-2)]"
                    >
                      {privateEquityHero.subText}
                    </Typography>
                  </AnimatedFadeUp>
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
                            style={{ transform: "rotate(180deg)" }}
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
                          {industries?.map((industry) => (
                            <div
                              key={industry}
                              onClick={() => selectIndustry(industry)}
                              className="px-[12px] py-[6px] hover:bg-white/20 cursor-pointer !text-[var(--color-background-1)]"
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
                  className="md:px-[36px] px-[24px] mt-[32px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white text-[18px]"
                >
                  {privateEquityHero.button?.label}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </div>
  );
}