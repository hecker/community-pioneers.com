import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

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
      <body className={lora.className}>{children}</body>
    </html>
  );
}
