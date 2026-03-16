"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function WhyProvero() {
  return (
    <section className="py-36 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left: narrative */}
          <AnimateOnScroll>
            <div>
              <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
                Why Provero
              </span>
              <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
                Your AI is only as good as your data.{" "}
                <span className="text-emerald">
                  Prove it.
                </span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy/55">
                <p>
                  Apache Griffin retired in November 2025. Soda Core moved to ELv2,
                  putting anomaly detection and key features behind a cloud paywall.
                  Great Expectations requires 50+ lines of Python to validate a single table.
                </p>
                <p>
                  There was no truly open source, lightweight, YAML-first data quality tool left.
                  So we built one.
                </p>
                <p className="font-medium text-navy">
                  Provero fills that vacuum. Apache 2.0 licensed, vendor-neutral,
                  zero heavy dependencies. Data quality that belongs to the community.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: timeline */}
          <AnimateOnScroll delay={0.2}>
            <div className="relative pl-8 border-l-2 border-emerald/20">
              <div className="space-y-10">
                {[
                  {
                    date: "Nov 2025",
                    title: "Apache Griffin retires",
                    desc: "The only Apache-licensed DQ engine moves to the attic. The ecosystem loses its open standard.",
                    color: "bg-red-400",
                  },
                  {
                    date: "2024",
                    title: "Soda Core goes ELv2",
                    desc: "Anomaly detection, data contracts, and key features locked behind Soda Cloud. Not truly open source anymore.",
                    color: "bg-gold",
                  },
                  {
                    date: "2025",
                    title: "Provero is born",
                    desc: "Declarative, vendor-neutral, Apache 2.0. Everything built-in. Nothing behind a paywall.",
                    color: "bg-emerald",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full ${item.color} ring-4 ring-off-white`} />
                    <span className="font-mono text-xs font-semibold text-navy/40 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h4 className="mt-1 text-xl font-bold text-navy">{item.title}</h4>
                    <p className="mt-1.5 text-base leading-relaxed text-navy/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
