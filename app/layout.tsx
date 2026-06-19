import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1480601337117738');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1480601337117738&ev=PageView&noscript=1"
          />
        </noscript>

        {children}

      </body>
    </html>
  );
}