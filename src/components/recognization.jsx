"use client";
import React from 'react';
import { Container } from './ui-kit/spacing';
import Typography from './ui-kit/typography';
import Button from './ui-kit/button';
import Image from 'next/image';
import Testimonials from './ui-kit/testimonials';

export default function Recognization() {
  return (
    <Container
      variant="primarySpacing"
      className="flex flex-col items-center text-center overflow-hidden w-full"
    >
      <Typography variant="header-6">Recognition & Market Feedback</Typography>
      <div className="flex flex-col gap-[56px] items-center text-center">
        <Typography
          variant="para-2"
          className="mt-[32px] lg:w-[480px] w-full"
          delay={0.4}
        >
          We believe that our clients' experiences speak volumes about the
          quality of our legal services. Here's what some of them have to say:
        </Typography>

        <Testimonials
          bg="bg-[#B6996A]"
          textColor="!text-white"
          dotActive="#ffffff"
          dotInactive="rgba(255,255,255,0.4)"
          leftArrow="https://ik.imagekit.io/a9uxeuyhx/Vector%202.png"
          rightArrow="https://ik.imagekit.io/a9uxeuyhx/Vector%202%20(1).png"
          data={[
            {
              text: "Kaizen has consistently demonstrates a strong command over corporate legal matters, combining deep technical expertise with a business-centric approach.",
              author: "Corporate/Mergers and Acquisitions",
            },
            {
              text: "Their expertise was impressive...",
              author: "Startup Founder",
            },
            {
              text: "Their expertise was impressive...",
              author: "Startup Founder",
            },
            {
              text: "Their expertise was impressive...",
              author: "Startup Founder",
            },
          ]}
        />

        <div className="flex flex-col gap-[74px]">
          <Typography variant="para-2" delay={0.6}>
            {" "}
            Asia Pacific 2026
          </Typography>
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="https://ik.imagekit.io/a9uxeuyhx/51e8e6fb1012d3b763accee0c80f79cfcfc874c4.jpg"
              width={183}
              height={154}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>

          <Button variant="primary" delay={0.4}>
            View on Chambers and Partners
          </Button>
        </div>
      </div>
    </Container>
  );
}
