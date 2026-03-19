"use client";

import { useEffect, useState } from "react";
import Header from "@/components/ui-kit/header";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Footer from "@/components/ui-kit/footer";



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
export default function PoliciesPage() {
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
  return (
    <>
      <Header />
      <div className="bg-[#fffff] h-full text-[#1A1A1A]">
        {/* Header */}
        <Container
          variant="sectionSp3"
          className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between border-b border-[#D9D4CC]"
        >
          <Typography variant="display-3">Policies</Typography>

          <Typography variant="para-2" className="w-full md:w-[563px]">
            Founded in August 2022, Kaizen Law was established with a clear
            purpose — to build a focused corporate and transaction advisory firm
            that combines technical excellence with agility and personal
            accountability.
          </Typography>
        </Container>

        {/* Content */}
        <Container className="policy-desc ">
          {/* Sidebar */}
          <div className="md:w-[307px] w-full md:h-[263px] h-full  bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
            <Typography variant={isMobile ? "para-2" : "para-1"}>
              List
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
                  activeTab === "terms"
                    ? "text-[#231F20]"
                    : "!text-[#231F20]/50"
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
      </div>
      <Footer />
    </>
  );
}
