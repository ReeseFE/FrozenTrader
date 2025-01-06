import React from "react";
import { Grid } from "./grid";

export const FeaturesGrid = () => {
  const grid = [
    {
      title: "HIPAA and SOC2 Compliant",
      description:
        "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
      title: "Content Calendar",
      description:
        "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
      title: "Audience Targeting",
      description:
        "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
      title: "Social Listening",
      description:
        "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
      title: "Customizable Templates",
      description:
        "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
  ];
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {grid.map((feature, idx) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
