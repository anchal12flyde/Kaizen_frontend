"use client";

import { Download, Share2, MapPin, Briefcase } from "lucide-react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function JobCard({ job }) {
  return (
    <div className="borderCareersCard p-[36px]  ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className=" flex flex-col gap-[16px] ">
          <Typography variant="para-1" className="">
            {job.title}
          </Typography>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-[36px] text-sm opacity-80">
            <div className="flex items-center gap-[8px]">
              <Briefcase size={16} />
              <Typography variant="para-2">{job.company}</Typography>
            </div>

            <div className="flex items-center gap-[8px]">
              <MapPin size={16} />
              <Typography variant="para-2">{job.location}</Typography>
            </div>

            {job.employmentType?.map((type, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <Typography variant="para-2">{type}</Typography>
              </div>
            ))}
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
        <Typography variant="header-2" className="mb-[16px]  ">
          Preferred Qualifications:
        </Typography>

        <ul className="mt-[16px] list-disc pl-[20px] space-y-[8px]">
          {job.qualifications?.map((item, index) => (
            <li key={index}>
              <Typography variant="para-2">{item}</Typography>
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
