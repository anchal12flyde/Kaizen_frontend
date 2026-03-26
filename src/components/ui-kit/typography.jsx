"use client";

import clsx from "clsx";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  background2: "#0a193a",
  accent: "#B6996A",
  background3: "#1F0808",
};

const Typography = ({
  variant = "para-1",
  as,
  children,
  className,
  colorVariant = "black",
  animate,
  ...props
}) => {
  const Tag = as || getDefaultTag(variant);

  return (
    <Tag
      className={clsx(variant, className)}
      style={{
        whiteSpace: "pre-line",
        color: colorMap[colorVariant] || colorMap.black,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

function getDefaultTag(variant) {
  const map = {
    "hero-display": "h1",
    "header-hero": "h2",
    "display-1": "h3",
    "display-2": "h4",
    "display-3": "h5",
    "header-1": "p",
    "header-2": "p",
    "header-3": "p",
    "header-4": "p",
    "header-5": "p",
    "header-6": "p",
    "para-1": "p",
    "para-2": "p",
    "para-3": "p",
    "big-firm": "p",
    buttonText: "span",
    linkText: "span",
    punctuation: "span",
  };

  return map[variant] || "p";
}

export default Typography;