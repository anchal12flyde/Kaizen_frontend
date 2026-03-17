"use client";

import ProfileAboutSection from "@/components/profileAboutSection";
import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Testimonial from "@/components/ui-kit/testimonial";
import Testimonials from "@/components/ui-kit/testimonials";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="bg-[#F7F4EB]">
      <Header />
      <ProfileHeader />
      <ProfileAboutSection />
      <Container
        variant="primarySpacing"
        className="flex flex-col items-center text-center overflow-hidden w-full"
      >
        <Typography variant="header-6">
          Recognition & Market Feedback
        </Typography>
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

      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between md:items-start"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            Connect with Harsh Kumar
          </Typography>
          <Typography
            variant="para-2"
            className="!text-white w-full md:w-[486px]"
          >
            If you would like to discuss a transaction, investment, or strategic
            legal matter, you may reach out directly or schedule a consultation.
          </Typography>
        </div>
        <button className=" md:px-[36px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
          Schedule A Consulation →
        </button>
      </Container>
      <Footer />
    </div>
  );
}
