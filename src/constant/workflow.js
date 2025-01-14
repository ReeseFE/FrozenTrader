"use client";

import { useState, useEffect } from "react";
import { TextComponent } from "@/components/Workflow";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { cn } from "@/utils/util";

const data = [
  {
    title: "Configure strategy parameters",
    content:
      "Fast configuration with YAML file, including account settings, trading frequency, backtesting period, and risk management.",
    srcImage:
      "/image/config.png",
  },
  {
    title: "Update latest market data",
    content:
      "Retrieve latest price-volume data from a specified data source and store it in local database for seamless access and analysis.",
    srcImage:
      "/image/dataflow.png",
  },
  {
    title: "Write strategy and perform backtest",
    content:
      "Define factor (expression) and calculate factor values for trading signal generation. Backtest and tune parameters for best performance.",
    srcImage:
      "/image/strategy.png",
  },
  {
    title: "Trade live with real money",
    content:
      "Contact the broker to open a trading account (e.g. QMT, Binance, etc.) and deploy your strategy to start getting your hands dirty.",
    srcImage:
      "/image/strategy.png",
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
      <div className="md:mx-auto md:text-center md:max-w-7xl xl:max-w-none md:pt-6">
        <Heading>Automatic Quantitative Research Workflow</Heading>
        <Subheading>
          Build and deploy your own algorithmic trading strategy with only four steps.
        </Subheading>
      </div>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 pt-[40px] pb-[60px] px-0">
        <div className="space-y-6 lg:pl-[10px] xl:pl-[100px] 2xl:pl-[180px]">
          {data.map((item, index) => (
            <div key={item.title} className="w-full">
              <button
                className="w-full"
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
              {featureOpen === index && (
                <img
                  alt={item.title}
                  className="w-full h-auto mt-4 md:hidden"
                  src={item.srcImage}
                />
              )}
            </div>
          ))}
        </div>
        <div className="h-full hidden md:block">
          <div
            className={cn(
              "relative h-full w-full overflow-hidden rounded-lg",
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
