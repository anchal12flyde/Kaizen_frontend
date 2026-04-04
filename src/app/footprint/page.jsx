"use client";
import { useState,useRef,useEffect } from "react";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Button from "@/components/ui-kit/button";
import TransactionCard from "@/components/ui-kit/transactionCard";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";

export default function page() {
    const sitecontent = useSiteContent(); 
  const {footprint} =sitecontent;
  const { hero, stats, representativeMandates, fullTransactionList } =
    footprint;
 
    const [openTransactionDropdown, setOpenTransactionDropdown] =
      useState(false);

    const [openTransactionSection, setOpenTransactionSection] = useState({
      role: false,
      sector: false,
    });

    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedSector, setSelectedSector] = useState(null);

    const transactionDropdownRef = useRef(null);
    const toggleTransactionSection = (section) => {
      setOpenTransactionSection((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };
    
    useEffect(() => {
      function handleClickOutside(e) {
        if (
          transactionDropdownRef.current &&
          !transactionDropdownRef.current.contains(e.target)
        ) {
          setOpenTransactionDropdown(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <>
      <Header />
      <section className="hero-section">
        {/* Background Image */}
        <Image
          src={hero.heroImage}
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
                {hero.title}
              </Typography>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <Typography
                variant="header-hero"
                colorVariant="white"
                className="lg:w-[623px] w-full flex-shrink-0"
                delay={0.4}
              >
                {hero.heading}
              </Typography>

              <Typography
                variant="para-2"
                colorVariant="white"
                className="lg:w-[370px] w-full flex-shrink-0 "
                delay={0.6}
              >
                {hero.description}
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
              {representativeMandates.heading}
            </Typography>
            <Typography variant="para-2" colorVariant="white">
              {representativeMandates.description}
            </Typography>
          </div>

          {/* 2 Column Layout */}
          <div className="grid-root">
            {representativeMandates.items.map((item, index) => (
              <div key={index} className="footprint top-border">
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
        <Typography variant="header-1">
          {" "}
          {fullTransactionList.heading}
        </Typography>
        <div className="flex flex-col gap-[50px] md:mt-[60px] mt-[40px]">
          <Typography variant="para-2">
            {" "}
            {fullTransactionList.description}
          </Typography>
          {/* <div className="relative" ref={transactionDropdownRef}>
            <Button
              variant="primary"
              delay={0.6}
              onClick={() => setOpenTransactionDropdown((prev) => !prev)}
            >
              {fullTransactionList.buttonLabel}
            </Button>

            {openTransactionDropdown && (
              <div className="absolute left-0 mt-[10px] w-[250px] bg-[#F7F4EB] shadow-[0px_4px_14px_0px_#00000040] pb-[12px] z-50">
               
                <div
                  onClick={() => {
                    setSelectedRole(null);
                    setSelectedSector(null);
                  }}
                  className="flex items-center gap-[8px] px-[20px] py-[12px] cursor-pointer border-b border-black/10"
                >
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/cross-small%201.png"
                    className="w-[12px] h-[12px]"
                  />
                  <span className="text-[16px] opacity-[80%]">Clear</span>
                </div>

               
                <div className="border-b border-black/10">
                  <div
                    onClick={() => toggleTransactionSection("role")}
                    className="flex items-center justify-between px-[20px] py-[12px] cursor-pointer"
                  >
                    <span className="text-[16px]">Role</span>

                    <span
                      className={`transition-transform duration-300 -rotate-90 ${
                        openTransactionSection.role ? "rotate-0" : ""
                      }`}
                    >
                      <img
                        src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(25).png"
                        className=" w-[10px] h-[5px] object-contain"
                      />
                    </span>
                  </div>

                  {openTransactionSection.role &&
                    fullTransactionList.filters.role.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedRole(item)}
                        className={`px-[20px] py-[14px] cursor-pointer hover:bg-[var(--color-accent)]
              ${selectedRole === item ? "bg-[var(--color-accent)]" : ""}
            `}
                      >
                        {item}
                      </div>
                    ))}
                </div>

              
                <div>
                  <div
                    onClick={() => toggleTransactionSection("sector")}
                    className="flex items-center justify-between px-[20px] py-[12px] cursor-pointer"
                  >
                    <span className="text-[16px]">Sector</span>

                    <span
                      className={`transition-transform duration-300 -rotate-90 ${
                        openTransactionSection.sector ? "rotate-0" : ""
                      }`}
                    >
                      <img
                        src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Vector%20(25).png"
                        className=" w-[10px] h-[5px] object-contain"
                      />
                    </span>
                  </div>

                  {openTransactionSection.sector &&
                    fullTransactionList.filters.sector.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedSector(item)}
                        className={`px-[20px] py-[14px] cursor-pointer hover:bg-[var(--color-accent)]
              ${selectedSector === item ? "bg-[var(--color-accent)]" : ""}
            `}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div> */}
          <div className="flex flex-col gap-[40px]">
            {fullTransactionList.transactions.map((tx, index) => (
              <TransactionCard
                key={index}
                labelText={tx.labelText}
                mainText={tx.mainText}
                roleText={tx.roleText}
                sectorText={tx.sectorText}
                transactionValue={tx.transactionValue}
              />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
