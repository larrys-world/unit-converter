'use client'

import Link from 'next/link'

const relatedTools = [
  {
    name: 'Percentage Calculator',
    description: 'Calculate percentages, increases, and decreases',
    url: 'https://larrys-world.github.io/percentage-calculator/',
    icon: '%'
  },
  {
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills easily',
    url: 'https://larrys-world.github.io/tip-calculator/',
    icon: '💵'
  },
  {
    name: 'Business Loan Calculator',
    description: 'Calculate business loan payments and interest',
    url: 'https://larrys-world.github.io/business-loan-calculator/',
    icon: '🏢'
  },
  {
    name: 'Password Generator',
    description: 'Create strong, secure passwords instantly',
    url: 'https://larrys-world.github.io/password-generator/',
    icon: '🔐'
  }
]

export default function RelatedTools() {
  return (
    <section className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">More Free Tools</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mr-3">{tool.icon}</span>
            <div>
              <h3 className="font-semibold text-gray-700 hover:text-blue-600">{tool.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Explore our complete collection of{' '}
          <a 
            href="https://larrys-world.github.io/" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            free online calculators and utilities
          </a>
          .
        </p>
      </div>
    </section>
  )
}