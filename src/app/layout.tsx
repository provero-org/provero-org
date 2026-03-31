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
  metadataBase: new URL("https://provero.org"),
  title: {
    default: "Provero - Prove your data.",
    template: "%s | Provero",
  },
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
    "data quality engine",
    "data quality checks",
    "provero",
  ],
  alternates: {
    canonical: "https://provero.org",
  },
  openGraph: {
    title: "Provero - Prove your data.",
    description: "Declarative data quality engine. Open source. Apache 2.0.",
    url: "https://provero.org",
    siteName: "Provero",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Provero - Declarative data quality engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provero - Prove your data.",
    description: "Declarative data quality engine. Open source. Apache 2.0.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Provero",
              description: "A vendor-neutral, declarative data quality engine. Open source. Apache 2.0 licensed.",
              url: "https://provero.org",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Cross-platform",
              license: "https://www.apache.org/licenses/LICENSE-2.0",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Provero",
                url: "https://provero.org",
                logo: "https://provero.org/logo-mark.svg",
                sameAs: [
                  "https://github.com/provero-org",
                  "https://linkedin.com/company/provero-org",
                  "https://www.reddit.com/r/provero/",
                  "https://join.slack.com/t/provero/shared_invite/zt-3sj71s3ic-ey5Gf~Ls_YcmdMKkDz9oAQ",
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
