'use client';

import { useState, useEffect } from 'react';
import { categories, allUnits, convert, formatNumber, UnitCategory } from '@/lib/units';

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('foot');
  const [fromValue, setFromValue] = useState('1');
  const [toValue, setToValue] = useState('');
  const [error, setError] = useState('');

  // Get available units for current category
  const availableUnits = categories[category].units;

  // Perform conversion
  useEffect(() => {
    try {
      const value = parseFloat(fromValue);
      if (isNaN(value)) {
        setToValue('');
        setError('');
        return;
      }

      const result = convert(value, fromUnit, toUnit);
      setToValue(formatNumber(result));
      setError('');
    } catch (err) {
      setError('Conversion error');
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit]);

  // Update units when category changes
  useEffect(() => {
    const units = categories[category].units;
    if (units.length > 0) {
      setFromUnit(units[0]);
      setToUnit(units[Math.min(1, units.length - 1)]);
    }
  }, [category]);

  // Swap units
  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Category Selection */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Select Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setCategory(key as UnitCategory)}
              disabled={cat.units.length === 0}
              className={`p-3 rounded-lg border transition-colors ${
                category === key
                  ? 'bg-blue-500 text-white border-blue-500'
                  : cat.units.length === 0
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-50 border-gray-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Converter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* From */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {availableUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {allUnits[unit].name} ({allUnits[unit].symbol})
                </option>
              ))}
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder="Enter value"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-center md:hidden">
            <button
              onClick={swapUnits}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Swap units"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {availableUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {allUnits[unit].name} ({allUnits[unit].symbol})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={toValue}
              readOnly
              placeholder="Result"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>

        {/* Swap Button Desktop */}
        <div className="hidden md:flex justify-center mt-6">
          <button
            onClick={swapUnits}
            className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Swap Units
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}
      </div>

      {/* Quick Conversions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Common Conversions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fromValue && !isNaN(parseFloat(fromValue)) && (
            <>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  {fromValue} {allUnits[fromUnit]?.symbol} equals:
                </p>
                <p className="text-xl font-semibold mt-1">
                  {toValue} {allUnits[toUnit]?.symbol}
                </p>
              </div>
              {/* Add more common conversions based on category */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}