"use client";
import { modules } from "@/constant/module";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { GridPattern } from "./GridPattern";

export const ModuleCard = () => {
  return (
    <div id="modules" className="max-w-7xl mx-auto py-10 md:py-20 px-12">
      <div className="mx-auto max-w-2xl sm:text-center pt-20">
        <h2 className="text-3xl font-medium text-[ghostwhite]">
          Automatic Quantitative Research Workflow
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          We provide a rich set of loose-coupled modules for traditional quantitative research workflow.
        </p>
      </div>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
        {modules.map((module, idx) => (
          <Module key={`module-${idx}`} module={module} />
        ))}
      </ul>
    </div>
  );
};

const Module = ({ module }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <li
      onMouseMove={onMouseMove}
      className="group rounded-2xl border p-8 relative bg-[#C0CDDE05] text-blue-100"
    >
      <ModulePattern {...module.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <span>{module.icon}</span>
        <h3 className="mt-6 font-semibold">{module.title}</h3>
        <p className="mt-2">{module.description}</p>
      </div>
    </li>
  );
};

function ModulePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export const HiddenClassesHack = () => {
  return <div className="text-green-500 h-8 w-8 hidden text-gray-500 stroke-gray-500"></div>;
};