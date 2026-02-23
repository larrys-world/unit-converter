// Unit conversion data and logic

export type UnitCategory = 
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'time'
  | 'digital';

export type Unit = {
  name: string;
  symbol: string;
  category: UnitCategory;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
};

// Length units (base: meters)
export const lengthUnits: Record<string, Unit> = {
  meter: {
    name: 'Meter',
    symbol: 'm',
    category: 'length',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilometer: {
    name: 'Kilometer',
    symbol: 'km',
    category: 'length',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  centimeter: {
    name: 'Centimeter',
    symbol: 'cm',
    category: 'length',
    toBase: (v) => v / 100,
    fromBase: (v) => v * 100,
  },
  millimeter: {
    name: 'Millimeter',
    symbol: 'mm',
    category: 'length',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  mile: {
    name: 'Mile',
    symbol: 'mi',
    category: 'length',
    toBase: (v) => v * 1609.344,
    fromBase: (v) => v / 1609.344,
  },
  yard: {
    name: 'Yard',
    symbol: 'yd',
    category: 'length',
    toBase: (v) => v * 0.9144,
    fromBase: (v) => v / 0.9144,
  },
  foot: {
    name: 'Foot',
    symbol: 'ft',
    category: 'length',
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
  inch: {
    name: 'Inch',
    symbol: 'in',
    category: 'length',
    toBase: (v) => v * 0.0254,
    fromBase: (v) => v / 0.0254,
  },
};

// Weight units (base: kilograms)
export const weightUnits: Record<string, Unit> = {
  kilogram: {
    name: 'Kilogram',
    symbol: 'kg',
    category: 'weight',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  gram: {
    name: 'Gram',
    symbol: 'g',
    category: 'weight',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  milligram: {
    name: 'Milligram',
    symbol: 'mg',
    category: 'weight',
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  pound: {
    name: 'Pound',
    symbol: 'lb',
    category: 'weight',
    toBase: (v) => v * 0.453592,
    fromBase: (v) => v / 0.453592,
  },
  ounce: {
    name: 'Ounce',
    symbol: 'oz',
    category: 'weight',
    toBase: (v) => v * 0.0283495,
    fromBase: (v) => v / 0.0283495,
  },
  ton: {
    name: 'Metric Ton',
    symbol: 't',
    category: 'weight',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
};

// Temperature units (special handling)
export const temperatureUnits: Record<string, Unit> = {
  celsius: {
    name: 'Celsius',
    symbol: '°C',
    category: 'temperature',
    toBase: (v) => v, // Celsius is our base
    fromBase: (v) => v,
  },
  fahrenheit: {
    name: 'Fahrenheit',
    symbol: '°F',
    category: 'temperature',
    toBase: (v) => (v - 32) * 5/9,
    fromBase: (v) => v * 9/5 + 32,
  },
  kelvin: {
    name: 'Kelvin',
    symbol: 'K',
    category: 'temperature',
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },
};

// Volume units (base: liters)
export const volumeUnits: Record<string, Unit> = {
  liter: {
    name: 'Liter',
    symbol: 'L',
    category: 'volume',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  milliliter: {
    name: 'Milliliter',
    symbol: 'mL',
    category: 'volume',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  gallon: {
    name: 'Gallon (US)',
    symbol: 'gal',
    category: 'volume',
    toBase: (v) => v * 3.78541,
    fromBase: (v) => v / 3.78541,
  },
  quart: {
    name: 'Quart (US)',
    symbol: 'qt',
    category: 'volume',
    toBase: (v) => v * 0.946353,
    fromBase: (v) => v / 0.946353,
  },
  pint: {
    name: 'Pint (US)',
    symbol: 'pt',
    category: 'volume',
    toBase: (v) => v * 0.473176,
    fromBase: (v) => v / 0.473176,
  },
  cup: {
    name: 'Cup (US)',
    symbol: 'cup',
    category: 'volume',
    toBase: (v) => v * 0.236588,
    fromBase: (v) => v / 0.236588,
  },
  fluid_ounce: {
    name: 'Fluid Ounce (US)',
    symbol: 'fl oz',
    category: 'volume',
    toBase: (v) => v * 0.0295735,
    fromBase: (v) => v / 0.0295735,
  },
  tablespoon: {
    name: 'Tablespoon',
    symbol: 'tbsp',
    category: 'volume',
    toBase: (v) => v * 0.0147868,
    fromBase: (v) => v / 0.0147868,
  },
  teaspoon: {
    name: 'Teaspoon',
    symbol: 'tsp',
    category: 'volume',
    toBase: (v) => v * 0.00492892,
    fromBase: (v) => v / 0.00492892,
  },
};

// All units combined
export const allUnits: Record<string, Unit> = {
  ...lengthUnits,
  ...weightUnits,
  ...temperatureUnits,
  ...volumeUnits,
};

// Categories for UI
export const categories: Record<UnitCategory, { name: string; units: string[] }> = {
  length: {
    name: 'Length',
    units: Object.keys(lengthUnits),
  },
  weight: {
    name: 'Weight & Mass',
    units: Object.keys(weightUnits),
  },
  temperature: {
    name: 'Temperature',
    units: Object.keys(temperatureUnits),
  },
  volume: {
    name: 'Volume',
    units: Object.keys(volumeUnits),
  },
  area: {
    name: 'Area',
    units: [], // TODO: Add area units
  },
  speed: {
    name: 'Speed',
    units: [], // TODO: Add speed units
  },
  time: {
    name: 'Time',
    units: [], // TODO: Add time units
  },
  digital: {
    name: 'Digital Storage',
    units: [], // TODO: Add digital units
  },
};

// Convert function
export function convert(value: number, fromUnit: string, toUnit: string): number {
  const from = allUnits[fromUnit];
  const to = allUnits[toUnit];
  
  if (!from || !to) {
    throw new Error('Invalid unit');
  }
  
  if (from.category !== to.category) {
    throw new Error('Cannot convert between different categories');
  }
  
  // Convert to base unit, then to target unit
  const baseValue = from.toBase(value);
  return to.fromBase(baseValue);
}

// Format number for display
export function formatNumber(value: number): string {
  if (Math.abs(value) < 0.01 || Math.abs(value) > 1000000) {
    return value.toExponential(6);
  }
  return value.toFixed(6).replace(/\.?0+$/, '');
}