import BlogGridSection from "@/components/blogCardsGrid";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurApproachSection from "@/components/ourApproachSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Insights() {
  return (
    <div className=" bg-[var(--color-background-1)] ">
      <Header />
      <Container
        variant="sectionSp3"
        className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between "
      >
        <Typography variant="display-3">Insights</Typography>
        <Typography variant="para-2" className="w-full md:w-[533px]">
          Founded in August 2022, Kaizen Law was established with a clear
          purpose — to build a focused corporate and transaction advisory firm
          that combines technical excellence with agility and personal
          accountability.
        </Typography>
      </Container>

      <Container
        variant="sectionSp1"
        className=" !py-[12px] flex items-center justify-between w-full borderInsightFilter border  "
      >
        <Button variant="primary" className=" !px-[36px] !py-[12px] ">
          Filter
        </Button>
        <div className="!px-[36px] !py-[12px] border border-[var(--color-accent)] rounded-[500px] !w-[463px]  ">
          <input
            type="text"
            className=" text-[var(--color-accent)] focus:outline-none text-center w-full   "
            placeholder="Search"
          />
        </div>
        <Button variant="primary" className=" !px-[36px] !py-[12px] ">
          Filter
        </Button>
      </Container>

      <Container variant="header" className=" !py-[20px] ">
        <section className="hero-section md:h-[456px] h-[558px]">
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
          <div className="hero-content right-[50px]">
            <div className="flex flex-col gap-[16px]">
              <div className=" px-[36px] py-[8px] border border-white !w-fit rounded-[500px]  ">
                <Typography variant="para-3" className=" !text-white  ">
                  Category
                </Typography>
              </div>

              <Typography variant="header-hero" colorVariant="white">
                The word Kaizen means continuous improvement.
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

              <Typography variant="button" className=" dateHeroIn  ">
                4 min | 14/09/2024
              </Typography>
            </div>
          </div>
        </section>
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
          {
            image: "https://ik.imagekit.io/demo/img/image4.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
          {
            image: "https://ik.imagekit.io/demo/img/image5.jpg",
            category: "Category",
            title:
              "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
            readTime: "4 min",
            date: "14/09/2024",
          },
        ]}
      />
      <LetsConnectSection />
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
              <div className="w-full md:w-[500px] h-[500px] p-[36px] bg-[var(--color-accent)]  flex flex-col">
                <Typography variant="header-5" className=" !text-white ">
                  Ready To Talk?
                </Typography>
                <Typography
                  variant="para-2"
                  className=" !text-white mt-[26px] "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <div className="mt-[57px] mb-[32px] flex flex-col gap-[16px]">
                  <Typography variant="header-4" className="!text-white">
                    I want to talk to your experts in:
                  </Typography>
                  <div className="w-full h-[32px] border-b border-white flex items-center justify-between md:pr-[16px] pr-0">
                    <Typography variant="para-2" className="!text-white">
                      {" "}
                      Select an Industry
                    </Typography>

                    {/* Arrow */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                  View Representative Transactions
                </button>
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
