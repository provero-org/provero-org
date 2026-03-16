"use client";

import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ValueProps } from "@/components/sections/value-props";
import { WhyProvero } from "@/components/sections/why-provero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Audience } from "@/components/sections/audience";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Comparison } from "@/components/sections/comparison";
import { Community } from "@/components/sections/community";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <ValueProps />
      <WhyProvero />
      <HowItWorks />
      <Audience />
      <Ecosystem />
      <Comparison />
      <Community />
      <CTA />
    </main>
  );
}
