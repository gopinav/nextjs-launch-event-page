"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import FrameworkRotation from "@/components/framework-rotation";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );
  const [revealLayers, setRevealLayers] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = frameworks.indexOf(currentFramework);
      const nextIndex = (currentIndex + 1) % frameworks.length;
      setCurrentFramework(frameworks[nextIndex]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentFramework]);

  useEffect(() => {
    setRevealLayers(true);
  }, []);

  return (
    <main>
      {/* Background color */}
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-30",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          }
        )}
      />
      {/* Grid */}
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30"
      />
      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      {/* Reveal */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !revealLayers ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Content */}
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-7xl max-w-3xl text-center leading-snug mb-12">
            <Image
              alt="Figma logo"
              className="inline-block mr-8 -mt-2"
              src={assets.figma}
              width="50"
              height="50"
            />
            to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span className="transition-colors duration-200">never</span> be the
            same again
          </h1>
        </div>
      </div>
    </main>
  );
}
