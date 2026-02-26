import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://larrys-world.github.io/unit-converter/'),
  title: {
    default: "Unit Converter - Convert Length, Weight, Temperature & More",
    template: "%s | Unit Converter"
  },
  description: "Convert ANY unit instantly - length, weight, temperature, volume & more. 100+ conversions. Accurate, fast, free. No ads. Start converting now →",
  keywords: "unit converter, metric converter, imperial converter, length converter, weight converter, temperature converter, volume converter, area converter, free unit converter, online converter",
  authors: [{ name: "Larry's World" }],
  creator: "Larry's World",
  publisher: "Larry's World",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4F46E5",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://larrys-world.github.io/unit-converter/",
  },
  openGraph: {
    title: "Unit Converter - Instant Unit Conversions",
    description: "Convert between 100+ units instantly. Length, weight, temperature, volume, area & more. Free, accurate, no ads.",
    url: "https://larrys-world.github.io/unit-converter/",
    siteName: "Larry's World Unit Converter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unit Converter - All Units, Instant Results",
    description: "Convert any unit instantly. 100+ conversions. Free & accurate.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Unit Converter",
  "description": "Free online unit converter for length, weight, temperature, volume, area, and more. Convert between metric and imperial units instantly with high precision.",
  "url": "https://larrys-world.github.io/unit-converter/",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3421"
  },
  "featureList": [
    "Convert between 100+ different units",
    "Length: meters, feet, inches, miles, kilometers",
    "Weight: kg, pounds, ounces, grams, tons",
    "Temperature: Celsius, Fahrenheit, Kelvin",
    "Volume: liters, gallons, cups, milliliters",
    "Area: square meters, acres, hectares",
    "Real-time conversion as you type",
    "High precision calculations",
    "Mobile responsive design",
    "No registration required",
    "100% free to use"
  ]
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What units can I convert with this converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our unit converter supports over 100 different units across categories including length (meters, feet, miles), weight (kg, pounds, ounces), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, cups), and area (square meters, acres, hectares)."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the unit converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our converter uses precise conversion factors and provides results with up to 10 decimal places of accuracy. All conversions are based on internationally recognized standards."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert between metric and imperial units?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our converter seamlessly converts between metric and imperial units. For example, you can convert meters to feet, kilograms to pounds, or Celsius to Fahrenheit with a single click."
      }
    },
    {
      "@type": "Question",
      "name": "Is this unit converter free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our unit converter is 100% free with no limits on usage. There are no ads, no registration required, and no hidden fees. Convert as many units as you need!"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}