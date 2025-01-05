import { useMotionTemplate, motion } from "framer-motion";
import React from "react";
import { GridPattern } from "../GridPattern";

export function CardPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-indigo-500 via-teal-500 opacity-0 transition duration-300 group-hover:opacity-10"
        style={style}
      />
    </div>
  );
}