import { cn } from "../utils/util";
import { AnimationProps, MotionProps } from "framer-motion";
import React from "react";
import Balancer from "react-wrap-balancer";

export const Subheading = ({
  className,
  as: Tag = "h2",
  children,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "text-sm md:text-base max-w-4xl text-left my-4 mx-auto",
        "text-muted text-center font-normal text-neutral-400 dark:text-neutral-400",
        className
      )}
    >
      <Balancer>{children}</Balancer>
    </Tag>
  );
};