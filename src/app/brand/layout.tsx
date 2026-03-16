import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Kit",
  description:
    "Provero brand guidelines. Logo, colors, typography, and usage rules.",
  alternates: {
    canonical: "https://provero.org/brand",
  },
  openGraph: {
    title: "Brand Kit | Provero",
    description: "Provero brand guidelines, logos, colors, and typography.",
    url: "https://provero.org/brand",
  },
};

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
