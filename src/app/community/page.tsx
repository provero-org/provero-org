"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { GitHubStars } from "@/components/ui/github-stars";
import { ArrowRight } from "lucide-react";

const channels = [
  {
    title: "GitHub Discussions",
    description:
      "Ask questions, share ideas, and connect with other Provero users and contributors.",
    cta: "Join Discussions",
    href: "https://github.com/provero-org/provero/discussions",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    title: "Contributing",
    description:
      "Read our contributing guide, pick a good first issue, and submit your first PR.",
    cta: "Contributing Guide",
    href: "https://github.com/provero-org/provero/blob/main/CONTRIBUTING.md",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Report Issues",
    description:
      "Found a bug or have a feature request? Open an issue on GitHub.",
    cta: "Open Issue",
    href: "https://github.com/provero-org/provero/issues",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-sm font-semibold text-emerald uppercase tracking-[0.2em]">
                Community
              </span>
              <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl lg:text-[5.5rem]">
                Join the{" "}
                <span className="text-emerald">
                  community
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate/50">
                Provero is built by the community, for the community.
                Get involved, contribute, and help shape the future of open source data quality.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 lg:grid-cols-3">
            {channels.map((channel, i) => (
              <AnimateOnScroll key={channel.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-neutral-200/80 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald mb-6">
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy">{channel.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate/50">
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition-colors hover:text-emerald-dark"
                  >
                    {channel.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="mt-20 rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-emerald/[0.04] to-white p-12 text-center">
              <h2 className="text-3xl font-extrabold text-navy">Star us on GitHub</h2>
              <p className="mt-3 text-base text-slate/50">
                Show your support and stay up to date with the latest releases.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://github.com/provero-org/provero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Star on GitHub
                  <GitHubStars className="ml-1 rounded-md bg-white/15 px-2 py-0.5 text-xs" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
