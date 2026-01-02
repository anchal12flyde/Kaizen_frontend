"use client";

import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Kaizen has consistently demonstrates a strong command over corporate legal matters, combining deep technical expertise with a business-centric approach.",
      author: "Corporate/Mergers and Acquisitions",
    },
    {
      text: "Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome.",
      author: "– Sarah M., Small Business Owner",
    },
    {
      text: "I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result.",
      author: "– Thomas P., Individual Client",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    fade: false, // ❌ no fade
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: false,
    cssEase: "ease-in-out",
    adaptiveHeight: false,
    useTransform: true,
    beforeChange: (_, next) => setCurrentIndex(next % testimonials.length),
  };

  return (
    <div className="flex  items-center ">
      <div className="w-full flex flex-col gap-[80px] bg-[#f7f7f7] ">
        <Slider
          ref={sliderRef}
          {...settings}
          className="flex  w-[319px] md:w-[632px] lg:w-[738px] px-[50px] md:pt-[84px] pt-[102px] items-center
"
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className=" text-center w-full     ">
              <div className="!mb-[32px]">
                <Typography variant="header-1">"{t.text}"</Typography>
              </div>

              <div>
                <Typography variant="header-1" className="  ">
                  {t.author}
                </Typography>
              </div>
            </div>
          ))}
        </Slider>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-[20px] px-[50px] md:pb-[84px] pb-[102px] ">
          <Image
            src="https://ik.imagekit.io/flyde/Left%20arrow.png"
            width={100}
            height={100}
            alt="left image"
            onClick={() => sliderRef.current?.slickPrev()}
            className="arrowImg"
          />

          {/* DOTS */}
          <div className="flex gap-[10px]">
            {testimonials.map((_, i) =>
              // <button
              //   key={i}
              //   onClick={() => sliderRef.current?.slickGoTo(i)}
              //   className={`h-[8px] w-[8px] rounded-full ${
              //     currentIndex === i ? "bg-black" : "bg-gray-300"
              //   }`}
              // />

              currentIndex == i ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle
                    cx="5.11111"
                    cy="5.11111"
                    r="5.11111"
                    fill="#31110F"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle
                    cx="5.11111"
                    cy="5.11111"
                    r="5.11111"
                    fill="black"
                    fill-opacity="0.25"
                  />
                </svg>
              )
            )}
          </div>

          <Image
            src="https://ik.imagekit.io/flyde/Right%20arrow.png"
            width={100}
            height={100}
            alt="right image"
            onClick={() => sliderRef.current?.slickNext()}
            className="arrowImg"
          />
        </div>
      </div>
    </div>
  );
}
