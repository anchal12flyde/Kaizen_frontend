"use client";

import clsx from "clsx";

/* ---------------- SPACING VARIANTS ---------------- */

const spacingVariants = {
  header: "header-spacing",
  heroSpacing: "hero-spacing",
  primarySpacing: "primary-spacing",
  secondarySpacing: "secondary-spacing",
  sectionSp1: "section-sp-1",
  sectionSp2: "section-sp-2",
  sectionSp3: "section-sp-3",
  sectionSpTop: "section-sp-top",
  sectionSpBottom: "section-sp-bottom",
  footerSpacing: "footer-spacing",
  metricSpacing: "metric-spacing",
  mainBox: "main-box",
};

export const Container = ({
  children,
  variant = "primarySpacing",
  className,
  as = "div",
}) => {
  const Tag = as;

  const commonClass = clsx(spacingVariants[variant], className);

  return <Tag className={commonClass}>{children}</Tag>;
};
