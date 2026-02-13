import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import OurApproachSection from "@/components/ourApproachSection";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import StackedServicesSection from "@/components/stackedServices";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";

export default function PrivateEquity() {
  const services = [
    {
      title: "Early-Stage Fundraising",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Growth-Stage & Late-Stage Investments",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Governance & Shareholder Frameworks",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Follow-on Investments & Restructuring",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Secondary Transactions & Exits",
      description:
        "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
    },
  ];

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
      <Container
        variant="sectionSp1"
        className=" !pb-[60px] flex flex-col gap-[16px] items-center bg-[var(--color-background-1)] "
      >
        <Typography variant="para-1">
          Advising Across the Investment Lifecycle
        </Typography>
        <Typography variant="para-2">
          We advise clients at each stage of the investment journey:
        </Typography>
      </Container>
      <StackedServicesSection items={services} />
      <WhyChooseSection />
      <OurApproachSection />

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

      <Container
        variant="sectionSp1"
        className=" flex flex-col items-center gap-[16px] !pb-[20px] "
      >
        <Typography variant="para-1">Related Insights</Typography>
        <Typography variant="para-2">
          We advise clients at each stage of the investment journey:
        </Typography>
      </Container>

      <BlogGridSection
        posts={[
          {
            image: "https://ik.imagekit.io/demo/img/image1.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
          {
            image: "https://ik.imagekit.io/demo/img/image2.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
          {
            image: "https://ik.imagekit.io/demo/img/image3.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
        ]}
        buttonShow={true}
      />

      <Footer />
    </div>
  );
}
