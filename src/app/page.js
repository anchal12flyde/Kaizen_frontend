"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Button from "@/components/ui-kit/button";
import Image from "next/image";
import Testimonials from "@/components/ui-kit/testimonials";
import { motion } from "framer-motion";


export default function Home() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <div>
      <Header />
      <section className="hero-section">
        {/* Background Image */}
        <Image
          src="https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg"
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <motion.div
          className="hero-content right-[50px]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div
              className="mb-[42px]"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <Typography variant="hero-display" colorVariant="white">
                Legal Advisory
              </Typography>
            </motion.div>

            <motion.div
              className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]"
              variants={fadeInUp}
              transition={{ delay: 0.25 }}
            >
              <Typography
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0"
              >
                For Complex Deals <br /> and Critical Decisions
              </Typography>

              <Typography
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0"
              >
                Kaizen Law is a corporate and transaction-focused law firm
                advising businesses, founders, and investors across M&A, private
                equity, capital markets, and general counsel mandates.
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Second Section */}
      <Container className="section-bg" variant="sectionSp1">
        <div>
          <Typography variant="header-1">
            Built on the Principle of Continuous Improvement
          </Typography>

          <div className="inprovementSection">
            <Typography className="text-block" variant="para-2">
              Kaizen is not about dramatic change. It is about deliberate
              progress : refining structures, strengthening positions, and
              anticipating what lies ahead. This philosophy defines how we
              approach every mandate, from early-stage advisory to complex,
              multi-party transactions.
            </Typography>

            <Typography className="text-block" variant="para-2">
              In mergers and acquisitions, value is rarely created by a single
              decisive moment. It is built through disciplined preparation,
              careful structuring, informed negotiation, and precise execution.
              Our Kaizen approach reflects this reality. We focus on incremental
              advantage at every stage of a transaction — identifying risk
              early, refining deal terms continuously, and aligning legal
              strategy with commercial objectives. The result is not just deal
              completion, but durable outcomes that withstand scrutiny and time.
            </Typography>
          </div>

          <Button className="inprovementSectionBtn">
            <Typography colorVariant="white" variant="para-2">
              More About Kaizen
            </Typography>
          </Button>
        </div>
      </Container>
      <div className="relative w-full h-full">
        <Image
          src="https://ik.imagekit.io/75zj3bigp/7d11d9363b24d18bf891f3cb0eaa9eb909fbb467.png"
          width={1200}
          height={800}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>

      <div className="evaluation">
        <Container className="evaluationSection" variant="sectionSp1">
          <div>
            <Typography colorVariant="white" variant="header-1">
              Advising Across <br /> the Full Deal Lifecycle
            </Typography>
          </div>
          <div className="flex flex-col md:gap-0 gap-[8px]">
            <Typography colorVariant="white" variant="display-3">
              Strategic Evaluation <br />
              Structuring & Planning <br />
              Due Diligence <br />
              Negotiation <br />
              Documentation & Execution <br />
              Closing & Completion
            </Typography>
            <Typography variant="punctuation">
              +Post-Transaction Integration & Compliance
            </Typography>
            <Button className="evaluationBtn" variant="white">
              Explore Capabilities
            </Button>
          </div>
        </Container>
      </div>

      <Container
        variant="primarySpacing"
        className="flex flex-col items-center overflow-hidden w-full"
      >
        <Typography variant="header-1">
          Recognition & Market Feedback
        </Typography>
        <div className="flex flex-col gap-[56px] items-center text-center">
          <Typography
            variant="para-2"
            className="mt-[32px] lg:w-[480px] w-full"
          >
            We believe that our clients' experiences speak volumes about the
            quality of our legal services. Here's what some of them have to say:
          </Typography>

          <Testimonials />

          <div className="flex flex-col gap-[74px]">
            <Typography variant="para-2"> Asia Pacific 2026</Typography>
            <div className="relative w-full h-full hidden md:block">
              <Image
                src="https://ik.imagekit.io/a9uxeuyhx/51e8e6fb1012d3b763accee0c80f79cfcfc874c4.jpg"
                width={183}
                height={154}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>

            <Button variant="primary">View on Chambers and Partners</Button>
          </div>
        </div>
      </Container>

      <div className="relative w-full h-full">
        <Image
          src="https://ik.imagekit.io/a9uxeuyhx/c187c8de4a3719b0bf6fce2d5297411e54a28f20.png"
          width={1200}
          height={800}
          className="object-cover w-full h-full"
          alt=""
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <Footer />
    </div>
  );
}
