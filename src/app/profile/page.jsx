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
    <div>
      <Header />
      <ProfileHeader />
      <ProfileAboutSection />
      <Container
        variant="sectionSp1"
        className=" w-full flex justify-center gap-[56px] flex-col items-center !pt-0 "
      >
        <div className="flex flex-col gap-[32px] justify-center flex-col items-center  ">
          <Typography variant="header-1">
            Recognition & Market Feedback
          </Typography>

          <Typography variant="para-2">
            We believe that our clients' experiences speak volumes about the{" "}
            <br />
            quality of our legal services. Here's what some of them have to say:
          </Typography>
        </div>

        <Testimonials />
      </Container>
      <Container
        variant="sectionSp1"
        className="hero-section privateEquityHeroCopy !pt-0 "
      >
        {/* Background Image */}
        <Image
          src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <>
          <Container
            variant="sectionSp1"
            className=" absolute inset-0  flex items-center justify-center  "
          >
            <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
              <div className=" w-[500px] h-[459px] p-[36px] bg-[var(--color-accent)]  ">
                <Typography
                  variant="header-hero"
                  className=" !text-white !text-[48px] "
                >
                  Representative Experience
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  We have advised investors and growth-stage companies across
                  technology, consumer, financial services, healthcare,
                  infrastructure, and energy sectors on investments, follow-on
                  rounds, and exits.
                </Typography>
                <Button variant="white" className=" mt-[36px] ">
                  View Representive Transactions
                </Button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>

      <Container
        variant="sectionSp1"
        className=" !py-[60px] bg-[var(--color-background-2)] flex items-center justify-between "
      >
        <Typography variant="header-hero" className="!text-white">
          Ready to discuss your <br /> project with us?
        </Typography>

        <Button variant="primary">Schedule a Consultation</Button>
      </Container>
      <Footer />
    </div>
  );
}
