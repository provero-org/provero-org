import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Everything you need to get started with Provero. Installation, configuration, check types, connectors, and API reference.",
  alternates: {
    canonical: "https://provero.org/docs",
  },
  openGraph: {
    title: "Docs | Provero",
    description: "Getting started guides, configuration reference, and API documentation for Provero.",
    url: "https://provero.org/docs",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
