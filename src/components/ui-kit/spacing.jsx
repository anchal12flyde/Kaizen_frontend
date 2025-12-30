import clsx from "clsx";

export const Container = ({ children, variant = "primary", className }) => {
  const variants = {
    primary: "primary-spacing",
    header: "header-spacing",
    heroSpacing: "hero-spacing",
    secondary: "secondary-spacing",
    section: "section-spacing",
    header : "header-spacing",
    normal : "normal-spacing",
    auth : "auth-spacing",
    sectionSp1 : 'section-sp-1',
    sectionSpTop : 'section-sp-top',
    sectionSpBottom : 'section-sp-bottom',
    topSpacing : "top-spacing",
    bottomSpacing : "bottom-spacing",
    blockSpacing : "block-spacing",
    inlineSpacing : "inline-spacing",
    blogSpacing : "blog-spacing",
    footerSpacing : "footer-spacing"
  };

  return (
    <div className={clsx(`${variants[variant]}`, className)}>{children}</div>
  );
};
