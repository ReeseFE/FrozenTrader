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
  CodeSkeletonContainer,
} from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";
import { SkeletonSix } from "./skeletons/sixth";

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
        <CardTitle>Analytics for everything</CardTitle>
          <CardDescription>
            Check analytics, track your posts, and get insights into your
            audience.
          </CardDescription>
          <CodeSkeletonContainer className="mx-auto">
            <SkeletonThree />
          </CodeSkeletonContainer>
        </Card>
        <Card className="lg:col-span-3">
          <CardSkeletonContainer>
            <SkeletonFour />
          </CardSkeletonContainer>
          <CardTitle className="pt-8">Served on Edge</CardTitle>
          <CardDescription>
            Frozen is served on cloud to maintain perfect speed.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardSkeletonContainer>
            <SkeletonFive />
          </CardSkeletonContainer>
          <CardTitle className="pt-8">Integrated AI</CardTitle>
          <CardDescription>
            Frozen uses AI to help you create engaging content.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle>Know your wealth</CardTitle>
          <CardDescription>
            Frozen uses AI to help you create engaging content.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonSix />
          </CardSkeletonContainer>
        </Card>
      </div>
    </Container>
  );
};
