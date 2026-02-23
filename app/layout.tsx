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
  metadataBase: new URL("https://adityaxinnovations.com"),

  title: {
    default: "AdityaX Innovations",
    template: "%s | AdityaX Innovations",
  },

  description:
    "AdityaX Innovations is a professional IT solutions company offering web development, mobile app development, Shopify development, and custom software solutions for startups and businesses.",

  keywords: [
    "AdityaX Innovations",
    "Web Development Company",
    "Next.js Developer",
    "Shopify Developer",
    "Mobile App Development",
    "Software Company India",
    "IT Company Pune",
    "Custom Software Development",
  ],

  authors: [{ name: "AdityaX Innovations" }],
  creator: "AdityaX Innovations",
  publisher: "AdityaX Innovations",

  openGraph: {
    title: "AdityaX Innovations",
    description:
      "Professional web development, mobile app development, and custom software solutions.",
    url: "https://adityaxinnovations.com",
    siteName: "AdityaX Innovations",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}