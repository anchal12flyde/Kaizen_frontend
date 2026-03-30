"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
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
    { name: "Sectors", href: "/sectors" },
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
        <Link
          href="/"
          className="flex-shrink-0"
        
        >
          <Image
            src={lightLogo}
            alt="Kaizen"
            width={146.23}
            height={31.11}
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-link-container hidden md:flex">
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
                    className={`transition-colors ${
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
                    className="absolute -left-[10px] top-full mt-2 min-w-[181px]
            bg-[#0A193AF2] shadow-[1px_0px_8px_1px_#00000033]
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300 z-50"
                  >
                    {link.subLinks.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={(e) => handleLinkClick(sub.name, sub.href, e)}
                        className="block px-[10px] py-[16px] hover:bg-white/10"
                      >
                        <p
                          className={`transition-colors sublistphone  ${
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
          className="md:hidden flex flex-col gap-[4px]"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
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
        <div className="max-w-[var(--layout-max-width)] mx-auto w-full">
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
        className={`fixed inset-0 !z-[1000] bg-[var(--color-accent)]
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
          <div className=" flex items-center gap-[7px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
            >
              <path
                d="M1.28998 22.77C0.449978 20.92 0 18.89 0 16.88V0H27.03L7.56 17.15L7.53 17.18L6.69998 17.91L6.73999 6.06H9.06L9.00998 12.77L20.86 2.32001H2.31998V16.87C2.31998 18.32 2.58999 19.75 3.10999 21.12L1.28 22.7599L1.28998 22.77Z"
                fill="white"
              />
              <path
                d="M14.2392 31.1198C11.1092 31.1198 8.01923 30.0697 5.54922 28.1597C5.21922 27.9097 4.89921 27.6397 4.59921 27.3597C3.99921 26.8097 3.44922 26.1997 2.94922 25.5497L14.7692 15.1298L21.0392 21.1797C20.2892 22.0897 20.1192 22.2997 19.5592 22.9697L14.7492 18.2498L6.25922 25.7297L6.72922 26.1198C6.80922 26.1798 6.88923 26.2498 6.95923 26.3098C9.02923 27.9098 11.6092 28.7897 14.2292 28.7897C16.8492 28.7897 19.4292 27.9098 21.4992 26.3098C21.6992 26.1498 21.8992 25.9897 22.0892 25.8297C22.9792 25.0497 23.7392 24.1398 24.3592 23.1198C24.5592 22.7998 24.7392 22.4698 24.9092 22.1298C25.7092 20.4898 26.1392 18.6798 26.1392 16.8798V5.24976L28.4692 3.21973V16.8798C28.4692 21.2698 26.3992 25.4797 22.9192 28.1597C21.6592 29.1297 20.2592 29.8798 18.7592 30.3798C17.2992 30.8698 15.7692 31.1198 14.2192 31.1198H14.2392Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="111"
              height="15"
              viewBox="0 0 111 15"
              fill="none"
            >
              <path
                d="M8.53998 5.81995L13.58 12.1299C14.29 13.0199 14.9 13.6199 15.42 13.9399C15.79 14.1699 16.19 14.28 16.6 14.28V14.67H9.13998V14.28C9.60998 14.24 9.91999 14.16 10.05 14.06C10.19 13.95 10.26 13.82 10.26 13.67C10.26 13.37 9.93998 12.82 9.28998 12L6 7.87L5.47 8.31V12.22C5.47 12.97 5.50998 13.43 5.59998 13.61C5.68998 13.79 5.85 13.95 6.09 14.08C6.33 14.21 6.70999 14.28 7.23999 14.28V14.67H0.00997925V14.28H0.48999C0.90999 14.28 1.23999 14.21 1.48999 14.06C1.66999 13.96 1.81 13.79 1.91 13.55C1.99 13.38 2.03 12.94 2.03 12.22V2.78998C2.03 2.05998 1.99 1.59998 1.91 1.41998C1.83 1.23998 1.68 1.07994 1.44 0.939941C1.2 0.799941 0.88998 0.72998 0.47998 0.72998H0V0.339966H7.12997V0.72998C6.63997 0.72998 6.26999 0.799941 6.01999 0.939941C5.83999 1.03994 5.69 1.19994 5.59 1.43994C5.51 1.61994 5.45999 2.06998 5.45999 2.78998V7.25L10.77 2.94995C11.51 2.34995 11.88 1.86995 11.88 1.50995C11.88 1.23995 11.73 1.02994 11.43 0.879944C11.28 0.799944 10.89 0.74998 10.28 0.72998V0.339966H15.87V0.72998C15.37 0.76998 14.98 0.86 14.69 1C14.4 1.14 13.75 1.62996 12.72 2.45996L8.51999 5.81995H8.53998Z"
                fill="white"
              />
              <path
                d="M22.5401 13.21C21.3401 14.27 20.2501 14.8101 19.3001 14.8101C18.7401 14.8101 18.2701 14.63 17.8901 14.26C17.5201 13.89 17.3301 13.4301 17.3301 12.8701C17.3301 12.1201 17.6501 11.44 18.3001 10.84C18.9501 10.24 20.3601 9.44 22.5401 8.44V7.45001C22.5401 6.70001 22.5001 6.23004 22.4201 6.04004C22.3401 5.85004 22.1901 5.68003 21.9601 5.53003C21.7301 5.39003 21.4801 5.31006 21.2001 5.31006C20.7401 5.31006 20.3701 5.41006 20.0701 5.62006C19.8901 5.75006 19.8001 5.89006 19.8001 6.06006C19.8001 6.21006 19.9001 6.39005 20.1001 6.61005C20.3701 6.91005 20.5001 7.21005 20.5001 7.49005C20.5001 7.84005 20.3701 8.13006 20.1101 8.37006C19.8501 8.61006 19.5201 8.73004 19.1001 8.73004C18.6601 8.73004 18.2801 8.60002 17.9901 8.33002C17.7001 8.06002 17.5401 7.75001 17.5401 7.39001C17.5401 6.88001 17.7401 6.4 18.1401 5.94C18.5401 5.48 19.1001 5.12 19.8201 4.88C20.5401 4.63 21.2901 4.51001 22.0601 4.51001C23.0001 4.51001 23.7401 4.71005 24.2801 5.11005C24.8201 5.51005 25.1801 5.94002 25.3401 6.40002C25.4401 6.70002 25.4901 7.38 25.4901 8.44V12.28C25.4901 12.73 25.5101 13.01 25.5401 13.13C25.5801 13.25 25.6301 13.33 25.7001 13.39C25.7701 13.45 25.8501 13.47 25.9401 13.47C26.1201 13.47 26.3101 13.34 26.5001 13.08L26.8201 13.33C26.4701 13.85 26.1001 14.23 25.7301 14.47C25.3501 14.71 24.9301 14.82 24.4501 14.82C23.8901 14.82 23.4501 14.69 23.1301 14.42C22.8101 14.16 22.6201 13.76 22.5501 13.22L22.5401 13.21ZM22.5401 12.44V9.13C21.6901 9.63 21.0501 10.1701 20.6401 10.7401C20.3701 11.1201 20.2301 11.5 20.2301 11.89C20.2301 12.21 20.3501 12.5001 20.5801 12.7501C20.7601 12.9401 21.0001 13.04 21.3201 13.04C21.6701 13.04 22.0801 12.84 22.5501 12.45L22.5401 12.44Z"
                fill="white"
              />
              <path
                d="M31.7594 4.78998V12.62C31.7594 13.32 31.8394 13.76 31.9994 13.96C32.1594 14.15 32.4794 14.26 32.9494 14.29V14.67H27.6094V14.29C28.0494 14.28 28.3694 14.15 28.5794 13.91C28.7194 13.75 28.7894 13.32 28.7894 12.62V6.84998C28.7894 6.14998 28.7094 5.70995 28.5494 5.50995C28.3894 5.31995 28.0694 5.20999 27.6094 5.17999V4.78998H31.7494H31.7594ZM30.2794 0C30.7394 0 31.1294 0.15998 31.4394 0.47998C31.7594 0.79998 31.9194 1.18995 31.9194 1.63995C31.9194 2.08995 31.7594 2.46998 31.4394 2.78998C31.1194 3.10998 30.7294 3.26996 30.2794 3.26996C29.8294 3.26996 29.4494 3.10998 29.1294 2.78998C28.8094 2.46998 28.6494 2.08995 28.6494 1.63995C28.6494 1.18995 28.8094 0.79998 29.1294 0.47998C29.4494 0.15998 29.8294 0 30.2794 0Z"
                fill="white"
              />
              <path
                d="M42.0101 14.67H33.4102V14.44L38.8401 5.44H37.2601C36.5801 5.44 36.0901 5.50006 35.7901 5.62006C35.4901 5.74006 35.2501 5.94002 35.0701 6.21002C34.8901 6.48002 34.7002 6.97003 34.5002 7.66003H34.1301V4.79004H42.4501V5.08002L37.0602 14.0001H37.7401C39.0901 14.0001 40.0701 13.81 40.6701 13.42C41.2701 13.03 41.7201 12.32 42.0201 11.3H42.3201L42.0201 14.6801L42.0101 14.67Z"
                fill="white"
              />
              <path
                d="M51.8891 9.37H46.4691C46.5291 10.68 46.8791 11.72 47.5191 12.48C48.0091 13.06 48.5891 13.36 49.2691 13.36C49.6891 13.36 50.0791 13.2399 50.4191 13.0099C50.7691 12.7699 51.1391 12.35 51.5291 11.74L51.8891 11.97C51.3491 13.06 50.7591 13.84 50.1091 14.29C49.4591 14.74 48.7091 14.97 47.8591 14.97C46.3891 14.97 45.2891 14.41 44.5291 13.28C43.9191 12.37 43.6191 11.24 43.6191 9.89996C43.6191 8.24996 44.0691 6.93996 44.9591 5.95996C45.8491 4.97996 46.8991 4.5 48.0891 4.5C49.0891 4.5 49.9591 4.90998 50.6891 5.72998C51.4291 6.54998 51.8191 7.76994 51.8791 9.37994L51.8891 9.37ZM49.2891 8.65997C49.2891 7.52997 49.2291 6.74995 49.1091 6.31995C48.9891 5.89995 48.7891 5.57999 48.5291 5.35999C48.3791 5.22999 48.1791 5.16998 47.9391 5.16998C47.5691 5.16998 47.2691 5.34996 47.0391 5.70996C46.6191 6.33996 46.4191 7.19998 46.4191 8.28998V8.65997H49.2891Z"
                fill="white"
              />
              <path
                d="M57.1701 4.79022V6.07019C57.6801 5.52019 58.1601 5.12024 58.6301 4.87024C59.1001 4.62024 59.5901 4.49023 60.1301 4.49023C60.7701 4.49023 61.3001 4.6702 61.7301 5.0202C62.1501 5.3802 62.4301 5.82022 62.5801 6.35022C62.6901 6.75022 62.7502 7.52022 62.7502 8.66022V12.5102C62.7502 13.2702 62.8201 13.7402 62.9601 13.9302C63.1001 14.1202 63.3801 14.2302 63.8201 14.2802V14.6602H58.8201V14.2802C59.1901 14.2302 59.4601 14.0802 59.6201 13.8202C59.7301 13.6402 59.7901 13.2102 59.7901 12.5102V8.11023C59.7901 7.30023 59.7602 6.7902 59.6902 6.5802C59.6302 6.3702 59.5201 6.20021 59.3701 6.09021C59.2201 5.97021 59.0501 5.92023 58.8701 5.92023C58.2601 5.92023 57.7001 6.35021 57.1801 7.22021V12.5102C57.1801 13.2502 57.2501 13.7202 57.3901 13.9202C57.5301 14.1202 57.7802 14.2402 58.1602 14.2902V14.6702H53.1602V14.2902C53.5802 14.2502 53.8701 14.1102 54.0501 13.8902C54.1701 13.7402 54.2301 13.2802 54.2301 12.5202V6.94019C54.2301 6.19019 54.1601 5.73023 54.0201 5.55023C53.8801 5.37023 53.6002 5.25019 53.1602 5.19019V4.80023H57.1902L57.1701 4.79022Z"
                fill="white"
              />
              <path
                d="M83.5102 9.63995L82.9702 14.67H70.2502V14.28H70.7302C71.1502 14.28 71.4802 14.21 71.7302 14.06C71.9102 13.96 72.0502 13.79 72.1502 13.55C72.2302 13.38 72.2702 12.94 72.2702 12.22V2.78998C72.2702 2.05998 72.2302 1.59998 72.1502 1.41998C72.0702 1.23998 71.9202 1.07994 71.6802 0.939941C71.4402 0.799941 71.1302 0.72998 70.7202 0.72998H70.2402V0.339966H77.8802V0.72998H77.2602C76.8402 0.72998 76.5102 0.799951 76.2602 0.949951C76.0802 1.04995 75.9302 1.21996 75.8302 1.45996C75.7502 1.62996 75.7102 2.06998 75.7102 2.78998V11.92C75.7102 12.65 75.7502 13.1199 75.8402 13.3199C75.9202 13.5199 76.0902 13.67 76.3402 13.77C76.5202 13.83 76.9402 13.87 77.6202 13.87H78.8102C79.5702 13.87 80.2002 13.74 80.7102 13.47C81.2202 13.2 81.6602 12.78 82.0302 12.2C82.4002 11.62 82.7502 10.77 83.0802 9.63995H83.5102Z"
                fill="white"
              />
              <path
                d="M90.46 13.21C89.26 14.27 88.17 14.8101 87.22 14.8101C86.66 14.8101 86.19 14.63 85.81 14.26C85.44 13.89 85.25 13.4301 85.25 12.8701C85.25 12.1201 85.57 11.44 86.22 10.84C86.87 10.24 88.28 9.44 90.46 8.44V7.45001C90.46 6.70001 90.42 6.23004 90.34 6.04004C90.26 5.85004 90.11 5.68003 89.88 5.53003C89.65 5.39003 89.4 5.31006 89.12 5.31006C88.66 5.31006 88.29 5.41006 87.99 5.62006C87.81 5.75006 87.72 5.89006 87.72 6.06006C87.72 6.21006 87.82 6.39005 88.02 6.61005C88.29 6.91005 88.42 7.21005 88.42 7.49005C88.42 7.84005 88.29 8.13006 88.03 8.37006C87.77 8.61006 87.44 8.73004 87.02 8.73004C86.58 8.73004 86.2 8.60002 85.91 8.33002C85.62 8.06002 85.46 7.75001 85.46 7.39001C85.46 6.88001 85.66 6.4 86.06 5.94C86.46 5.48 87.02 5.12 87.74 4.88C88.46 4.63 89.21 4.51001 89.98 4.51001C90.92 4.51001 91.66 4.71005 92.2 5.11005C92.74 5.51005 93.1 5.94002 93.26 6.40002C93.36 6.70002 93.41 7.38 93.41 8.44V12.28C93.41 12.73 93.43 13.01 93.46 13.13C93.5 13.25 93.55 13.33 93.62 13.39C93.69 13.45 93.77 13.47 93.86 13.47C94.04 13.47 94.23 13.34 94.42 13.08L94.74 13.33C94.39 13.85 94.02 14.23 93.65 14.47C93.27 14.71 92.85 14.82 92.37 14.82C91.81 14.82 91.37 14.69 91.05 14.42C90.73 14.16 90.54 13.76 90.47 13.22L90.46 13.21ZM90.46 12.44V9.13C89.61 9.63 88.97 10.1701 88.56 10.7401C88.29 11.1201 88.15 11.5 88.15 11.89C88.15 12.21 88.27 12.5001 88.5 12.7501C88.68 12.9401 88.92 13.04 89.24 13.04C89.59 13.04 90 12.84 90.47 12.45L90.46 12.44Z"
                fill="white"
              />
              <path
                d="M105.629 14.96L102.919 7.71002L100.269 14.96H99.7191L97.0891 7.80005C96.6991 6.71005 96.3591 6.00004 96.0891 5.67004C95.9091 5.44004 95.6491 5.28005 95.2891 5.18005V4.79004H100.279V5.18005C99.9391 5.18005 99.7091 5.23002 99.5791 5.33002C99.4491 5.43002 99.3891 5.54004 99.3891 5.67004C99.3891 5.79004 99.4991 6.15006 99.7291 6.75006L101.179 10.61L102.569 6.75006L102.459 6.50006C102.249 5.97006 102.059 5.64005 101.909 5.49005C101.749 5.35005 101.509 5.25 101.179 5.19V4.80005H106.239V5.19C105.849 5.21 105.599 5.27004 105.489 5.35004C105.379 5.44004 105.329 5.56004 105.329 5.73004C105.329 5.90004 105.429 6.23006 105.639 6.75006L107.029 10.61L108.299 7.06006C108.479 6.55006 108.569 6.21002 108.569 6.02002C108.569 5.75002 108.499 5.54004 108.369 5.42004C108.239 5.29004 107.979 5.22 107.589 5.19V4.80005H110.519V5.19C110.199 5.23 109.939 5.35003 109.749 5.53003C109.559 5.72003 109.309 6.25006 109.009 7.12006L106.239 14.97H105.639L105.629 14.96Z"
                fill="white"
              />
            </svg>
          </div>

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
          <Container
            variant="primarySpacing"
            className="flex flex-col gap-[46px] justify-center"
          >
            {HEADER_DATA.navLinks.map((link, i) => (
              <div key={i}>
                {!link.subLinks ? (
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.name, link.href, e)}
                  >
                    <Typography
                      variant="header-1"
                      className={`${
                        isParentActive(link)
                          ? "!text-black"
                          : "!text-[var(--color-para-2)]"
                      }`}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ) : (
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <Typography
                        variant="header-1"
                        className={`${
                          isActive(link.href)
                            ? "!text-[#C3A771]"
                            : "!text-white/80"
                        }`}
                      >
                        {link.name}
                      </Typography>
                    </summary>

                    <div className="mt-4 ml-4 flex flex-col gap-4">
                      {link.subLinks.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={(e) =>
                            handleLinkClick(sub.name, sub.href, e)
                          }
                        >
                          <Typography
                            variant="para-2"
                            className="!text-white/80"
                          >
                            {sub.name}
                          </Typography>
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </Container>

          {/* Footer */}
          <Container variant="header" className="!py-0">
            <Typography variant="para-3" className="!text-white">
              Kaizen Law Offices © 2025 All Rights Reserved
            </Typography>
          </Container>
        </div>
      </div>
    </>
  );
}
