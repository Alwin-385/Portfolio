import type { Metadata, Viewport } from "next";

import { AppProviders } from "@/components/providers/app-providers";
import { fontVariables } from "@/lib/fonts";
import { createJsonLd, defaultMetadata, defaultViewport } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = createJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className={`${fontVariables} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
