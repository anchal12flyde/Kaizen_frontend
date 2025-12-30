"use client";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary", // default variant
  icon,
  iconPosition = "right",
  showIcon = true,
  className,
  as,
  disabled,
  ...props
}) => {
  const Tag = as || "button";

  return (
    <Tag
      disabled={disabled}
      className={clsx(
        "btn",
        `btn--${variant}`, // apply variant automatically
        disabled && "btn--disabled",
        icon && showIcon && "btn--with-icon",
        className
      )}
      {...props}
    >
      {icon && showIcon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}

      {children}

      {icon && showIcon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </Tag>
  );
};

export default Button;
