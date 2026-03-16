"use client";

import { Particles } from "@/components/magicui/particles";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-0">
      <Particles className="absolute inset-0 h-full w-full" quantity={40} color="#10B981" size={0.3} />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8 pb-36">
        <AnimateOnScroll>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your data deserves{" "}
            <span className="text-gold-light">
              proof
            </span>
            .
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-white/55">
            We&apos;re building Provero in the open. Star the repo to follow our progress and be the first to know when we launch.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/provero-org/provero#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 items-center gap-2 rounded-xl bg-emerald px-10 text-lg font-semibold text-white shadow-lg shadow-emerald/30 transition-all hover:bg-emerald-light hover:shadow-xl hover:shadow-emerald/40 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/provero-org/provero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-xl border border-white/15 bg-white/5 px-10 text-lg font-medium text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
            >
              Star on GitHub
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Gradient fade into footer */}
      <div className="h-px bg-white/[0.06]" />
    </section>
  );
}
