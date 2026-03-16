"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownNav,
  MobileAccordion,
  type NavDropdownItem,
} from "@/components/ui/dropdown-nav";
import { GitHubStars } from "@/components/ui/github-stars";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const platformItems: NavDropdownItem[] = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Comparison", href: "/#comparison" },
];

const resourceItems: NavDropdownItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" alt="Provero" className="h-9 w-auto transition-transform group-hover:scale-105" />
          <span className="font-[family-name:var(--font-brand)] text-[1.2rem] font-semibold tracking-[-0.02em] text-navy">
            Provero
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <DropdownNav label="Platform" items={platformItems} />
          <DropdownNav label="Resources" items={resourceItems} />
          <a
            href="/docs"
            className="rounded-lg px-3.5 py-2 text-[0.938rem] font-medium text-slate/60 transition-colors hover:text-navy hover:bg-neutral-100/80"
          >
            Docs
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <AnimatedThemeToggler className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-navy/60 transition-all hover:border-neutral-300 hover:text-navy dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white" />
          <a
            href="https://github.com/provero-org/provero"
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-all hover:border-neutral-300 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
            <GitHubStars className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-xs text-slate/50 dark:bg-white/10" />
          </a>
          <a
            href="https://github.com/provero-org/provero#readme"
            className="flex items-center gap-2 rounded-lg bg-emerald px-4 py-2 text-sm font-medium text-white transition-all hover:bg-emerald-dark hover:shadow-md hover:shadow-emerald/20"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-slate" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200/60 bg-white/95 backdrop-blur-xl px-6 py-4 md:hidden">
          <MobileAccordion
            label="Platform"
            items={platformItems}
            onNavigate={() => setOpen(false)}
          />
          <MobileAccordion
            label="Resources"
            items={resourceItems}
            onNavigate={() => setOpen(false)}
          />
          <a
            href="/docs"
            className="block py-3 text-sm font-medium text-slate/70 border-b border-neutral-100"
            onClick={() => setOpen(false)}
          >
            Docs
          </a>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://github.com/provero-org/provero"
              className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-navy"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
              <GitHubStars className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-xs text-slate/50" />
            </a>
            <a
              href="https://github.com/provero-org/provero#readme"
              className="block rounded-lg bg-emerald px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
