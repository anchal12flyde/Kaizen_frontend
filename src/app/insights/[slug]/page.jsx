"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Typography from '@/components/ui-kit/typography';
import { Container } from '@/components/ui-kit/spacing';
import Image from 'next/image';
import Header from '@/components/ui-kit/header';
import Footer from '@/components/ui-kit/footer';
import BlogGridSection from "@/components/blogCardsGrid";
import { useSiteContent } from "@/context/SiteContentProvider";

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
export default function SingleInsights() {

 const sitecontent = useSiteContent(); 
  const { blogPage } = sitecontent;
  const { heroSection, stats, representativeMandates, fullTransactionList } =
    blogPage;

  const [activeTab, setActiveTab] = useState("disclaimer");
  const [isMobile, setIsMobile] = useState(false);
  const data = policiesData[activeTab];


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectIndustry = (industry) => {
    setSelected(industry);
    setIsOpen(false);
  };
  return (
    <>
      <Header />

      <section className="hero-section  !h-[504px]">
        <Image
          src="https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg"
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
                Category
              </Typography>
            </div>

            <Typography
              variant="header-5"
              colorVariant="white"
              className="md:w-[626px] w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>

            <Typography variant="button" className=" dateHeroIn  ">
              4 min | Date: 14/09/2024
            </Typography>
          </div>
        </div>
      </section>
      <Container className="policy-desc ">
        {/* Sidebar */}
        <div className="md:w-[307px] w-full md:h-[263px] h-full  bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
          <Typography variant={isMobile ? "para-2" : "para-1"}>
            Table of Content
          </Typography>

          <ul className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-[16px]">
            <Typography
              variant={isMobile ? "para-3" : "para-2"}
              onClick={() => setActiveTab("disclosures")}
              className={`cursor-pointer order-1 md:order-none ${
                activeTab === "disclosures"
                  ? "text-[#231F20]"
                  : "!text-[#231F20]/50"
              }`}
            >
              Regulatory Disclosures
            </Typography>

            <Typography
              variant={isMobile ? "para-3" : "para-2"}
              onClick={() => setActiveTab("disclaimer")}
              className={`cursor-pointer order-3 md:order-none ${
                activeTab === "disclaimer"
                  ? "text-[#231F20]"
                  : "!text-[#231F20]/50"
              }`}
            >
              Disclaimer
            </Typography>

            <Typography
              variant={isMobile ? "para-3" : "para-2"}
              onClick={() => setActiveTab("terms")}
              className={`cursor-pointer order-4 md:order-none ${
                activeTab === "terms" ? "text-[#231F20]" : "!text-[#231F20]/50"
              }`}
            >
              Terms of Use
            </Typography>

            <Typography
              variant={isMobile ? "para-3" : "para-2"}
              onClick={() => setActiveTab("privacy")}
              className={`cursor-pointer order-2 md:order-none ${
                activeTab === "privacy"
                  ? "text-[#231F20]"
                  : "!text-[#231F20]/50"
              }`}
            >
              Privacy Policy
            </Typography>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[700px]">
          <Typography
            variant={isMobile ? "display-3" : "header-hero"}
            className=" mb-[16px] "
          >
            {data.title}
          </Typography>
          <Typography variant="para-2" className=" !text-[#231F20] mb-[56px]">
            {data.date}
          </Typography>

          <div className="space-y-[56px] ">
            {data.sections?.map((section, i) => (
              <div key={i}>
                <Typography
                  variant="big-firm"
                  className=" !text-[#231F20] mb-[20px]"
                >
                  {section.heading}
                </Typography>

                {section.content.map((para, idx) => (
                  <Typography
                    variant="para-2"
                    key={idx}
                    className={idx !== 0 ? " !text-[#231F20] mt-[20px]" : ""}
                  >
                    {para}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <BlogGridSection
        variant="scroll"
        posts={[
          {
            image: "https://ik.imagekit.io/demo/img/image1.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
          {
            image: "https://ik.imagekit.io/demo/img/image2.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
          {
            image: "https://ik.imagekit.io/demo/img/image3.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
        ]}
        buttonShow={true}
        buttonText="View More"
      />
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
            className=" absolute inset-0  flex justify-center  "
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
                            {selected || "Select an industry"}
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
                          {selected || "Select an industry"}
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
                  View Representative Transactions
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>

      <Footer />
    </>
  );
}
