import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, JetBrains_Mono, Onest } from "next/font/google";
import appConfig from "@/app.config.json";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

const fontHeading = Onest({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontBody = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  description: appConfig.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mikhail-abdillah.com"
  ),
  openGraph: {
    description: appConfig.description,
    images: [],
    title: appConfig.title,
  },
  robots:
    process.env.NODE_ENV === "development"
      ? {
          follow: false,
          index: false,
        }
      : {
          follow: true,
          index: true,
        },
  title: appConfig.title,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appConfig.locales[0]}>
      <head>
        <meta content={appConfig.siteName} name="apple-mobile-web-app-title" />
      </head>
      <body
        className={cn(
          fontHeading.variable,
          fontBody.variable,
          fontMono.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleTagManager
        auth={process.env.NEXT_PUBLIC_GTM_AUTH || ""}
        gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""}
        preview={process.env.NEXT_PUBLIC_GTM_PREVIEW || ""}
      />
      <noscript>
        <iframe
          height="0"
          src="https://googletagmanager.com"
          style={{ display: "none", visibility: "hidden" }}
          title="googletagmanager"
          width="0"
        />
      </noscript>
    </html>
  );
}
