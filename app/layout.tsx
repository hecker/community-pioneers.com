import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Nunito, Exo_2 } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" });

export const metadata: Metadata = {
  title: "Community Pioneers 2024",
  description:
    "The go-to event for community builders! Happening 2024 in Berlin.",
  metadataBase: new URL("https://community-pioneers.com"),
  creator: "Jan Hecker",
  publisher: "Jan Hecker",
  authors: [{ name: "Jan Hecker", url: "https://hecker.vc" }],
  keywords: [
    "Community Pioneers",
    "Community Leaders",
    "Community Building",
    "Community Event Berlin",
  ],
  colorScheme: "dark",
  openGraph: {
    images: ["/header.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark antialiased" lang="en">
      <body className={`${nunito.variable} ${exo2.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
