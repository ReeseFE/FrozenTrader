import React from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { TbHierarchy } from "react-icons/tb";
import { PiChartPieSlice } from "react-icons/pi";
import { RiStockLine } from "react-icons/ri";

 export const modules = [
  {
    id: 0,
    title: "Data Architecture",
    description: `The system implements a flexible and robust data storage and processing (ETL) pipeline, designed to handle various usage scenarios.`,
    icon: <GoDatabase className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 1,
    title: "Event-Driven Backtesting",
    description: `Frozen provides a event-driven backtesting engine based on historical data, optimized for fast runtime.`,
    icon: <RiStockLine className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    id: 2,
    title: "Factor Calculation",
    description: `A powerful expression engine that allows you to write concise factor formulae instead of complex python codes.`,
    icon: <TbHierarchy className="h-8 w-8 text-gray-500 stroke-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    id: 3,
    title: "Portfolio Optimization",
    description: `Make decisions with the risk model to achieve optimal asset allocation weights based on your desired constraints.`,
    icon: <PiChartPieSlice className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    id: 4,
    title: "Parameter Tuning",
    description: `Leverage our optimization framework for parameter tuning tasks by searching the parameter space for parameters that give the best performance.`,
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 5,
    title: "Live Trading",
    description: `Consider additional complexities including market impact, liquidity constraint, execution costs, and real-time data processing.`,
    icon: <BsCurrencyDollar className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
];

