import AdvisorySection from "@/components/advisorySection";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function PrivateEquity() {
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
        <div className="hero-content right-[50px]">
          <div>
            <div className="mb-[26px]">
              <Typography variant="display-3" colorVariant="white">
                Private Equity & Venture Capital
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                delay={0.4}
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0 "
              >
                Advisory for Investors and <br />
                Growth-Stage Companies <br /> Across the Investment Lifecycl
              </Typography>

              <Typography
                delay={0.6}
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0"
              >
                Kaizen Law is a corporate and transaction-focused law firm
                advising businesses, founders, and investors across M&A, private
                equity, capital markets, and general counsel mandates.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <Container
        variant="sectionSp1"
        className=" flex flex-col gap-[16px] items-center bg-[#F7F4EB]    "
      >
        <Typography variant="para-1">Overview</Typography>
        <Typography variant="para-2" className="w-[716px] text-center ">
          Kaizen Law is a corporate and transaction advisory firm delivering
          big-firm quality advice through a partner-led, boutique model.
        </Typography>
      </Container>

      <AdvisorySection />
      <PEVCPracticeSection />
      <Footer />
    </div>
  );
}
