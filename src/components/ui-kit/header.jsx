"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./spacing";
import { usePathname, useRouter } from "next/navigation";

/* 🔹 LOCAL HEADER DATA (API replacement) */
const HEADER_DATA = {
  logo: "https://ik.imagekit.io/75zj3bigp/LogoLight.png",
  navLinks: [
    { name: "About Kaizen", href: "/About" },
    { name: "Practice Areas", href: "/Practiceareas" },
    { name: "Sectors", href: "/Sectors" },
    { name: "Transaction Footprint", href: "/transactionfootprint" },
    { name: "Insights", href: "/insights" },
  ],
  ctaText: "Get Started",
  ctaLink: "/contact",
};

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [header] = useState(HEADER_DATA);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ added

  const pathname = usePathname();
  const router = useRouter();

  const darkRoutes = ["/services", "/SingleSuccessStory"];
  const isBlackRoute = darkRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const lightLogo = "https://ik.imagekit.io/75zj3bigp/Group%20logo.png";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setIsHiding(true);
        setIsHiding(false);
        setIsScrolled(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (header?.navLinks) {
      const currentLink = header.navLinks.find((link) => {
        return (
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))
        );
      });

      if (currentLink) setActiveLink(currentLink.name);
      else if (pathname === "/") setActiveLink("Home");
      else setActiveLink("");
    }
    setIsMenuOpen(false); // ✅ close menu on route change
  }, [pathname, header]);

  const handleLinkClick = (linkName, href, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMenuOpen(false);
    router.push(href);
  };

  const NavbarContent = ({ isFixed }) => {
    const showDark = !isFixed && isBlackRoute;

    return (
      <>
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("Home");
            setIsMenuOpen(false);
            router.push("/");
          }}
        >
          <Image
            src={lightLogo}
            alt="Hirezy"
            width={146.23}
            height={31.11}
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-link-container hidden md:flex">
          {header.navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={(e) => handleLinkClick(link.name, link.href, e)}
              className={`nav-link ${
                isFixed
                  ? activeLink === link.name
                    ? "fixed-active"
                    : ""
                  : showDark
                  ? activeLink === link.name
                    ? "static-active"
                    : ""
                  : activeLink === link.name
                  ? "static-black-active"
                  : ""
              }`}
            >
              <Typography
                className={`!text-[var(--color-para-2)] transition-colors ${
                  !isFixed
                    ? showDark
                      ? "static-nav-link-white"
                      : "static-nav-link"
                    : "fixed-nav-link"
                }`}
                variant="linkText"
                style={{ lineHeight: "150%" }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className=" hamburger-menu flex flex-col gap-[4px]"
          // onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          {/* <span className="w-6 h-[2px] bg-white" /> */}
        </button>
      </>
    );
  };

  return (
    <>
      {/* STATIC NAVBAR */}
      <div className="max-w-[var(--layout-max-width)] mx-auto w-full bg-[var(--color-background-2)]">
        <Container variant="header">
          <header className="header-container-static flex items-center justify-between">
            <NavbarContent isFixed={false} />
          </header>
        </Container>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4">
            {header.navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className="block py-3"
              >
                <Typography variant="linkText">
                  {link.name}
                </Typography>
              </Link>
            ))}
          </div>
        )}
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
        >
          <NavbarContent isFixed={true} />
        </Container>
      </header>
    </>
  );
}
