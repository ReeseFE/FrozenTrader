"use client";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { BlurImage } from "./blur-image";

export const Stacks = () => {
  let [logos, setLogos] = useState([
    {
      title: "python",
      src: "/logos/python.svg",
    },
    {
      title: "numpy",
      src: "/logos/numpy.svg",
    },
    {
      title: "numba",
      src: "/logos/numba.png",
    },
    {
      title: "pandas",
      src: "/logos/pandas.svg",
    },
    {
      title: "pytorch",
      src: "/logos/pytorch.svg",
    },
    {
      title: "mlflow",
      src: "/logos/mlflow.png",
    },
    {
      title: "matplotlib",
      src: "/logos/matplotlib.png",
    },
    {
      title: "optuna",
      src: "/logos/optuna.png",
    },
    {
      title: "airflow",
      src: "/logos/airflow.png",
    },
    {
      title: "prefect",
      src: "/logos/prefect.svg",
    },
    {
      title: "mysql",
      src: "/logos/mysql.svg",
    },
    {
      title: "clickhouse",
      src: "/logos/clickhouse.png",
    },
    {
      title: "mongodb",
      src: "/logos/mongodb.png",
    },
    {
      title: "streamlit",
      src: "/logos/streamlit.svg",
    },
    {
      title: "vercel",
      src: "/logos/vercel.png",
    },
    {
      title: "tailwind-css",
      src: "/logos/tailwindcss.svg",
    },
    {
      title: "react",
      src: "/logos/react.png",
    },
    {
        title: "flask",
        src: "/logos/flask.svg",
    },
    {
      title: "nginx",
      src: "/logos/nginx.svg",
    },
    {
      title: "docker",
      src: "/logos/docker.svg",
    },
    {
      title: "github",
      src: "/logos/github.png",
    },
  ]);
  return (
    <div className="pt-20 pb-40 h-40">
      <p className="text-neutral-400 text-center mb-4 text-sm sm:text-base md:text-lg lg:text-xl break-words whitespace-normal w-full">
        Support integration with multiple technology stacks
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto relative pt-10 h-30">
        <div className="absolute inset-0 bg-charcoal grayscale z-40 pointer-events-none [mask-image:_radial-gradient(circle,_transparent_10%,_#000000_100%)]" />
        <Marquee>
          {logos.map((logo, idx) => (
            <BlurImage
              key={logo.title + idx}
              src={logo.src}
              alt={logo.title}
              width={120}
              height={120}
              className=" mx-8 object-contain grayscale hover:grayscale-0 transition duration-200"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
