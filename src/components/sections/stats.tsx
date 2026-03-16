"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
  { value: 14, suffix: "", label: "Check Types", detail: "Built-in validations" },
  { value: 9, suffix: "", label: "Connectors", detail: "DuckDB to BigQuery" },
  { value: 3, suffix: "", label: "Lines to Start", detail: "Minimal config" },
  { value: 100, suffix: "%", label: "Open Source", detail: "Apache 2.0 forever" },
];

export function Stats() {
  return (
    <section className="relative py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div
                className={`text-center ${i < 3 ? "lg:border-r lg:border-neutral-100" : ""}`}
              >
                <div className="text-5xl font-extrabold text-emerald sm:text-6xl">
                  <NumberTicker value={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <p className="mt-2 text-sm font-semibold text-navy">{stat.label}</p>
                <p className="mt-1 text-xs text-navy/40">{stat.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
