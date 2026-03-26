"use client";
import { useState } from "react";
import EndToEndServices from "@/components/endToEndServices";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import AboutHeroSection from "@/components/abouthero";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import sitecontent from "@/data/sitecontent.json";
import { getSiteContent } from "@/lib/siteContent";

export default function Sectors() {
  const sitecontent = getSiteContent(); 
  const {sector}=sitecontent;
  const { sectorHero, privateEquityHero } = sector;
  const { industries } = privateEquityHero;
    const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState("");
  
      const toggleDropdown = () => setIsOpen(!isOpen);
  
      const selectIndustry = (industry) => {
        setSelected(industry);
        setIsOpen(false);
      };
  return (
    <div>
      <Header />
      <AboutHeroSection
        bgImage={sectorHero.bgImage}
        align={sectorHero.align}
        buttons={sectorHero.buttons}
        title={
          <>
            {sectorHero.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        description={<>{sectorHero.description}</>}
      />

      <EndToEndServices />
         <Container variant="primarySpacing" className=" privateEquityHeroCopy">
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
                 className=" absolute inset-0  flex justify-center  "
               >
                 <div className=" !w-full border border-[var(--color-accent)] p-[8px]  ">
                   <div className="w-full md:w-[500px] h-full p-[36px] bg-[var(--color-accent)]  flex flex-col">
                     <Typography variant="header-5" className=" !text-white ">
                       {privateEquityHero.title}
                     </Typography>
                     <Typography
                       variant="para-2"
                       className=" !text-white mt-[26px] "
                     >
                       {privateEquityHero.description}
                     </Typography>
     
                     <div className="mt-[57px] mb-[32px] flex flex-col gap-[16px]">
                       <Typography variant="header-4" className="!text-white">
                         {privateEquityHero.subText}
                       </Typography>
                       <div className="relative w-full">
                         {/* Dropdown container when open */}
                         {isOpen ? (
                           <div
                             className="absolute  w-full shadow-md px-[8px]"
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
                               <Typography variant="para-2" className="!text-white">
                                 {selected || privateEquityHero.selectIndustryText}
                               </Typography>
     
                               <svg
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 className="text-white transition-transform duration-300"
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
                               {industries.map((industry) => (
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
                             <Typography variant="para-2" className="!text-white">
                               {selected || privateEquityHero.selectIndustryText}
                             </Typography>
     
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
                     <button className="mt-auto md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-white md:w-fit w-full text-white  text-[18px]">
                       {privateEquityHero.button.label}
                     </button>
                   </div>
                   <div></div>
                 </div>
               </Container>
             </>
           </Container>

      <Footer />
    </div>
  );
}
