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
    <main className="min-h-screen pt-24">
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm font-mono text-emerald hover:underline"
            >
              &larr; Back to blog
            </Link>
          </div>

          <header className="mb-12">
            <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
              Story
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Why We Built Provero
            </h1>
            <p className="mt-4 text-slate/50 font-mono text-sm">
              March 21, 2026
            </p>
          </header>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-navy prose-a:text-emerald prose-code:text-emerald prose-code:bg-emerald/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
            <p className="text-xl leading-relaxed">
              Data quality tools have a pattern: start open source, gain
              traction, then change the license. The checks that worked
              yesterday now require an enterprise contract. Provero exists
              because we think data quality should stay open.
            </p>

            <h2>The problem with existing tools</h2>

            <p>
              If you work with data pipelines, you know the landscape. Great
              Expectations is powerful but requires hundreds of lines of Python
              to define what should be a simple check. Soda Core started as a
              clean YAML-first tool, then moved to the Elastic License v2,
              locking features behind a commercial product. Monte Carlo and
              similar tools are SaaS-only, starting at five figures per year.
            </p>

            <p>
              The common thread: you either pay with complexity, pay with money,
              or pay with vendor lock-in. Usually all three.
            </p>

            <h2>What we wanted</h2>

            <p>A data quality tool that is:</p>

            <ul>
              <li>
                <strong>Declarative.</strong> Define checks in YAML, not Python
                classes. Three lines to validate a column, not thirty.
              </li>
              <li>
                <strong>Truly open source.</strong> Apache License 2.0. No
                asterisks, no feature gates, no license changes down the road.
              </li>
              <li>
                <strong>Fast.</strong> 1 million rows checked in under 50ms.
                The engine compiles N checks into a single SQL query.
              </li>
              <li>
                <strong>Portable.</strong> DuckDB, PostgreSQL, Snowflake,
                BigQuery, MySQL, Redshift. Same YAML, any database.
              </li>
            </ul>

            <h2>What Provero does today</h2>

            <p>
              Provero ships with 16 check types, from basics like{" "}
              <code>not_null</code> and <code>unique</code> to advanced checks
              like <code>referential_integrity</code> (FK validation between
              tables) and <code>anomaly</code> (Z-Score, MAD, IQR with zero
              external dependencies).
            </p>

            <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto">
              <code>{`source:
  type: duckdb
  table: orders

checks:
  - not_null: [order_id, customer_id, amount]
  - unique: order_id
  - range:
      column: amount
      min: 0
      max: 100000`}</code>
            </pre>

            <p>
              Run <code>provero run</code> and get a colored table with pass/fail
              results, a quality score, and failing row queries. Run{" "}
              <code>provero watch --interval 5m</code> for continuous
              monitoring. Export to dbt with <code>provero export dbt</code>.
              Migrating from Soda? <code>provero import soda checks.yaml</code>{" "}
              converts your config in one command.
            </p>

            <h2>Migrating from Soda</h2>

            <p>
              When Soda moved to ELv2, teams using the open source version
              faced a choice: accept the new license terms, or find an
              alternative. Provero is that alternative.
            </p>

            <p>
              If you have SodaCL checks, converting them takes one command:
            </p>

            <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto">
              <code>{`provero import soda soda_checks.yaml -o provero.yaml`}</code>
            </pre>

            <p>
              The converter maps <code>missing_count</code> to{" "}
              <code>not_null</code>, <code>duplicate_count</code> to{" "}
              <code>unique</code>, and so on. Unsupported checks are included
              as comments so you can handle them manually.
            </p>

            <h2>What comes next</h2>

            <p>
              Provero 0.2.0 is available today on{" "}
              <a href="https://pypi.org/project/provero/">PyPI</a>. Install it
              with <code>pip install provero</code>, run{" "}
              <code>provero init</code>, and tell us what breaks.
            </p>

            <p>
              The roadmap includes Kafka/Kinesis connectors for streaming, a
              REST API for server mode, and more orchestrator integrations
              (Dagster, Prefect). Everything will stay Apache 2.0.
            </p>

            <p>
              GitHub:{" "}
              <a href="https://github.com/provero-org/provero">
                github.com/provero-org/provero
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
