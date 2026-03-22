import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Provero vs Great Expectations vs Soda Core",
  description:
    "A deep comparison of three data quality tools: config complexity, licensing, and feature parity.",
  alternates: {
    canonical: "https://provero.org/blog/provero-vs-gx-vs-soda",
  },
  openGraph: {
    title: "Provero vs Great Expectations vs Soda Core",
    description:
      "A deep comparison of three data quality tools: config complexity, licensing, and feature parity.",
    url: "https://provero.org/blog/provero-vs-gx-vs-soda",
    type: "article",
    publishedTime: "2026-03-22",
  },
};

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-emerald bg-emerald/5 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  );
}

function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-[#0B1120] p-5 overflow-x-auto">
      <pre className="text-sm font-mono leading-relaxed text-slate-200">
        {children}
      </pre>
    </div>
  );
}

export default function ProveroVsGxVsSoda() {
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
            <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              Comparison
            </span>
            <span className="text-xs text-slate/35 font-mono">
              March 22, 2026
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-[1.1]">
            Provero vs Great Expectations vs Soda Core
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate/50">
            Three tools, three philosophies. Here&apos;s how they compare on
            what actually matters: how much code you write, what license you
            accept, and what you get out of the box.
          </p>
        </header>

        <div className="space-y-12">
          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-6">
              At a glance
            </h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200/80">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200/80 bg-neutral-50/50">
                    <th className="text-left p-4 font-semibold text-navy"></th>
                    <th className="text-left p-4 font-semibold text-emerald">
                      Provero
                    </th>
                    <th className="text-left p-4 font-semibold text-navy/60">
                      Great Expectations
                    </th>
                    <th className="text-left p-4 font-semibold text-navy/60">
                      Soda Core
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate/55">
                  {[
                    ["License", "Apache 2.0", "Apache 2.0", "ELv2 (restricted)"],
                    ["Config format", "YAML", "Python + YAML", "SodaCL (YAML-like)"],
                    ["Lines for 5 checks", "~10", "~80", "~15"],
                    ["Check types", "16", "50+", "25+"],
                    ["Anomaly detection", "Built-in (stdlib)", "Via plugins", "Cloud only"],
                    ["CLI tool", "Yes", "No (Python API)", "Yes"],
                    ["Data contracts", "Yes", "No", "Partial"],
                    ["dbt integration", "Export command", "Native", "Native"],
                    ["Airflow provider", "Yes", "Yes", "Yes"],
                    ["Cloud/SaaS", "No", "GX Cloud (paid)", "Soda Cloud (paid)"],
                    ["Streaming support", "Not yet", "Not yet", "Not yet"],
                    ["Maturity", "New (v0.2)", "Established (v1.x)", "Established (v3.x)"],
                  ].map(([label, provero, gx, soda]) => (
                    <tr
                      key={label}
                      className="border-b border-neutral-200/60 last:border-0"
                    >
                      <td className="p-4 font-medium text-navy">{label}</td>
                      <td className="p-4 text-emerald font-medium">{provero}</td>
                      <td className="p-4">{gx}</td>
                      <td className="p-4">{soda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Config Complexity */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Config complexity
            </h2>
            <p className="text-base leading-relaxed text-slate/55 mb-6">
              The same validation (not_null + unique + range on an orders table)
              in each tool:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-emerald mb-2">
                  Provero (8 lines)
                </p>
                <Terminal>{`source:
  type: postgres
  connection: \${POSTGRES_URI}
  table: orders

checks:
  - not_null: [order_id, amount]
  - unique: order_id
  - range:
      column: amount
      min: 0`}</Terminal>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate/50 mb-2">
                  Soda Core (12 lines)
                </p>
                <Terminal>{`checks for orders:
  - missing_count(order_id) = 0
  - missing_count(amount) = 0
  - duplicate_count(order_id) = 0
  - min(amount) >= 0`}</Terminal>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate/50 mb-2">
                  Great Expectations (~40 lines of Python)
                </p>
                <Terminal>{`import great_expectations as gx

context = gx.get_context()
ds = context.sources.add_postgres(
    "my_pg", connection_string=POSTGRES_URI
)
asset = ds.add_table_asset("orders", table_name="orders")
batch = asset.build_batch_request()

suite = context.add_expectation_suite("orders_suite")
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(
        column="order_id"
    )
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(
        column="amount"
    )
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToBeUnique(
        column="order_id"
    )
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToBeBetween(
        column="amount", min_value=0
    )
)

checkpoint = context.add_checkpoint(...)
result = checkpoint.run()`}</Terminal>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate/55">
              Provero and Soda are in the same ballpark for simple configs. GX
              requires significantly more boilerplate. The gap grows with check
              count: Provero stays linear (one line per check), GX grows
              quadratically.
            </p>
          </section>

          {/* Licensing */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Licensing
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                This is where the three tools diverge most. Great Expectations
                core is Apache 2.0, same as Provero. You can use, modify, and
                distribute it without restrictions.
              </p>
              <p>
                Soda Core moved to the Elastic License v2 (ELv2) in 2023. ELv2
                prohibits offering Soda as a managed service and restricts some
                commercial uses. If you&apos;re building an internal tool, you&apos;re
                probably fine. If you&apos;re a data platform vendor or consultancy
                embedding Soda in your product, you need a commercial license.
              </p>
              <p>
                Provero is Apache 2.0 with no plans to change. The anomaly
                detection, data contracts, and all 16 check types ship in the
                open source package. There is no &ldquo;cloud-only&rdquo; tier.
              </p>
            </div>
          </section>

          {/* Feature Parity */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Where each tool wins
            </h2>
            <div className="space-y-3">
              {[
                {
                  tool: "Provero",
                  color: "text-emerald",
                  bg: "bg-emerald/5",
                  border: "border-emerald/20",
                  wins: "Simplest config. Built-in anomaly detection with no dependencies. FK validation in YAML. SodaCL migration in one command. Apache 2.0 with zero feature gates.",
                },
                {
                  tool: "Great Expectations",
                  color: "text-navy/70",
                  bg: "bg-neutral-50",
                  border: "border-neutral-200/80",
                  wins: "Largest check library (50+). Mature ecosystem with extensive docs. Native dbt and Spark integration. Data docs generation. Battle-tested in production at scale.",
                },
                {
                  tool: "Soda Core",
                  color: "text-navy/70",
                  bg: "bg-neutral-50",
                  border: "border-neutral-200/80",
                  wins: "Clean SodaCL syntax. Good incident management in Soda Cloud. Native dbt integration. Schema evolution detection. Broader connector support.",
                },
              ].map((item) => (
                <div
                  key={item.tool}
                  className={`rounded-xl border ${item.border} ${item.bg} p-5`}
                >
                  <p className={`font-bold text-sm ${item.color} mb-2`}>
                    {item.tool}
                  </p>
                  <p className="text-sm text-slate/55 leading-relaxed">
                    {item.wins}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* When to use what */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              When to use what
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                <strong className="text-navy">Use Provero</strong> if you want
                the fastest path from zero to validated data. If you&apos;re a small
                team, a solo data engineer, or someone who values simplicity and
                open licensing over ecosystem breadth.
              </p>
              <p>
                <strong className="text-navy">Use Great Expectations</strong>{" "}
                if you need the largest check library, have a Python-heavy team
                comfortable with programmatic APIs, or need GX Cloud for
                collaboration.
              </p>
              <p>
                <strong className="text-navy">Use Soda</strong> if you&apos;re
                already invested in the Soda ecosystem, need Soda Cloud
                features, or the ELv2 license terms work for your use case.
              </p>
            </div>
          </section>

          {/* Migration */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Switching from Soda to Provero
            </h2>
            <p className="text-base leading-relaxed text-slate/55 mb-4">
              If you&apos;re considering a move, the switching cost is low:
            </p>
            <Terminal>
              <span className="text-emerald-light">$</span> provero import soda
              your_checks.yaml -o provero.yaml{"\n"}
              <span className="text-emerald-light">$</span> provero run
            </Terminal>
            <p className="mt-4 text-base leading-relaxed text-slate/55">
              The converter handles{" "}
              <Code>missing_count</Code>,{" "}
              <Code>duplicate_count</Code>,{" "}
              <Code>row_count</Code>,{" "}
              <Code>freshness</Code>, and{" "}
              <Code>valid values</Code>.
              Unsupported checks are preserved as comments.
            </p>
          </section>

          {/* CTA */}
          <section className="pt-4">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/provero-org/provero"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
              >
                Try Provero
              </a>
              <a
                href="https://provero-org.github.io/provero/"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-neutral-50 transition-colors"
              >
                Read the docs
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
