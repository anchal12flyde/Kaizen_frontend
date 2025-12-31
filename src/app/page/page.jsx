"use client";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="rhero-section">
        {/* Background Image */}
        <Image
          src="https://ik.imagekit.io/a9uxeuyhx/c8b4f7e16bf497a2e506a10e688d0d5d572bb78c.jpg"
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-background"></div>

        {/* Content */}
        <div className="hero-content">
          <div>
            
            <div className="mb-[42px]">
              <Typography variant="hero-display" colorVariant="white">
                Transaction Footprint
              </Typography>
            </div>

            <div>
              <p className="text-[16px] md:text-[18px] opacity-90 leading-relaxed">
                Complex, high-value transactions across sectors, stages, and
                transaction types
              </p>
              <Typography variant="para-2" colorVariant="white">
                Transactions are presented in an anonymised format in accordance
                with applicable confidentiality and regulatory considerations.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
