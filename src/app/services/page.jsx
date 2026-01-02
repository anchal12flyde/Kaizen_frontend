import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Services() {
  const stats = [
    {
      number: "30+",
      label: "years of experience",
    },
    {
      number: "98%",
      label: "success rate in court",
    },
    {
      number: "120+",
      label: "attorneys at hand",
    },
  ];
  
  const services = [
    {
      title: "Business and Corporate Law",
      description: [
        "Business formation (LLCs, corporations, partnerships)",
        "Contract drafting and review",
        "Mergers and acquisitions",
        "Intellectual property protection",
        "Employment law and workplace policies",
        "Corporate governance",
        "Shareholder and partnership disputes",
      ],
    },

    {
      title: "Litigation and Dispute Resolution",
      description: [
        "Civil litigation",
        "Commercial litigation",
        "Arbitration and mediation",
        "Class action lawsuits",
        "Personal injury claims",
        "Product liability cases",
      ],
    },
    {
      title: "Family Law",
      description: [
        "Divorce and separation",
        "Child custody and support",
        "Prenuptial and postnuptial agreements",
        "Adoption and surrogacy",
        "Domestic violence protection",
      ],
    },
    {
      title: "Criminal Defense",
      description: [
        "DUI and traffic offenses",
        "White-collar crime defense",
        "Drug charges",
        "Assault and battery cases",
        "Expungements and record sealing",
      ],
    },
    {
      title: "Real Estate Law",
      description: [
        "Property transactions (buying, selling, leasing)",
        "Landlord-tenant disputes",
        "Zoning and land use",
        "Construction law",
        "Real estate development",
      ],
    },
    {
      title: "Immigration Law",
      description: [
        "Visa applications",
        "Green cards and citizenship",
        "Deportation defense",
        "Employment-based immigration",
       
      ],
    },
  ];
  return (
    <div>
      <Header />

      <section className="hero-section">
        <Image
          src="https://ik.imagekit.io/flyde/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg"
          alt="Hero Background"
          fill
          className="hero-background"
          priority
        />
        <div className="hero-overlay"></div>

        <div className="hero-content lg:w-[734px] w-auto  right-[24px]">
          <Typography variant="header-1" colorVariant="white">
            At Jones & Brown Legal, we are committed to exceptional service and
            successful outcomes with:
          </Typography>
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
        <Container variant="sectionSp1" className=" service-head">
          <Typography
            variant="header-1"
            colorVariant="white"
            className="md:w-[548px] w-full"
          >
            Navigating Complex Legal Landscapes? We Can Help.
          </Typography>
          <div className="services-grid">
            <div className="top-border"></div>
            {services.map((item, index) => (
              <div key={index} className="service-item">
                <Typography variant="header-3" colorVariant="white">
                  {item.title}
                </Typography>

                <Typography
                  variant="para-2"
                  colorVariant="white"
                  className="service-desc"
                >
                  {item.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="w-full h-full  ">
        <Image
          src="https://ik.imagekit.io/flyde/croissant-m3kOyzCIQvE-unsplash.jpg"
          width={1200}
          height={800}
          className="!object-cover w-full h-full  "
        />
      </div>
      <Footer />
    </div>
  );
}
