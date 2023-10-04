import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./time-unit";
import React, { ReactNode } from "react";

type ClientOnlyProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ClientOnly({
  children,
  className,
  ...delegated
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div className={className} {...delegated}>
      {children}
    </div>
  );
}
export const CountdownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  const eventDate = new Date("2023-10-25T09:00:00+05:30");
  const [countdown, setCountdown] = useState(calculateTimeToEvent(eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"text-center flex gap-[10px]"}>
      <ClientOnly className="flex flex-row gap-3">
        <TimeUnit
          label="DAYS"
          value={countdown.days}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label="HOURS"
          value={countdown.hours}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label="MINUTES"
          value={countdown.minutes}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label="SECONDS"
          value={countdown.seconds}
          currentFramework={currentFramework}
        />
      </ClientOnly>
    </div>
  );
};
