"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import {
  FileText,
  Zap,
  Shield,
  BarChart3,
  Bell,
  GitBranch,
  Cpu,
  Search,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Declarative YAML",
    description: "Define quality checks in simple YAML. No code required. Version-controlled by default.",
    color: "from-emerald/10 to-emerald/5",
    iconColor: "text-emerald bg-emerald/10",
  },
  {
    icon: Zap,
    title: "14 Check Types",
    description: "not_null, unique, range, regex, freshness, anomaly, custom_sql and more. All built in.",
    color: "from-gold/10 to-gold/5",
    iconColor: "text-gold bg-gold/10",
  },
  {
    icon: Search,
    title: "Anomaly Detection",
    description: "Z-Score, MAD, IQR. No scipy needed. Pure Python statistical detection out of the box.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600 bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Data Contracts",
    description: "Schema validation, SLA enforcement, contract diffs. Define ownership and accountability.",
    color: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-600 bg-purple-500/10",
  },
  {
    icon: Cpu,
    title: "SQL Batch Optimizer",
    description: "Compiles N checks into a single SQL query. Minimal database load, maximum performance.",
    color: "from-emerald/10 to-emerald/5",
    iconColor: "text-emerald bg-emerald/10",
  },
  {
    icon: BarChart3,
    title: "Profiling & Suggestions",
    description: "Profile any table and auto-generate checks. Let Provero suggest what to validate.",
    color: "from-gold/10 to-gold/5",
    iconColor: "text-gold bg-gold/10",
  },
  {
    icon: Bell,
    title: "Webhook Alerts",
    description: "Slack, PagerDuty, any HTTP endpoint. Get notified the moment your data breaks.",
    color: "from-red-500/10 to-red-500/5",
    iconColor: "text-red-500 bg-red-500/10",
  },
  {
    icon: GitBranch,
    title: "Airflow Native",
    description: "ProveroCheckOperator for Apache Airflow. Plug into your existing DAGs in 3 lines.",
    color: "from-cyan-500/10 to-cyan-500/5",
    iconColor: "text-cyan-600 bg-cyan-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold text-emerald uppercase tracking-[0.2em]">
            Features
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Everything you need.{" "}
            <span className="text-slate/30">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate/50">
            No enterprise upsells. No features behind a paywall. Every capability ships
            in the open source core.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <MagicCard
              key={feature.title}
              className="group flex flex-col p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              gradientColor="#059669"
              gradientOpacity={0.08}
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.iconColor} transition-transform group-hover:scale-110`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[0.95rem] font-bold text-navy">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate/50">
                {feature.description}
              </p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
