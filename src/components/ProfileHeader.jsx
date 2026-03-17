"use client";

import Link from "next/link";
import { Linkedin, Copyright } from "lucide-react";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import useTypingText from "@/hooks/useTypingTesxt";

export default function ProfileHeader() {
  /* Typing Text */
  const name = useTypingText("Harsh Kumar", 100);
  const role = useTypingText("Founding Partner", 80);

  return (
    <Container variant="sectionSp1" className="!pb-0" animate={false}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Section */}
        <div>
          {/* Name Typing */}
          <Typography variant="display-3" animate={false}>
            {name}
          </Typography>

          {/* Role Typing */}
          <Typography
            variant="header-1"
            animate={false}
            className="!text-[var(--color-accent)] mt-[16px]"
          >
            {role}
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-3 text-[#C8A26A]">
          {/* Icons */}
          <div className="flex gap-3">
            <Link
              href="/"
              className="w-9 h-9 rounded-full  flex items-center justify-center "
            >
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Frame%202147238680.png"
                size={18}
              />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-9 h-9 rounded-full  hover:bg-[#C8A26A] "
            >
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Frame%202147238682.png"
                size={18}
              />
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm md:text-right text-left leading-relaxed flex flex-col gap-[10px]">
            <Typography
              variant="para-2"
              animate={false}
              className="!text-[var(--color-accent)]"
            >
              +91-9999191620
            </Typography>

            <Typography
              variant="para-2"
              animate={false}
              className="!text-[var(--color-accent)]"
            >
              harsh.kumar@kaizenlaw.in
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
