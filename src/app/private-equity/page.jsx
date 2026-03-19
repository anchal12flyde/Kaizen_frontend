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
import Recognization from "@/components/recognization";


const data = [
  {
    id: 1,
    title: "Transaction Structuring & Risk Allocation",
    desc: "Private equity and venture capital transactions demand careful structuring, commercial sensitivity, and a clear approach to risk allocation. We help design deal frameworks that protect value while remaining practical to execute.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
  {
    id: 2,
    title: "Working Across the Investment Table",
    desc: "We work closely with investment teams, founders, boards, and management to structure transactions that balance investor protection with operational flexibility and long-term business needs.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Ebene%201.png?updatedAt=1773733504376",
  },
  {
    id: 3,
    title: "Advising Across the Capital Lifecycle",
    desc: "We regularly advise startups and emerging companies on institutional capital raises, while also supporting investors deploying capital across diverse sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(17).png?updatedAt=1773733504363",
  },
];
const topContent = {
  title: "Our PE & VC Practice",
  subtitle:
    "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
};
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
            <div className="md:mb-[26px] mb-[42px]">
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
        variant="primarySpacing"
        className=" flex flex-col md:gap-[16px] gap-[36px] items-center bg-[#F7F4EB]    "
      >
        <Typography variant="header-6">Overview</Typography>
        <Typography
          variant="para-2"
          className="md:w-[716px] w-full text-center "
        >
          Kaizen Law is a corporate and transaction advisory firm delivering
          big-firm quality advice through a partner-led, boutique model.
        </Typography>
      </Container>

      <AdvisorySection />
      <PEVCPracticeSection cardsData={data} topContent={topContent} />
      <Container
        variant="sectionSp3"
        className=" !pb-[60px] flex flex-col gap-[16px] items-center bg-[var(--color-background-1)] "
      >
        <Typography variant="header-6">
          Advising Across the Investment Lifecycle
        </Typography>
        <Typography variant="para-2">
          We advise clients at each stage of the investment journey:
        </Typography>
      </Container>
      <StackedServicesSection items={services} />
      <WhyChooseSection />
      <OurApproachSection />

      <Container variant="primarySpacing" className=" privateEquityHeroCopy">
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
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px] pt-[36px] md:pb-[113px] pb-[48px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
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
                <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                  View Representative Transactions
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>
      <Recognization />
      <Container
        variant="primarySpacing"
        className=" flex flex-col items-center gap-[16px] !pb-[20px] "
      >
        <Typography variant="header-6">Related Insights</Typography>
        <Typography variant="para-2">
          We advise clients at each stage of the investment journey:
        </Typography>
      </Container>

      <BlogGridSection
        variant="scroll"
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
      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between md:items-start"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            Speak With Our Team
          </Typography>
          <Typography
            variant="para-2"
            className="!text-white w-full md:w-[486px]"
          >
            If you are evaluating an investment, planning a fundraising round,
            or considering an exit, we would be pleased to discuss how Kaizen
            Law can support your objectives.
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
