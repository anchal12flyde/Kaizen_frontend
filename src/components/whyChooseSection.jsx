"use client";

import { useRef, useLayoutEffect,useState,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import AnimatedFadeUp from "./AnimatedFadeUp";


gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection({ data = { title: "", subtitle: "", cards: [] } }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 740);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const cards = gsap.utils.toArray(".why-card");
    const descriptions = gsap.utils.toArray(".card-desc");
    const images = gsap.utils.toArray(".card-image");

    if (!section || !track || !cards.length) return;

    const ctx = gsap.context(() => {
      /* ---------------- CONFIG ---------------- */

      const baseWidth = 330;
      const expandWidth = 760;

      const baseImgHeight = 217;
      const expandImgHeight = baseImgHeight * 1.5; // 1.5x

      const sidePadding = 400;
      const leftTextWidth = 520;

      /* ---------------- INITIAL ---------------- */

      gsap.set(cards, {
        width: baseWidth,
        flexShrink: 0,
      });

      gsap.set(descriptions, {
        opacity: 0,
        x: -20,
      });

      gsap.set(images, {
        height: baseImgHeight,
      });

      /* ---------------- WIDTH ---------------- */

      const totalCardsWidth = cards.length * expandWidth;
      const staticLeft = leftTextWidth + sidePadding;

      const totalWidth = totalCardsWidth + staticLeft;

      gsap.set(track, {
        width: totalWidth,
      });

      /* ---------------- TIMELINE ---------------- */

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        duration: cards.length,
      });

      /* ---------------- MOVE ---------------- */

      tl.to(
        track,
        {
          x: -(totalWidth - section.offsetWidth),
          duration: cards.length,
        },
        0,
      );

      /* ---------------- CARDS ---------------- */

      cards.forEach((card, i) => {
        const desc = descriptions[i];
        const img = images[i];

        const nextTime = i + 1; // next card ka time

        /* Expand Card */
        tl.to(
          card,
          {
            width: expandWidth,
            duration: 1,
          },
          i,
        );

        /* Expand Image */
        tl.to(
          img,
          {
            height: expandImgHeight,
            duration: 0.8,
            ease: "power2.out",
          },
          i + 0.1,
        );

        /* Show Desc */
        tl.to(
          desc,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          i + 0.3,
        );

        /* HOLD IMAGE (No shrink here) */

        /* Collapse only when next card starts */
        if (i < cards.length - 1) {
          tl.to(
            img,
            {
              height: expandImgHeight,
              duration: 0.6,
              ease: "power2.inOut",
            },
            nextTime,
          );

          tl.to(
            desc,
            {
              opacity: 0,
              x: -20,
              duration: 0.4,
              ease: "power2.in",
            },
            nextTime,
          );
        }
      });

      /* ---------------- SCROLL ---------------- */

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full !h-fit bg-[var(--color-background-1)] overflow-x-hidden "
    >
      {isMobile ? (
        /* MOBILE VERSION */
        <div className="block md:hidden">
          <Container variant="primarySpacing">
            <div className=" flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[16px] ">
                <AnimatedFadeUp >
                <Typography variant="header-6">{data.title}</Typography></AnimatedFadeUp>
                <AnimatedFadeUp delay={0.15}>
                <Typography variant="para-2">{data.subtitle}</Typography></AnimatedFadeUp>
              </div>

              {data.cards.map((card, i) => (
                <div
                  key={i}
                  className="border-[0.5px] border-[#31110F] p-[16px] flex flex-col gap-[85px]"
                >
                  <Typography variant="display-2" className="!text-[#31110F]">
                    {i + 1}
                  </Typography>
                  <div className="flex flex-col gap-[16px]">
                    <Typography variant="big-firm" className="!text-[#31110F]">
                      {card.title}
                    </Typography>

                    <Typography variant="para-2">{card.desc}</Typography>

                    {card.img && (
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-[220px] object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <div className=" bg-transparent "></div>

            <div
              ref={trackRef}
              className="!h-fit flex items-center gap-0 px-[100px] border-b-[0.5px] border-[#31110F] "
            >
              {/* LEFT TEXT */}
              <div className="w-full md:w-[450px]  mr-[300px] flex flex-col !gap-[16px] ">
                <Typography variant="para-1">{data.title}</Typography>
                <Typography variant="para-2">{data.subtitle}</Typography>
              </div>

              {/* CARDS */}
              {data.cards.map((card, i) => (
                <div
                  key={i}
                  className={`
            why-card
            w-[330px]
            h-[100vh]
            
            p-[16px]
            flex
            flex-col
            justify-between
            origin-left
            overflow-hidden

            ${i == 0 ? "borderLeftCard" : ""}
            
          `}
                >
                  {/* TOP */}
                  <div className="flex items-start gap-6">
                    <Typography variant="display-3" className=" !text-[#31110F]   mt-[1.3cm]">
                      {i + 1}
                    </Typography>
                  </div>

                  {/* BOTTOM */}
                  <div>
                    {/* Title + Description */}
                    <div className="flex items-start mb-[36px] justify-between">
                      <Typography
                        variant="big-firm"
                        className="!text-[#31110F]"
                      >
                        {card.title}
                      </Typography>

                      <p className="card-desc text-sm text-gray-600 max-w-[260px] ml-4 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* IMAGE WRAPPER */}
                    {card.img && (
                      <div className="card-image w-full overflow-hidden">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
