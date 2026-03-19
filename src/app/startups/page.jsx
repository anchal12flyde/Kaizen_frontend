import AboutHeroSection from "@/components/abouthero";
import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import OurStorySection from "@/components/ourStorySectionAbout";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";


const data = [
  {
    id: 1,
    title: "Early-Stage Fundraising",
    desc: "We regularly advise founder-led businesses across technology, consumer, fintech, education, and digital services sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
  {
    id: 2,
    title: "Early-Stage Fundraising",
    desc: "We regularly advise founder-led businesses across technology, consumer, fintech, education, and digital services sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
  {
    id: 3,
    title: "Early-Stage Fundraising",
    desc: "We regularly advise founder-led businesses across technology, consumer, fintech, education, and digital services sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
  {
    id: 4,
    title: "Early-Stage Fundraising",
    desc: "We regularly advise founder-led businesses across technology, consumer, fintech, education, and digital services sectors.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
  },
];
const topContent = {
  title: "How We Work with Founders",
  subtitle:
    "We understand that founders often engage with legal advisors for the first time while building their businesses. Our approach focuses on:",
};
export default function Startups() {
  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
        title={
          <>
            Legal Advisory for
            <br />
            Businesses Building, <br />
            Scaling, and Preparing
            <br /> for Exit
          </>
        }
        description={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </>
        }
        align="left"
        buttons={[
          {
            label: "Explore Our Practise",
            variant: "primary",
          },
          {
            label: "Meet Our Team",
            variant: "white",
          },
        ]}
      />
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
      <WhyChooseSection />

      <PEVCPracticeSection
        cardsData={data}
        topContent={topContent}
        careersPage={false}
        startupPage={true}
      />

      <Container
        variant="sectionSp1"
        className=" flex flex-col items-center  text-center gap-[16px] !pb-[20px] "
      >
        <Typography variant="para-1">Related Insights</Typography>
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
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px]  pt-[36px] md:pb-[63px] pb-[48px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
                  Representative Experience
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  Our experience includes advising startups and emerging
                  companies on early-stage fundraises, growth investments,
                  strategic partnerships, acquisitions, and exits across
                  multiple sectors.
                </Typography>

                <div className="mt-[36px] mb-[26px] flex flex-col gap-[16px]">
                  <Typography variant="para-2" className="!text-white">
                    Further details are available in our{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        textDecorationStyle: "solid",
                        textDecorationSkipInk: "auto",
                      }}
                    >
                      Transaction Footprint.
                    </span>
                  </Typography>
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]">
                  View Representative Transactions →
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>
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
            If you are building or scaling a startup, raising capital, or
            evaluating a strategic transaction, we would be pleased to discuss
            how Kaizen Law can support your journey.
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
