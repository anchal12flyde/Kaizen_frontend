"use client";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Button from "@/components/ui-kit/button";
import TransactionCard from "@/components/ui-kit/transactionCard";

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
      desc: "Advised the promoters of a technology-enabled services company on the sale of a controlling stake to a strategic acquirer, including transaction structuring, legal due diligence, and negotiation of definitive agreements.",
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
    {
      title: "Mergers & Acquisitions",
      sector: "Technology",
      year: "2021",
      role: "Advisor to Company",
      desc: "Advised the promoters of a technology-enabled services company on the sale of controlling stake to a strategic acquirer, including transaction structuring, legal due diligence, and negotiation of definitive agreements.",
    },
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
                delay={0.4}
              >
                Complex, high-value transactions across sectors, stages, and
                transaction types
              </Typography>

              <Typography
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0 "
                delay={0.6}
              >
                Transactions are presented in an anonymised format in accordance
                with applicable confidentiality and regulatory considerations.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <Container variant="metricSpacing" className="section-bg">
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
          <div className="md:mb-[60] mb-[18px] flex flex-col gap-[18px]">
            <Typography variant="header-1" colorVariant="white">
              Representative Mandates
            </Typography>
            <Typography variant="para-2" colorVariant="white">
              A curated selection of transactions that reflect the complexity,
              scale, and diversity of our transactional experience. Details are
              shared in a concise and anonymised format, in line with
              confidentiality and regulatory considerations.
            </Typography>
          </div>
          <div className="top-border"></div>
          {/* 2 Column Layout */}
          <div className="grid-root">
            {items.map((item, index) => (
              <div key={index} className="footprint">
                <div className="footprint-left">
                  <Typography variant="header-3" colorVariant="white">
                    {item.title}
                  </Typography>

                  <div className="meta-col">
                    <Typography variant="para-3">
                      <span className="accent-text">Sector :</span>{" "}
                      <span className="para-text">{item.sector}</span>
                    </Typography>

                    <Typography variant="para-3">
                      <span className="accent-text">Year :</span>{" "}
                      <span className="para-text">{item.year}</span>
                    </Typography>

                    <Typography variant="para-3">
                      <span className="accent-text">Role :</span>{" "}
                      <span className="para-text">{item.role}</span>
                    </Typography>
                  </div>
                </div>

                <div className="desc-wrap">
                  <Typography
                    variant="para-2"
                    colorVariant="white"
                    className="desc-width"
                  >
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container variant="sectionSp1" className="section-bg">
        <Typography variant="header-1"> Full Transaction List</Typography>
        <div className="flex flex-col gap-[50px] md:mt-[60px] mt-[40px]">
          <Typography variant="para-2">
            {" "}
            A comprehensive list of representative transactions advised by
            Kaizen Law, presented in an anonymised format and subject to
            confidentiality and regulatory considerations.
          </Typography>
          <div>
            <Button variant="primary">Filters</Button>
          </div>
          <div className="flex flex-col gap-[40px]">
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
            <TransactionCard
              labelText="Capital Markets"
              mainText="Advised a strategic acquirer on the acquisition of a controlling stake in a
              technology-enabled services company, including legal due diligence and
              negotiation of transaction documentation."
              roleText="Advisor to Acquirer"
              sectorText="Technology"
              transactionValue="305cr INR"
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
