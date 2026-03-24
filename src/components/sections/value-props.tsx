"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function ValueProps() {
  return (
    <section id="features" className="py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Declarative - tall card */}
          <AnimateOnScroll className="lg:row-span-2">
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-200/80 bg-gradient-to-b from-emerald/[0.04] to-white p-10 h-full transition-all hover:shadow-xl hover:shadow-emerald/[0.05]">
              <BorderBeam size={200} duration={15} borderWidth={1} />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">Declarative</h3>
              <p className="mt-3 text-base leading-relaxed text-navy/50">
                Data quality in 3 lines of YAML. No boilerplate, no classes to extend,
                no framework to learn. Write what you expect, Provero handles the rest.
              </p>
              <div className="mt-8 rounded-xl bg-navy p-5 overflow-hidden">
                <pre className="font-mono text-[0.85rem] leading-relaxed">
                  <span className="text-emerald-light">checks</span><span className="text-white/30">:</span>{"\n"}
                  <span className="text-gold-light">{"  - "}</span><span className="text-emerald-light">not_null</span><span className="text-white/30">: </span><span className="text-gold-light">[id, amount]</span>{"\n"}
                  <span className="text-gold-light">{"  - "}</span><span className="text-emerald-light">unique</span><span className="text-white/30">: </span><span className="text-gold-light">id</span>
                </pre>
              </div>
              <p className="mt-6 text-sm text-navy/35 leading-relaxed">
                16 check types: not_null, unique, range, regex, freshness, anomaly, custom_sql,
                row_count, completeness, accepted_values, type, latency, unique_combination,
                row_count_change, referential_integrity, email_validation.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Anomaly Detection - top right */}
          <AnimateOnScroll delay={0.1} className="lg:col-span-2">
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-gold/[0.04] to-white p-10 h-full transition-all hover:shadow-xl hover:shadow-gold/[0.05]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">Free Anomaly Detection</h3>
              <p className="mt-3 text-base leading-relaxed text-navy/50 max-w-lg">
                Z-Score, MAD, IQR. No scipy, no cloud subscription, no asterisks.
                Statistical anomaly detection that runs locally, built into the core.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Z-Score", "MAD", "IQR", "stdlib only", "no cloud needed"].map((tag) => (
                  <span key={tag} className="rounded-full bg-gold/8 border border-gold/15 px-3 py-1.5 text-sm font-medium text-gold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Apache 2.0 - bottom right */}
          <AnimateOnScroll delay={0.2} className="lg:col-span-2">
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-navy/[0.03] to-white p-10 h-full transition-all hover:shadow-xl hover:shadow-navy/[0.05]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/8 text-navy mb-6">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Apache 2.0. Forever.</h3>
                  <p className="mt-3 text-base leading-relaxed text-navy/50 max-w-md">
                    No vendor lock-in. No surprise license changes. No features behind a paywall.
                    Same simplicity as Soda, real open source license. Same power as GX, 90% less config.
                  </p>
                </div>
                <div className="hidden sm:block shrink-0 rounded-xl bg-navy/[0.04] p-5 text-center">
                  <span className="block text-4xl font-extrabold text-navy">100%</span>
                  <span className="text-sm text-navy/40">open source</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
