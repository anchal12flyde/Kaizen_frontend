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

export default function Startups() {
  return (
    <div>
      <Header />
      <AboutHeroSection />
      <OurStorySection
        bgColor="!bg-[var(--color-accent)]"
        textColor="!text-white"
        showButton={false}
      />
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
      <WhyChooseSection />

      <PEVCPracticeSection careersPage={false} startupPage = {true}  />

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
