"use client";
import { use } from "react";
import { useEffect, useState,useRef,useLayoutEffect } from "react";
import React from 'react'
import Typography from '@/components/ui-kit/typography';
import { Container } from '@/components/ui-kit/spacing';
import Image from 'next/image';
import Header from '@/components/ui-kit/header';
import Footer from '@/components/ui-kit/footer';
import BlogGridSection from "@/components/blogCardsGrid";
import { useSiteContent } from "@/context/SiteContentProvider";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const industries=[
  "Select an Industry ",
  "Select an Industry ",
  "Select an Industry ",
  "Select an Industry "
];



const policiesData = {
  disclosures: {
    title: " Disclosures",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
    ],
  },

  disclaimer: {
    title: "Disclaimer",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Use",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Terms Heading",
        content: ["Terms ka content..."],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Privacy Heading",
        content: ["Privacy content..."],
      },
    ],
  },
};
export default function Page({ params }) {
  const { slug } = use(params); 

  const sitecontent = useSiteContent();

  const blog = sitecontent.blogPage.find(
    (page) => page.slug === slug
  );


  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { heroSection, relatedInsights, blogs, privateEquityHero } = blog;
  const tabs = blog?.policies?.tabs || [];
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");
  const activeTabData = tabs.find((tab) => tab.key === activeTab);
  const [isMobile, setIsMobile] = useState(false);
  const data = policiesData[activeTab];
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => {
          const heroHeight =
            document.querySelector(".hero-section")?.offsetHeight || 0;

          return `top top+=${heroHeight}`;
        },
        end: () =>
          "+=" + (contentRef.current.scrollHeight - window.innerHeight),
        pin: true,
        pinSpacing: true,
        markers: false,
        invalidateOnRefresh: true,

        onEnter: () => {
          setEnableScroll(true);
        },

        onLeave: () => {
          setEnableScroll(false);
        },

        onEnterBack: () => {
          setEnableScroll(true);

          contentRef.current.scrollTop = lastScrollRef.current;
        },

        onLeaveBack: () => {
          setEnableScroll(false);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const lastScrollRef = useRef(0);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleWheel = (e) => {
      if (!enableScroll) return;

      const section = sectionRef.current;
      const el = contentRef.current;

      if (!section || !el) return;

      // 🔥 Check if cursor is inside pinned section
      const rect = section.getBoundingClientRect();
      const isInsideSection =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInsideSection) return;

      const isAtTop = el.scrollTop <= 0;
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

      // 🔥 Exit conditions
      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        setEnableScroll(false);
        return;
      }

      e.preventDefault();
      el.scrollTop += e.deltaY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [enableScroll]);
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!enableScroll) return;

      const currentY = e.touches[0].clientY;
      const delta = startY - currentY;

      contentRef.current.scrollTop += delta;
      startY = currentY;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [enableScroll]);
  useEffect(() => {
    const el = contentRef.current;

    const handleScroll = () => {
      if (!enableScroll) return;

      lastScrollRef.current = el.scrollTop;

      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

      const isAtTop = el.scrollTop <= 0;

      if (isAtBottom || isAtTop) {
        setEnableScroll(false); // 🔥 release both sides
      }
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [enableScroll]);
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);
  const [email, setEmail] = useState("");
  
  const [showEmail, setShowEmail] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    console.log("Submitted Email:", email); 

    setEmail("");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  
  const selectIndustry = (industry) => {
    setSelected(industry);
    setIsOpen(false);
    setShowEmail(true);
  };
  return (
    <>
      <Header />

      <section className="hero-section  !h-[504px]">
        <Image
          src={heroSection?.image}
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
                {heroSection?.content?.category}
              </Typography>
            </div>

            <Typography
              variant="header-5"
              colorVariant="white"
              className="md:w-[626px] w-full"
            >
              {heroSection?.content?.title}
            </Typography>

            <Typography variant="button" className="dateHeroIn">
              {heroSection?.content?.meta?.readTime} | Date:{" "}
              {heroSection?.content?.meta?.date}
            </Typography>
          </div>
        </div>
      </section>

      <section className="relative ">
        <div>
          <Container
            ref={sectionRef}
            className="policy-desc flex relative z-10 "
          >
            {/* Sidebar */}
            <div className="md:w-[307px] w-full h-fit sticky top-[71px]">
              <div className="md:w-[307px] w-full md:h-[263px] h-full  bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
                <Typography variant={isMobile ? "para-2" : "para-1"}>
                  Table of Content
                </Typography>

                <ul className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-[16px]">
                  {tabs.map((tab, index) => (
                    <Typography
                      key={tab.key}
                      variant={isMobile ? "para-3" : "para-2"}
                      onClick={() => setActiveTab(tab.key)}
                      className={`cursor-pointer ${
                        activeTab === tab.key
                          ? "text-[#231F20]"
                          : "!text-[#231F20]/50"
                      }`}
                    >
                      {tab.label}
                    </Typography>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div
              ref={contentRef}
              className="flex-1 max-w-[800px] h-full overflow-y-auto"
            >
              <div className="space-y-[56px] ">
                {activeTabData?.sections?.map((section, i) => (
                  <div key={i}>
                    <Typography
                      variant="big-firm"
                      className="!text-[#231F20] mb-[20px]"
                    >
                      {section.heading}
                    </Typography>

                    {section.content.map((para, idx) => (
                      <Typography
                        variant="para-2"
                        key={idx}
                        className={idx !== 0 ? "!text-[#231F20] mt-[20px]" : ""}
                      >
                        {para}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
      <div className="">
        <Container
          variant="sectionSp1"
          className=" flex flex-col items-center  text-center gap-[16px] !pb-[0]  "
        >
          <Typography variant="header-6">{relatedInsights.title}</Typography>
          <Typography variant="para-2">
            {relatedInsights.description}
          </Typography>
        </Container>

        <BlogGridSection
          variant="scroll"
          posts={blogs.items}
          buttonShow={true}
          buttonText={blogs.button}
        />
      </div>
      <Container
        variant="primarySpacing"
        cl
        className="relative w-full h-[700px] overflow-hidden"
      >
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
          <div className=" relative flex justify-center z-10 ">
            <div className=" !w-full border border-[var(--color-accent)] p-[8px] h-full  ">
              <div className="w-full md:w-[500px] md:h-[500px] h-full p-[36px] bg-[var(--color-accent)]  flex flex-col">
                <Typography
                  variant="header-5"
                  className=" !text-[var(--color-para-2)] "
                >
                  {privateEquityHero.title}
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-[var(--color-para-2)] mt-[26px] "
                >
                  {privateEquityHero.description}
                </Typography>

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
                          <Typography
                            variant="para-2"
                            className="!text-[var(--color-para-2)]"
                          >
                            {selected || privateEquityHero.selectIndustryText}
                          </Typography>

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
                {showEmail && (
                  <div className="mt-[24px] w-full">
                    <Typography variant="para-2" className="!text-white">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full h-[40px] px-2 border-b border-white bg-transparent text-white outline-none placeholder:text-white"
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
        </>
      </Container>

      <Footer />
    </>
  );
}
