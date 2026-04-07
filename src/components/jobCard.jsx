"use client";
import { useEffect, useState } from "react";
import { Download, Share2, MapPin, Briefcase } from "lucide-react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
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

  // 📥 DOWNLOAD PDF
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(job.title, 10, 20);

    doc.setFontSize(12);
    doc.text(`Company: ${job.company}`, 10, 35);
    doc.text(`Location: ${job.location}`, 10, 45);
    doc.text(`Type: ${job.type}`, 10, 55);
    doc.text(`Mode: ${job.mode}`, 10, 65);

    doc.text("Preferred Qualifications:", 10, 80);

    job.qualifications?.forEach((q, i) => {
      doc.text(`• ${q}`, 10, 90 + i * 10);
    });

    doc.save(`${job.title}.pdf`);
  };

  // 🔗 SHARE
  const handleShare = async () => {
    const shareData = {
      title: job.title,
      text: `Check out this job: ${job.title}`,
      url: window.location.href, // or dynamic job URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData); // mobile native share
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };
  return (
    <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="borderCareersCard py-[36px] md:px-[36px] px-[12px]"
  >
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
                {job.type}
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
                {job.mode}
              </Typography>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 opacity-70">
          <Download
            size={18}
            className="cursor-pointer"
            onClick={handleDownload}
          />

          <Share2 size={18} className="cursor-pointer" onClick={handleShare} />
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
    </motion.div>
  );
}
