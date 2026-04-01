"use client";
import React from "react";
import { Container } from "./spacing";
import Typography from "./typography";
import { useRouter, usePathname } from "next/navigation";


export default function Footer() {
  const  router = useRouter();
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <>
      <Container
        variant="footerSpacing"
        className="bg-[var(--color-background-1)] px-6 md:px-12 lg:px-20 py-12"
      >
        {/* Top Section */}
        <div className="flex lg:flex-row md:flex-row flex-col md:justify-between gap-[40px] lg:mb-[84px] md:mb-[76px] mb-[56px]">
          {/* Brand */}
          <div className="w-full md:w-[141px] lg:w-[251px] ">
            <div className="items-start lg:w-[192px] md:w-[141px] w-[191px] lg:h-[38px] md:h-[191px] h-[38px]">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Footer%20header.png"
                className="h-full w-full object-contain"
              />
            </div>
            <Typography variant="para-3" className="mt-[12px] mb-[26px]">
              Deep expertise, decisive courtroom presence
            </Typography>
            <div className="flex gap-[32px] items-center">
              <div className="w-[8.57px] h-[18px]">
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/001-facebook-logo-button.png"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[19px] h-[15px]">
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/002-twitter.png"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[20px] h-[19px] ">
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/004-vimeo-social-logo.png"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[56px] md:gap-[36px] ">
            {/* Links 1 */}
            <div className="lg:w-[214px] md:w-[137px] w-full">
              <ul className="space-y-[16px] ">
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/about") ? "!text-[#9D7D49]" : ""}`}
                  >
                    About Kaizen
                  </Typography>
                </li>
                <li>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      Practice Areas
                      <div className="transition-transform duration-300 w-[10px] h-[5px]">
                        <img src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(19).png" />
                      </div>
                    </summary>
                    <ul className="mt-[12px]  space-y-[12px]  list-disc list-outside pl-4">
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/private-equity") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/private-equity")}
                      >
                        Private Equity & Venture Capital
                      </li>

                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/mergers-acquisitions")
                            ? "!text-[#9D7D49]"
                            : ""
                        }`}
                        onClick={() => router.push("/mergers-acquisitions")}
                      >
                        Mergers & Acquisitions
                      </li>

                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/technology-law") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/technology-law")}
                      >
                        Technology Law
                      </li>

                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/general-counsel") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/general-counsel")}
                      >
                        General Counsel Services
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      Sectors
                      <div className="transition-transform duration-300 w-[10px] h-[5px]">
                        <img src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(19).png" />
                      </div>
                    </summary>
                    <ul className="mt-[12px]  space-y-[12px]  list-disc list-outside pl-4">
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/startup") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/sectors/startup")}
                      >
                        Startups & Emerging Companies
                      </li>
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/financial")
                            ? "!text-[#9D7D49]"
                            : ""
                        }`}
                        onClick={() => router.push("/sectors/financial")}
                      >
                        Financial Services & Fintech
                      </li>
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/renewable")
                            ? "!text-[#9D7D49]"
                            : ""
                        }`}
                        onClick={() => router.push("/sectors/renewable")}
                      >
                        Renewable Energy & Infrastructure
                      </li>
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/digital") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/sectors/digital")}
                      >
                        Digital Businesses
                      </li>
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/consumer") ? "!text-[#9D7D49]" : ""
                        }`}
                        onClick={() => router.push("/sectors/consumer")}
                      >
                        Consumer & Retail
                      </li>
                      <li
                        className={`sublist cursor-pointer ${
                          isActive("/sectors/education")
                            ? "!text-[#9D7D49]"
                            : ""
                        }`}
                        onClick={() => router.push("/sectors/education")}
                      >
                        Education & EdTech
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/footprint")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/footprint") ? "!text-[#9D7D49]" : ""}`}
                  >
                    Transaction Footprint
                  </Typography>
                </li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="md:mt-0 mt-[16px]">
              <ul className="space-y-[16px]">
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/insights")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/insights") ? "!text-[#9D7D49]" : ""}`}
                  >
                    Insights{" "}
                  </Typography>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/careers")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/careers") ? "!text-[#9D7D49]" : ""}`}
                  >
                    Careers{" "}
                  </Typography>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/contact-us")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/contact-us") ? "!text-[#9D7D49]" : ""}`}
                  >
                    Contact Us
                  </Typography>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/legal-and-compliance")}
                >
                  <Typography
                    variant="para-3"
                    className={`${isActive("/legal-and-compliance") ? "!text-[#9D7D49]" : ""}`}
                  >
                    Legal & Compliance
                  </Typography>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:mt-0 mt-[72px] md:border-none border-t border-gray-300  lg:pt-0 md:pt-0 pt-[20px]">
              <ul className="space-y-[16px]">
                <li className="flex items-center gap-2">
                  <span className="h-full items-center">
                    <img
                      src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%20(19).png"
                      className="w-[12px] h-[8px]"
                    />
                  </span>
                  <Typography variant="para-3">connect@kaizenlaw.in</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-full  items-center">
                    <img
                      src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Frame%20(5).png"
                      className="w-[12px] h-[12px]"
                    />
                  </span>
                  <Typography variant="para-3">(555) 123-4567</Typography>
                </li>
                <li className="flex  gap-2">
                  <span className="h-full  items-center">
                    <img
                      src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(20).png"
                      className="w-[9px] h-[13px] mt-[4px]"
                    />
                  </span>
                  <Typography variant="para-3">
                    123 Candyland Lane Suite 123
                    <br /> Los Angeles, CA 94117
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300  lg:pt-[12px] md:pt-[12px] pt-[8px] text-center  text-[#231f20]/50">
          <Typography variant="para-3">
            Kaizen Law Offices © 2025 All Rights Reserved
          </Typography>
        </div>
      </Container>
    </>
  );
}
