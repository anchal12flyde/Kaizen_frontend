"use client";

import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./ui-kit/typography";
import aboutData from "@/data/about.json";

gsap.registerPlugin(ScrollTrigger);

export default function LetsConnectSection() {
  const sectionRef = useRef(null);
  const { letsConnect } = aboutData;
  const { title, form, thankYou } = letsConnect;
  const letsRef = useRef(null);
  const connectRef = useRef(null);

  const enterRef = useRef(null);
  const inputRef = useRef(null);
  const submitRef = useRef(null);

  const thanksRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: true,
          pin: true,
        },
      });

      /* ================= TEXT SPLIT ================= */

      tl.to(
        letsRef.current,
        {
          x: "-120%",
          opacity: 0,
          ease: "power2.out",
        },
        0,
      );

      tl.to(
        connectRef.current,
        {
          x: "120%",
          opacity: 0,
          ease: "power2.out",
        },
        0,
      );

      /* ================= FORM APPEAR ================= */

      tl.fromTo(
        inputRef.current,
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.3,
      );

      tl.fromTo(
        enterRef.current,
        {
          x: 0,
          opacity: 0,
        },
        {
          x: "-220px",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.4,
      );

      tl.fromTo(
        submitRef.current,
        {
          x: 0,
          opacity: 0,
        },
        {
          x: "220px",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.4,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    gsap.fromTo(
      thanksRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
    );
  };

  return (
    <section ref={sectionRef} className="lets-section">
      {/* TEXT */}
      {!submitted && (
        <div className="text-wrapper">
          <h1 ref={letsRef}>{title[0]}</h1>
          <h1 ref={connectRef}>{title[1]}</h1>
        </div>
      )}

      {/* FORM */}
      {!submitted && (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <span ref={enterRef} className="side-text">
           {letsConnect.enter}
          </span>

          <div ref={inputRef} className=" flex flex-col items-center  ">
            <Typography variant="para1" className="!text-white ">
              {form.newsletterText}
            </Typography>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={form.placeholder}
              required
              className="newsletter-input"
              onFocus={() => gsap.to(inputRef.current)}
              onBlur={() =>
                gsap.to(inputRef.current, { scale: 1, duration: 0.3 })
              }
            />
          </div>

          <button
            ref={submitRef}
            type="submit"
            className="side-text submit-btn"
          >
            {form.submitLabel}
          </button>
        </form>
      )}

      {/* THANK YOU */}
      {submitted && (
        <div ref={thanksRef} className="thank-you">
          <h2>{thankYou.heading}</h2>
          <p>{thankYou.message}</p>
        </div>
      )}
    </section>
  );
}
