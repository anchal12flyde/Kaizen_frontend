import clsx from "clsx";

export const Container = ({ children, variant = "primary", className }) => {
  const variants = {
    header: "header-spacing",
    heroSpacing: "hero-spacing",
    primarySpacing: "primary-spacing",
    secondarySpacing: "secondary-spacing",
    sectionSp1: "section-sp-1",
    sectionSpTop: "section-sp-top",
    sectionSpBottom: "section-sp-bottom",
    footerSpacing: "footer-spacing",
    metricSpacing: "metric-spacing",
  }; 

  return (
    <div className={clsx(`${variants[variant]}`, className)}>{children}</div>
  );
};
