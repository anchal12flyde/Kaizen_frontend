"use client";

import Link from "next/link";
import { Linkedin, Copyright } from "lucide-react";
import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";

export default function ProfileHeader() {
  return (
    <Container variant="sectionSp1" className= " !pb-0 ">
      <div className="  flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Section */}
        <div>
          <Typography variant="display-3">Harsh Kumar </Typography>

          <Typography
            variant="header-1"
            className=" !text-[var(--color-accent)] mt-[16px] "
          >
            Founding Partner
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-3 text-[#C8A26A]">
          {/* Icons */}
          <div className="flex gap-3">
            <Link
              href="/"
              className="w-9 h-9 rounded-full border border-[#C8A26A] flex items-center justify-center hover:bg-[#C8A26A] hover:text-white transition"
            >
              <Copyright size={18} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-9 h-9 rounded-full border border-[#C8A26A] flex items-center justify-center hover:bg-[#C8A26A] hover:text-white transition"
            >
              <Linkedin size={18} />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-right leading-relaxed flex flex-col gap-[10px] ">
            <Typography
              variant="para-2"
              className=" !text-[var(--color-accent)] "
            >
              +91-9999191620
            </Typography>

            <Typography variant="para-2" className= " !text-[var(--color-accent)] " >harsh.kumar@kaizenlaw.in</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
