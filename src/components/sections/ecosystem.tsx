"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { ArrowRight } from "lucide-react";

const logoUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const categories = [
  {
    title: "Databases",
    description: "Connect directly to your production or analytical databases.",
    items: [
      { name: "DuckDB", status: "stable", icon: logoUrl("duckdb") },
      { name: "PostgreSQL", status: "stable", icon: logoUrl("postgresql") },
      { name: "MySQL", status: "beta", icon: logoUrl("mysql") },
      { name: "SQLite", status: "beta", icon: logoUrl("sqlite") },
    ],
  },
  {
    title: "Cloud Warehouses",
    description: "Validate data at scale in your cloud data platform.",
    items: [
      { name: "Snowflake", status: "beta", icon: logoUrl("snowflake") },
      { name: "BigQuery", status: "beta", icon: logoUrl("googlebigquery") },
      { name: "Redshift", status: "beta", icon: logoUrl("amazonredshift") },
    ],
  },
  {
    title: "DataFrames",
    description: "Run checks on in-memory data without a database connection.",
    items: [
      { name: "Pandas", status: "stable", icon: logoUrl("pandas") },
      { name: "Polars", status: "stable", icon: logoUrl("polars") },
    ],
  },
  {
    title: "Orchestration & Alerts",
    description: "Integrate into your existing workflow and notification stack.",
    items: [
      { name: "Apache Airflow", status: "stable", icon: logoUrl("apacheairflow") },
      { name: "Slack", status: "stable", icon: logoUrl("slack") },
      { name: "PagerDuty", status: "beta", icon: logoUrl("pagerduty") },
    ],
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
              Ecosystem
            </span>
            <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Runs where your{" "}
              <span className="text-emerald">data</span>{" "}
              lives
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-navy/50">
              Same YAML, same checks, any source. From local DuckDB files to cloud warehouses,
              Provero connects natively without extra drivers or plugins.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-neutral-200/80 bg-off-white p-8 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                <h3 className="text-xl font-bold text-navy">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/45 flex-1">
                  {cat.description}
                </p>
                <div className="mt-6 space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald/10 p-1.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-full w-full object-contain opacity-70"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-medium text-navy">{item.name}</span>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-semibold px-2 py-0.5 rounded-full ${
                        item.status === "stable"
                          ? "text-emerald bg-emerald/10"
                          : "text-gold bg-gold/10"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="mt-12 flex items-center justify-between rounded-2xl border border-neutral-200/80 bg-navy px-10 py-8">
            <div>
              <p className="text-lg font-semibold text-white">
                Missing a connector?
              </p>
              <p className="mt-1 text-sm text-white/45">
                Provero has a plugin system. Build your own or request one.
              </p>
            </div>
            <a
              href="https://github.com/provero-org/provero/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-light hover:-translate-y-0.5 shrink-0"
            >
              Request Connector
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
