"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const cardsData = [
    {
      title: "Big-Firm Quality",
      desc: "Institutional-grade advice with boutique agility.",
      img: "https://ik.imagekit.io/flyde/cascade-boat-clean-china-natural-rural%20(1).jpg",
    },
    {
      title: "Partner Led",
      desc: "Handled directly by senior partners.",
      img: "https://ik.imagekit.io/flyde/cascade-boat-clean-china-natural-rural%20(1).jpg",
    },
    {
      title: "Strategic Thinking",
      desc: "Focused on long-term growth.",
      img: "https://ik.imagekit.io/flyde/cascade-boat-clean-china-natural-rural%20(1).jpg",
    },
    {
      title: "Client First",
      desc: "Your success comes first.",
      img: "https://ik.imagekit.io/flyde/cascade-boat-clean-china-natural-rural%20(1).jpg",
    },
    {
      title: "Execution Ready",
      desc: "Strategy that actually ships.",
      img: "https://ik.imagekit.io/flyde/cascade-boat-clean-china-natural-rural%20(1).jpg",
    },
  ];

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 900) return;

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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full !h-fit bg-[#f7f4eb] overflow-visible"
    >
      {/* TRACK */}
      <div ref={trackRef} className="!h-fit flex items-center gap-0 px-[160px]">
        {/* LEFT TEXT */}
        <div className="min-w-[520px] max-w-[520px] pr-16 mr-[200px]">
          <h2 className="text-4xl font-serif mb-6 leading-tight">
            Why Clients Choose <br /> Kaizen Law
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We deliver big-firm quality with boutique agility.
          </p>
        </div>

        {/* CARDS */}
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="
              why-card
              w-[330px]
              h-screen
              bg-white
             
              p-[16px]
              flex
              flex-col
              justify-between
              origin-left
              overflow-hidden
              shadow-sm
            "
          >
            {/* TOP */}
            <div className="flex items-start gap-6">
              <h3 className="text-[64px] font-serif text-gray-800 leading-none">
                {i + 1}
              </h3>
            </div>

            {/* BOTTOM */}
            <div>
              {/* Title + Description */}
              <div className="flex items-start mb-[36px] justify-between">
                <h3 className="text-[26px] max-w-[200px] leading-none font-medium">
                  {card.title}
                </h3>

                <p className="card-desc text-sm text-gray-600 max-w-[260px] ml-4 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* IMAGE WRAPPER */}
              <div
                className="
                  card-image
                  w-full
                  overflow-hidden
                  
                "
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
