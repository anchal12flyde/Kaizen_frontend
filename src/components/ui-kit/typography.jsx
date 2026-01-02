import clsx from "clsx";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  background2: "#0a193a",
  accent: "#B6996A",
  background3: "#1F0808",
};

const Typography = ({
  variant = "para1",
  as,
  children,
  className,
  colorVariant = "black",
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
    "hero-display": "hero-display",
    "header-hero":"header-hero",
    "display-1": "display-1",
    "display-2": "display-2",
    "display-3": "display-3",
    "header-1": "header-1",
    "header-2": "header-2",
    "header-3": "header-3",
    "para-1": "para-1",
    "para-2": "para-2",
    "para-3": "para-3",
    "buttonText": "buttonText",
    "linkText": "linkText",
    "punctuation":"punctuation",
  };
  return map[variant] || "p";
}

export default Typography;
