import React from "react";
import Image from "next/image";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaBolt, FaChartLine } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";

export const Features = () => {
  return (
    <Container className="py-20 w-full mx-auto relative z-40">
      <Heading className="pt-4">Platform Infrastructure</Heading>
      <Subheading>
        Proactiv houses a rich set of features to automate your marketing
        efforts across all social medias
      </Subheading>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 py-10">
        <Card className="lg:col-span-2">
          <CardTitle>Post to multiple platforms at once</CardTitle>
          <CardDescription>
            With our AI-powered platform, you can post to multiple platforms
            at once, saving you time and effort.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonOne />
          </CardSkeletonContainer>
        </Card>
        <Card className="lg:col-span-2">
        <CardTitle>Post to multiple platforms at once</CardTitle>
          <CardDescription>
            With our AI-powered platform, you can post to multiple platforms
            at once, saving you time and effort.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonTwo />
          </CardSkeletonContainer>
        </Card>
        <Card className="lg:col-span-3">
          <CardSkeletonContainer className="max-w-[16rem] mx-auto">
            <SkeletonThree />
          </CardSkeletonContainer>
          <CardTitle>Analytics for everything</CardTitle>
          <CardDescription>
            Check analytics, track your posts, and get insights into your
            audience.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardSkeletonContainer>
            <SkeletonFour />
          </CardSkeletonContainer>
          <CardTitle>Integrated AI</CardTitle>
          <CardDescription>
            Proactiv uses AI to help you create engaging content.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-5">
          <CardSkeletonContainer>
            <SkeletonFive />
          </CardSkeletonContainer>
          <CardTitle>Easy Collaboration</CardTitle>
          <CardDescription>
            Proactive can integrate with Zapier, Slack and every other popular
            integration tools.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-5">
          <CardSkeletonContainer>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
                <Image
                  src="/image/server.png"
                  alt="Dashboard"
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-lg"
                />
              </div>
          </CardSkeletonContainer>
          <CardTitle>Know your audience</CardTitle>
          <CardDescription>
            Based on your audience, create funnels and drive more traffic.
          </CardDescription>
        </Card>
      </div>
    </Container>
  );
};
