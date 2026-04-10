"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AboutHeroSection from "@/components/abouthero";
import GuidesSection from "@/components/guidesSection";
import KaizenPhilosophySection from "@/components/KaizenPhilosphy";
import LeadershipTeam from "@/components/leadershipTeam";
import LetsConnectSection from "@/components/LetsConnectSection";
import OurStorySection from "@/components/ourStorySectionAbout";
import SectorExperience from "@/components/sectorExperiences";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import WhyChooseSection from "@/components/whyChooseSection";
import Recognization from "@/components/recognization";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { useSiteContent } from "@/context/SiteContentProvider";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  // Fetch about page data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/pages/about');

        if (response.data.success && response.data.data) {
          const apiData = response.data.data;

          // Transform the data from API sections
          let aboutHero = {};
          let ourStory = {};
          let philosophy = {};
          let guides = {};
          let whyClients = {};
          let sectorExperience = {};
          let recognition = {};
          let leadershipTeam = {};
          let privateEquityHero = {};
          let letsConnect = {};

          // Find and transform hero section
          const heroSection = apiData.sections?.find(s => s.sectionId === 'about_hero');
          if (heroSection) {
            aboutHero = {
              bgImage: heroSection.fields?.find(f => f.key === 'bgImage')?.value || '',
              title: heroSection.fields?.find(f => f.key === 'title')?.value || '',
              description: heroSection.fields?.find(f => f.key === 'description')?.value || '',
              align: heroSection.fields?.find(f => f.key === 'align')?.value || 'left',
              buttons: heroSection.fields?.find(f => f.key === 'buttons')?.value || [],
            };
          }

          // Find and transform our story section
          const storySection = apiData.sections?.find(s => s.sectionId === 'about_story');
          if (storySection) {
            ourStory = {
              title: storySection.fields?.find(f => f.key === 'title')?.value || '',
              paragraphs: storySection.fields?.find(f => f.key === 'paragraphs')?.value || [],
            };
          }

          // Find and transform philosophy section
          const philosophySection = apiData.sections?.find(s => s.sectionId === 'about_philosophy');
          if (philosophySection) {
            philosophy = {
              leftTitle: philosophySection.fields?.find(f => f.key === 'leftTitle')?.value || '',
              right: philosophySection.fields?.find(f => f.key === 'right')?.value || { heading: '', description: '' },
            };
          }

          // Find and transform guides section
          const guidesSection = apiData.sections?.find(s => s.sectionId === 'about_guides');
          if (guidesSection) {
            guides = {
              title: guidesSection.fields?.find(f => f.key === 'title')?.value || '',
              items: guidesSection.fields?.find(f => f.key === 'items')?.value || [],
            };
          }

          // Find and transform why clients section
          const whyClientsSection = apiData.sections?.find(s => s.sectionId === 'about_why_clients');
          if (whyClientsSection) {
            whyClients = {
              title: whyClientsSection.fields?.find(f => f.key === 'title')?.value || '',
              subtitle: whyClientsSection.fields?.find(f => f.key === 'subtitle')?.value || '',
              cards: whyClientsSection.fields?.find(f => f.key === 'cards')?.value || [],
            };
          }

          // Find and transform sector experience section
          const sectorSection = apiData.sections?.find(s => s.sectionId === 'about_sector_experience');
          if (sectorSection) {
            sectorExperience = {
              title: sectorSection.fields?.find(f => f.key === 'title')?.value || '',
              sectors: sectorSection.fields?.find(f => f.key === 'sectors')?.value || [],
            };
          }

          // Find and transform recognition section
          const recognitionSection = apiData.sections?.find(s => s.sectionId === 'about_recognition');
          if (recognitionSection) {
            recognition = {
              title: recognitionSection.fields?.find(f => f.key === 'title')?.value || '',
              description: recognitionSection.fields?.find(f => f.key === 'description')?.value || '',
              testimonials: recognitionSection.fields?.find(f => f.key === 'testimonials')?.value || [],
              image: recognitionSection.fields?.find(f => f.key === 'image')?.value || '',
              continent: recognitionSection.fields?.find(f => f.key === 'continent')?.value || '',
              button: recognitionSection.fields?.find(f => f.key === 'button')?.value || { label: '', buttonLink: '' },
              testimonialUI: recognitionSection.fields?.find(f => f.key === 'testimonialUI')?.value || {},
            };
          }

          // Find and transform leadership team section
          const leadershipSection = apiData.sections?.find(s => s.sectionId === 'about_leadership');
          if (leadershipSection) {
            leadershipTeam = {
              title: leadershipSection.fields?.find(f => f.key === 'title')?.value || '',
              description: leadershipSection.fields?.find(f => f.key === 'description')?.value || '',
              members: leadershipSection.fields?.find(f => f.key === 'members')?.value || [],
            };
          }

          // Find and transform private equity hero section
          const peHeroSection = apiData.sections?.find(s => s.sectionId === 'about_pe_hero');
          if (peHeroSection) {
            privateEquityHero = {
              bgImage: peHeroSection.fields?.find(f => f.key === 'bgImage')?.value || '',
              title: peHeroSection.fields?.find(f => f.key === 'title')?.value || '',
              description: peHeroSection.fields?.find(f => f.key === 'description')?.value || '',
              subText: peHeroSection.fields?.find(f => f.key === 'subText')?.value || '',
              selectIndustryText: peHeroSection.fields?.find(f => f.key === 'selectIndustryText')?.value || '',
              industries: peHeroSection.fields?.find(f => f.key === 'industries')?.value || [],
              button: peHeroSection.fields?.find(f => f.key === 'button')?.value || { label: '' },
            };
          }

          // Find and transform lets connect section
          const letsConnectSection = apiData.sections?.find(s => s.sectionId === 'about_lets_connect');
          if (letsConnectSection) {
            letsConnect = {
              title: letsConnectSection.fields?.find(f => f.key === 'title')?.value || [],
              enter: letsConnectSection.fields?.find(f => f.key === 'enter')?.value || '',
              form: letsConnectSection.fields?.find(f => f.key === 'form')?.value || { newsletterText: '', placeholder: '', submitLabel: '' },
              thankYou: letsConnectSection.fields?.find(f => f.key === 'thankYou')?.value || { heading: '', message: '' },
            };
          }

          setAboutData({
            aboutHero,
            ourStory,
            philosophy,
            guides,
            whyClients,
            sectorExperience,
            recognition,
            leadershipTeam,
            privateEquityHero,
            letsConnect
          });
        } else {
          setError('Failed to load about page data');
        }
      } catch (err) {
        console.error('Error fetching about page:', err);
        setError(err.message || 'Failed to load about page data');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    console.log("Submitted Email:", email);
    setEmail("");
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectIndustry = (industry) => {
    setSelected(industry);
    setIsOpen(false);
    setShowEmail(true);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading about page...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !aboutData) {
    return (
      <>
        <Header />
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center m-8">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Data</h3>
          <p className="text-red-600">{error || 'Failed to load about page data'}</p>
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

  const { aboutHero, privateEquityHero, letsConnect, whyClients, ourStory, philosophy, guides, sectorExperience, recognition, leadershipTeam } = aboutData;

  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage={aboutHero.bgImage}
        align={aboutHero.align}
        buttons={aboutHero.buttons}
        title={
          <>
            {aboutHero.title?.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        description={<>{aboutHero.description}</>}
      />
      <OurStorySection data={ourStory} />
      <KaizenPhilosophySection data={philosophy} />
      <GuidesSection data={guides} />
      <WhyChooseSection data={whyClients} />
      <SectorExperience data={sectorExperience} />
      <Recognization data={{ recognition }} />
      <section id="leadership-team">
        <LeadershipTeam data={leadershipTeam} />
      </section>
      <Container
        variant="primarySpacing"
        className="relative w-full h-[700px] overflow-hidden"
      >
        {/* Background Image */}

        <div className="absolute inset-0 z-0">
          <Image
            src={privateEquityHero.bgImage}
            alt="Kaizen Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <>
          <div className=" relative flex justify-center z-10 ">
            <div className=" !w-full border border-[var(--color-accent)] p-[8px] h-full  ">
              <div className="w-full md:w-[500px] md:h-[500px] h-full  p-[36px] bg-[var(--color-accent)]  flex flex-col">
                <AnimatedFadeUp>
                  <Typography
                    variant="header-5"
                    className=" !text-[var(--color-para-2)] "
                  >
                    {privateEquityHero.title}
                  </Typography>
                </AnimatedFadeUp>
                <AnimatedFadeUp delay={0.15}>
                  <Typography
                    variant="para-2"
                    className=" !text-[var(--color-para-2)] mt-[26px] "
                  >
                    {privateEquityHero.description}
                  </Typography>
                </AnimatedFadeUp>
                <div className="mt-[57px] flex flex-col gap-[16px]">
                  <AnimatedFadeUp delay={0.15}>
                    <Typography
                      variant="header-4"
                      className="!text-[var(--color-para-2)]"
                    >
                      {privateEquityHero.subText}
                    </Typography>
                  </AnimatedFadeUp>
                  <div className="relative w-full">
                    {/* Dropdown container when open */}
                    {isOpen ? (
                      <div
                        className="absolute top-full left-0 w-full shadow-md px-[8px]"
                        style={{
                          boxShadow: "1px 0px 8px 1px #00000033",
                          backgroundColor: "#B6996A",
                          zIndex: 10,
                        }}
                      >
                        {/* Trigger inside dropdown */}
                        <div
                          onClick={toggleDropdown}
                          className="w-full h-[32px] border-b border-white flex items-center justify-between cursor-pointer"
                        >
                          <div className="min-w-0 flex-1">
                            <Typography
                              variant="para-2"
                              className="!text-white"
                            >
                              <span className="block w-full truncate">
                                {selected ||
                                  privateEquityHero.selectIndustryText}
                              </span>
                            </Typography>
                          </div>

                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-[var(--color-para-2)] transition-transform duration-300"
                            style={{ transform: "rotate(180deg)" }} // Arrow flips when open
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Options */}
                        <div className="mt-2">
                          {privateEquityHero.industries?.map((industry) => (
                            <div
                              key={industry}
                              onClick={() => selectIndustry(industry)}
                              className="px-[12px] py-[6px] hover:bg-white/20 cursor-pointer text-white "
                            >
                              {industry}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Trigger when closed
                      <div
                        onClick={toggleDropdown}
                        className="w-full h-[32px] border-b border-white flex items-center justify-between md:pr-[16px] pr-0 cursor-pointer px-2"
                      >
                        <div className="min-w-0 flex-1">
                          <Typography variant="para-2" className="!text-white">
                            <span className="block w-full truncate">
                              {selected || privateEquityHero.selectIndustryText}
                            </span>
                          </Typography>
                        </div>

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white transition-transform duration-300"
                          style={{ transform: "rotate(0deg)" }}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {showEmail && (
                  <div className="mt-[24px] w-full">
                    <Typography variant="para-2" className="!text-white">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="inputs w-full h-[40px] px-2 border-b border-white bg-transparent text-white outline-none placeholder:text-white"
                      />
                    </Typography>
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  className=" md:px-[36px] px-[24px] mt-[32px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]"
                >
                  {privateEquityHero.button?.label}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </>
      </Container>

      {/* Desktop only */}
      <div className="hidden md:block">
        <LetsConnectSection data={letsConnect} />
      </div>

      {/* Mobile only */}
      <div className="block md:hidden px-[28px] py-[220px] bg-[var(--color-background-2)]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[56px] text-center relative"
        >
          <Typography
            variant="display-3"
            className="!text-[var(--color-para-2)]"
          >
            {letsConnect.title?.[0]} {letsConnect.title?.[1]}
          </Typography>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`${letsConnect.enter} ${letsConnect.form?.placeholder}`}
            className="w-full bg-transparent outline-none 
                   text-[var(--color-para-2)] placeholder:text-white/50 text-center"
            required
          />

          <button type="submit" className="w-full text-center">
            <Typography
              variant="header-2"
              className="!text-[var(--color-para-2)]"
            >
              {letsConnect.form?.submitLabel}
            </Typography>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}