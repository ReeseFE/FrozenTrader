import React from "react";
import { Compare } from "../components/CodeBlock/compare";
import styles from "../components/CodeBlock/CodeCompare.module.css";

export function CodeCompare() {
  return (
    <div className={`${styles.codeCompareContainer} dark:${styles.darkMode} px-4`}>
      <Compare
        firstImage="./image/code1.png"
        secondImage="./image/code2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[320px] w-[320px] md:h-[300px] md:w-[280px]"
        slideMode="hover"
      />
    </div>
  );
}
