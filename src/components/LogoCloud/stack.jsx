"use client";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { BlurImage } from "./blur-image";

export const Stacks = () => {
  let [logos, setLogos] = useState([
    {
      title: "python",
      src: "/logos/python.png",
    },
    {
      title: "numpy",
      src: "/logos/numpy.png",
    },
    {
      title: "numba",
      src: "/logos/numba.png",
    },
    {
      title: "pandas",
      src: "/logos/pandas.png",
    },
    {
      title: "pytorch",
      src: "/logos/pytorch.png",
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
      src: "/logos/prefect.png",
    },
    {
      title: "mysql",
      src: "/logos/mysql.png",
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
      src: "/logos/streamlit.png",
    },
    {
      title: "vercel",
      src: "/logos/vercel.png",
    },
    {
      title: "tailwind-css",
      src: "/logos/tailwindcss.png",
    },
    {
      title: "react",
      src: "/logos/react.png",
    },
    {
        title: "flask",
        src: "/logos/flask.png",
    },
    {
      title: "nginx",
      src: "/logos/nginx.png",
    },
    {
      title: "docker",
      src: "/logos/docker.png",
    },
    {
      title: "github",
      src: "/logos/github.png",
    },
  ]);
  return (
    <div className="md:pt-20 md:pb-20 h-45">
      <p className="text-neutral-400 text-center mb-4 text-sm sm:text-base md:text-lg lg:text-xl break-words whitespace-normal w-full">
        Support integration with multiple technology stacks
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto relative md:pt-5 h-40">
        <div className="absolute inset-0 bg-charcoal grayscale z-40 pointer-events-none [mask-image:_radial-gradient(circle,_transparent_10%,_#000000_100%)]" />
        <Marquee>
          {logos.map((logo, idx) => (
            <BlurImage
              key={logo.title + idx}
              src={logo.src}
              alt={logo.title}
              width={120}
              height={120}
              className="xs:mx-4 md:mx-8 object-contain grayscale hover:grayscale-0 transition duration-200"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
