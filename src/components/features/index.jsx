import React from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
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
        Frozen provides a robust infrastructure to enhance and support your research endeavors.
      </Subheading>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 pt-10 md:pb-20 xs:pb-[50px] xs:px-8">
        <Card className="lg:col-span-2">
          <CardTitle>Integrate with different data sources</CardTitle>
          <CardDescription>
            Support for multiple data APIs across different markets, including historical data, real-time data, and alternative data.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonOne />
          </CardSkeletonContainer>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle>Data dashboard for real-time monitoring</CardTitle>
          <CardDescription>
            Built with Grafana, you can monitor market data flow and perform data analysis in real-time.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonTwo />
          </CardSkeletonContainer>
        </Card>
        <Card className="lg:col-span-3">
        <CardTitle>Data storage and ETL pipeline</CardTitle>
          <CardDescription>
            Multi-threaded data retrieval and workflow orchestration by Prefect to ensure data integrity and scalability.
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
            Frozen is served on cloud to maintain worldwide access.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardSkeletonContainer>
            <SkeletonFive />
          </CardSkeletonContainer>
          <CardTitle className="pt-8">Integrated AI</CardTitle>
          <CardDescription>
            Frozen uses AI to help you turn innovative ideas into productivity.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle>Track your wealth</CardTitle>
          <CardDescription>
            Manage your account portfolio and visualize your wealth.
          </CardDescription>
          <CardSkeletonContainer>
            <SkeletonSix />
          </CardSkeletonContainer>
        </Card>
      </div>
    </Container>
  );
};
