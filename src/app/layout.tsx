import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marrakech Alchemy Yoga Retreats | Morocco",
    template: "%s | Marrakech Alchemy Yoga Retreats",
  },
  description:
    "Book a luxury yoga retreat in Morocco with Marrakech Alchemy — immersive practice, riad comfort, and curated wellness.",
  openGraph: {
    title: "Marrakech Alchemy Yoga Retreats",
    description: "Yoga retreats in Morocco — book your spot and begin your journey.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ece3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full min-w-0 scroll-smooth antialiased overflow-x-clip`}
    >
      <body className="font-body bg-page relative flex min-h-full min-w-0 flex-col overflow-x-clip text-ink">
        <div className="bg-page-depth pointer-events-none fixed inset-0 -z-10 min-h-full" aria-hidden />
        <div
          className="bg-page-canvas pointer-events-none fixed inset-0 -z-10 min-h-full"
          aria-hidden
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
