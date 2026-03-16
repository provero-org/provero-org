"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(5, 150, 105, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-100%] animate-[shimmer-slide_var(--speed)_ease-in-out_infinite]">
          <div
            className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
            style={{ translate: "0 0", rotate: "0deg" }}
          />
        </div>
      </div>
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {children}
      </span>
      <div
        className="absolute inset-[var(--cut)] z-[1] [background:var(--bg)] [border-radius:var(--radius)]"
      />
      <span className="relative z-10 flex items-center gap-2 font-medium sr-only">
        {children}
      </span>
    </button>
  );
}
