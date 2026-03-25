"use client";

import Link from "next/link";
import { Linkedin, Copyright } from "lucide-react";

import { Container } from "./ui-kit/spacing";
import Typography from "./ui-kit/typography";
import useTypingText from "@/hooks/useTypingTesxt";
import data from "@/data/profile.json";

export default function ProfileHeader() {
  /* Typing Text */
  const { profileHeader } = data;

  const { name, role, phone, email, socials } = profileHeader;

  /* Typing */
  const typedName = useTypingText(name, 100);
  const typedRole = useTypingText(role, 80);
  return (
    <Container variant="sectionSp1" className="!pb-0" animate={false}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Section */}
        <div>
          {/* Name Typing */}
          <div>
            <Typography variant="display-3">{typedName}</Typography>

            <Typography
              variant="header-1"
              className="!text-[var(--color-accent)] mt-[16px]"
            >
              {typedRole}
            </Typography>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-3 text-[#C8A26A]">
          {/* Icons */}
          <div className="flex gap-3">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target={item.external ? "_blank" : "_self"}
                className="w-[46] h-[46] flex items-center justify-center "
              >
                <img src={item.icon} className="w-full h-full" />
              </Link>
            ))}
          </div>
          {/* Contact */}
          <div className="text-sm md:text-right text-left leading-relaxed flex flex-col gap-[10px]">
            <Typography
              variant="para-2"
              animate={false}
              className="!text-[var(--color-accent)]"
            >
              {phone}
            </Typography>

            <Typography
              variant="para-2"
              animate={false}
              className="!text-[var(--color-accent)]"
            >
              {email}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
