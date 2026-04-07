"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./spacing";
import { usePathname, useRouter } from "next/navigation";


const HEADER_DATA = {
  logo: "https://ik.imagekit.io/75zj3bigp/LogoLight.png",
  navLinks: [
    { name: "About Kaizen", href: "/about" },
    {
      name: "Practice Areas",
      href: "/practice-areas",
      subLinks: [
        { name: "Private Equity & Venture Capital", href: "/private-equity" },
        { name: "Mergers & Acquisitions", href: "/mergers-acquisitions" },
        { name: "Technology Law", href: "/technology-law" },
        { name: "General Counsel Services", href: "/general-counsel" },
      ],
    },
    {
      name: "Sectors",
      href: "/sectors",
      subLinks: [
        { name: " Startups & Emerging Companies", href: "/sectors/startup" },
        { name: "Financial Services & Fintech", href: "/sectors/financial" },
        {
          name: " Renewable Energy & Infrastructure",
          href: "/sectors/renewable",
        },
        { name: " Digital Businesses", href: "/sectors/digital" },
        { name: " Consumer & Retail", href: "/sectors/consumer" },
        { name: " Education & EdTech", href: "/sectors/education" },
      ],
    },
    { name: "Transaction Footprint", href: "/footprint" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },

    // { name: "Legal & Compliance ", href: "/legal-and-compliance" },
  ],
  ctaText: "Get Started",
  ctaLink: "/contact",
};

