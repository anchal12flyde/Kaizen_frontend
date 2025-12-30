"use client";

import Testimonials from "@/components/ui-kit/testimonials";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family's future is secure.",
      author: "– David L., Business Owner",
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
    <div className=" flex flex-col gap-[50px] ">
      <Typography variant="hero-display">Hero Display Text</Typography>

      {/* DISPLAYS */}
      <Typography variant="display-1">Display 1 Text</Typography>

      <Typography variant="display-2">Display 2 Text</Typography>

      <Typography variant="display-3">Display 3 Text</Typography>

      {/* HEADERS */}
      <Typography variant="header-1">Header 1 Text</Typography>

      <Typography variant="header-2">Header 2 Text</Typography>

      <Typography variant="header-3">Header 3 Text</Typography>

      {/* PARAGRAPHS */}
      <Typography variant="para-1">
        This is paragraph 1 text. New line supported using pre-line.
      </Typography>

      <Typography variant="para-2" >
        This is paragraph 2 with gray color.
      </Typography>

      <Typography variant="para-3" >
        This is paragraph 3 with secondary color.
      </Typography>

      {/* BUTTON TEXT */}
      <Typography variant="buttonText">Button Label Text</Typography>

      {/* LINK TEXT */}
      <Typography variant="linkText">Link Text Example</Typography>

      {/* CUSTOM TAG OVERRIDE */}
      <Typography variant="header-2" as="h1">
        Header 2 styling but rendered as H1
      </Typography>
      <Testimonials />
    </div>
  );
}
