"use client";
import { useEffect, useState } from "react";
import { Download, Share2, MapPin, Briefcase } from "lucide-react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function JobCard({ job }) {
  const [isMobile, setIsMobile] = useState(false);
   
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className="borderCareersCard py-[36px] md:px-[36px] px-[12px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className=" flex flex-col gap-[16px] ">
          <Typography variant="para-1" className="">
            {job.title}
          </Typography>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-x-[46px] gap-y-[6px] md:grid-cols-4 md:gap-[36px]">
            <div className="flex items-center gap-[8px]">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Icon%20(15).png"
                className="h-[14px] w-[14px]"
              />
              <Typography
                variant={isMobile ? "para-3" : "para-2"}
                className="!text-[#231F20] "
              >
                {job.company}
              </Typography>
            </div>

            <div className="flex items-center gap-[8px]">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%206.png"
                className="h-[14px] w-[11px]"
              />
              <Typography
                variant={isMobile ? "para-3" : "para-2"}
                className="!text-[#231F20] w-[80px]"
              >
                {job.location}
              </Typography>
            </div>

            <div className="flex items-center gap-[8px]">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%207.png"
                className="h-[14px] w-[14px]"
              />
              <Typography
                variant={isMobile ? "para-3" : "para-2"}
                className="!text-[#231F20] w-[80px]"
              >
                {job.type1}
              </Typography>
            </div>

            <div className="flex items-center gap-[8px]">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Frame%20(4).png"
                className="h-[14px] w-[14px]"
              />
              <Typography
                variant={isMobile ? "para-3" : "para-2"}
                className="!text-[#231F20] "
              >
                {job.type2}
              </Typography>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 opacity-70">
          <Download size={18} className="cursor-pointer" />
          <Share2 size={18} className="cursor-pointer" />
        </div>
      </div>

      {/* Qualifications */}
      {/* Qualifications */}
      <div className="mt-[46px]">
        <Typography variant="header-4" className="mb-[16px]  !text-[#231F20]">
          Preferred Qualifications:
        </Typography>

        <ul className="mt-[16px] list-disc pl-[20px] space-y-[8px]">
          {job.qualifications?.map((item, index) => (
            <li key={index}>
              <Typography variant="para-2" className="!text-[#231F20]">
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-[36px] ">
        <button className="bg-[#C5A46D] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
          {job.ctaText}
        </button>
      </div>
    </div>
  );
}
