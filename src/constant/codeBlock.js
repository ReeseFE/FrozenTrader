import React from "react";
import { Compare } from "../components/CodeBlock/compare";
import styles from "../components/CodeBlock/CodeCompare.module.css";

export function CodeCompare() {
  return (
    <div className={`${styles.codeCompareContainer} dark:${styles.darkMode} px-4`}>
      <Compare
        firstImage="./code1.png"
        secondImage="./code2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[450px] w-[360px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
