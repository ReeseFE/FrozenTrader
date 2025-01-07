import React from "react";
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
import { SkeletonSix } from "./skeletons/sixth";

export const Features = () => {
  return (
    <Container className="py-20 max-w-5xl mx-auto relative z-40">
      <Heading className="pt-4">Platform Infrastructure</Heading>
      <Subheading>
        Proactiv houses a rich set of features to automate your marketing
        efforts across all social medias
      </Subheading>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
        <Card className="lg:col-span-1">
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
          <CardSkeletonContainer>
            <SkeletonSix />
          </CardSkeletonContainer>
        </Card>
        <Card>
          <CardSkeletonContainer className="max-w-[16rem] mx-auto">
            <SkeletonTwo />
          </CardSkeletonContainer>
          <CardTitle>Analytics for everything</CardTitle>
          <CardDescription>
            Check analytics, track your posts, and get insights into your
            audience.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer>
            <SkeletonThree />
          </CardSkeletonContainer>
          <CardTitle>Integrated AI</CardTitle>
          <CardDescription>
            Proactiv uses AI to help you create engaging content.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer
            showGradient={false}
            className="max-w-[16rem] mx-auto"
          >
            <SkeletonFour />
          </CardSkeletonContainer>
          <CardTitle>Easy Collaboration</CardTitle>
          <CardDescription>
            Proactive can integrate with Zapier, Slack and every other popular
            integration tools.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer>
            <SkeletonFive />
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
