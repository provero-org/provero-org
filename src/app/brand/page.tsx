"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const colors = [
  { name: "Emerald", hex: "#059669", var: "--emerald", className: "bg-emerald" },
  { name: "Emerald Light", hex: "#10B981", var: "--emerald-light", className: "bg-emerald-light" },
  { name: "Emerald Dark", hex: "#047857", var: "--emerald-dark", className: "bg-emerald-dark" },
  { name: "Gold", hex: "#D97706", var: "--gold", className: "bg-gold" },
  { name: "Navy", hex: "#0F172A", var: "--navy", className: "bg-navy" },
  { name: "Slate", hex: "#1E293B", var: "--slate", className: "bg-slate" },
  { name: "Off White", hex: "#F8FAFC", var: "--off-white", className: "bg-off-white" },
];

const fonts = [
  {
    name: "Instrument Sans",
    usage: "Headings, body text, navigation",
    weights: "400, 500, 600, 700",
    sample: "The quick brown fox jumps over the lazy dog",
    className: "font-sans",
  },
  {
    name: "IBM Plex Mono",
    usage: "Code, labels, terminal output",
    weights: "400, 500, 600, 700",
    sample: "provero run --source postgres",
    className: "font-mono",
  },
];

export default function BrandPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
                Brand
              </span>
              <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl lg:text-[5.5rem]">
                Brand{" "}
                <span className="text-emerald">
                  Kit
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate/50">
                Colors, typography, and guidelines for the Provero brand.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Logo */}
          <AnimateOnScroll>
            <div className="mb-20">
              <h2 className="text-3xl font-extrabold text-navy mb-8">Logo</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center justify-center rounded-2xl border border-neutral-200/80 bg-white p-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-full.svg" alt="Provero logo" className="h-16" />
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-neutral-200/80 bg-navy p-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-full-white.svg" alt="Provero logo (white)" className="h-16" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 mt-6">
                <div className="flex items-center justify-center gap-3 rounded-2xl border border-neutral-200/80 bg-white p-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark.svg" alt="Provero mark" className="h-14 w-auto" />
                  <span className="font-[family-name:var(--font-brand)] text-2xl font-semibold tracking-[-0.02em] text-navy">Provero</span>
                </div>
                <div className="flex items-center justify-center gap-3 rounded-2xl border border-neutral-200/80 bg-navy p-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark-white.svg" alt="Provero mark" className="h-14 w-auto" />
                  <span className="font-[family-name:var(--font-brand)] text-2xl font-semibold tracking-[-0.02em] text-white">Provero</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Colors */}
          <AnimateOnScroll>
            <div className="mb-20">
              <h2 className="text-3xl font-extrabold text-navy mb-8">Colors</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {colors.map((color) => (
                  <div key={color.name} className="rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
                    <div className={`h-24 ${color.className}`} />
                    <div className="p-4">
                      <p className="font-semibold text-navy text-sm">{color.name}</p>
                      <p className="font-mono text-xs text-slate/40 mt-1">{color.hex}</p>
                      <p className="font-mono text-xs text-slate/30 mt-0.5">{color.var}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Typography */}
          <AnimateOnScroll>
            <div className="mb-20">
              <h2 className="text-3xl font-extrabold text-navy mb-8">Typography</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {fonts.map((font) => (
                  <div key={font.name} className="rounded-2xl border border-neutral-200/80 bg-white p-8">
                    <h3 className="text-lg font-bold text-navy">{font.name}</h3>
                    <p className="mt-1 text-sm text-slate/40">{font.usage}</p>
                    <p className="mt-1 font-mono text-xs text-slate/30">Weights: {font.weights}</p>
                    <div className="mt-6 rounded-xl bg-off-white p-6">
                      <p className={`text-2xl text-navy ${font.className}`}>
                        {font.sample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Guidelines */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl font-extrabold text-navy mb-8">Guidelines</h2>
              <div className="rounded-2xl border border-neutral-200/80 bg-white p-8">
                <ul className="space-y-4 text-base text-slate/55">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald shrink-0" />
                    Always use the Provero green (#059669) as the primary brand color.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald shrink-0" />
                    Use Instrument Sans for all UI text. IBM Plex Mono for code and terminal elements.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald shrink-0" />
                    The logo must always include both the &quot;P&quot; mark and the &quot;provero&quot; wordmark.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald shrink-0" />
                    Minimum clear space around the logo: 1x the height of the &quot;P&quot; mark.
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
