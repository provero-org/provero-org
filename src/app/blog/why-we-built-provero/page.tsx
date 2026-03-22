import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why We Built Provero",
  description:
    "The data quality ecosystem has a problem. Here's why we built Provero.",
  alternates: {
    canonical: "https://provero.org/blog/why-we-built-provero",
  },
  openGraph: {
    title: "Why We Built Provero",
    description:
      "The data quality ecosystem has a problem. Here's why we built Provero.",
    url: "https://provero.org/blog/why-we-built-provero",
    type: "article",
    publishedTime: "2026-03-21",
  },
};

export default function WhyWeBuiltProvero() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <article className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/blog"
            className="text-sm font-mono text-emerald hover:underline"
          >
            &larr; Blog
          </Link>
        </div>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
              Story
            </span>
            <span className="text-xs text-slate/35 font-mono">
              March 21, 2026
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-[1.1]">
            Why We Built Provero
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate/50">
            Data quality tools have a pattern: start open source, gain traction,
            then change the license. The checks that worked yesterday now
            require an enterprise contract. Provero exists because we think data
            quality should stay open.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              The problem with existing tools
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Great Expectations is powerful but requires hundreds of lines of
                Python to define what should be a simple check. Soda Core
                started as a clean YAML-first tool, then moved to the Elastic
                License v2, locking features behind a commercial product. Monte
                Carlo and similar tools are SaaS-only, starting at five figures
                per year.
              </p>
              <p>
                The common thread: you either pay with complexity, pay with
                money, or pay with vendor lock-in. Usually all three.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              What we wanted
            </h2>
            <div className="space-y-3">
              {[
                {
                  label: "Declarative.",
                  text: "Define checks in YAML, not Python classes. Three lines to validate a column, not thirty.",
                },
                {
                  label: "Truly open source.",
                  text: "Apache License 2.0. No asterisks, no feature gates, no license changes down the road.",
                },
                {
                  label: "Fast.",
                  text: "1 million rows checked in under 50ms. The engine compiles N checks into a single SQL query.",
                },
                {
                  label: "Portable.",
                  text: "DuckDB, PostgreSQL, Snowflake, BigQuery, MySQL, Redshift. Same YAML, any database.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-xl border border-neutral-200/80 p-4"
                >
                  <span className="text-emerald font-bold text-sm mt-0.5 shrink-0">
                    ✓
                  </span>
                  <p className="text-base text-slate/55">
                    <strong className="text-navy">{item.label}</strong>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              What Provero does today
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Provero ships with 16 check types: from basics like{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  not_null
                </code>{" "}
                and{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  unique
                </code>{" "}
                to advanced checks like{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  referential_integrity
                </code>{" "}
                (FK validation between tables) and{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  anomaly
                </code>{" "}
                (Z-Score, MAD, IQR with zero external dependencies).
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-[#0B1120] p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code>
                  <span className="text-slate-500">{"# provero.yaml"}</span>
                  {"\n"}
                  <span className="text-emerald-light">source</span>
                  <span className="text-slate-400">:</span>
                  {"\n  "}
                  <span className="text-emerald-light">type</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-amber-300"> duckdb</span>
                  {"\n  "}
                  <span className="text-emerald-light">table</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-amber-300"> orders</span>
                  {"\n\n"}
                  <span className="text-emerald-light">checks</span>
                  <span className="text-slate-400">:</span>
                  {"\n  "}
                  <span className="text-slate-400">-</span>
                  <span className="text-emerald-light"> not_null</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-amber-300">
                    {" [order_id, customer_id, amount]"}
                  </span>
                  {"\n  "}
                  <span className="text-slate-400">-</span>
                  <span className="text-emerald-light"> unique</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-amber-300"> order_id</span>
                  {"\n  "}
                  <span className="text-slate-400">-</span>
                  <span className="text-emerald-light"> range</span>
                  <span className="text-slate-400">:</span>
                  {"\n      "}
                  <span className="text-emerald-light">column</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-amber-300"> amount</span>
                  {"\n      "}
                  <span className="text-emerald-light">min</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-purple-300"> 0</span>
                  {"\n      "}
                  <span className="text-emerald-light">max</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-purple-300"> 100000</span>
                </code>
              </pre>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Run{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  provero run
                </code>{" "}
                and get a colored table with pass/fail results, a quality score,
                and failing row queries. Run{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  provero watch --interval 5m
                </code>{" "}
                for continuous monitoring. Export to dbt with{" "}
                <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                  provero export dbt
                </code>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Migrating from Soda
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                When Soda moved to ELv2, teams using the open source version
                faced a choice: accept the new license terms, or find an
                alternative. If you have SodaCL checks, converting them takes
                one command:
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-[#0B1120] p-5 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-200">
                <span className="text-emerald-light">$</span> provero import
                soda soda_checks.yaml -o provero.yaml
              </pre>
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              The converter maps{" "}
              <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                missing_count
              </code>{" "}
              to{" "}
              <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                not_null
              </code>
              ,{" "}
              <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                duplicate_count
              </code>{" "}
              to{" "}
              <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
                unique
              </code>
              , and so on. Unsupported checks are included as comments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Get started
            </h2>

            <div className="rounded-xl bg-[#0B1120] p-5 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-200">
                <span className="text-emerald-light">$</span> pip install
                provero{"\n"}
                <span className="text-emerald-light">$</span> provero init
                {"\n"}
                <span className="text-emerald-light">$</span> provero run
              </pre>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/provero-org/provero"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://pypi.org/project/provero/"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-neutral-50 transition-colors"
              >
                PyPI
              </a>
              <a
                href="https://provero-org.github.io/provero/"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-neutral-50 transition-colors"
              >
                Docs
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
