"use client";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";

export default function page() {

  const stats = [
    {
      number: "100+",
      label: "Number of transactions facilitated",
    },
    {
      number: "$1B",
      label: "Aggregate transaction value advised on",
    },
    {
      number: "12+",
      label: "Years of transactional experience",
    },
  ];
  const items = [
    {
      title: "Mergers & Acquisitions",
      sector: "Technology",
      year: "2021",
      role: "Advisor to Company",
      desc: "Advised the promoters of a technology-enabled services company on the sale of controlling stake to a strategic acquirer, including transaction structuring, legal due diligence, and negotiation of definitive agreements.",
    },
    {
      title: "Mergers & Acquisitions",
      sector: "Technology",
      year: "2021",
      role: "Advisor to Company",
      desc: "Advised the promoters of a technology-enabled services company on the sale of controlling stake to a strategic acquirer, including transaction structuring, legal due diligence, and negotiation of definitive agreements.",
    },
    {
      title: "Mergers & Acquisitions",
      sector: "Technology",
      year: "2021",
      role: "Advisor to Company",
      desc: "Advised the promoters of a technology-enabled services company on the sale of controlling stake to a strategic acquirer, including transaction structuring, legal due diligence, and negotiation of definitive agreements.",
    },
    // Duplicate/remove as needed
  ];
  return (
    <>
      <Header />
      <section className="hero-section">
        {/* Background Image */}
        <Image
          src="https://ik.imagekit.io/a9uxeuyhx/c8b4f7e16bf497a2e506a10e688d0d5d572bb78c.jpg"
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
                Transaction Footprint
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0"
              >
                Complex, high-value transactions across sectors, stages, and
                transaction types
              </Typography>

              <Typography
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0 "
              >
                Transactions are presented in an anonymised format in accordance
                with applicable confidentiality and regulatory considerations.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <Container variant="metricSpacing">
        <div className="stats-section">
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <Typography variant="display-2" colorVariant="accent">
                {item.number}
              </Typography>

              <Typography
                variant="header-2"
                colorVariant="accent"
                className="stats-card-text"
              >
                {item.label}
              </Typography>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-[#0A193A] w-full flex justify-center">
       
        <Container variant="sectionSp1">
          {/* Heading */}
          <div className="mb-12 flex flex-col gap-[18px]" >
            <Typography variant="header-1" colorVariant="white">
              Representative Mandates
            </Typography>
            <Typography
              variant="para-2"
              colorVariant="white"
              className="mt-3 "
            >
              A curated selection of transactions that reflect the complexity,
              scale, and diversity of our transactional experience. Details are
              shared in a concise and anonymised format, in line with
              confidentiality and regulatory considerations.
            </Typography>
          </div>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-2 gap-[10px] md:grid-cols-1">
            {items.map((item, index) => (
              <div key={index} className="border-b border-white/10 py-10">
                <Typography
                  variant="para-1"
                  colorVariant="white"
                  className="mb-3"
                >
                  {item.title}
                </Typography>

                <div className="text-white/60 mb-3 text-sm leading-relaxed">
                  <p>Sector: {item.sector}</p>
                  <p>Year: {item.year}</p>
                  <p>Role: {item.role}</p>
                </div>

                <Typography variant="para-3" colorVariant="white">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
