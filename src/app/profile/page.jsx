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
import sitecontent from "@/data/sitecontent.json";
import { getSiteContent } from "@/lib/siteContent";

export default function ProfilePage() {
    const sitecontent = getSiteContent();
  const { profile } = sitecontent;
  const {recognition,cta}=profile;
  return (
    <div className="bg-[#F7F4EB]">
      <Header />
      <ProfileHeader />
      <ProfileAboutSection />
      <Container
        variant="primarySpacing"
        className="flex flex-col items-center text-center overflow-hidden w-full"
      >
        <Typography variant="header-1">{recognition.title}</Typography>
        <div className="flex flex-col gap-[56px] items-center text-center">
          <Typography
            variant="para-2"
            className="mt-[32px] lg:w-[480px] w-full"
            delay={0.4}
          >
            {recognition.description}
          </Typography>

          <Testimonials
            bg="bg-[#B6996A]"
            textColor="!text-white"
            dotActive="#ffffff"
            dotInactive="rgba(255,255,255,0.4)"
            leftArrow="https://ik.imagekit.io/a9uxeuyhx/Vector%202.png"
            rightArrow="https://ik.imagekit.io/a9uxeuyhx/Vector%202%20(1).png"
            data={recognition.testimonials}
          />

          <div className="flex flex-col gap-[74px]">
            <Typography variant="para-2" delay={0.6}>
              {" "}
              {recognition.award.year}
            </Typography>
            <div className="relative w-full h-full hidden md:block">
              <Image
                src={recognition.award.image}
                width={183}
                height={154}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>

            <Button variant="primary" delay={0.4}>
              {recognition.buttonText}
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
            {cta.title}
          </Typography>
          <Typography
            variant="para-2"
            className="!text-white w-full md:w-[486px]"
          >
            {cta.description}
          </Typography>
        </div>
        <button className=" md:px-[36px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
          {cta.buttonText}
        </button>
      </Container>
      <Footer />
    </div>
  );
}
