"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Typography from "./ui-kit/typography";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("disclaimerAccepted");

    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 !z-[999] overflow-y-auto">
      {/* Wrapper for spacing */}
      <div className=" flex justify-center px-[24px] py-[40px] ">
        {/* Modal Box */}
        <div className="relative w-full max-w-[500px] bg-[var(--color-para-2)] p-[20px] md:p-[32px] shadow-[4px_4px_14px_0px_#00000040] md:top-[50px] top-[60px]">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute md:top-[46px] top-[30px] md:right-[36px] right-[26px] text-black"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <Typography variant="header-hero" className="md:mb-[32px] mb-[16px]">
            Disclaimer
          </Typography>

          {/* Content */}
          <div className="flex flex-col gap-[16px]">
            <Typography variant="para-2" className="!text-[#231F20]">
              The Bar Council of India strictly prohibits law firms from
              engaging in solicitation or advertising in any form. Therefore,
              this website is exclusively intended to offer users information
              about Kaizen Law, encompassing its practice areas and legal
              professionals, for their personal awareness and reference.
            </Typography>

            <Typography variant="para-2" className="!text-[#231F20]">
              No content presented on this website is to be construed as a legal
              opinion or indicative of any form of legal counsel. It is not
              intended to establish, and shall not create, a lawyer-client
              relationship under any circumstances.
            </Typography>

            <Typography variant="para-2" className="!text-[#231F20]">
              Kaizen Law disclaims any responsibility for the repercussions
              arising from any actions undertaken by users based on the
              materials or information provided on this website. It is
              imperative for users to seek independent legal advice at all
              times.
            </Typography>
          </div>

          {/* Button */}
          <button
            onClick={handleClose}
            className="md:mt-[32px] mt-[24px] px-[24px] py-[18px] bg-[var(--color-accent)] text-white rounded-full"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
