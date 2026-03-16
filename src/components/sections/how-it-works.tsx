"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const steps = [
  {
    num: "1",
    title: "Install",
    cmd: "pip install provero && provero init",
    note: "Pure Python. No Java, no Spark, no Docker.",
  },
  {
    num: "2",
    title: "Define",
    cmd: "vim provero.yaml",
    note: "YAML checks. Version-controlled, reviewable in PRs.",
  },
  {
    num: "3",
    title: "Run",
    cmd: "provero run",
    note: "Locally, in CI/CD, or inside Airflow DAGs.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-36 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
              How it works
            </span>
            <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Three commands. That&apos;s it.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 0.1}>
              <div className="relative group">
                {i < 2 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-emerald/30 text-2xl font-mono">&rarr;</div>
                )}
                <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald text-white font-mono text-base font-bold">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  </div>
                  <div className="rounded-lg bg-navy px-5 py-3.5 font-mono text-[0.85rem]">
                    <span className="text-emerald-light font-bold">$ </span>
                    <span className="text-white/80">{step.cmd}</span>
                  </div>
                  <p className="mt-5 text-base text-navy/50">{step.note}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
