import EndToEndServices from "@/components/endToEndServices";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Sectors() {
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
            <div className="mb-[42px]">
              <Typography variant="hero-display" colorVariant="white">
                Legal Advisory
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                delay={0.4}
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0 "
              >
                For Complex Deals <br /> and Critical Decisions
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

      <EndToEndServices />
      <Container
        variant="sectionSp1"
        className="hero-section privateEquityHeroCopy"
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

      <Footer />
    </div>
  );
}
