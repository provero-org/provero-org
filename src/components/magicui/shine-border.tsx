"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = ["#059669", "#D97706", "#059669"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": `${borderWidth}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
        } as React.CSSProperties
      }
      className={cn(
        "relative rounded-[--border-radius] p-[--border-width]",
        "before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width]",
        "before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]",
        "before:[background-image:var(--background-radial-gradient)]",
        "before:[background-size:300%_300%]",
        "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",
        "before:[-webkit-mask:var(--mask-linear-gradient)] before:[mask:var(--mask-linear-gradient)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
