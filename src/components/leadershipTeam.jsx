"use client";

import { useRef, useState } from "react";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";

const team = [
  {
    name: "Harsh",
    role: "Legal Advisor",
    desc: "Expert in corporate and transaction advisory.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=50",
  },
  {
    name: "Emma",
    role: "Partner",
    desc: "Specialist in mergers and acquisitions.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=50",
  },
  {
    name: "John",
    role: "Senior Counsel",
    desc: "Corporate compliance expert.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=50",
  },
  {
    name: "Sarah",
    role: "Associate Partner",
    desc: "Startup and VC advisory.",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=500&q=50",
  },
  {
    name: "David",
    role: "Tax Consultant",
    desc: "International tax structuring.",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&q=50",
  },
  {
    name: "Lisa",
    role: "Legal Head",
    desc: "Regulatory and compliance specialist.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=50",
  },
  {
    name: "Michael",
    role: "Managing Partner",
    desc: "Business and corporate strategy.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=50",
  },
  {
    name: "Sophia",
    role: "Senior Associate",
    desc: "Investment and PE advisory.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=50",
  },
];

export default function LeadershipTeam() {
  const cardRefs = useRef([]);  
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  /* Mouse Drag Scroll */
  const handleMouseDown = (e) => {
    setIsDown(true);

    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Container
      variant="primarySpacing"
      className="flex flex-col gap-[96px] bg-[#B6996A] "
    >
      {/* Header */}
      <div className="flex md:flex-row flex-col  md:gap-[152px] gap-[42px]">
        <Typography variant="header-6" className="!text-white">
          Leadership Team
        </Typography>

        <Typography variant="para-2" className="!text-white">
          Kaizen Law is led by experienced corporate and transaction lawyers
          with backgrounds at leading law firms in India.
        </Typography>
      </div>

      {/* Scroll Area */}
      <div
        className="team-track"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {team.map((item, index) => (
          <div key={index} className="team-card">
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
          gap: 25px;

          overflow-x: auto;
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
          flex-direction:column;
          }
        }
      `}</style>
    </Container>
  );
}
