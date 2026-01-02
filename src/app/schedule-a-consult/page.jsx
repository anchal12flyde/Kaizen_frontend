import React from "react";
import Image from "next/image";
import Typography from "@/components/ui-kit/typography";
import Button from "@/components/ui-kit/button";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Footer from "@/components/ui-kit/footer";

export default function Page() {
  const steps = [
    {
      number: 1,
      title: "Free consultation",
      description:
        "Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.",
    },
    {
      number: 2,
      title: "Personalized Case Evaluation",
      description:
        "If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.",
    },
    {
      number: 3,
      title: "Formal Engagement & Representation",
      description:
        "Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.",
    },
  ];

  return (
    <>
      <Header />
      <section className="hero-section">
        <Image
          src="https://ik.imagekit.io/a9uxeuyhx/6214ca8bc0a8c870a67c8469f213760e7acc34ff.jpg"
          alt="Hero Background"
          fill
          className="hero-background"
          priority
        />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <Typography variant="hero-display" colorVariant="white">
            Let us help you
          </Typography>
        </div>
      </section>

      <section className="steps-section">
        <Container variant="sectionSp1">
          <Typography variant="header-1" colorVariant="white">
            Ready to Take the Next Step? <br /> Let's Discuss
          </Typography>

          <div className="steps-list">
            <div className="top-border"></div>
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <Typography variant="display-1" colorVariant="white">
                  {step.number}.
                </Typography>

                <div className="step-content-container">
                  <div className="step-content">
                    <Typography variant="header-3" colorVariant="white">
                      {step.title}
                    </Typography>

                    <Typography variant="para-2" colorVariant="white">
                      {step.description}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Container variant="secondarySpacing">
          <div className="flex md:flex-row flex-col md:justify-between gap-[56px]">
            <Typography variant="para-1" colorVariant="white">
              Discover how we can help
            </Typography>
            <Button variant="white">Schedule a Consult</Button>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
