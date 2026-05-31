import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wissam Boukhaima — Embedded Systems & Robotics Engineer",
  description: "Portfolio of Wissam Boukhaima — hardware design, embedded systems, robotics, and intelligent technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
