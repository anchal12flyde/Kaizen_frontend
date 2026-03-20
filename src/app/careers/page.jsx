import AboutHeroSection from "@/components/abouthero";
import JobCard from "@/components/jobCard";
import PEVCPracticeSection from "@/components/PEVCPractiseSection";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Careers() {
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
  const data = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(18).png",
    },
  ];
  const topContent = {
    title: "Perk And Benefits",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  return (
    <div className="overflow-x-hidden">
      <Header />
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
      <PEVCPracticeSection
        cardsData={data}
        topContent={topContent}
        careersPage={false}
        startupPage={true}
      />
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

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--color-background-2)] border-t border-white  ">
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

      <Footer />
    </div>
  );
}
