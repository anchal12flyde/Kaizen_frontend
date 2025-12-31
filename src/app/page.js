"use client";

import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typogrphy from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";

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

            <div className="flex justify-between mt-[var(--sp-42)]">
              <Typogrphy
                className="text-[var(--color-para-2)]!"
                variant="header-hero"
              >
                For Complex Deals <br /> and Critical Decisions
              </Typogrphy>

              <Typogrphy
                className="text-[var(--color-para-2)]! w-[370px]"
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

      <Container variant="">
        <div className="">
          <Typogrphy variant="header-1">More content here</Typogrphy>
        </div>
      </Container>

      <div className="h-[200vh]"></div>
      <Footer />
    </div>
  );
}
