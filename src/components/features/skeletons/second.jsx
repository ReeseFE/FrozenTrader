import { CodeCompare } from '@/constant/codeBlock';

export const SkeletonTwo = () => {
  return (
    <div className="p-8 overflow-hidden h-full relative">
        <div className="flex flex-col gap-4 items-center justify-center h-full relative">
            <CodeCompare className="relative z-10" />
        </div>
    </div>
  );
};