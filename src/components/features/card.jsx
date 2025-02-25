import { cn } from "@/utils/util";
import React from "react";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn("text-lg font-semibold text-white py-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn("text-sm font-normal text-neutral-400 max-w-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export const CodeSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl z-40",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(70%_70%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};