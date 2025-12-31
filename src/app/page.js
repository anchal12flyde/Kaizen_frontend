"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typogrphy from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import Button from "@/components/ui-kit/button";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative h-screen bg-[url('https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg')] bg-cover bg-center">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex items-end h-full">
          <Container className="flex flex-col w-full" variant="heroSpacing">
            <Typogrphy
              variant="display-2"
              className="text-[var(--color-para-2)]!"
            >
              Legal Advisory
            </Typogrphy>

            <div className="flex justify-between heroTextRsp mt-[var(--sp-42)]">
              <Typogrphy
                className="text-[var(--color-para-2)]!"
                variant="header-hero"
              >
                For Complex Deals <br /> and Critical Decisions
              </Typogrphy>

              <Typogrphy
                className="text-[var(--color-para-2)]! max-w-[370px]"
                variant="header-3"
              >
                Kaizen Law is a corporate and transaction-focused law firm
                advising businesses, founders, and investors across M&A, private
                equity, capital markets, and general counsel mandates.
              </Typogrphy>
            </div>
          </Container>
        </div>
      </div>

      {/* Second Section */}
      <Container className="bg-[var(--color-background-1)]" variant="sectionSp1">
        <div>
          <Typogrphy variant="header-1">Built on the Principle of Continuous Improvement</Typogrphy>
          <div className="mt-[var(--sp-60)] inprovementSection flex gap-[var(--sp-48)]">
            <Typogrphy className="max-w-[447px]" variant="para-2">
              Kaizen is not about dramatic change. It is about deliberate progress : refining structures, strengthening positions, and anticipating what lies ahead. This philosophy defines how we approach every mandate, from early-stage advisory to complex, multi-party transactions.
            </Typogrphy>
            <Typogrphy className="max-w-[447px]" variant="para-2">
              In mergers and acquisitions, value is rarely created by a single decisive moment. It is built through disciplined preparation, careful structuring, informed negotiation, and precise execution. Our Kaizen approach reflects this reality. We focus on incremental advantage at every stage of a transaction — identifying risk early, refining deal terms continuously, and aligning legal strategy with commercial objectives. The result is not just deal completion, but durable outcomes that withstand scrutiny and time.
            </Typogrphy>
          </div>
          <Button className="mt-[var(--sp-50)] inprovementSectionBtn">
            <Typogrphy colorVariant="white" variant="para-2">More About Kaizen</Typogrphy>
          </Button>
        </div>
      </Container>

      <div className="h-[200vh]"></div>
      <Footer />
    </div>
  );
}
