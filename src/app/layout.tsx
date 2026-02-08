import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PsychoLearn Studio",
  description:
    "Immersive psychoeducation labs, interactive quizzes, and wellness rituals to help you learn psychology confidently.",
  metadataBase: new URL("https://agentic-577dff90.vercel.app"),
  openGraph: {
    title: "PsychoLearn Studio",
    description:
      "Immersive psychoeducation labs, interactive quizzes, and wellness rituals to help you learn psychology confidently.",
    url: "https://agentic-577dff90.vercel.app",
    siteName: "PsychoLearn Studio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PsychoLearn Studio - immersive psychoeducation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PsychoLearn Studio",
    description:
      "Immersive psychoeducation labs, interactive quizzes, and wellness rituals to help you learn psychology confidently.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
