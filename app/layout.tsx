import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Exo_2 } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" });

export const metadata: Metadata = {
  title: "community.berlin",
  description: "The OG event for community builders. Berlin, 2024.",
  metadataBase: new URL("https://community.berlin"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={`${nunito.variable} ${exo2.variable}`}>{children}</body>
    </html>
  );
}
