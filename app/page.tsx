import UnitConverter from '@/components/UnitConverter';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Unit Converter - Convert Length, Weight, Temperature & More',
  description: 'Free online unit converter. Convert between metric and imperial units. Length, weight, temperature, volume, area, speed, time, and digital storage conversions. Fast, accurate, and easy to use.',
  keywords: 'unit converter, metric converter, imperial converter, length converter, weight converter, temperature converter, cm to inches, kg to lbs, celsius to fahrenheit, area converter, speed converter, time converter, data converter',
  openGraph: {
    title: 'Unit Converter - Free Online Conversion Tool',
    description: 'Convert between metric and imperial units instantly. Length, weight, temperature, volume, area, speed, time, and digital storage conversions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Converter',
    description: 'Free online unit converter for all your conversion needs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org structured data for the calculator
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Unit Converter",
  "description": "Free online unit converter for length, weight, temperature, volume, area, speed, time, and digital storage conversions",
  "url": "https://larrys-world.github.io/unit-converter/",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Length conversion (meters, feet, inches, etc.)",
    "Weight conversion (kilograms, pounds, ounces, etc.)",
    "Temperature conversion (Celsius, Fahrenheit, Kelvin)",
    "Volume conversion (liters, gallons, cups, etc.)",
    "Area conversion (square meters, acres, etc.)",
    "Speed conversion (km/h, mph, m/s, etc.)",
    "Time conversion (seconds, minutes, hours, etc.)",
    "Digital storage conversion (bytes, KB, MB, GB, etc.)"
  ],
  "screenshot": "https://larrys-world.github.io/unit-converter/screenshot.png"
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unit Converter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convert between metric and imperial units instantly. Free, fast, and accurate conversions for length, weight, temperature, volume, area, speed, time, and digital storage.
            </p>
          </header>

          {/* Converter */}
          <UnitConverter />

          {/* SEO Content */}
          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About This Unit Converter</h2>
              <p className="text-gray-600 mb-4">
                Our free online unit converter makes it easy to convert between different units of measurement. Whether you need to convert centimeters to inches, kilograms to pounds, or Celsius to Fahrenheit, we've got you covered.
              </p>
              <p className="text-gray-600">
                All conversions are calculated instantly as you type, with high precision results. The converter works on all devices and requires no installation or sign-up.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Supported Unit Categories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Length</h3>
                  <p className="text-gray-600">Convert between meters, kilometers, feet, inches, miles, yards, and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Weight & Mass</h3>
                  <p className="text-gray-600">Convert between kilograms, pounds, ounces, grams, tons, and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Temperature</h3>
                  <p className="text-gray-600">Convert between Celsius, Fahrenheit, and Kelvin temperature scales.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Volume</h3>
                  <p className="text-gray-600">Convert between liters, gallons, cups, tablespoons, and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Area</h3>
                  <p className="text-gray-600">Convert between square meters, acres, hectares, square feet, and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Speed</h3>
                  <p className="text-gray-600">Convert between km/h, mph, m/s, knots, and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Time</h3>
                  <p className="text-gray-600">Convert between seconds, minutes, hours, days, weeks, and years.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Digital Storage</h3>
                  <p className="text-gray-600">Convert between bytes, KB, MB, GB, TB, and bits.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Popular Conversions</h2>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Centimeters to Inches</li>
                  <li>• Meters to Feet</li>
                  <li>• Kilometers to Miles</li>
                  <li>• Millimeters to Inches</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Kilograms to Pounds</li>
                  <li>• Grams to Ounces</li>
                  <li>• Celsius to Fahrenheit</li>
                  <li>• Fahrenheit to Celsius</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Liters to Gallons</li>
                  <li>• Square Meters to Square Feet</li>
                  <li>• MPH to KM/H</li>
                  <li>• MB to GB</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}