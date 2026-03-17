"use client";

import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Testimonials({
  data = [], // 🔥 dynamic testimonials
  bg = "bg-[#f7f7f7]",
  textColor = "text-[#31110F]",
  dotActive = "#31110F",
  dotInactive = "rgba(0,0,0,0.25)",
  leftArrow = "https://ik.imagekit.io/flyde/Left%20arrow.png",
  rightArrow = "https://ik.imagekit.io/flyde/Right%20arrow.png",
}) {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: data.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: false,
    cssEase: "ease-in-out",
    beforeChange: (_, next) => setCurrentIndex(next % data.length),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!data || data.length === 0) return null; // safety

  return (
    <motion.div
      className="flex items-center justify-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`w-full flex flex-col gap-[80px] ${bg}`}>
        {/* SLIDER */}
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full md:max-w-[738px] max-w-[319px] mx-auto px-[24px] md:px-[50px] pt-[80px] md:pt-[84px]"
        >
          {data.map((t, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-[32px]">
                <Typography
                  variant="header-1"
                  animate={false}
                  className={textColor}
                >
                  "{t.text}"
                </Typography>
              </div>

              <Typography
                variant="header-1"
                animate={false}
                className={textColor}
              >
                {t.author}
              </Typography>
            </div>
          ))}
        </Slider>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-[20px] px-[24px] md:px-[50px] pb-[80px] md:pb-[84px]">
          {/* LEFT */}
          {data.length > 1 && (
            <Image
              src={leftArrow}
              width={18}
              height={18}
              alt="left arrow"
              onClick={() => sliderRef.current?.slickPrev()}
              className="cursor-pointer"
            />
          )}

          {/* DOTS */}
          <div className="flex gap-[10px]">
            {data.map((_, i) => (
              <svg key={i} width="11" height="11">
                <circle
                  cx="5.5"
                  cy="5.5"
                  r="5.5"
                  fill={currentIndex === i ? dotActive : dotInactive}
                />
              </svg>
            ))}
          </div>

          {/* RIGHT */}
          {data.length > 1 && (
            <Image
              src={rightArrow}
              width={18}
              height={18}
              alt="right arrow"
              onClick={() => sliderRef.current?.slickNext()}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
