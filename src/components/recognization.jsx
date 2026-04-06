"use client";
import React from 'react';
import { Container } from './ui-kit/spacing';
import Typography from './ui-kit/typography';
import Button from './ui-kit/button';
import Image from 'next/image';
import Testimonials from './ui-kit/testimonials';
import { useSiteContent } from "@/context/SiteContentProvider";

export default function Recognization({ data }) {
  const sitecontent = useSiteContent(); 
  const { about } = sitecontent;
  const { recognition } = data || about;
  const { title, description, testimonials, image, button,continent, testimonialUI } =
    recognition;
  return (
    <Container
      variant="primarySpacing"
      className="flex flex-col items-center text-center overflow-hidden w-full"
    >
      <Typography variant="header-6">{title}</Typography>
      <div className="flex flex-col gap-[56px] items-center text-center">
        <Typography
          variant="para-2"
          className="mt-[32px] lg:w-[480px] w-full"
          delay={0.4}
        >
          {description}
        </Typography>

        <Testimonials
          bg={testimonialUI.bg}
          textColor={testimonialUI.textColor}
          dotActive={testimonialUI.dotActive}
          dotInactive={testimonialUI.dotInactive}
          leftArrow={testimonialUI.leftArrow}
          rightArrow={testimonialUI.rightArrow}
          data={testimonials}
        />

        <div className="flex flex-col gap-[74px]">
          <Typography variant="para-2" delay={0.6}>
            {" "}
            {continent}
          </Typography>
          <div className="relative w-full h-full hidden md:block">
            <Image
              src={image}
              width={183}
              height={154}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>

          
     
         <Button
                      variant="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(recognition.buttonLink, "_blank");
                      }}
                    >
            {button.label}
          </Button>
        </div>
      </div>
    </Container>
  );
}
