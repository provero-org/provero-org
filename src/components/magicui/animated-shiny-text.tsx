"use client";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70",
        "animate-[shimmer-text_8s_infinite] bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%]",
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent",
        className,
      )}
    >
      {children}
    </p>
  );
}
