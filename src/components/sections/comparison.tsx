"use client";

import { Check, X, Minus } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const tools = ["Provero", "Great Expectations", "Soda Core", "dbt Tests"];

const rows: { feature: string; values: { v: boolean | string; label?: string }[] }[] = [
  {
    feature: "Open Source License",
    values: [
      { v: true, label: "Apache 2.0" },
      { v: true, label: "Apache 2.0" },
      { v: false, label: "ELv2" },
      { v: true, label: "Apache 2.0" },
    ],
  },
  {
    feature: "YAML-first Config",
    values: [
      { v: true },
      { v: false, label: "Python" },
      { v: true },
      { v: "partial", label: "SQL + YAML" },
    ],
  },
  {
    feature: "Anomaly Detection",
    values: [
      { v: true, label: "Built-in" },
      { v: true, label: "Plugin" },
      { v: false, label: "Cloud only" },
      { v: false },
    ],
  },
  {
    feature: "Data Contracts",
    values: [{ v: true }, { v: false }, { v: false, label: "Cloud only" }, { v: false }],
  },
  {
    feature: "Zero Config Start",
    values: [
      { v: true, label: "3 lines" },
      { v: false, label: "~50 lines" },
      { v: true },
      { v: "partial", label: "Needs dbt" },
    ],
  },
  {
    feature: "No Heavy Dependencies",
    values: [{ v: true }, { v: false }, { v: true }, { v: "partial" }],
  },
  {
    feature: "SQL Batch Optimization",
    values: [{ v: true }, { v: false }, { v: false }, { v: true }],
  },
  {
    feature: "Airflow Integration",
    values: [{ v: true }, { v: true }, { v: true }, { v: true }],
  },
  {
    feature: "Migration Tools",
    values: [
      { v: true, label: "SodaCL & dbt" },
      { v: false },
      { v: false },
      { v: false },
    ],
  },
];

function CellIcon({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald/10">
        <Check className="h-4 w-4 text-emerald" />
      </div>
    );
  if (v === false)
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
        <X className="h-4 w-4 text-red-400" />
      </div>
    );
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10">
      <Minus className="h-4 w-4 text-gold" />
    </div>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
              Comparison
            </span>
            <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              How Provero{" "}
              <span className="text-emerald">
                compares
              </span>
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 overflow-x-auto rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="border-b border-neutral-200/80">
                  <th className="py-5 pl-6 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-navy/40">
                    Feature
                  </th>
                  {tools.map((tool, i) => (
                    <th
                      key={tool}
                      className={`py-5 px-4 text-center text-sm font-bold ${
                        i === 0
                          ? "text-emerald bg-emerald/[0.03]"
                          : "text-navy/70"
                      }`}
                    >
                      {tool}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-neutral-100/80 transition-colors hover:bg-neutral-50/50 ${
                      ri === rows.length - 1 ? "border-0" : ""
                    }`}
                  >
                    <td className="py-5 pl-6 pr-4 text-sm font-medium text-navy">
                      {row.feature}
                    </td>
                    {row.values.map((cell, i) => (
                      <td
                        key={i}
                        className={`py-5 px-4 text-center ${
                          i === 0 ? "bg-emerald/[0.03]" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <CellIcon v={cell.v} />
                          {cell.label && (
                            <span className="text-[0.7rem] font-medium text-navy/40">
                              {cell.label}
                            </span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
