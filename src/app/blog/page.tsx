"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const posts = [
  {
    title: "Why We Built Provero",
    description:
      "The data quality ecosystem has a problem. Here's why we built a truly open source, YAML-first alternative.",
    date: "March 21, 2026",
    tag: "Story",
    href: "/blog/why-we-built-provero",
  },
  {
    title: "Provero vs Great Expectations vs Soda Core",
    description:
      "A deep comparison of three data quality tools: config complexity, licensing, and feature parity.",
    date: "March 22, 2026",
    tag: "Comparison",
    href: "/blog/provero-vs-gx-vs-soda",
  },
  {
    title: "Data Quality for AI Pipelines",
    description:
      "How to use Provero to validate training data, detect drift, and enforce data contracts in ML workflows.",
    date: "March 22, 2026",
    tag: "Tutorial",
    href: "/blog/data-quality-for-ai-pipelines",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
                Blog
              </span>
              <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl lg:text-[5.5rem]">
                From the{" "}
                <span className="text-emerald">
                  team
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate/50">
                Updates, tutorials, and insights on data quality and the Provero ecosystem.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 lg:grid-cols-3">
            {posts.map((post, i) => {
              const card = (
                <div className="group rounded-2xl border border-neutral-200/80 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                      {post.tag}
                    </span>
                    <span className="text-xs text-slate/35 font-mono">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{post.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate/50 flex-1">
                    {post.description}
                  </p>
                </div>
              );
              return (
                <AnimateOnScroll key={post.title} delay={i * 0.1}>
                  {post.href ? (
                    <Link href={post.href} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
