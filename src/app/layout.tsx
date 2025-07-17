import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEOSHe - Digital HSE Solutions Platform",
  description:
    "Comprehensive digital HSE solutions serving as an interactive hub for workplace safety, compliance tracking, and risk mitigation across oil & gas, construction, aviation, and other high-risk industries.",
  keywords: "HSE, Health Safety Environment, Digital Platform, Risk Assessment, Compliance, Training, Oil Gas, Construction, Aviation",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className="bg-background text-text antialiased">{children}</body>
    </html>
  );
}
