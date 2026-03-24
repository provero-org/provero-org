"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  {
    title: "Getting Started",
    description: "Install Provero and run your first data quality check in under a minute.",
    href: "https://github.com/provero-org/provero#quick-start",
  },
  {
    title: "Configuration Reference",
    description: "All YAML configuration options, check types, and source definitions.",
    href: "https://github.com/provero-org/provero#configuration",
  },
  {
    title: "Check Types",
    description: "16 built-in check types: not_null, unique, range, regex, freshness, anomaly, referential_integrity and more.",
    href: "https://github.com/provero-org/provero#check-types",
  },
  {
    title: "Connectors",
    description: "Connect to DuckDB, PostgreSQL, MySQL, Snowflake, BigQuery, Pandas, Polars, and more.",
    href: "https://github.com/provero-org/provero#connectors",
  },
  {
    title: "Anomaly Detection",
    description: "Built-in statistical anomaly detection with Z-Score, MAD, and IQR methods.",
    href: "https://github.com/provero-org/provero#anomaly-detection",
  },
  {
    title: "Data Contracts",
    description: "Schema validation, SLA enforcement, and contract diffs. Define ownership and accountability for your data.",
    href: "https://github.com/provero-org/provero#data-contracts",
  },
  {
    title: "CLI Reference",
    description: "provero run, profile, watch, import soda, export dbt. Full command reference.",
    href: "https://github.com/provero-org/provero#cli",
  },
  {
    title: "Airflow Integration",
    description: "ProveroCheckOperator and decorators for Apache Airflow. Plug into your existing DAGs.",
    href: "https://github.com/provero-org/provero#airflow",
  },
  {
    title: "API Reference",
    description: "Python API for programmatic usage, custom integrations, and result store.",
    href: "https://github.com/provero-org/provero#api",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
                Documentation
              </span>
              <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl lg:text-[5.5rem]">
                Docs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate/50">
                Everything you need to get started with Provero.
              </p>
              <a
                href="https://github.com/provero-org/provero#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-dark hover:shadow-lg hover:-translate-y-0.5"
              >
                Full Documentation on GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, i) => (
              <AnimateOnScroll key={link.title} delay={i * 0.08}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-neutral-200/80 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 h-full"
                >
                  <h3 className="text-lg font-bold text-navy group-hover:text-emerald transition-colors">
                    {link.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate/50">
                    {link.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
