import clsx from "clsx";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  gray: "#636363",
  primary: "#CCEF55",
  secondary: "#AAAAAA",
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
  };
  return map[variant] || "p";
}

export default Typography;
