"use client";

import { useState } from "react";

const sectors = [
  {
    title: "Technology & Digital Businesses",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=40",
  },
  {
    title: "Financial Services & Fintech",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=40",
  },
  {
    title: "Consumer & Retail",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=40",
  },
  {
    title: "Education & EdTech",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=40",
  },
  {
    title: "E-commerce & Platforms",
    image:
      "https://images.unsplash.com/photo-1515165562835-c4c8c7c1adcc?w=400&q=40",
  },
  {
    title: "Renewable Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=40",
  },
  {
    title: "IT & Technology Services",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=40",
  },
];

export default function SectorExperience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="sector-section">
      <h2>Sector Experience</h2>

      <div className="sector-list">
        {sectors.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={index}
              className="sector-item"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span>{item.title}</span>

              {/* Tooltip */}
              <div
                className={`tooltip ${
                  activeIndex === index ? "show" : ""
                } ${isRight ? "right" : "left"}`}
              >
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Styles */}
      <style jsx>{`
        .sector-section {
          background: #faf7f2;
          padding: 80px 20px;
          text-align: center;
        }

        h2 {
          font-size: 34px;
          margin-bottom: 50px;
          font-weight: 500;
        }

        .sector-list {
          width: 100%;
          max-width: 900px;
          margin: auto;
        }

        /* Row */
        .sector-item {
          position: relative;
          padding: 26px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          font-size: 18px;
          cursor: pointer;
        }

        .sector-item span {
          transition: all 0.3s ease;
        }

        .sector-item:hover span {
          color: #6a4df4;
          letter-spacing: 0.3px;
        }

        /* Tooltip Base */
        .tooltip {
          position: absolute;
          top: 50%;

          width: 250px;
          aspect-ratio: 1;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);

          /* Hidden State */
          opacity: 0;
          transform: translateY(-50%) scale(0.85);
          pointer-events: none;

          /* Smooth Transition */
          transition:
            opacity 0.3s ease,
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

          z-index: 20;
        }

        .tooltip img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(0.95) brightness(0.95);
        }

        /* Show State */
        .tooltip.show {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* Close gap */
        .tooltip.right {
          left: calc(65% + 12px);
        }

        .tooltip.left {
          right: calc(65% + 12px);
        }

        /* Slight Slide Effect */
        .tooltip.right {
          transform: translateY(-50%) translateX(-8px) scale(0.85);
        }

        .tooltip.left {
          transform: translateY(-50%) translateX(8px) scale(0.85);
        }

        .tooltip.show.right {
          transform: translateY(-50%) translateX(0) scale(1);
        }

        .tooltip.show.left {
          transform: translateY(-50%) translateX(0) scale(1);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .tooltip {
            display: none;
          }

          h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
