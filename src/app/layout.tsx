/**
 * Root layout providing global structure and metadata.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { buildMetadata } from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-24`}> {/* bottom padding so sticky CTA does not cover content */}
        <Header />
        <main className="container-responsive py-10">{children}</main>
        <Footer />
        <StickyCTA />
        {siteConfig.analytics.provider === "ga4" && "ga4MeasurementId" in siteConfig.analytics ? (
          <GoogleAnalytics gaId={siteConfig.analytics.ga4MeasurementId} />
        ) : null}
      </body>
    </html>
  );
}
