import { cn } from "@/app/lib/utils";
import TextElementSVG from "./TextElementSVG";

const TextElement = ({
  firstText,
  secondText,
  className,
  variant,
}: {
  firstText: string;
  secondText: string;
  className?: string;
  variant?: "default" | "blue";
}) => {
  return (
    <h1
      className={cn(
        "relative flex gap-2 sm:gap-4 text-5xl sm:text-6xl md:text-7xl font-bold flex-wrap justify-center lg:justify-start",
        className
      )}
    >
      {firstText}
      <span className="relative z-0 inline-block">
        {secondText}
        <span className="absolute -right-5 -bottom-5 sm:-bottom-7 -z-10 w-full h-full">
          <TextElementSVG
            className={cn(
              "w-full h-full",
              variant ? "text-light-blue" : "text-secondary-yellow"
            )}
          />
        </span>
      </span>
    </h1>
  );
};

export default TextElement;
