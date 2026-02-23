import UnitConverter from '@/components/UnitConverter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unit Converter - Convert Length, Weight, Temperature & More',
  description: 'Free online unit converter. Convert between metric and imperial units. Length, weight, temperature, volume conversions. Fast, accurate, and easy to use.',
  keywords: 'unit converter, metric converter, imperial converter, length converter, weight converter, temperature converter, cm to inches, kg to lbs, celsius to fahrenheit',
  openGraph: {
    title: 'Unit Converter - Free Online Conversion Tool',
    description: 'Convert between metric and imperial units instantly. Length, weight, temperature, and volume conversions.',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unit Converter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert between metric and imperial units instantly. Free, fast, and accurate conversions for length, weight, temperature, and more.
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
            <h2 className="text-2xl font-semibold mb-4">Popular Conversions</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">Length</h3>
                <ul className="space-y-1">
                  <li>• Centimeters to Inches</li>
                  <li>• Meters to Feet</li>
                  <li>• Kilometers to Miles</li>
                  <li>• Inches to Centimeters</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weight</h3>
                <ul className="space-y-1">
                  <li>• Kilograms to Pounds</li>
                  <li>• Grams to Ounces</li>
                  <li>• Pounds to Kilograms</li>
                  <li>• Ounces to Grams</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Temperature</h3>
                <ul className="space-y-1">
                  <li>• Celsius to Fahrenheit</li>
                  <li>• Fahrenheit to Celsius</li>
                  <li>• Celsius to Kelvin</li>
                  <li>• Kelvin to Fahrenheit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Volume</h3>
                <ul className="space-y-1">
                  <li>• Liters to Gallons</li>
                  <li>• Milliliters to Fluid Ounces</li>
                  <li>• Cups to Milliliters</li>
                  <li>• Gallons to Liters</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Select the category of units you want to convert (length, weight, etc.)</li>
              <li>Choose your "from" unit from the dropdown menu</li>
              <li>Choose your "to" unit from the second dropdown</li>
              <li>Enter the value you want to convert</li>
              <li>The result appears instantly in the result field</li>
            </ol>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 py-8 text-gray-500 text-sm">
          <p>© 2024 Unit Converter. Free to use.</p>
          <p className="mt-2">
            Privacy: We use privacy-focused analytics. No cookies, no personal data collected.
          </p>
        </footer>
      </div>
    </main>
  );
}