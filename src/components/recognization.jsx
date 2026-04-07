"use client";
import React from 'react';
import { Container } from './ui-kit/spacing';
import Typography from './ui-kit/typography';
import Button from './ui-kit/button';
import Image from 'next/image';
import Testimonials from './ui-kit/testimonials';
import { useSiteContent } from "@/context/SiteContentProvider";
import AnimatedFadeUp from './AnimatedFadeUp';

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
      <AnimatedFadeUp>
        <Typography variant="header-6">{title}</Typography>
      </AnimatedFadeUp>
      <div className="flex flex-col gap-[56px] items-center text-center">
        <AnimatedFadeUp delay={0.15}>
          <Typography
            variant="para-2"
            className="mt-[32px] md:w-[480px] w-full"
            delay={0.4}
          >
            {description}
          </Typography>
        </AnimatedFadeUp>

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
          <AnimatedFadeUp>
            <Typography variant="para-2" delay={0.6}>
              {" "}
              {continent}
            </Typography>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.15}>
            <div className="relative w-full h-full hidden md:block">
              <Image
                src={image}
                width={183}
                height={154}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          </AnimatedFadeUp>
          <AnimatedFadeUp delay={0.25}>
          <Button
            as="a"
            href={recognition.button.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {button.label}
          </Button>
          </AnimatedFadeUp>
        </div>
      </div>
    </Container>
  );
}
