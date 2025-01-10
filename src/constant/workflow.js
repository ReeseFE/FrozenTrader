"use client";

import { useState, useEffect } from "react";
import { TextComponent } from "@/components/Workflow";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { cn } from "@/utils/util";

const data = [
  {
    title: "Visit the Eldoraui website",
    content:
      "Visit the Eldoraui and browse through the dozens of available components to help you build your web or mobile application.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Browse the site and choose your component",
    content:
      "Browse the categories, the variants of each component, try them out, and integrate them into your project with just a few clicks.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Set up your environment",
    content:
      "Set up your development environment to integrate Cuicui library components. You can customize them infinitely to match your branding guidelines.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Copy and paste the code",
    content:
      "Copy and paste the code generated by the Cuicui library into your project and enjoy modern, ready-to-use components.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
];

export function WorkflowImages() {
  const [featureOpen, setFeatureOpen] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container">
      <div className="md:mx-auto md:text-center xl:max-w-none">
        <Heading>Automatic Quantitative Research Workflow</Heading>
        <Subheading>
          Build you own algorithmic trading strategy with our research pipeline. Easy deployment with only four steps.
        </Subheading>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]",
            )}
          >
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : "",
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
