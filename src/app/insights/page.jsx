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
        variant="sectionSp1"
        className="pt-[220px] flex items-start gap-[303px] "
      >
        <Typography variant="display-3">Insights</Typography>
        <Typography variant="para-2">
          Founded in August 2022, Kaizen Law was established with a clear
          purpose — to build a focused corporate and transaction advisory firm
          that combines technical excellence with agility and personal
          accountability.
        </Typography>
      </Container>

      <Container
        variant="sectionSp1"
        className=" !py-[12px] flex items-center justify-between w-full "
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

      <Container variant="sectionSp1" className=" !py-[20px] ">
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

              <Typography
                variant="button"
                className=" dateHeroIn  "
              >
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
     

      <Footer />
    </div>
  );
}
