"use client";
import { useState, useRef, useEffect } from "react";
import { motion, animate, useMotionValue, useInView } from "framer-motion";
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
  const { footprint } = sitecontent;
  const { hero, stats, representativeMandates, fullTransactionList } =
    footprint;

  const [openTransactionDropdown, setOpenTransactionDropdown] = useState(false);

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
  function RollingNumber({ value = "0", duration = 1, start }) {
    const number = start ? value : value.replace(/[0-9]/g, "0");

    return (
      <span style={{ fontVariantNumeric: "tabular-nums" }}>
        {number.split("").map((char, i) => {
          // if it's NOT a number → render as is
          if (isNaN(char)) {
            return <span key={i}>{char}</span>;
          }

          // if it's a digit → animate
          return (
            <RollingDigit
              key={i}
              target={parseInt(char, 10)}
              duration={duration}
              start={start}
              delay={i * 0.05}
            />
          );
        })}
      </span>
    );
  }

  const digitRef = useRef(null);
  const digitInView = useInView(digitRef, { once: true });
  const borderRef = useRef(null);
  const borderInView = useInView(borderRef, { once: true, margin: "-50px" });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (digitInView) setStart(true);
  }, [digitInView]);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

      <Container variant="primarySpacing" className="section-bg">
        <div className="stats-section" ref={digitRef}>
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <Typography variant="display-2" colorVariant="accent">
                <RollingNumber value={item.number.toString()} start={start} />
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
        <Container variant="primarySpacing">
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
          <div className="grid-root" ref={borderRef}>
            {representativeMandates.items.map((item, index) => (
              <div key={index} className="footprint relative overflow-hidden">
                {/* Animated Top Border */}
                <motion.div
                  className="absolute top-0 left-0 h-[0.5px] w-full bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={borderInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.4, // 👈 stagger like your video
                  }}
                />

                {/* Existing Content */}
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

      <Container variant="primarySpacing" className="section-bg">
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
function RollingDigit({ target, duration = 1, start }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    if (!height && ref.current) setHeight(ref.current.clientHeight);
  }, [height]);

useEffect(() => {
  if (start && height > 0 && Number.isFinite(target)) {
    y.set(0);
    const controls = animate(y, -target * height, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
    });
    return () => controls.stop();
  }
}, [height, target, start]);
  return (
    <div
      style={{
        overflow: "hidden",
        height: "1em",
        display: "inline-block",
        verticalAlign: "bottom",
      }}
    >
      <motion.div style={{ y }}>
        {Array.from({ length: 10 }, (_, digit) => (
          <div
            key={digit}
            ref={digit === 0 ? ref : null}
            style={{
              height: "1em",
              lineHeight: 1.06,
              display: "block",
              textAlign: "center",
            }}
          >
            {digit}
          </div>
        ))}
      </motion.div>
    </div>
  );
}