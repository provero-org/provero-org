import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Provero community. Contribute on GitHub, join Slack, follow on Reddit, and help shape open-source data quality.",
  alternates: {
    canonical: "https://provero.org/community",
  },
  openGraph: {
    title: "Community | Provero",
    description: "Get involved with Provero. GitHub discussions, Slack, Reddit, and contributing guide.",
    url: "https://provero.org/community",
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
