import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates, tutorials, and insights on data quality and the Provero ecosystem.",
  alternates: {
    canonical: "https://provero.org/blog",
  },
  openGraph: {
    title: "Blog | Provero",
    description: "Updates, tutorials, and insights on data quality and the Provero ecosystem.",
    url: "https://provero.org/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