export default function Header() {
  
  const [header] = useState(HEADER_DATA);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const darkRoutes = ["/services", "/SingleSuccessStory"];
  const isBlackRoute = darkRoutes.some((route) => pathname.startsWith(route));

  const lightLogo = "https://ik.imagekit.io/75zj3bigp/Group%20logo.png";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setIsHiding(true);
        setIsScrolled(true);
      } else {
        setIsHiding(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName, href, e) => {
    e.preventDefault();

   
    setIsMenuOpen(false);

    router.push(href);
  };
  const isParentActive = (link) => {
    // direct match
    if (pathname === link.href || pathname.startsWith(link.href)) {
      return true;
    }

    // check sublinks
    if (link.subLinks) {
      return link.subLinks.some(
        (sub) => pathname === sub.href || pathname.startsWith(sub.href),
      );
    }

    return false;
  };
  const NavbarContent = ({ isFixed }) => {
    const showDark = !isFixed && isBlackRoute;

    return (
      <>
        {/* Logo */}
        <Link href="/" className="flex">
          <Image
            src={lightLogo}
            alt="Kaizen"
            width={146.23}
            height={31.11}
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-link-container hidden lg:flex">
          {header.navLinks.map((link, i) => {
            const hasSub = link.subLinks;

            return (
              <div key={i} className="relative group">
                {/* Main Link */}
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.name, link.href, e)}
                  className="nav-link"
                >
                  <Typography
                    className={`transition-colors hover:!text-[#C3A771] ${
                      isParentActive(link)
                        ? "!text-[#C3A771]"
                        : "!text-white/90"
                    }`}
                    variant="linkText"
                    animate={false}
                  >
                    {link.name}
                  </Typography>
                </Link>

                {/* Dropdown */}
                {hasSub && (
                  <div
                    className="absolute -left-[10px] top-full mt-2 min-w-[200px] w-full
            bg-[#0A193AF2] shadow-[1px_0px_8px_1px_#00000033]
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300 z-50"
                  >
                    {link.subLinks.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={(e) => handleLinkClick(sub.name, sub.href, e)}
                        className="block flex px-[10px] py-[12px] "
                      >
                        <p
                          className={`transition-colors sublistphone hover:!text-[#C3A771] ${
                            isActive(sub.href)
                              ? "!text-[#C3A771]"
                              : "!text-white/90"
                          }`}
                        >
                          {sub.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Hamburger - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden flex flex-col gap-[4px]"
          aria-label="Toggle menu"
        >
          <span className="w-[19px] h-[1.32px] bg-white/80" />
          <span className="w-[19px] h-[1.32px] bg-white/80" />
        </button>
      </>
    );
  };
const isActive = (href) => {
  return pathname === href || pathname.startsWith(href);
};
  return (
    <>
      {/* STATIC NAVBAR */}
      <div className="bg-[var(--color-background-2)]">
        <div className="mx-auto w-full">
          <Container variant="header">
            <header className="header-container-static flex items-center justify-between">
              <NavbarContent isFixed={false} />
            </header>
          </Container>
        </div>
      </div>

      {/* FIXED NAVBAR */}
      <header
        className={`header-container-fixed bg-[var(--color-background-2)] ${
          isHiding ? "header-hiding" : ""
        } ${isScrolled ? "header-scrolled" : ""}`}
      >
        <Container
          variant="header"
          className="header-fixed-content flex items-center justify-between"
          animate={false}
        >
          <NavbarContent isFixed={true} />
        </Container>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 !z-[1000] bg-[#0A193A]
        transition-all duration-700 ease-in-out flex flex-col overflow-y-auto
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Bar */}
        <Container
          variant="header"
          className="flex items-center justify-between !py-[20px] "
        >
          <Link href="/" className="flex shrink-0">
            <Image
              src={lightLogo}
              alt="Kaizen"
              width={146.23}
              height={31.11}
              className="header-logo"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl leading-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.7531 16.9532L16.9524 3.75388C17.0774 3.62885 17.1601 3.4717 17.1822 3.31699C17.2043 3.16228 17.164 3.02269 17.0703 2.92892C16.9765 2.83515 16.8369 2.79489 16.6822 2.81699C16.5275 2.83909 16.3703 2.92174 16.2453 3.04677L3.04599 16.2461C2.92097 16.3711 2.83831 16.5283 2.81621 16.683C2.79411 16.8377 2.83437 16.9773 2.92814 17.0711C3.02191 17.1648 3.1615 17.2051 3.31621 17.183C3.47092 17.1609 3.62807 17.0782 3.7531 16.9532Z"
                fill="white"
              />
              <path
                d="M3.04606 3.75383L16.2454 16.9532C16.3704 17.0782 16.5276 17.1608 16.6823 17.1829C16.837 17.205 16.9766 17.1648 17.0704 17.071C17.1641 16.9772 17.2044 16.8376 17.1823 16.6829C17.1602 16.5282 17.0775 16.3711 16.9525 16.246L3.75317 3.04672C3.62815 2.9217 3.47099 2.83904 3.31628 2.81694C3.16157 2.79484 3.02198 2.8351 2.92821 2.92887C2.83445 3.02264 2.79418 3.16223 2.81628 3.31694C2.83839 3.47165 2.92104 3.62881 3.04606 3.75383Z"
                fill="white"
              />
            </svg>
          </button>
        </Container>

        {/* Menu Links */}
        <div className=" flex flex-col justify-between flex-1 ">
          <div className="flex flex-col gap-[24px] justify-center p-[40px]">
            {HEADER_DATA.navLinks.map((link, i) => (
              <div key={i}>
                {!link.subLinks ? (
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.name, link.href, e)}
                  >
                    <Typography
                      variant="para-2"
                      className={`${
                        isParentActive(link)
                          ? "!text-[#C3A771]"
                          : "!text-[var(--color-para-2)]"
                      }`}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ) : (
                  <details className="group">
                    <summary className="cursor-pointer list-none flex items-center justify-between">
                      {/* TEXT CLICK ONLY */}
                      <span
                        onClick={(e) =>
                          handleLinkClick(link.name, link.href, e)
                        }
                        className="cursor-pointer"
                      >
                        <Typography
                          variant="para-2"
                          className={`${
                            isParentActive(link)
                              ? "!text-[#C3A771]"
                              : "!text-[#F2F2F2]"
                          }`}
                        >
                          {link.name}
                        </Typography>
                      </span>

                      {/* ARROW */}
                      <div className="transition-transform duration-300 group-hover:rotate-180 w-[10px] h-[5px]">
                        <img src="https://ik.imagekit.io/a9uxeuyhx/Vector%20(26).png" />
                      </div>
                    </summary>

                    <ul className="mt-4 ml-4 flex flex-col gap-3 list-disc">
                      {link.subLinks.map((sub, idx) => (
                        <li key={idx} className="marker:text-white/90">
                          <Link
                            href={sub.href}
                            onClick={(e) =>
                              handleLinkClick(sub.name, sub.href, e)
                            }
                          >
                            <p
                              p
                              className={`sublink ${
                                isActive(sub.href)
                                  ? "!text-[#C3A771]"
                                  : "!text-white/90"
                              }`}
                            >
                              {sub.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
