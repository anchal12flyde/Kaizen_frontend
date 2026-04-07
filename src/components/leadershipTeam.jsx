"use client";

import { useRef, useState,useEffect } from "react";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import { useSiteContent } from "@/context/SiteContentProvider";
import Link from "next/link";
import AnimatedFadeUp from "./AnimatedFadeUp";



export default function LeadershipTeam() {
  const cardRefs = useRef([]);  
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const sitecontent = useSiteContent();
  const { about } = sitecontent;
  const { leadershipTeam } = about;
  const { title, description, members } = leadershipTeam;

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // 👈 speed control
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Container
      variant="primarySpacing"
      className="flex flex-col gap-[96px] bg-[#B6996A] "
    >
      {/* Header */}
      <div className="flex md:flex-row flex-col  md:gap-[152px] gap-[42px]">
        <AnimatedFadeUp>
          <Typography variant="header-6" className="!text-white">
            {title}
          </Typography>
        </AnimatedFadeUp>

        <AnimatedFadeUp delay={0.15}>
          <Typography variant="para-2" className="!text-white">
            {description}
          </Typography>
        </AnimatedFadeUp>
      </div>

      {/* Scroll Area */}
      <div className="team-track" ref={scrollRef}>
        {members.map((item, index) => (
          <Link key={item.name || index} href={item.link}>
            <div className="team-card">
              <img src={item.img} alt={item.name} />

              <div className="overlay flex flex-col !justify-between ">
                <div className="flex flex-col items-start gap-[4px] ">
                  <Typography variant="header-2" className="!text-white">
                    {item.name}{" "}
                  </Typography>
                  <Typography variant="para-3" className="!text-white">
                    {item.role}
                  </Typography>
                </div>
                <Typography variant="para-3" className="!text-white">
                  {item.desc}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .team-section {
          background: #c2a16f;
          padding: 90px 40px;
          overflow: hidden;
        }

        /* Header */
        .team-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          color: white;
          gap: 40px;
        }
      
        .team-track.dragging {
          cursor: grabbing;
        }
        .team-header h2 {
          font-size: 36px;
          font-weight: 500;
          white-space: nowrap;
        }

        .team-header p {
          max-width: 500px;
          font-size: 15px;
          opacity: 0.9;
        }

        /* Scroll Track */
        .team-track {
          display: flex;
          flex-direction: row;
          gap: 25px;
          user-select: none;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;

          cursor: grab;

          padding-bottom: 15px;
        }
      
        .team-track:active {
          cursor: grabbing;
        }

        /* Hide Scrollbar */
        .team-track::-webkit-scrollbar {
          display: none;
        }

        .team-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Card */
        .team-card {
          position: relative;
          pointer-events: none;
          min-width: 280px;
          height: 400px;

          flex-shrink: 0;

          overflow: hidden;

          background: #000;
        }

        .team-card img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 0.6s ease;
        }
        .team-card a {
          pointer-events: auto; /* 👈 link still clickable */
        }
        /* Zoom Effect */
        .team-card:hover img {
          transform: scale(1.1);
        }

        /* Overlay */
        .overlay {
          position: absolute;
          inset: 0;

          background: rgba(10, 30, 60, 0.9);
          color: white;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          padding: 25px;

          opacity: 0;
          transform: translateY(30px);

          transition: all 0.4s ease;
        }

        /* Show Overlay */
        .team-card:hover .overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .overlay h3 {
          font-size: 22px;
          margin-bottom: 4px;
        }

        .overlay span {
          font-size: 13px;
          opacity: 0.8;
          margin-bottom: 12px;
        }

        .overlay p {
          font-size: 13px;
          line-height: 1.5;
          opacity: 0.9;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .team-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .team-card {
            min-width: 240px;
            height: 400px;
          }
          .team-track {
            flex-direction: column;
          }
        }
      `}</style>
    </Container>
  );
}
