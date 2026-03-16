"use client";

import { Particles } from "@/components/magicui/particles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ArrowRight, Copy, Check, ChevronRight } from "lucide-react";
import { useState } from "react";

const yamlCode = `source:
  type: postgres
  table: orders

checks:
  - not_null: [id, amount]
  - unique: id
  - range:
      column: amount
      min: 0`;

const terminalLines = [
  { check: "not_null", col: "id", status: "PASS", ok: true },
  { check: "not_null", col: "amount", status: "PASS", ok: true },
  { check: "unique", col: "id", status: "PASS", ok: true },
  { check: "range", col: "amount", status: "FAIL", ok: false },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install provero");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald/[0.03] via-white to-white min-h-screen flex items-center">
      <Particles className="absolute inset-0 h-full w-full" quantity={40} color="#059669" size={0.3} staticity={40} />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy */}
          <div>
            <a
              href="https://github.com/provero-org/provero"
              className="animate-fade-in-up group mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.04] px-4 py-2 shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[0.938rem] font-medium text-gold">Coming Soon &middot; Open Source &middot; Apache 2.0</span>
              <ChevronRight className="h-3.5 w-3.5 text-navy/30 transition-transform group-hover:translate-x-0.5" />
            </a>

            <h1 className="animate-fade-in-up animate-delay-100 text-7xl font-extrabold tracking-tight text-navy sm:text-8xl lg:text-[7rem] lg:leading-[0.95]">
              Prove your{" "}
              <span className="text-emerald">
                data
              </span>
              .
            </h1>

            <p className="animate-fade-in-up animate-delay-200 mt-8 max-w-lg text-xl leading-relaxed text-navy/50">
              Declarative data quality engine. Define checks in YAML, run anywhere,
              catch issues before they break your decisions.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/provero-org/provero#readme"
                className="group flex h-14 items-center gap-2 rounded-xl bg-emerald px-8 text-lg font-semibold text-white shadow-lg shadow-emerald/20 transition-all hover:bg-emerald-dark hover:shadow-xl hover:shadow-emerald/25 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://github.com/provero-org/provero"
                className="flex h-14 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-7 text-base font-medium text-navy shadow-sm transition-all hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
            </div>

            {/* pip install */}
            <button
              onClick={handleCopy}
              className="animate-fade-in-up animate-delay-400 mt-6 group flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50 px-5 py-3 font-mono text-base text-navy/60 transition-all hover:border-emerald/20 hover:bg-emerald/[0.03]"
            >
              <span className="text-emerald font-bold">$</span>
              pip install provero
              {copied ? (
                <Check className="h-4 w-4 text-emerald" />
              ) : (
                <Copy className="h-4 w-4 text-neutral-300 group-hover:text-emerald transition-colors" />
              )}
            </button>
          </div>

          {/* Right: Code panels stacked */}
          <div className="animate-fade-in-up animate-delay-400 relative flex flex-col gap-4">
            {/* Arrow connector */}
            <div className="hidden lg:flex absolute left-1/2 top-[calc(50%-20px)] -translate-x-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-md text-emerald">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>

            {/* YAML */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-navy shadow-2xl shadow-navy/10">
              <BorderBeam size={250} duration={12} />
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-white/30 font-mono">provero.yaml</span>
              </div>
              <pre className="p-5 font-mono text-[0.85rem] leading-relaxed overflow-x-auto">
                <code>
                  {yamlCode.split("\n").map((line, i) => {
                    const trimmed = line.trimStart();
                    const indent = line.length - trimmed.length;
                    const isList = trimmed.startsWith("-");
                    const hasColon = trimmed.includes(":");

                    return (
                      <div key={i} className="min-h-[1.4em]">
                        {isList ? (
                          <>
                            <span className="text-white/20">{" ".repeat(indent)}</span>
                            <span className="text-gold-light">- </span>
                            <span className="text-white/75">{trimmed.slice(2)}</span>
                          </>
                        ) : hasColon ? (
                          <>
                            <span className="text-white/20">{" ".repeat(indent)}</span>
                            <span className="text-emerald-light">{trimmed.split(":")[0]}</span>
                            <span className="text-white/30">:</span>
                            <span className="text-gold-light">{trimmed.substring(trimmed.indexOf(":") + 1)}</span>
                          </>
                        ) : (
                          <span className="text-white/40">{line}</span>
                        )}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Terminal */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-navy shadow-2xl shadow-navy/10">
              <BorderBeam size={200} duration={12} delay={6} colorFrom="#D97706" colorTo="#059669" />
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-white/30 font-mono">terminal</span>
              </div>
              <div className="p-5 font-mono text-[0.85rem]">
                <div className="mb-4">
                  <span className="text-emerald-light font-bold">$ </span>
                  <TypingAnimation text="provero run" duration={80} className="text-white/90" />
                </div>
                <div className="space-y-2">
                  {terminalLines.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${1.5 + i * 0.2}s`, opacity: 0 }}
                    >
                      <span className={row.ok ? "text-emerald-light" : "text-red-400"}>{row.ok ? "\u2713" : "\u2717"}</span>
                      <span className="text-white/55 w-16">{row.check}</span>
                      <span className="text-white/30">{row.col}</span>
                      <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded ${row.ok ? "text-emerald-light bg-emerald/10" : "text-red-400 bg-red-400/10"}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between animate-fade-in-up" style={{ animationDelay: "2.5s", opacity: 0 }}>
                  <span className="text-gold-light font-bold">Score: 75/100</span>
                  <span className="text-white/25 text-xs">3 passed, 1 failed &middot; 18ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
