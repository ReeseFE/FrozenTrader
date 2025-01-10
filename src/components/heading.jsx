import { cn } from "../utils/util";
import React from "react";
import Balancer from "react-wrap-balancer";

export const Heading = ({
  className,
  as: Tag = "h2",
  children,
  size = "md",
  ...props
}) => {
  const sizeVariants = {
    sm: "text-xl md:text-2xl md:leading-snug",
    md: "text-3xl md:text-4xl md:leading-normal",
    xl: "text-4xl md:text-6xl md:leading-none",
    "2xl": "text-5xl md:text-7xl md:leading-none",
  };
  return (
    <Tag
      className={cn(
        "text-3xl md:text-4xl md:leading-normal mx-auto text-center tracking-normal",
        "bg-clip-text text-[ghostwhite]",
        sizeVariants[size],
        className
      )}
      {...props}
    >
      <Balancer>{children}</Balancer>
    </Tag>
  );
};