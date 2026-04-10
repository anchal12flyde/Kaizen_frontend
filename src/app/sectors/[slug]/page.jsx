"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import AboutHeroSection from "@/components/abouthero";
import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";
import Link from "next/link";
import DigitalTransformationFamiliarSection from "@/components/DigitalTransformationFamiliarSection";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

export default function SectorPage() {
  const params = useParams();
  const slug = params.slug;

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/pages/sector-${slug}`);
        
        if (response.data.success && response.data.data) {
          const apiData = response.data.data;
          const transformedData = transformSectorData(apiData);
          setPageData(transformedData);
        } else {
          setError("Page not found");
        }
      } catch (err) {
        console.error("Error fetching sector page:", err);
        setError(err.message || "Failed to load page");
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchData();
    }
  }, [slug]);

  const transformSectorData = (apiData) => {
    // Hero Section - sector_hero
    const heroSection = apiData.sections?.find(s => s.sectionId === 'sector_hero');
    const startupHero = {
      bgImage: heroSection?.fields?.find(f => f.key === 'bgImage')?.value || '',
      title: heroSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: heroSection?.fields?.find(f => f.key === 'description')?.value || '',
      align: heroSection?.fields?.find(f => f.key === 'align')?.value || 'left',
      buttons: heroSection?.fields?.find(f => f.key === 'buttons')?.value || [],
    };

    // Overview Section - sector_overview
    const overviewSection = apiData.sections?.find(s => s.sectionId === 'sector_overview');
    const overview = {
      title: overviewSection?.fields?.find(f => f.key === 'title')?.value || '',
      paragraphs: overviewSection?.fields?.find(f => f.key === 'paragraphs')?.value || [],
    };

    // Advisory Sections - sector_advisory
    const advisorySection = apiData.sections?.find(s => s.sectionId === 'sector_advisory');
    const advisorySections = advisorySection?.fields?.find(f => f.key === 'sections')?.value || [];

    // Why Clients Section - sector_why_clients
    const whyClientsSection = apiData.sections?.find(s => s.sectionId === 'sector_why_clients');
    const whyClients = {
      title: whyClientsSection?.fields?.find(f => f.key === 'title')?.value || '',
      subtitle: whyClientsSection?.fields?.find(f => f.key === 'subtitle')?.value || '',
      cards: whyClientsSection?.fields?.find(f => f.key === 'cards')?.value || [],
    };

    // Practice Section (Digital Transformation) - sector_pevc_practice
    const practiceSection = apiData.sections?.find(s => s.sectionId === 'sector_pevc_practice');
    const pevcPractice = {
      title: practiceSection?.fields?.find(f => f.key === 'title')?.value || '',
      subtitle: practiceSection?.fields?.find(f => f.key === 'subtitle')?.value || '',
      cardsData: practiceSection?.fields?.find(f => f.key === 'cardsData')?.value || [],
    };

    // Related Insights Section - sector_related_insights
    const insightsSection = apiData.sections?.find(s => s.sectionId === 'sector_related_insights');
    const relatedInsights = {
      title: insightsSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: insightsSection?.fields?.find(f => f.key === 'description')?.value || '',
    };

    // Blogs Section - sector_blogs
    const blogsSection = apiData.sections?.find(s => s.sectionId === 'sector_blogs');
    const blogs = {
      button: blogsSection?.fields?.find(f => f.key === 'button')?.value || '',
      items: blogsSection?.fields?.find(f => f.key === 'items')?.value || [],
    };

    // CTA Section - sector_cta
    const ctaSection = apiData.sections?.find(s => s.sectionId === 'sector_cta');
    const cta = {
      title: ctaSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: ctaSection?.fields?.find(f => f.key === 'description')?.value || '',
      buttonText: ctaSection?.fields?.find(f => f.key === 'buttonText')?.value || '',
    };

    // Representative Experience Section - sector_private_equity_hero
    const repExperienceSection = apiData.sections?.find(s => s.sectionId === 'sector_private_equity_hero');
    const privateEquityHero = {
      bgImage: repExperienceSection?.fields?.find(f => f.key === 'bgImage')?.value || '',
      title: repExperienceSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: repExperienceSection?.fields?.find(f => f.key === 'description')?.value || '',
      subText: repExperienceSection?.fields?.find(f => f.key === 'subText')?.value || { text: '', highlight: '' },
      button: repExperienceSection?.fields?.find(f => f.key === 'button')?.value || { label: '' },
    };

    return {
      startupHero,
      overview,
      advisorySections,
      whyClients,
      pevcPractice,
      relatedInsights,
      blogs,
      cta,
      privateEquityHero,
    };
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
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
          <h3 className="text-lg font-semibold text-red-800">Error Loading Page</h3>
          <p className="text-red-600">{error || "Page not found"}</p>
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

  const {
    startupHero,
    overview,
    advisorySections,
    whyClients,
    pevcPractice,
    relatedInsights,
    blogs,
    cta,
    privateEquityHero,
  } = pageData;

  return (
    <div>
      <Header />

      <section className="hero-section">
        {/* Background Image */}
        <Image
          src={startupHero.bgImage}
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content md:!right-[100px]">
          <div>
            <div className="md:mb-[26px] mb-[42px]">
              <AnimatedFadeUp>
                <Typography variant="display-3" colorVariant="white">
                  {startupHero.title}
                </Typography>
              </AnimatedFadeUp>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  delay={0.4}
                  variant="header-hero"
                  className="lg:w-[623px] w-full flex-shrink-0 !text-[#F2F2F2]"
                >
                  {startupHero.description}
                </Typography>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>

      <Container className="section-bg !bg-[#B6996A]" variant="primarySpacing">
        <div>
          <AnimatedFadeUp>
            <Typography variant="header-6" className="!text-white">
              {overview.title}
            </Typography>
          </AnimatedFadeUp>

          <div className="inprovementSection">
            {overview.paragraphs?.map((text, index) => (
              <AnimatedFadeUp key={index} delay={0.15}>
                <Typography
                  className="text-block !text-[#F7F4EB]"
                  variant="para-2"
                  delay={0.4 + index * 0.2}
                >
                  {text}
                </Typography>
              </AnimatedFadeUp>
            ))}
          </div>
        </div>
      </Container>

      <Container
        variant="primarySpacing"
        className="flex flex-col md:gap-[16px] gap-[36px] items-center bg-[#F7F4EB]"
      >
        {/* This section seems to be using description, but API has paragraphs */}
        {/* You may want to remove this if not needed */}
      </Container>

      <AdvisorySection sections={advisorySections} />
      <WhyChooseSection data={whyClients} />
      
      <DigitalTransformationFamiliarSection
        title={pevcPractice.title}
        subtitle={pevcPractice.subtitle}
        cardsData={pevcPractice.cardsData}
      />

      <Container
        variant="sectionSp1"
        className="flex flex-col items-center text-center gap-[16px] !pb-[20px]"
      >
        <AnimatedFadeUp>
          <Typography variant="header-6">{relatedInsights.title}</Typography>
        </AnimatedFadeUp>
        <Typography variant="para-2">{relatedInsights.description}</Typography>
      </Container>

      <BlogGridSection
        variant="scroll"
        buttonText={blogs.button}
        posts={blogs.items}
        buttonShow={true}
      />

      <Container variant="primarySpacing" className="privateEquityHeroCopy">
        {/* Background Image */}
        <Image
          src={privateEquityHero.bgImage}
          alt="Kaizen Hero"
          fill
          className="hero-background"
          priority
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <>
          <Container
            variant="sectionSp1"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="!w-full border border-[var(--color-accent)] p-[8px]">
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px] pt-[36px] md:pb-[63px] pb-[48px] bg-[var(--color-accent)] flex flex-col">
                <AnimatedFadeUp>
                  <Typography
                    variant="header-5"
                    className="!text-[#F2F2F2]"
                  >
                    {privateEquityHero.title}
                  </Typography>
                </AnimatedFadeUp>
                <AnimatedFadeUp delay={0.15}>
                  <Typography
                    variant="para-2"
                    className="!text-[#F7F4EB] mt-[26px]"
                  >
                    {privateEquityHero.description}
                  </Typography>
                </AnimatedFadeUp>

                <div className="mt-[36px] mb-[26px] flex flex-col gap-[16px]">
                  <Typography variant="para-2" className="!text-white">
                    {privateEquityHero.subText?.text}
                    <Link href="/footprint">
                      <span
                        style={{
                          textDecoration: "underline",
                          textDecorationStyle: "solid",
                          textDecorationSkipInk: "auto",
                        }}
                      >
                        {privateEquityHero.subText?.highlight}
                      </span>
                    </Link>
                  </Typography>
                </div>
                <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white text-[18px]">
                  {privateEquityHero.button?.label}
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>

      <Container
        variant="sectionSp1"
        className="bg-[var(--color-background-2)] flex md:flex-row flex-col gap-[46px] md:justify-between md:items-center"
      >
        <div className="flex flex-col gap-[16px] md:gap-[12px]">
          <Typography variant="header-5" className="!text-white">
            {cta.title}
          </Typography>
          <Typography
            variant="para-2"
            className="!text-[#F7F4EB] w-full md:w-[486px]"
          >
            {cta.description}
          </Typography>
        </div>
        <button className="md:px-[36px] px-[24px] md:py-[12px] py-[18px] border-[1px] border-[#FFFFFF] md:w-fit w-full text-white md:text-[18px] text-[18px]">
          {cta.buttonText}
        </button>
      </Container>
      <Footer />
    </div>
  );
}