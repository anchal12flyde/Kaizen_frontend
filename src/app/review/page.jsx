"use client";
import { useState,useEffect } from "react";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { Container } from "@/components/ui-kit/spacing";
import Button from "@/components/ui-kit/button";
import Testimonials from "@/components/ui-kit/testimonials";
import AboutHeroSection from "@/components/abouthero";
import KaizenPhilosophySection from "@/components/KaizenPhilosphy";
import GuidesSection from "@/components/guidesSection";
import WhyChooseSection from "@/components/whyChooseSection";
import SectorExperience from "@/components/sectorExperiences";
import LeadershipTeam from "@/components/leadershipTeam";
import LetsConnectSection from "@/components/LetsConnectSection";
import AdvisorySection from "@/components/advisorySection";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import StackedServicesSection from "@/components/stackedServices";
import OurApproachSection from "@/components/ourApproachSection";
import BlogGridSection from "@/components/blogCardsGrid";
import ProfileAboutSection from "@/components/profileAboutSection";
import ProfileHeader from "@/components/ProfileHeader";
import EndToEndServices from "@/components/endToEndServices";
import JobCard from "@/components/jobCard";
import sitecontent from "@/data/sitecontent.json";


const data =  {
  "title": "What Guides Our Work",
  "items": [
    {
      "title": "Execution Excellence",
      "desc": "Relentless focus on quality, timelines, and outcomes."
    },
    {
      "title": "Senior Ownership",
      "desc": "Direct partner and senior lawyer involvement throughout every mandate."
    },
    {
      "title": "Commercial Insight",
      "desc": "Advice grounded in business realities, not theoretical risk."
    },
    {
      "title": "Integrity",
      "desc": "Independent judgment, discretion, and professional responsibility."
    },
    {
      "title": "Client Partnership",
      "desc": "Long-term relationships over one-off transactions."
    }
  ]
}
const topContent = {
  title: "Our PE & VC Practice",
  subtitle:
    "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
};
const items = [
  {
    title: "Private Equity & Venture Capital",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Vector%206.png",
  },
  {
    title: "Mergers & Acquisitions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Vector%206.png",
  },
  {
    title: "General Counsel Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Vector%206.png",
  },
  {
    title: "Technology Law",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://ik.imagekit.io/a9uxeuyhx/Vector%206.png",
  },
];
const jobsData = [
  {
    id: "ui-graphic-designer",
    title: "UI / Graphic Designer",
    company: "Kaizen Law",
    location: "Gurugram",
    type1: "Full Time",
    type2: "Part Time",
    qualifications: [
      "1+ year of experience partnering with stakeholders (clients, partners, users).",
      "Strong knowledge of design systems and branding guidelines.",
      "Proficiency in Figma, Adobe XD, and Photoshop.",
      "Ability to translate business requirements into clean UI designs.",
    ],
    ctaText: "Apply Now",
  },

  {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "Kaizen Law",
    location: "Remote / Gurugram",
    type1: "Full Time",
    type2: "Part Time",
    qualifications: [
      "2+ years of experience with React and Next.js.",
      "Strong understanding of HTML, CSS, and JavaScript.",
      "Experience with REST APIs and state management.",
      "Familiarity with Tailwind CSS and modern UI frameworks.",
    ],
    ctaText: "Apply Now",
  },

  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    company: "Kaizen Law",
    location: "Gurugram",
    type1: "Full Time",
    type2: "Part Time",
    qualifications: [
      "Experience in SEO, SEM, and social media marketing.",
      "Knowledge of Google Ads and Meta Ads Manager.",
      "Ability to analyze campaign performance and optimize ROI.",
      "Strong content writing and communication skills.",
    ],
    ctaText: "Apply Now",
  },

  {
    id: "hr-recruiter",
    title: "HR Recruiter",
    company: "Kaizen Law",
    location: "Delhi NCR",
    type1: "Full Time",
    type2: "Part Time",
    qualifications: [
      "Experience in end-to-end recruitment process.",
      "Strong interviewing and candidate screening skills.",
      "Knowledge of HR tools and ATS systems.",
      "Good interpersonal and negotiation skills.",
    ],
    ctaText: "Apply Now",
  },
];
const policiesData = {
  disclosures: {
    title: " Disclosures",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
    ],
  },

  disclaimer: {
    title: "Disclaimer",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
      {
        heading: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us, such as when you create an account, post job listings, submit applications, or communicate with us. This includes your name, email address, phone number, company information, and any other information you choose to provide.",
          "We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage data. This helps us improve our services and provide a better user experience.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Use",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Terms Heading",
        content: ["Terms ka content..."],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    date: "Last Updated: November 15, 2025",
    sections: [
      {
        heading: "1. Privacy Heading",
        content: ["Privacy content..."],
      },
    ],
  },
};
export default function page({ data }) {
  const stats = [
    {
      number: "100+",
      label: "Number of transactions facilitated",
    },
    {
      number: "$1B",
      label: "Aggregate transaction value advised on",
    },
    {
      number: "12+",
      label: "Years of transactional experience",
    },
  ];
  const services = [
    {
      title: "Early-Stage Fundraising",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Growth-Stage & Late-Stage Investments",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Governance & Shareholder Frameworks",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Follow-on Investments & Restructuring",
      description:
        "Our practice covers the full lifecycle of investments, including early-stage financings, growth and structured investments, fundraises, and sponsor-led exits. We advise on shareholder transactions with a focus on precision, speed, and execution.",
    },
    {
      title: "Secondary Transactions & Exits",
      description:
        "We align legal strategy with commercial objectives, ensuring clarity on rights, governance, and risk. Our approach is centered on long-term value creation, helping clients make informed decisions at every stage of the transaction.",
    },
  ];
 
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("disclaimer");
  const [isMobile, setIsMobile] = useState(false);
  const datas = policiesData[activeTab];
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    console.log("Submitted Email:", email);

    setEmail("");
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />

        <Typography variant="hero-display">hero-display</Typography>
        <Typography variant="header-hero">header-hero</Typography>
        <Typography variant="display-1">display-1</Typography>
        <Typography variant="display-2">display-2</Typography>
        <Typography variant="display-3">display-3</Typography>
        <Typography variant="header-1">header-1</Typography>
        <Typography variant="header-2">header-2</Typography>
        <Typography variant="header-3">header-3</Typography>
        <Typography variant="header-4">header-4</Typography>
        <Typography variant="header-5">header-5</Typography>
        <Typography variant="header-6">header-6</Typography>
        <Typography variant="para-1">para-1</Typography>
        <Typography variant="para-2">para-2</Typography>
        <Typography variant="para-3"></Typography>
        <Typography variant="big-firm">big-firm</Typography>
        <Typography variant="linkText">linkText</Typography>
        <section className="hero-section">
          <Image
            src="https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg"
            alt="Kaizen Hero"
            fill
            className="hero-background"
            priority
          />

          <div className="hero-overlay"></div>

          <div className="hero-content md:right-[100px]">
            <div>
              <div className="mb-[42px]">
                <Typography variant="hero-display" colorVariant="white">
                  Legal Advisory
                </Typography>
              </div>

              <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-[16px]">
                <Typography
                  delay={0.4}
                  variant="header-hero"
                  colorVariant="white"
                  className="lg:w-[623px] w-full flex-shrink-0 "
                >
                  For Complex Deals <br /> and Critical Decisions
                </Typography>

                <Typography
                  delay={0.6}
                  variant="para-2"
                  colorVariant="white"
                  className="lg:w-[370px] w-full flex-shrink-0"
                >
                  Kaizen Law is a corporate and transaction-focused law firm
                  advising businesses, founders, and investors across M&A,
                  private equity, capital markets, and general counsel mandates.
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <Container className="section-bg" variant="primarySpacing">
          <div>
            <Typography variant="header-1">
              Built on the Principle of Continuous Improvement
            </Typography>

            <div className="inprovementSection">
              <Typography className="text-block" variant="para-2" delay={0.4}>
                Kaizen is not about dramatic change. It is about deliberate
                progress : refining structures, strengthening positions, and
                anticipating what lies ahead. This philosophy defines how we
                approach every mandate, from early-stage advisory to complex,
                multi-party transactions.
              </Typography>

              <Typography className="text-block" variant="para-2" delay={0.6}>
                In mergers and acquisitions, value is rarely created by a single
                decisive moment. It is built through disciplined preparation,
                careful structuring, informed negotiation, and precise
                execution. Our Kaizen approach reflects this reality. We focus
                on incremental advantage at every stage of a transaction —
                identifying risk early, refining deal terms continuously, and
                aligning legal strategy with commercial objectives. The result
                is not just deal completion, but durable outcomes that withstand
                scrutiny and time.
              </Typography>
            </div>

            <Button className="inprovementSectionBtn">More About Kaizen</Button>
          </div>
        </Container>
        <div className="relative w-full h-[280px] md:h-full">
          <Image
            src="https://ik.imagekit.io/75zj3bigp/7d11d9363b24d18bf891f3cb0eaa9eb909fbb467.png"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>

        <div className="evaluation">
          <Container className="evaluationSection" variant="primarySpacing">
            <div>
              <Typography colorVariant="white" variant="header-1">
                Advising Across <br /> the Full Deal Lifecycle
              </Typography>
            </div>
            <div className="flex flex-col md:gap-0 gap-[8px]">
              <Typography colorVariant="white" variant="display-3" delay={0.4}>
                Strategic Evaluation <br />
                Structuring & Planning <br />
                Due Diligence <br />
                Negotiation <br />
                Documentation & Execution <br />
                Closing & Completion
              </Typography>
              <Typography variant="punctuation" delay={0.6}>
                +Post-Transaction Integration & Compliance
              </Typography>
              <Button
                className="evaluationBtn !w-fit"
                variant="white"
                delay={0.8}
              >
                Explore Capabilities
              </Button>
            </div>
          </Container>
        </div>

        <Container
          variant="primarySpacing"
          className="flex flex-col items-center overflow-hidden w-full"
        >
          <Typography variant="header-1">
            Recognition & Market Feedback
          </Typography>
          <div className="flex flex-col gap-[56px] items-center text-center">
            <Typography
              variant="para-2"
              className="mt-[32px] lg:w-[480px] w-full"
              delay={0.4}
            >
              We believe that our clients' experiences speak volumes about the
              quality of our legal services. Here's what some of them have to
              say:
            </Typography>

            <Testimonials
              data={[
                {
                  text: "Kaizen has consistently demonstrates a strong command over corporate legal matters, combining deep technical expertise with a business-centric approach.",
                  author: "Corporate/Mergers and Acquisitions",
                },
                {
                  text: "Their expertise was impressive...",
                  author: "Startup Founder",
                },
                {
                  text: "Their expertise was impressive...",
                  author: "Startup Founder",
                },
                {
                  text: "Their expertise was impressive...",
                  author: "Startup Founder",
                },
              ]}
            />

            <div className="flex flex-col md:gap-[74px] gap-[36px]">
              <Typography variant="para-2" delay={0.6}>
                {" "}
                Asia Pacific 2026
              </Typography>
              <div className="relative w-full h-full ">
                <Image
                  src="https://ik.imagekit.io/a9uxeuyhx/51e8e6fb1012d3b763accee0c80f79cfcfc874c4.jpg"
                  width={183}
                  height={154}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>

              <Button variant="primary" delay={0.4}>
                View on Chambers and Partners
              </Button>
            </div>
          </div>
        </Container>

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

        <AboutHeroSection
          bgImage="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
          title={
            <>
              A Transaction-Focused
              <br />
              Law Firm Built on <br /> Precision and Execution
            </>
          }
          description={
            <>
              Kaizen Law is a corporate and transaction advisory firm delivering
              big-firm quality advice through a partner-led, boutique model.
            </>
          }
          align="left"
          buttons={[
            {
              label: "Explore Our Practise",
              variant: "primary",
            },
            {
              label: "Meet Our Team",
              variant: "white",
            },
          ]}
        />

        <KaizenPhilosophySection />

        <WhyChooseSection />
        <SectorExperience />
        <LeadershipTeam />
        <Container variant="primarySpacing" className=" privateEquityHeroCopy">
          {/* Background Image */}
          <Image
            src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
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
              className=" absolute inset-0  flex items-center justify-center  "
            >
              <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
                <div className="w-full md:w-[500px] h-full p-[36px] bg-[var(--color-accent)]  flex flex-col">
                  <Typography variant="header-5" className=" !text-white ">
                    Ready To Talk?
                  </Typography>
                  <Typography
                    variant="para-2"
                    className=" !text-white mt-[26px] "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>

                  <div className="mt-[57px] mb-[32px] flex flex-col gap-[16px]">
                    <Typography variant="header-4" className="!text-white">
                      I want to talk to your experts in:
                    </Typography>
                    <div className="w-full h-[32px] border-b border-white flex items-center justify-between md:pr-[16px] pr-0">
                      <Typography variant="para-2" className="!text-white">
                        {" "}
                        Select an Industry
                      </Typography>

                      {/* Arrow */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
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
                  </div>
                  <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                    View Representative Transactions
                  </button>
                </div>
                <div></div>
              </div>
            </Container>
          </>
        </Container>
        <Container variant="primarySpacing" className=" privateEquityHeroCopy">
          {/* Background Image */}
          <Image
            src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
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
              className=" absolute inset-0  flex items-center justify-center  "
            >
              <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
                <div className="w-full md:w-[500px] h-full md:px-[36px] px-[16px] pt-[36px] md:pb-[113px] pb-[48px] bg-[var(--color-accent)]  flex flex-col">
                  <Typography variant="header-5" className=" !text-white ">
                    Representative Experience
                  </Typography>
                  <Typography
                    variant="para-2"
                    className=" !text-white mt-[26px] "
                  >
                    We have advised investors and growth-stage companies across
                    technology, consumer, financial services, healthcare,
                    infrastructure, and energy sectors on investments, follow-on
                    rounds, and exits.
                  </Typography>
                  <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white md:text-[24px] text-[18px]">
                    View Representative Transactions
                  </button>
                </div>
                <div></div>
              </div>
            </Container>
          </>
        </Container>
        <div className="hidden md:block">
          <LetsConnectSection />
        </div>

        {/* Mobile only */}
        <div className="block md:hidden px-[28px] py-[220px] bg-[#0A193A]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[56px] text-center relative"
          >
            <Typography variant="display-3" className="!text-white">
              Lets Connect
            </Typography>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full bg-transparent outline-none 
                   text-white placeholder:text-white/50 text-center"
              required
            />

            <button type="submit" className="w-full text-center">
              <Typography variant="header-2" className="!text-white">
                Submit
              </Typography>
            </button>
          </form>
        </div>
        <Container
          variant="primarySpacing"
          className=" flex flex-col md:gap-[16px] gap-[36px] items-center bg-[#F7F4EB]    "
        >
          <Typography variant="header-6">Overview</Typography>
          <Typography
            variant="para-2"
            className="md:w-[716px] w-full text-center "
          >
            Kaizen Law is a corporate and transaction advisory firm delivering
            big-firm quality advice through a partner-led, boutique model.
          </Typography>
        </Container>
        <div className="!overflow-x-none">
          <AdvisorySection />
        </div>
        {/* <PEVCPracticeSection
          cardsData={pevcPractice.cardsData}
          topContent={pevcPractice.topContent}
        /> */}
        <Container
          variant="sectionSp3"
          className=" !pb-[60px] flex flex-col gap-[16px] items-center bg-[var(--color-background-1)] "
        >
          <Typography variant="header-6">
            Advising Across the Investment Lifecycle
          </Typography>
          <Typography variant="para-2">
            We advise clients at each stage of the investment journey:
          </Typography>
        </Container>

        <StackedServicesSection items={services} />

        <OurApproachSection />
        <Container
          variant="primarySpacing"
          className=" flex flex-col items-center gap-[16px] !pb-[20px] "
        >
          <Typography variant="header-6">Related Insights</Typography>
          <Typography variant="para-2">
            We advise clients at each stage of the investment journey:
          </Typography>
        </Container>
        <BlogGridSection
          variant="scroll"
          posts={[
            {
              image: "https://ik.imagekit.io/demo/img/image1.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image2.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image3.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
          ]}
          buttonShow={true}
        />
        <div variant="sectionSp1" className="relative overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <Container
            variant="sectionSp1"
            className="relative z-10 flex items-center justify-center"
          >
            <div className="w-full  md:p-[15px] p-[12px] bg-[var(--color-background-1)] overflow-hidden">
              <div className="flex md:flex-row flex-col bg-[var(--color-background-1)] ">
                {/* Left Form Section */}
                <div className="md:p-[46px] pb-[36px] !bg-none  flex-1 ">
                  <Typography variant="header-5" className=" mb-[76px] ">
                    Ready To Discuss Your Project With Us?
                  </Typography>

                  <div className="grid grid-cols-2 gap-y-[36px]  md:gap-x-[0] gap-x-[12px]">
                    {/* First Name */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="text"
                          className="bg-transparent outline-none pb-[26px] "
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="text"
                          className="bg-transparent outline-none pb-[26px] "
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="email"
                          className="bg-transparent outline-none pb-[26px] "
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="tel"
                          className="bg-transparent outline-none pb-[26px] "
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="text"
                          className="bg-transparent outline-none pb-[26px]  "
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div className="">
                      <div className="inputBorderContact flex flex-col">
                        <input
                          type="text"
                          className="bg-transparent outline-none pb-[26px] "
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    placeholder="Description"
                    className="inputBorderContact outline-none  w-full mt-[32px]"
                    rows={3}
                  />

                  <button className="mt-[40px] md:px-[32px] px-[24px] md:py-[16px] py-[16px] border border-[#231F20] md:w-fit w-full  hover:bg-black hover:text-white transition">
                    View Representative Transactions →
                  </button>
                </div>

                {/* Right Location Section */}
                <div className=" bg-[var(--color-accent)] md:w-[390px] w-full  text-white relative flex flex-col justify-between">
                  <div className="md:p-[26px] p-[12px]">
                    <Typography variant="header-5" className=" !text-white">
                      Where To Find Us
                    </Typography>

                    {/* Gurgaon */}
                    <div className="flex flex-col gap-[8px]">
                      <div className=" flex items-center gap-[12px]  mt-[28px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9991 0C6.00516 0 2.75586 3.2493 2.75586 7.2432C2.75586 12.1998 9.23785 19.4763 9.51383 19.7836C9.77305 20.0723 10.2256 20.0718 10.4844 19.7836C10.7604 19.4763 17.2423 12.1998 17.2423 7.2432C17.2423 3.2493 13.993 0 9.9991 0ZM9.9991 10.8875C7.98965 10.8875 6.35488 9.25266 6.35488 7.2432C6.35488 5.23375 7.98969 3.59898 9.9991 3.59898C12.0085 3.59898 13.6433 5.23379 13.6433 7.24324C13.6433 9.2527 12.0085 10.8875 9.9991 10.8875Z"
                            fill="white"
                          />
                        </svg>
                        <Typography
                          variant="header-2"
                          className=" !text-white  "
                        >
                          Gurgaon
                        </Typography>
                      </div>

                      <Typography variant="para-2" className="!text-white  ">
                        1st Floor, DLF Centre Court, Golf Course Road, DLF Phase
                        5, Sector-42, Gurugram, Haryana – 122002
                      </Typography>
                    </div>

                    <div className=" flex flex-col gap-[8px] ">
                      <div className=" flex items-center gap-[12px]  mt-[28px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9991 0C6.00516 0 2.75586 3.2493 2.75586 7.2432C2.75586 12.1998 9.23785 19.4763 9.51383 19.7836C9.77305 20.0723 10.2256 20.0718 10.4844 19.7836C10.7604 19.4763 17.2423 12.1998 17.2423 7.2432C17.2423 3.2493 13.993 0 9.9991 0ZM9.9991 10.8875C7.98965 10.8875 6.35488 9.25266 6.35488 7.2432C6.35488 5.23375 7.98969 3.59898 9.9991 3.59898C12.0085 3.59898 13.6433 5.23379 13.6433 7.24324C13.6433 9.2527 12.0085 10.8875 9.9991 10.8875Z"
                            fill="white"
                          />
                        </svg>
                        <Typography
                          variant="header-2"
                          className=" !text-white  "
                        >
                          Bengaluru
                        </Typography>
                      </div>

                      <Typography variant="para-2" className="!text-white  ">
                        KustomWork, 1st Floor, No.129, 5th Main Rd, 3rd Phase,
                        J.P. Nagar, Bengaluru, Karnataka – 560078
                      </Typography>
                    </div>
                  </div>
                  <Image
                    src="https://ik.imagekit.io/flyde/map.png"
                    width={200}
                    height={200}
                    className=" relative w-full h-auto  "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--color-accent)]">
          <Container
            variant="sectionSp1"
            className=" border-b md:border-b-0 md:border-r border-white flex items-center justify-center gap-[16px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_119_49793)">
                <path
                  d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_119_49793">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Typography variant="header-2" className="!text-white">
              +91-124-4389533
            </Typography>
          </Container>

          <Container
            variant="sectionSp1"
            className=" flex items-center justify-center gap-[16px]  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_119_49800)">
                <path
                  d="M11.6714 12.2536C11.1739 12.5853 10.5959 12.7606 10 12.7606C9.40414 12.7606 8.82617 12.5853 8.32859 12.2536L0.133164 6.78977C0.087922 6.75952 0.0435173 6.72803 0 6.69535L0 15.6484C0 16.6748 0.833008 17.4895 1.84113 17.4895H18.1588C19.1853 17.4895 20 16.6565 20 15.6484V6.69531C19.9564 6.72808 19.9119 6.75963 19.8665 6.78992L11.6714 12.2536Z"
                  fill="white"
                />
                <path
                  d="M0.783204 5.81487L8.97863 11.2787C9.28887 11.4855 9.64441 11.5889 9.99996 11.5889C10.3555 11.5889 10.7111 11.4855 11.0214 11.2787L19.2168 5.81487C19.7072 5.48812 20 4.94124 20 4.35101C20 3.33612 19.1743 2.5105 18.1595 2.5105H1.84051C0.825665 2.51054 9.68791e-07 3.33616 9.68791e-07 4.35198C-0.000303273 4.64152 0.0710559 4.92662 0.207714 5.18188C0.344372 5.43713 0.54208 5.6546 0.783204 5.81487Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_119_49800">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Typography variant="header-2" className="!text-white">
              contact@kaizenlaw.in
            </Typography>
          </Container>
        </div>
        <Container
          variant="sectionSp1"
          className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between "
        >
          <Typography variant="header-5" className="!text-white">
            Ready to discuss your <br /> project with us?
          </Typography>

          <button className=" md:px-[32px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
            Schedule A Consulation →
          </button>
        </Container>
        <ProfileHeader />
        <ProfileAboutSection />
        <Container
          variant="sectionSp3"
          className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between "
        >
          <Typography variant="display-3">Insights</Typography>
          <Typography variant="para-2" className="w-full md:w-[533px]">
            Founded in August 2022, Kaizen Law was established with a clear
            purpose — to build a focused corporate and transaction advisory firm
            that combines technical excellence with agility and personal
            accountability.
          </Typography>
        </Container>
        <div className="md:py-[12px] py-0 md:px-[100px] px-0 w-full borderInsightFilter border">
          {/* Desktop Layout (unchanged) */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Button variant="primary" className="!px-[36px] !py-[12px]">
              Filter
            </Button>

            <div className="!px-[36px] !py-[12px] border border-[var(--color-accent)] rounded-[500px] !w-[463px]">
              <input
                type="text"
                className="text-[var(--color-accent)] focus:outline-none text-center w-full"
                placeholder="Search"
              />
            </div>

            <Button variant="primary" className="!px-[36px] !py-[12px]">
              Filter
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col">
            {/* Row 1 - Search */}
            <div className="px-[24px] py-[12px] border-b border-[var(--color-accent)]">
              <div className="border border-[var(--color-accent)] rounded-[500px] px-[16px] py-[10px]">
                <input
                  type="text"
                  className="text-[var(--color-accent)] focus:outline-none text-center w-full"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Row 2 - Filters */}
            <div className="px-[24px] py-[12px] flex gap-[12px]">
              <Button variant="primary" className="w-full !py-[12px]">
                Filter
              </Button>
              <Button variant="primary" className="w-full !py-[12px]">
                Filter
              </Button>
            </div>
          </div>
        </div>
        <Container variant="header" className=" !py-[20px] ">
          <section className="hero-section  !h-[558px]">
            <Image
              src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
              alt="Kaizen Hero"
              fill
              className="hero-background"
              priority
            />

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content right-[50px]">
              <div className="flex flex-col gap-[16px]">
                <div className=" px-[36px] py-[8px] border border-white !w-fit rounded-[500px]  ">
                  <Typography variant="para-3" className=" !text-white  ">
                    Category
                  </Typography>
                </div>

                <Typography variant="header-hero" colorVariant="white">
                  The word Kaizen means continuous improvement.
                </Typography>

                <Typography
                  delay={0.6}
                  variant="para-2"
                  colorVariant="white"
                  className="lg:w-[370px] w-full flex-shrink-0"
                >
                  Kaizen Law is a corporate and transaction-focused law firm
                  advising businesses, founders, and investors across M&A,
                  private equity, capital markets, and general counsel mandates.
                </Typography>

                <Typography variant="button" className=" dateHeroIn  ">
                  4 min | 14/09/2024
                </Typography>
              </div>
            </div>
          </section>
        </Container>
        <BlogGridSection
          variant="stack"
          posts={[
            {
              image: "https://ik.imagekit.io/demo/img/image1.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image2.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image3.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image4.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
            {
              image: "https://ik.imagekit.io/demo/img/image5.jpg",
              category: "Category",
              title:
                "Our philosophy focuses on refining strategy at every stage of a mandate to achieve clarity.",
              readTime: "4 min",
              date: "14/09/2024",
            },
          ]}
        />
        <Container variant="primarySpacing" className=" bg-[#0A193A] ">
          <div className=" flex flex-col md:gap-[100px] gap-[80px] ">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[96px] gap-[36px]">
              <Typography variant="header-6" className="!text-white w-[250px]">
                End-to-End <br /> Services
              </Typography>

              <Typography variant="para-2" className="!text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </div>

            {/* List */}
            <div className="flex md:gap-[16px] gap-[2px] flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:items-center md:justify-between border-t border-white/30 py-[38px]"
                >
                  {/* Content */}
                  <div className="flex md:flex-row flex-col md:gap-[96px] gap-[16px]">
                    <div className="flex justify-between items-center md:block md:w-auto w-full">
                      <Typography
                        variant="header-1"
                        className="!text-white w-[250px]"
                      >
                        {item.title}
                      </Typography>

                      <div className="md:hidden w-[30px] h-[30px]">
                        <img
                          src={item.icon}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <Typography
                      variant="para-2"
                      className="!text-white w-[316px]"
                    >
                      {item.desc}
                    </Typography>
                  </div>

                  <div className="hidden md:block md:w-[45px] md:h-[45px]">
                    <img
                      src={item.icon}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}

              <div className="border-t border-white/30"></div>
            </div>
          </div>
        </Container>
        <EndToEndServices />
        {/* <PEVCPracticeSection
          cardsData={careerPractice.cardsData}
          topContent={careerPractice.topContent}
          careersPage={false}
          startupPage={true}
        /> */}
        <section className="hero-section relative">
          {/* Background Image */}
          <Image
            src="https://ik.imagekit.io/flyde/092602fd4efb882635be1804e4931e7091fb5303.jpg"
            alt="Hero"
            fill
            className="hero-background"
            priority
          />

          {/* Overlay */}
          <div className="hero-overlay"></div>

          {/* Content */}
          <div className="hero-content  text-left w-full overflow-hidden">
            <div className="flex flex-col">
              <div className="flex flex-col !pr-[48px] w-full  ">
                <Typography
                  variant="display-3"
                  colorVariant="white"
                  className="w-full"
                >
                  Careers
                </Typography>

                <Typography
                  variant="para-2"
                  className="!text-white md:mt-[15px] mt-[12px] md:!w-[668px] !w-full max-w-full "
                >
                  Unlock Your Potential at Codeandcore: Join a community of
                  brilliant minds, where creativity meets ambition. Together,
                  let's chart a course for success in your career journey.
                </Typography>

                <div className="mt-[26px] flex flex-col md:flex-row items-center gap-[16px]">
                  <Button variant="primary" className="w-full md:w-auto">
                    Primary Button
                  </Button>

                  <Button variant="white" className="w-full md:w-auto">
                    White Button
                  </Button>
                </div>
              </div>
              {/* Icons */}
              <div className="w-full overflow-x-auto md:overflow-hidden mt-[86px] md:mt-[156px] md:pr-[200px] pr-[24px]">
                <div className="flex w-max md:w-full gap-[48px] md:gap-0 md:justify-between">
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/a552f92c9f961f6ce5a1f585f3aad0154cb1b104.png"
                    alt="logo"
                    className="w-[152px] h-[58px] object-contain flex-shrink-0"
                  />
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/2bb225baf628900ed5c4ac8b54cda265c1ff6070.png"
                    alt="logo"
                    className="w-[152px] h-[58px] object-contain flex-shrink-0"
                  />
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/a552f92c9f961f6ce5a1f585f3aad0154cb1b104.png"
                    alt="logo"
                    className="w-[152px] h-[58px] object-contain flex-shrink-0"
                  />
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/2bb225baf628900ed5c4ac8b54cda265c1ff6070.png"
                    alt="logo"
                    className="w-[152px] h-[58px] object-contain flex-shrink-0"
                  />
                  <img
                    src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/a552f92c9f961f6ce5a1f585f3aad0154cb1b104.png"
                    alt="logo"
                    className="w-[152px] h-[58px] object-contain flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container
          variant="primarySpacing"
          className="bg-[var(--color-background-1)] flex md:flex-row flex-col items-start md:gap-[303px] gap-[16px]"
        >
          <Typography variant="para-1" className=" shrink-0 ">
            Job Openings
          </Typography>
          <Typography variant="para-2">
            Founded in August 2022, Kaizen Law was established with a clear
            purpose — to build a focused corporate and transaction advisory firm
            that combines technical excellence with agility and personal
            accountability.
          </Typography>
        </Container>
        <div className="md:py-[12px] py-0 md:px-[100px] px-0 w-full borderInsightFilter border bg-[var(--color-background-1)]">
          {/* Desktop Layout (unchanged) */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Button variant="primary" className="!px-[36px] !py-[12px]">
              Filter
            </Button>

            <div className="!px-[36px] !py-[12px] border border-[var(--color-accent)] rounded-[500px] !w-[463px]">
              <input
                type="text"
                className="text-[var(--color-accent)] focus:outline-none text-center w-full"
                placeholder="Search"
              />
            </div>

            <Button variant="primary" className="!px-[36px] !py-[12px]">
              Filter
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col">
            {/* Row 1 - Search */}
            <div className="px-[24px] py-[12px] border-b border-[var(--color-accent)]">
              <div className="border border-[var(--color-accent)] rounded-[500px] px-[16px] py-[10px]">
                <input
                  type="text"
                  className="text-[var(--color-accent)] focus:outline-none text-center w-full"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Row 2 - Filters */}
            <div className="px-[24px] py-[12px] flex gap-[12px]">
              <Button variant="primary" className="w-full !py-[12px]">
                Filter
              </Button>
              <Button variant="primary" className="w-full !py-[12px]">
                Filter
              </Button>
            </div>
          </div>
        </div>
        <div className="md:px-[100px] px-[24px] md:pt-[40px] pt-[32px] md:pb-[100px] pb-[64px] bg-[var(--color-background-1)] flex flex-col gap-[16px] ">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="md:px-[100px] px-[24px] py-[60px] flex justify-center !bg-[var(--color-background-2)]">
          <Typography
            variant="para-2"
            className="!text-white text-center md:w-[734px] w-full"
          >
            “Didn’t find any position fit for you? No worries please drop your
            resume at below mail or contact number and our HR will going to
            connect with you.”
          </Typography>
        </div>
        <div className="bg-[#fffff] h-full text-[#1A1A1A]">
          {/* Header */}
          <Container
            variant="sectionSp3"
            className="md:!pt-[156px] !pt-[160px] flex md:flex-row flex-col items-start gap-[16px] md:justify-between border-b border-[#D9D4CC]"
          >
            <Typography variant="display-3">Policies</Typography>

            <Typography variant="para-2" className="w-full md:w-[563px]">
              Founded in August 2022, Kaizen Law was established with a clear
              purpose — to build a focused corporate and transaction advisory
              firm that combines technical excellence with agility and personal
              accountability.
            </Typography>
          </Container>

          {/* Content */}
          <Container className="policy-desc ">
            {/* Sidebar */}
            <div className="md:w-[307px] w-full md:h-[263px] h-full  bg-[#F7F4EB] md:px-[26px]  px-[16px] md:py-[26] py-[20px] flex flex-col md:gap-[32px] gap-[16px]">
              <Typography variant={isMobile ? "para-2" : "para-1"}>
                List
              </Typography>

              <ul className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-[16px]">
                <Typography
                  variant={isMobile ? "para-3" : "para-2"}
                  onClick={() => setActiveTab("disclosures")}
                  className={`cursor-pointer order-1 md:order-none ${
                    activeTab === "disclosures"
                      ? "text-[#231F20]"
                      : "!text-[#231F20]/50"
                  }`}
                >
                  Regulatory Disclosures
                </Typography>

                <Typography
                  variant={isMobile ? "para-3" : "para-2"}
                  onClick={() => setActiveTab("disclaimer")}
                  className={`cursor-pointer order-3 md:order-none ${
                    activeTab === "disclaimer"
                      ? "text-[#231F20]"
                      : "!text-[#231F20]/50"
                  }`}
                >
                  Disclaimer
                </Typography>

                <Typography
                  variant={isMobile ? "para-3" : "para-2"}
                  onClick={() => setActiveTab("terms")}
                  className={`cursor-pointer order-4 md:order-none ${
                    activeTab === "terms"
                      ? "text-[#231F20]"
                      : "!text-[#231F20]/50"
                  }`}
                >
                  Terms of Use
                </Typography>

                <Typography
                  variant={isMobile ? "para-3" : "para-2"}
                  onClick={() => setActiveTab("privacy")}
                  className={`cursor-pointer order-2 md:order-none ${
                    activeTab === "privacy"
                      ? "text-[#231F20]"
                      : "!text-[#231F20]/50"
                  }`}
                >
                  Privacy Policy
                </Typography>
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-[700px]">
              <Typography
                variant={isMobile ? "display-3" : "header-hero"}
                className=" mb-[16px] "
              >
                {datas.title}
              </Typography>
              <Typography
                variant="para-2"
                className=" !text-[#231F20] mb-[56px]"
              >
                {datas.date}
              </Typography>

              <div className="space-y-[56px] ">
                {datas.sections?.map((section, i) => (
                  <div key={i}>
                    <Typography
                      variant="big-firm"
                      className=" !text-[#231F20] mb-[20px]"
                    >
                      {section.heading}
                    </Typography>

                    {section.content.map((para, idx) => (
                      <Typography
                        variant="para-2"
                        key={idx}
                        className={
                          idx !== 0 ? " !text-[#231F20] mt-[20px]" : ""
                        }
                      >
                        {para}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
