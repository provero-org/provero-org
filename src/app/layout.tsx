import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Provero - Prove your data.",
  description:
    "A vendor-neutral, declarative data quality engine. Open source. Apache 2.0 licensed. Data quality checks in YAML. Runs anywhere.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "data quality",
    "data validation",
    "YAML",
    "open source",
    "Apache 2.0",
    "DuckDB",
    "PostgreSQL",
    "anomaly detection",
    "data contracts",
  ],
  openGraph: {
    title: "Provero - Prove your data.",
    description: "Declarative data quality engine. Open source. Apache 2.0.",
    url: "https://provero.org",
    siteName: "Provero",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provero - Prove your data.",
    description: "Declarative data quality engine. Open source. Apache 2.0.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <div className="flex items-center justify-center gap-3 bg-navy px-4 py-2.5 text-center text-sm text-white/70">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-light" />
          </span>
          <span>Provero is in active development.</span>
          <a
            href="https://github.com/provero-org/provero"
            className="font-semibold text-emerald-light underline underline-offset-2 hover:text-white transition-colors"
          >
            Star the repo to follow our progress
          </a>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
