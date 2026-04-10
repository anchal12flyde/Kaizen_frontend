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
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

export default function FootprintPage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [openTransactionDropdown, setOpenTransactionDropdown] = useState(false);
  const [openTransactionSection, setOpenTransactionSection] = useState({
    role: false,
    sector: false,
  });
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const transactionDropdownRef = useRef(null);

  // Fetch footprint data from API
  useEffect(() => {
    const fetchFootprintData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/pages/footprint');
        const result = await response.json();

        if (result.success && result.data) {
          const apiData = result.data;
          const transformedData = transformFootprintData(apiData);
          setPageData(transformedData);
        } else {
          setError("Failed to load footprint data");
        }
      } catch (err) {
        console.error("Error fetching footprint page:", err);
        setError(err.message || "Failed to load page");
      } finally {
        setLoading(false);
      }
    };

    fetchFootprintData();
  }, []);

  const transformFootprintData = (apiData) => {
    // Hero Section
    const heroSection = apiData.sections?.find(s => s.sectionId === 'footprint_hero');
    const heroFields = heroSection?.fields || [];

    const hero = {
      heroImage: heroFields.find(f => f.key === 'heroImage')?.value || '',
      title: heroFields.find(f => f.key === 'title')?.value || '',
      heading: heroFields.find(f => f.key === 'heading')?.value || '',
      description: heroFields.find(f => f.key === 'description')?.value || '',
    };

    // Stats Section
    const statsSection = apiData.sections?.find(s => s.sectionId === 'footprint_stats');
    const statsField = statsSection?.fields?.find(f => f.key === 'stats');
    const stats = statsField?.value || [];

    // Representative Mandates Section
    const mandatesSection = apiData.sections?.find(s => s.sectionId === 'footprint_mandates');
    const mandatesFields = mandatesSection?.fields || [];

    const representativeMandates = {
      heading: mandatesFields.find(f => f.key === 'heading')?.value || '',
      description: mandatesFields.find(f => f.key === 'description')?.value || '',
      items: mandatesFields.find(f => f.key === 'items')?.value || [],
    };

    // Full Transaction List Section
    const transactionsSection = apiData.sections?.find(s => s.sectionId === 'footprint_transactions');
    const transactionsFields = transactionsSection?.fields || [];

    const fullTransactionList = {
      heading: transactionsFields.find(f => f.key === 'heading')?.value || '',
      description: transactionsFields.find(f => f.key === 'description')?.value || '',
      buttonLabel: transactionsFields.find(f => f.key === 'buttonLabel')?.value || '',
      filters: transactionsFields.find(f => f.key === 'filters')?.value || { role: [], sector: [] },
      transactions: transactionsFields.find(f => f.key === 'transactions')?.value || [],
    };

    return {
      hero,
      stats,
      representativeMandates,
      fullTransactionList,
    };
  };

  const toggleTransactionSection = (section) => {
    setOpenTransactionSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

function RollingNumber({ value = "0", duration = 1, start }) {
  // Extract numeric part and symbols separately
  const extractNumberAndSymbol = (str) => {
    // Match numbers at the beginning or anywhere in the string
    const match = str.match(/(\d+)(.*)/);
    if (match) {
      return {
        number: match[1],
        symbol: match[2] || ''
      };
    }
    // If no numbers found, treat the whole thing as symbol
    return {
      number: '',
      symbol: str
    };
  };

  const { number: numericPart, symbol } = extractNumberAndSymbol(value);
  
  // If there's no numeric part, just return the value as-is
  if (!numericPart) {
    return <span>{value}</span>;
  }
  
  // For animation, we only animate the numeric part
  const displayNumber = start ? numericPart : numericPart.replace(/[0-9]/g, "0");

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {displayNumber.split("").map((char, i) => {
        // if it's NOT a number → render as is
        if (isNaN(char) || char === '') {
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
      {symbol && <span>{symbol}</span>}
    </span>
  );
}

  const digitRef = useRef(null);
  const digitInView = useInView(digitRef, { once: true });
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

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading footprint page...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !pageData) {
    return (
      <>
        <Header />
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center m-8">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Data</h3>
          <p className="text-red-600">{error || "Failed to load footprint page"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const { hero, stats, representativeMandates, fullTransactionList } = pageData;

  console.log('Page Data:', pageData); // For debugging

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
            <AnimatedFadeUp className="mb-[42px]">
              <Typography variant="display-3" colorVariant="white">
                {hero.title}
              </Typography>
            </AnimatedFadeUp>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  variant="header-hero"
                  colorVariant="white"
                  className="lg:w-[623px] w-full flex-shrink-0"
                >
                  {hero.heading}
                </Typography>
              </AnimatedFadeUp>

              <AnimatedFadeUp delay={0.3}>
                <Typography
                  variant="para-2"
                  colorVariant="white"
                  className="lg:w-[370px] w-full flex-shrink-0"
                >
                  {hero.description}
                </Typography>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>

      <Container variant="primarySpacing" className="section-bg">
        <div className="stats-section" ref={digitRef}>
          {stats && stats.length > 0 ? stats.map((item, index) => (
            <div key={index} className="stats-card">
              <Typography variant="display-2" colorVariant="accent">
                <RollingNumber value={item.number?.toString() || "0"} start={start} />
              </Typography>
              <AnimatedFadeUp>
                <Typography
                  variant="header-2"
                  colorVariant="accent"
                  className="stats-card-text"
                >
                  {item.label}
                </Typography>
              </AnimatedFadeUp>
            </div>
          )) : (
            <div>No stats data available</div>
          )}
        </div>
      </Container>

      <section className="bg-[#0A193A] w-full flex justify-center">
        <Container variant="primarySpacing">
          {/* Heading */}
          <div className="md:mb-[60] mb-[18px] flex flex-col gap-[18px]">
            <AnimatedFadeUp>
              <Typography variant="header-1" colorVariant="white">
                {representativeMandates.heading}
              </Typography>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.15}>
              <Typography variant="para-2" colorVariant="white">
                {representativeMandates.description}
              </Typography>
            </AnimatedFadeUp>
          </div>

          {/* 2 Column Layout */}
          <div className="grid-root">
            {representativeMandates.items && representativeMandates.items.length > 0 ? (
              representativeMandates.items.map((item, index) => (
                <FootprintItem key={index} item={item} />
              ))
            ) : (
              <div>No mandate items available</div>
            )}
          </div>
        </Container>
      </section>

      <Container variant="primarySpacing" className="section-bg">
        <AnimatedFadeUp>
          <Typography variant="header-1">
            {fullTransactionList.heading}
          </Typography>
        </AnimatedFadeUp>
        <div className="flex flex-col gap-[50px] md:mt-[60px] mt-[40px]">
          <AnimatedFadeUp delay={0.15}>
            <Typography variant="para-2">
              {fullTransactionList.description}
            </Typography>
          </AnimatedFadeUp>

          {/* Filter Dropdown - Commented out but can be enabled */}
          {/* <div className="relative" ref={transactionDropdownRef}>
            <Button
              variant="primary"
              delay={0.6}
              onClick={() => setOpenTransactionDropdown((prev) => !prev)}
            >
              {fullTransactionList.buttonLabel || "Filter"}
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
                    alt="clear"
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
                        className="w-[10px] h-[5px] object-contain"
                        alt="arrow"
                      />
                    </span>
                  </div>

                  {openTransactionSection.role &&
                    fullTransactionList.filters?.role?.map((item, i) => (
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
                        className="w-[10px] h-[5px] object-contain"
                        alt="arrow"
                      />
                    </span>
                  </div>

                  {openTransactionSection.sector &&
                    fullTransactionList.filters?.sector?.map((item, i) => (
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
            {fullTransactionList.transactions && fullTransactionList.transactions.length > 0 ? (
              fullTransactionList.transactions.map((tx, index) => (
                <TransactionCard
                  key={index}
                  labelText={tx.labelText}
                  mainText={tx.mainText}
                  roleText={tx.roleText}
                  sectorText={tx.sectorText}
                  transactionValue={tx.transactionValue}
                />
              ))
            ) : (
              <div>No transactions available</div>
            )}
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
  }, [height, target, start, y]);

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

function FootprintItem({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  return (
    <div ref={ref} className="footprint relative overflow-hidden">
      {/* 🔥 Custom Border */}
      <div className="absolute top-0 left-0 w-full h-[0.5px]">
        {/* Static 40% */}
        <div className="h-full bg-white/50 w-[35%]" />

        <motion.div
          className="absolute top-0 left-[35%] h-full bg-white/50 origin-left will-change-transform"
          style={{ width: "65%" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
        />
      </div>

      {/* Existing Content (UNCHANGED) */}
      <div className="footprint-left">
        <AnimatedFadeUp>
          <Typography variant="header-3" colorVariant="white">
            {item.title}
          </Typography>
        </AnimatedFadeUp>
        <AnimatedFadeUp>
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
        </AnimatedFadeUp>
      </div>

      <div className="desc-wrap">
        <AnimatedFadeUp delay={0.25}>
          <Typography
            variant="para-2"
            colorVariant="white"
            className="desc-width"
          >
            {item.desc}
          </Typography>
        </AnimatedFadeUp>
      </div>
    </div>
  );
}