"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const audiences = [
  {
    role: "Data Engineer",
    quote: "Data quality checks in YAML. Runs anywhere. Free anomaly detection.",
    detail: "Define checks next to your pipeline code. Run with provero run in CI or locally. No Java, no Spark, no Docker.",
  },
  {
    role: "CTO",
    quote: "Apache-licensed data quality. No vendor lock-in. No surprise bills.",
    detail: "Auditable, on-prem or cloud, no per-seat licensing. Your team owns the tool, not the other way around.",
  },
  {
    role: "Compliance",
    quote: "Auditable data quality with full history. EU AI Act ready.",
    detail: "Every check result stored with timestamps. Full audit trail. Schema contracts with SLA enforcement.",
  },
  {
    role: "Ex-Soda User",
    quote: "Same simplicity. Real open source. No features behind a paywall.",
    detail: "Familiar YAML syntax. Anomaly detection included, not cloud-only. Migrate in minutes.",
  },
  {
    role: "Ex-GX User",
    quote: "Same power. 90% less config.",
    detail: "No Expectations classes, no Data Context boilerplate. 3 lines of YAML vs 50+ lines of Python.",
  },
];

export function Audience() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % audiences.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Role selector: horizontal pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {audiences.map((a, i) => (
            <button
              key={a.role}
              onClick={() => { setActive(i); setIsPaused(true); }}
              className="relative px-6 py-3 text-base font-medium transition-colors duration-300 rounded-full"
            >
              {i === active && (
                <motion.div
                  layoutId="audience-pill"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${i === active ? "text-white" : "text-navy/40 hover:text-navy/70"}`}>
                {a.role}
              </span>
            </button>
          ))}
        </div>

        {/* Quote area */}
        <div
          className="relative min-h-[280px] flex flex-col items-center justify-center text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <blockquote className="max-w-5xl text-5xl font-extrabold tracking-tight text-navy leading-[1.1] sm:text-6xl lg:text-7xl">
                {audiences[active].quote}
              </blockquote>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/50">
                {audiences[active].detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-16 flex justify-center gap-1.5">
          {audiences.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setIsPaused(true); }}
              className="relative h-1 w-12 overflow-hidden rounded-full bg-neutral-200/80"
            >
              {i === active && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-emerald rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: isPaused ? 99999 : 4.5, ease: "linear" }}
                  key={`progress-${active}-${isPaused}`}
                />
              )}
              {i < active && (
                <div className="absolute inset-0 bg-emerald/30 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
