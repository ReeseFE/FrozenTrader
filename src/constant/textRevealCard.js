"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/TextReveal";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-transparent h-[25rem] pt-10 pb-10 rounded-2xl w-full xs:w-[30rem] sm:w-[40rem] md:w-[42rem] lg:w-[44rem]">
      <TextRevealCard text="Zen of Quant Investment" revealText="Simplicity is all you need">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
