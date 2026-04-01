"use client";

import { useEffect, useState } from "react";
import Header from "@/components/ui-kit/header";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Footer from "@/components/ui-kit/footer";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";


export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("disclaimer");
  const [isMobile, setIsMobile] = useState(false);
  // const data = policiesData[activeTab];
  const sitecontent = useSiteContent();
const { legal } = sitecontent;
  const { title, description } = legal.policiesPage.hero;
  const tabs = legal.policies.tabs;
  const data = tabs.find((item) => item.key === activeTab);

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
          className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between border-b border-[#D9D4CC] relative"
        >
          <Typography variant="display-3">{title}</Typography>

          <Typography variant="para-2" className="w-full md:w-[563px]">
            {description}
          </Typography>
        </Container>

        {/* Content */}
        <Container className="policy-desc flex flex-col md:flex-row gap-[40px] h-full">
          {/* Sidebar */}
          <div className="h-full">
            <div className="md:w-[307px] w-full  h-[263px]  bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
              <Typography variant={isMobile ? "para-2" : "para-1"}>
                List
              </Typography>

              <ul className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-[16px]">
                {tabs.map((item, index) => (
                  <Typography
                    key={item.key}
                    variant={isMobile ? "para-3" : "para-2"}
                    onClick={() => setActiveTab(item.key)}
                    className={`cursor-pointer ${
                      activeTab === item.key
                        ? "text-[#231F20]"
                        : "!text-[#231F20]/50"
                    }`}
                  >
                    {item.label}
                  </Typography>
                ))}
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 max-w-[700px] h-full">
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
