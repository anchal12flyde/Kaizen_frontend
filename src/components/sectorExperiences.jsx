"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";
gsap.registerPlugin(ScrollTrigger);



export default function SectorExperience({ data }) {
  const [isMobile, setIsMobile] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sitecontent = useSiteContent(); 
  const { about } = sitecontent;
  const { sectorExperience } = about;
  data = data || sectorExperience;
  const { title, sectors } = data;
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ Detect screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isDesktop = isMobile === false;

  // ✅ ScrollTrigger (ONLY mobile)
  useEffect(() => {
    if (!isMobile || !sectionRef.current || !sectors.length) return;

    const total = sectors.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${total * 500}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        snap: {
          snapTo: 1 / (total - 1),
          duration: 0.2,
          ease: "power1.inOut",
        },

        onUpdate: (self) => {
          const index = Math.round(self.progress * (total - 1));
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => ctx.revert();
  }, [isMobile, sectors]);

  // ✅ Image animation
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
    );
  }, [activeIndex]);

  if (isMobile === null) return null;
 
  return (
    <>
      <section>
        {/* ================= DESKTOP ================= */}
        {isDesktop ? (
          <section>
            <Container
              variant="sectionSp1"
              className="flex flex-col gap-[96px] bg-[#F7F4EB] overflow-visible"
            >
              <Typography variant="header-6" className="text-center">
                {title}
              </Typography>
              <div className="w-full">
                {sectors.map((item, index) => {
                  const isRight = index % 2 === 0;
                  const isActive = hoveredIndex === index;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`${
                        index === sectors.length - 1
                          ? "borderBottomSec"
                          : "borderTopSec"
                      } py-[20px] sector-item`}
                    >
                      <Typography
                        variant="header-2"
                        className={`text-center transition-all duration-300 ${
                          isActive
                            ? "!text-[#0A193A] opacity-100"
                            : "text-[#0A193A] opacity-50"
                        }`}
                      >
                        {item.title}
                      </Typography>

                      <div
                        className={`tooltip ${isRight ? "right" : "left"} !rounded-none`}
                      >
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        ) : (
          <section ref={sectionRef}>
            <div className="flex flex-col gap-[60px] bg-[#F7F4EB] overflow-visible">
              <Typography variant="header-6" className="text-center">
                {title}
              </Typography>
              <div ref={sectionRef}>
                <div className="flex flex-col  justify-center px-[24px]">
                  {sectors.map((item, index) => (
                    <div
                      key={index}
                      className={`py-[20px] transition-all duration-300 ${
                        index === sectors.length - 1
                          ? "borderBottomSec"
                          : "borderTopSec"
                      }`}
                    >
                      <Typography
                        variant="header-2"
                        className={`text-center transition-all duration-300 ${
                          index === activeIndex
                            ? "text-black opacity-100 scale-105"
                            : "text-black/30 opacity-50"
                        }`}
                      >
                        {item.title}
                      </Typography>
                    </div>
                  ))}

                  {/* IMAGE */}
                  <div className="w-full h-[180px] mt-[40px] overflow-hidden">
                    <img
                      ref={imageRef}
                      key={activeIndex}
                      src={sectors[activeIndex]?.image}
                      alt="sector preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= DESKTOP CSS ================= */}
        <style jsx>{`
          .sector-item {
            position: relative;
            cursor: pointer;
          }

          .tooltip {
            position: absolute;
            top: 50%;
            width: 250px;
            aspect-ratio: 1;
            background: #fff;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-50%) scale(0.85);
            transition: all 0.3s ease;
            z-index: 20;
          }

          .tooltip img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .sector-item:hover .tooltip {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }

          .tooltip.right {
            left: calc(65% + 12px);
          }

          .tooltip.left {
            right: calc(65% + 12px);
          }
        `}</style>
      </section>
    </>
  );
}
