'use client'

import { useEffect } from 'react'
import FAQ from '@/components/FAQ'
import RelatedTools from '@/components/RelatedTools'
import UnitConverter from '@/components/UnitConverter'
import { HeaderAd, FooterAd, InContentAd } from '@/components/monetization/AdSense'
import Script from 'next/script'

// AdSense configuration - replace with actual values when available
const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'
const ADSENSE_SLOTS = {
  header: 'XXXXXXXXXX',
  footer: 'XXXXXXXXXX',
  content: 'XXXXXXXXXX'
}

export default function Home() {
  // Add AdSense script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT
    script.async = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Unit Converter",
            "description": "Free online unit converter for instant conversions between metric and imperial units",
            "url": "https://larrys-world.github.io/unit-converter/",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Length conversion (meters, feet, inches, cm)",
              "Weight conversion (kg, lbs, oz, grams)",
              "Temperature conversion (Celsius, Fahrenheit, Kelvin)",
              "Volume conversion (liters, gallons, cups)",
              "Area conversion (sq meters, sq feet, acres)",
              "Speed conversion (km/h, mph, m/s)",
              "Time conversion (seconds, minutes, hours, days)",
              "Digital storage conversion (bytes, KB, MB, GB)"
            ]
          })
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unit Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert between metric and imperial units instantly. Free, accurate, and easy to use.
            </p>
          </header>

          {/* Header Ad */}
          <HeaderAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.header} />

          <UnitConverter />

          {/* In-Content Ad */}
          <div className="my-8">
            <InContentAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.content} />
          </div>

          <section className="mt-16 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Unit Converter
            </h2>
            <p className="text-gray-600 mb-4">
              Our free online unit converter makes it easy to convert between different units of measurement. 
              Whether you need to convert metric to imperial units or vice versa, our tool provides instant, 
              accurate conversions for length, weight, temperature, volume, area, speed, time, and digital storage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Supported Unit Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📏 Length</h4>
                <p className="text-gray-600">Meters, feet, inches, centimeters, kilometers, miles, yards, and more.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⚖️ Weight</h4>
                <p className="text-gray-600">Kilograms, pounds, ounces, grams, tons, stones, and more.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🌡️ Temperature</h4>
                <p className="text-gray-600">Celsius, Fahrenheit, and Kelvin conversions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🧪 Volume</h4>
                <p className="text-gray-600">Liters, gallons, cups, milliliters, fluid ounces, and more.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📐 Area</h4>
                <p className="text-gray-600">Square meters, square feet, acres, hectares, and more.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🚗 Speed</h4>
                <p className="text-gray-600">Kilometers per hour, miles per hour, meters per second, knots.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⏱️ Time</h4>
                <p className="text-gray-600">Seconds, minutes, hours, days, weeks, months, years.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💾 Digital Storage</h4>
                <p className="text-gray-600">Bytes, kilobytes, megabytes, gigabytes, terabytes.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Common Conversions
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Centimeters to Inches:</strong> 1 cm = 0.393701 inches</li>
                <li>• <strong>Kilograms to Pounds:</strong> 1 kg = 2.20462 lbs</li>
                <li>• <strong>Celsius to Fahrenheit:</strong> °F = (°C × 9/5) + 32</li>
                <li>• <strong>Meters to Feet:</strong> 1 meter = 3.28084 feet</li>
                <li>• <strong>Liters to Gallons:</strong> 1 liter = 0.264172 gallons (US)</li>
                <li>• <strong>Kilometers to Miles:</strong> 1 km = 0.621371 miles</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Why Use Our Unit Converter?
            </h3>
            <div className="space-y-3 text-gray-600 mb-6">
              <p>
                <strong>🎯 Accurate:</strong> All conversions use precise conversion factors for reliable results.
              </p>
              <p>
                <strong>⚡ Fast:</strong> Instant conversions as you type, no waiting or page reloads.
              </p>
              <p>
                <strong>📱 Mobile-Friendly:</strong> Works perfectly on all devices - phones, tablets, and desktops.
              </p>
              <p>
                <strong>🔒 Private:</strong> All conversions happen in your browser. No data is sent to servers.
              </p>
              <p>
                <strong>💰 Free:</strong> Completely free to use with no limits or registration required.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tips for Using the Converter
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Start typing in the input field and conversions update automatically</li>
              <li>Use the dropdown menus to select different units within each category</li>
              <li>Switch between categories using the tabs at the top of the converter</li>
              <li>Copy results by clicking on the converted value</li>
              <li>Bookmark this page for quick access to conversions</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <FAQ />

          {/* Related Tools Section */}
          <RelatedTools />

          {/* Footer Ad */}
          <FooterAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.footer} />

          <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p className="mb-2">
              © 2024 Unit Converter. Free online conversion tool.
            </p>
            <p>
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
              {' • '}
              <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
              {' • '}
              <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}