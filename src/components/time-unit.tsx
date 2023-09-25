import { cn } from "@/utils/tailwind-utils";
import { NumberRotation } from "./number-rotation";

export const TimeUnit = ({
  label,
  value,
  currentFramework,
}: {
  label: string;
  value: number;
  currentFramework: string;
}) => (
  <div className="flex flex-col">
    <div className="text-white text-3xl font-semibold">
      <NumberRotation number={value} />
    </div>
    <div
      className={cn("text-[8px] font-medium", {
        "text-purple-300": currentFramework === "qwik",
        "text-sky-300": currentFramework === "safari",
        "text-yellow-300": currentFramework === "chrome",
        "text-teal-300": currentFramework === "tailwind",
        "text-blue-300": currentFramework === "react",
        "text-green-300": currentFramework === "vue",
        "text-orange-400": currentFramework === "svelte",
        "text-red-300": currentFramework === "mobile",
        "text-neutral-300": currentFramework === "desktop",
      })}
    >
      {label}
    </div>
  </div>
);
