import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Exo_2 } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" });

export const metadata: Metadata = {
  title: "Community 𝕏",
  description:
    "The go-to event for Community Builders! Happening 2024 in Berlin.",
  metadataBase: new URL("https://community-x.org"),
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
