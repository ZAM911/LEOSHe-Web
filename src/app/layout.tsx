import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEOSHe - Digital HSE Solutions Platform",
  description:
    "Comprehensive digital HSE solutions serving as an interactive hub for workplace safety, compliance tracking, and risk mitigation across oil & gas, construction, aviation, and other high-risk industries.",
  keywords: "HSE, Health Safety Environment, Digital Platform, Risk Assessment, Compliance, Training, Oil Gas, Construction, Aviation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text antialiased">{children}</body>
    </html>
  );
}
