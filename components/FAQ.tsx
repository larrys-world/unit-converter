'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I convert cm to inches?",
    answer: "To convert centimeters to inches, multiply the centimeter value by 0.393701. For example, 10 cm = 10 × 0.393701 = 3.93701 inches. Our unit converter does this calculation instantly for you."
  },
  {
    question: "What is the formula to convert Celsius to Fahrenheit?",
    answer: "To convert Celsius to Fahrenheit, use the formula: °F = (°C × 9/5) + 32. For example, 20°C = (20 × 9/5) + 32 = 68°F. Our temperature converter handles this conversion automatically."
  },
  {
    question: "How many pounds are in a kilogram?",
    answer: "1 kilogram equals 2.20462 pounds. To convert kg to lbs, multiply the kilogram value by 2.20462. For example, 5 kg = 5 × 2.20462 = 11.0231 pounds."
  },
  {
    question: "Can I convert between metric and imperial units?",
    answer: "Yes! Our unit converter supports conversions between metric and imperial units for all measurement types including length, weight, volume, and area. Simply select your input and output units."
  },
  {
    question: "What units can this converter handle?",
    answer: "Our converter handles 8 categories: Length (meters, feet, inches, etc.), Weight (kg, lbs, oz, etc.), Temperature (°C, °F, K), Volume (liters, gallons, cups, etc.), Area (m², ft², acres, etc.), Speed (km/h, mph, m/s, etc.), Time (seconds to years), and Digital Storage (bytes to terabytes)."
  },
  {
    question: "Is this unit converter free to use?",
    answer: "Yes, our unit converter is completely free to use with no limits on the number of conversions. No registration or download required - just visit the page and start converting!"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center hover:text-blue-600 transition-colors"
            >
              <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 flex-shrink-0 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}