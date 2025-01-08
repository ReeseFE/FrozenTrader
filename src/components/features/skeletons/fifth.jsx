import { Globe } from "@/components/globe";

export const SkeletonFive = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-0 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};