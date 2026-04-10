"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import AdvisorySection from "@/components/advisorySection";
import BlogGridSection from "@/components/blogCardsGrid";
import OurApproachSection from "@/components/ourApproachSection";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import StackedServicesSection from "@/components/stackedServices";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import WhyChooseSection from "@/components/whyChooseSection";
import Image from "next/image";
import Recognization from "@/components/recognization";
import Testimonials from "@/components/ui-kit/testimonials";
import { notFound } from "next/navigation";
import DigitalTransformationFamiliarSection from "@/components/DigitalTransformationFamiliarSection";
import Link from "next/link";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug;

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check which sections to show based on slug
  const showPEVC = ["private-equity", "mergers-acquisitions"].includes(slug);
  const showDigital = ["general-counsel", "technology-law"].includes(slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/pages/${slug}`);

        if (response.data.success && response.data.data) {
          const apiData = response.data.data;
          const transformedData = transformServiceData(apiData, slug);
          setPageData(transformedData);
        } else {
          setError("Page not found");
        }
      } catch (err) {
        console.error("Error fetching page:", err);
        setError(err.message || "Failed to load page");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  const transformServiceData = (apiData, slug) => {
    // Hero Section
    const heroSection = apiData.sections?.find(s => s.sectionId === 'service_hero');
    const privateEquity = {
      title: heroSection?.fields?.find(f => f.key === 'title')?.value || '',
      subtitle: heroSection?.fields?.find(f => f.key === 'subtitle')?.value || '',
      description: heroSection?.fields?.find(f => f.key === 'description')?.value || '',
      image: heroSection?.fields?.find(f => f.key === 'image')?.value || '',
    };

    // Overview Section
    const overviewSection = apiData.sections?.find(s => s.sectionId === 'service_overview');
    const overview = {
      title: overviewSection?.fields?.find(f => f.key === 'title')?.value || '',
      paragraphs: overviewSection?.fields?.find(f => f.key === 'paragraphs')?.value || [],
    };

    // Practice Section
    const practiceSection = apiData.sections?.find(s => s.sectionId === 'service_practice');
    const pevcPractice = {
      topContent: practiceSection?.fields?.find(f => f.key === 'topContent')?.value || { title: '', subtitle: '' },
      cardsData: practiceSection?.fields?.find(f => f.key === 'cardsData')?.value || [],
    };

    // Investment Lifecycle Section
    const lifecycleSection = apiData.sections?.find(s => s.sectionId === 'service_investment_lifecycle');
    const investmentLifecycle = {
      title: lifecycleSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: lifecycleSection?.fields?.find(f => f.key === 'description')?.value || '',
    };

    // Digital Transformation Section (only for technology-law and general-counsel)
    let digitalTransformation = null;
    if (showDigital) {
      const digitalSection = apiData.sections?.find(s => s.sectionId === 'service_digital_transformation');
      if (digitalSection) {
        digitalTransformation = {
          title: digitalSection?.fields?.find(f => f.key === 'title')?.value || '',
          subtitle: digitalSection?.fields?.find(f => f.key === 'subtitle')?.value || '',
          cardsData: digitalSection?.fields?.find(f => f.key === 'cardsData')?.value || [],
        };
      }
    }

    // Stacked Services Section (only for private-equity and mergers-acquisitions)
    let stackedServices = [];
    if (showPEVC) {
      const stackedSection = apiData.sections?.find(s => s.sectionId === 'service_stacked_services');
      stackedServices = stackedSection?.fields?.find(f => f.key === 'items')?.value || [];
    }

    // Why Clients Section
    const whyClientsSection = apiData.sections?.find(s => s.sectionId === 'service_why_clients');
    const whyClients = {
      title: whyClientsSection?.fields?.find(f => f.key === 'title')?.value || '',
      subtitle: whyClientsSection?.fields?.find(f => f.key === 'subtitle')?.value || '',
      cards: whyClientsSection?.fields?.find(f => f.key === 'cards')?.value || [],
    };

    // Our Approach Section
    const approachSection = apiData.sections?.find(s => s.sectionId === 'service_our_approach');
    const ourApproach = {
      title: approachSection?.fields?.find(f => f.key === 'title')?.value || '',
      highlight: approachSection?.fields?.find(f => f.key === 'highlight')?.value || '',
      description: approachSection?.fields?.find(f => f.key === 'description')?.value || '',
    };

    // CTA Section
    const ctaSection = apiData.sections?.find(s => s.sectionId === 'service_cta');
    const privateEquityHero = {
      bgImage: ctaSection?.fields?.find(f => f.key === 'bgImage')?.value || '',
      title: ctaSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: ctaSection?.fields?.find(f => f.key === 'description')?.value || '',
      button: ctaSection?.fields?.find(f => f.key === 'button')?.value || { label: '', link: '' },
    };

    // Recognition Section
    const recognitionSection = apiData.sections?.find(s => s.sectionId === 'service_recognition');
    const recognition = {
      title: recognitionSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: recognitionSection?.fields?.find(f => f.key === 'description')?.value || '',
      testimonials: recognitionSection?.fields?.find(f => f.key === 'testimonials')?.value || [],
      image: recognitionSection?.fields?.find(f => f.key === 'image')?.value || '',
      continent: recognitionSection?.fields?.find(f => f.key === 'continent')?.value || '',
      button: recognitionSection?.fields?.find(f => f.key === 'button')?.value || { label: '', buttonLink: '' },
      testimonialUI: recognitionSection?.fields?.find(f => f.key === 'testimonialUI')?.value || {},
    };

    // Related Insights Section
    const insightsSection = apiData.sections?.find(s => s.sectionId === 'service_related_insights');
    const relatedInsights = {
      title: insightsSection?.fields?.find(f => f.key === 'title')?.value || '',
      description: insightsSection?.fields?.find(f => f.key === 'description')?.value || '',
    };

    // Blogs Section
    const blogsSection = apiData.sections?.find(s => s.sectionId === 'service_blogs');
    const blogs = {
      button: blogsSection?.fields?.find(f => f.key === 'button')?.value || '',
      items: blogsSection?.fields?.find(f => f.key === 'items')?.value || [],
    };

    // CTA (bottom) - using the same structure as new file
    const cta = {
      title: "Speak With Our Team",
      description: "If you are evaluating an investment, planning a fundraising round, or considering an exit, we would be pleased to discuss how Kaizen Law can support your objectives.",
      buttonText: "Schedule A Consultation →"
    };

    return {
      privateEquity,
      overview,
      pevcPractice,
      investmentLifecycle,
      stackedServices,
      whyClients,
      privateEquityHero,
      relatedInsights,
      cta,
      blogs,
      digitalTransformation,
      ourApproach,
      recognition,
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
    privateEquity,
    overview,
    pevcPractice,
    investmentLifecycle,
    stackedServices,
    whyClients,
    privateEquityHero,
    relatedInsights,
    cta,
    blogs,
    digitalTransformation,
    ourApproach,
    recognition,
  } = pageData;

  return (
    <div className="!overflow-x-none">
      <Header />
      <section className="hero-section">
        {/* Background Image */}
        <Image
          src={privateEquity.image}
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
                  {privateEquity.title}
                </Typography>
              </AnimatedFadeUp>
            </div>

            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
              <AnimatedFadeUp delay={0.15}>
                <Typography
                  variant="header-hero"
                  colorVariant="white"
                  className="lg:w-[623px] w-full flex-shrink-0"
                >
                  {privateEquity.subtitle}
                </Typography>
              </AnimatedFadeUp>
              <AnimatedFadeUp delay={0.25}>
                <Typography
                  delay={0.6}
                  variant="para-2"
                  colorVariant="white"
                  className="lg:w-[370px] w-full flex-shrink-0"
                >
                  {privateEquity.description}
                </Typography>
              </AnimatedFadeUp>
            </div>
          </div>
        </div>
      </section>

      <Container className="section-bg" variant="primarySpacing">
        <div>
          <AnimatedFadeUp>
            <Typography variant="header-6" className="">
              {overview.title}
            </Typography>
          </AnimatedFadeUp>
          <div className="inprovementSection">
            {overview?.paragraphs?.map((text, index) => (
              <AnimatedFadeUp key={index} delay={0.15}>
                <Typography
                  className="text-block"
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

      <PEVCPracticeSection
        cardsData={pevcPractice.cardsData}
        topContent={pevcPractice.topContent}
      />

      {showPEVC && pevcPractice && (
        <StackedServicesSection
          items={stackedServices}
          investmentLifecycle={investmentLifecycle}
        />
      )}

      <WhyChooseSection data={whyClients} />

      {showDigital && digitalTransformation && (
        <DigitalTransformationFamiliarSection
          title={digitalTransformation.title}
          subtitle={digitalTransformation.subtitle}
          cardsData={digitalTransformation.cardsData || []}
        />
      )}

      <OurApproachSection data={ourApproach} />

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
              <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px] pt-[36px] md:pb-[113px] pb-[48px] bg-[var(--color-accent)] flex flex-col">
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
                <Link href="/footprint">
                  <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white text-[18px]">
                    {privateEquityHero.button?.label}
                  </button>
                </Link>
              </div>
              <div></div>
            </div>
          </Container>
        </>
      </Container>

      <Container
        variant="primarySpacing"
        className="flex flex-col items-center text-center overflow-hidden w-full"
      >
        <AnimatedFadeUp>
          <Typography variant="header-6">{recognition.title}</Typography>
        </AnimatedFadeUp>
        <div className="flex flex-col gap-[56px] items-center text-center">
          <AnimatedFadeUp delay={0.15}>
            <Typography
              variant="para-2"
              className="mt-[32px] lg:w-[480px] w-full"
              delay={0.4}
            >
              {recognition.description}
            </Typography>
          </AnimatedFadeUp>

          <Testimonials
            bg={recognition.testimonialUI?.bg}
            textColor={recognition.testimonialUI?.textColor}
            dotActive={recognition.testimonialUI?.dotActive}
            dotInactive={recognition.testimonialUI?.dotInactive}
            leftArrow={recognition.testimonialUI?.leftArrow}
            rightArrow={recognition.testimonialUI?.rightArrow}
            data={recognition.testimonials}
          />

          <div className="flex flex-col gap-[74px]">
            <AnimatedFadeUp delay={0.25}>
              <div className="relative w-full h-full hidden md:block">
                <Image
                  src={recognition.image}
                  width={183}
                  height={154}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </AnimatedFadeUp>
            <Button
              as="a"
              href={recognition.button?.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {recognition.button?.label}
            </Button>
          </div>
        </div>
      </Container>

      <Container
        variant="primarySpacing"
        className="flex flex-col items-center gap-[16px] !pb-[0] !pt-[56px]"
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