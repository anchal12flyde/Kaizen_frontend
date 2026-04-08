"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/ui-kit/header";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Footer from "@/components/ui-kit/footer";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("disclaimer");
  const [isMobile, setIsMobile] = useState(false);
  // const data = policiesData[activeTab];
  const sitecontent = useSiteContent();
const { legal } = sitecontent;
  const { title, description } = legal.policiesPage.hero;
  const tabs = legal.policies.tabs;
  const data = tabs.find((item) => item.key === activeTab);


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
      <div className="bg-[#fffff]  text-[#1A1A1A]">
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
        <section className="relative ">
          <div>
            <Container
              ref={sectionRef}
              className="policy-desc flex flex-col md:flex-row gap-[40px] items-start relative z-10"
            >
              {/* Sidebar */}
              <div className=" h-fit sticky top-[71px]">
              <div className="md:w-[307px] w-full  md:h-[263px]   bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
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
              <div ref={contentRef} className="flex-1 max-w-[700px] ">
                <Typography
                  variant={isMobile ? "display-3" : "header-hero"}
                  className=" mb-[16px] "
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-[#231F20] mb-[56px]"
                >
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
                          className={
                            idx !== 0 ? " !text-[#231F20] mt-[20px]" : ""
                          }
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
      </div>
      <Footer />
    </>
  );
}
