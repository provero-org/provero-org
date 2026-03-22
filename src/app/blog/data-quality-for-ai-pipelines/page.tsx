import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Quality for AI Pipelines",
  description:
    "How to use Provero to validate training data, detect drift, and enforce data contracts in ML workflows.",
  alternates: {
    canonical: "https://provero.org/blog/data-quality-for-ai-pipelines",
  },
  openGraph: {
    title: "Data Quality for AI Pipelines",
    description:
      "How to use Provero to validate training data, detect drift, and enforce data contracts in ML workflows.",
    url: "https://provero.org/blog/data-quality-for-ai-pipelines",
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

function Terminal({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-[#0B1120] overflow-hidden">
      {title && (
        <div className="px-5 py-2.5 border-b border-white/5 text-xs font-mono text-slate-400">
          {title}
        </div>
      )}
      <pre className="p-5 text-sm font-mono leading-relaxed text-slate-200 overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}

export default function DataQualityForAI() {
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
              Tutorial
            </span>
            <span className="text-xs text-slate/35 font-mono">
              March 22, 2026
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-[1.1]">
            Data Quality for AI Pipelines
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate/50">
            Your model is only as good as your data. Here&apos;s how to catch
            bad training data, detect drift, and enforce contracts before your
            predictions go wrong.
          </p>
        </header>

        <div className="space-y-12">
          {/* The Problem */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              The garbage in, garbage out problem
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Most ML teams spend 80% of their time on data preparation but
                almost none on data validation. The training pipeline ingests
                whatever it gets. A column that was always positive suddenly has
                negative values. A feature that was 99% complete drops to 70%.
                A categorical field gains a new value nobody mapped.
              </p>
              <p>
                The model trains, deploys, and serves bad predictions for hours
                before anyone notices. The fix is not better models. The fix is
                catching bad data before it reaches the model.
              </p>
            </div>
          </section>

          {/* Step 1: Validate Training Data */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Step 1: Validate training data
            </h2>
            <p className="text-base leading-relaxed text-slate/55 mb-4">
              Create a <Code>provero.yaml</Code> next to your training data.
              Define what &ldquo;good data&rdquo; looks like:
            </p>

            <Terminal title="provero.yaml">{`source:
  type: duckdb
  table: read_parquet('training_data/*.parquet')

checks:
  # No missing values in critical features
  - not_null: [user_id, amount, category, label]

  # Labels are valid
  - accepted_values:
      column: label
      values: [0, 1]

  # Feature ranges are sane
  - range:
      column: amount
      min: 0
      max: 1000000

  # Enough data to train
  - row_count:
      min: 10000

  # Feature completeness above threshold
  - completeness:
      column: category
      min: 95%

  # No duplicate training examples
  - unique: user_id

  # Email format valid (if using as feature)
  - email_validation:
      column: email`}</Terminal>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              Run it before training starts:
            </p>

            <Terminal>
              <span className="text-emerald-light">$</span> provero run -c
              provero.yaml{"\n"}
              <span className="text-slate-400">
                {"# Exit code 1 if any check fails, blocking the pipeline"}
              </span>
            </Terminal>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              In Airflow, add it as the first task in your training DAG:
            </p>

            <Terminal title="dags/training.py">{`from provero.airflow.operators import ProveroCheckOperator

validate_data = ProveroCheckOperator(
    task_id="validate_training_data",
    config_path="dags/provero.yaml",
)

train_model = PythonOperator(...)

validate_data >> train_model  # blocks training if data is bad`}</Terminal>
          </section>

          {/* Step 2: Detect Drift */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Step 2: Detect data drift
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Data drift happens when the statistical properties of your input
                data change over time. A feature that averaged 50 last month now
                averages 200. Provero&apos;s anomaly detection catches this
                automatically by comparing current metrics against historical
                baselines.
              </p>
            </div>

            <Terminal title="provero.yaml">{`checks:
  # Flag if row count drops/spikes unexpectedly
  - row_count_change:
      max_decrease: 20%

  # Statistical anomaly detection on key metrics
  - anomaly:
      column: amount
      method: mad        # robust to outliers
      sensitivity: medium

  - anomaly:
      column: prediction_score
      method: zscore
      sensitivity: high  # stricter for model outputs`}</Terminal>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              The anomaly check uses your result history as the baseline. Run{" "}
              <Code>provero run</Code> daily to build up the history, then
              anomalies are flagged automatically. No separate configuration,
              no external service, no scipy dependency.
            </p>
          </section>

          {/* Step 3: Data Contracts */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Step 3: Enforce data contracts
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                In ML teams, data producers (backend, data engineering) and data
                consumers (ML engineers, analysts) often have different
                assumptions about what the data looks like. Data contracts make
                these assumptions explicit.
              </p>
            </div>

            <Terminal title="provero.yaml">{`contracts:
  - name: user_features_contract
    owner: data-engineering
    version: "2.1"
    table: user_features
    on_violation: block   # fail the pipeline

    schema:
      columns:
        - name: user_id
          type: integer
          checks: [not_null, unique]
        - name: lifetime_value
          type: float
          checks: [not_null]
        - name: segment
          type: varchar

    sla:
      freshness: 24h       # data must be < 24h old
      completeness: "99%"   # 99% non-null across all columns`}</Terminal>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              When a data producer changes the schema (renames a column, changes
              a type), <Code>provero contract diff</Code> catches it:
            </p>

            <Terminal>
              <span className="text-emerald-light">$</span> provero contract
              diff v2.0.yaml v2.1.yaml{"\n"}
              <span className="text-red-400">
                BREAKING: column &apos;ltv&apos; renamed to
                &apos;lifetime_value&apos;
              </span>
              {"\n"}
              <span className="text-amber-300">
                CHANGE: column &apos;segment&apos; type changed varchar(10) to
                varchar
              </span>
            </Terminal>
          </section>

          {/* Step 4: Continuous Monitoring */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Step 4: Monitor in production
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate/55">
              <p>
                Once the model is deployed, the prediction input data needs
                continuous validation. Use <Code>provero watch</Code> to run
                checks on a schedule:
              </p>
            </div>

            <Terminal>
              <span className="text-emerald-light">$</span> provero watch -c
              production_checks.yaml --interval 5m{"\n"}
              <span className="text-slate-400">
                {"# Runs checks every 5 minutes, alerts on failure"}
              </span>
            </Terminal>

            <p className="mt-4 text-base leading-relaxed text-slate/55">
              Add a webhook alert to Slack or PagerDuty:
            </p>

            <Terminal title="production_checks.yaml">{`alerts:
  - type: webhook
    url: \${SLACK_WEBHOOK}
    trigger: on_failure

  - type: webhook
    url: \${PAGERDUTY_WEBHOOK}
    trigger: on_failure
    headers:
      Authorization: "Bearer \${PD_TOKEN}"`}</Terminal>
          </section>

          {/* Putting it all together */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">
              The full picture
            </h2>

            <div className="space-y-3">
              {[
                {
                  step: "1",
                  label: "Before training",
                  desc: "Validate schema, completeness, and ranges. Block pipeline if checks fail.",
                  cmd: "provero run -c training_checks.yaml",
                },
                {
                  step: "2",
                  label: "After training",
                  desc: "Compare validation set metrics against training set. Detect drift.",
                  cmd: "provero run -c validation_checks.yaml",
                },
                {
                  step: "3",
                  label: "Before deploy",
                  desc: "Enforce data contracts between producer and consumer.",
                  cmd: "provero contract validate -c contracts.yaml",
                },
                {
                  step: "4",
                  label: "In production",
                  desc: "Continuously monitor input data quality. Alert on anomalies.",
                  cmd: "provero watch -c prod_checks.yaml -i 5m",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-neutral-200/80 p-5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald/10 text-emerald font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{item.label}</p>
                    <p className="text-sm text-slate/55 mt-1">{item.desc}</p>
                    <p className="text-xs font-mono text-emerald/70 mt-2">
                      $ {item.cmd}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <p className="text-base leading-relaxed text-slate/55 mb-6">
              All of this runs locally, on your infra, with no cloud
              dependency. Apache 2.0. Install and try it:
            </p>

            <Terminal>
              <span className="text-emerald-light">$</span> pip install provero
              {"\n"}
              <span className="text-emerald-light">$</span> provero init
              {"\n"}
              <span className="text-emerald-light">$</span> provero run
            </Terminal>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/provero-org/provero"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
              >
                GitHub
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
