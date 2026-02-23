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


// Area units (base: square meters)
export const areaUnits: Record<string, Unit> = {
  square_meter: {
    name: 'Square Meter',
    symbol: 'm²',
    category: 'area',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  square_kilometer: {
    name: 'Square Kilometer',
    symbol: 'km²',
    category: 'area',
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  square_centimeter: {
    name: 'Square Centimeter',
    symbol: 'cm²',
    category: 'area',
    toBase: (v) => v / 10000,
    fromBase: (v) => v * 10000,
  },
  hectare: {
    name: 'Hectare',
    symbol: 'ha',
    category: 'area',
    toBase: (v) => v * 10000,
    fromBase: (v) => v / 10000,
  },
  acre: {
    name: 'Acre',
    symbol: 'ac',
    category: 'area',
    toBase: (v) => v * 4046.86,
    fromBase: (v) => v / 4046.86,
  },
  square_mile: {
    name: 'Square Mile',
    symbol: 'mi²',
    category: 'area',
    toBase: (v) => v * 2589988,
    fromBase: (v) => v / 2589988,
  },
  square_yard: {
    name: 'Square Yard',
    symbol: 'yd²',
    category: 'area',
    toBase: (v) => v * 0.836127,
    fromBase: (v) => v / 0.836127,
  },
  square_foot: {
    name: 'Square Foot',
    symbol: 'ft²',
    category: 'area',
    toBase: (v) => v * 0.092903,
    fromBase: (v) => v / 0.092903,
  },
  square_inch: {
    name: 'Square Inch',
    symbol: 'in²',
    category: 'area',
    toBase: (v) => v * 0.00064516,
    fromBase: (v) => v / 0.00064516,
  },
};

// Speed units (base: meters per second)
export const speedUnits: Record<string, Unit> = {
  meter_per_second: {
    name: 'Meter per Second',
    symbol: 'm/s',
    category: 'speed',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilometer_per_hour: {
    name: 'Kilometer per Hour',
    symbol: 'km/h',
    category: 'speed',
    toBase: (v) => v / 3.6,
    fromBase: (v) => v * 3.6,
  },
  mile_per_hour: {
    name: 'Mile per Hour',
    symbol: 'mph',
    category: 'speed',
    toBase: (v) => v * 0.44704,
    fromBase: (v) => v / 0.44704,
  },
  foot_per_second: {
    name: 'Foot per Second',
    symbol: 'ft/s',
    category: 'speed',
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
  knot: {
    name: 'Knot',
    symbol: 'kn',
    category: 'speed',
    toBase: (v) => v * 0.514444,
    fromBase: (v) => v / 0.514444,
  },
};

// Time units (base: seconds)
export const timeUnits: Record<string, Unit> = {
  second: {
    name: 'Second',
    symbol: 's',
    category: 'time',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  millisecond: {
    name: 'Millisecond',
    symbol: 'ms',
    category: 'time',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  microsecond: {
    name: 'Microsecond',
    symbol: 'μs',
    category: 'time',
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  minute: {
    name: 'Minute',
    symbol: 'min',
    category: 'time',
    toBase: (v) => v * 60,
    fromBase: (v) => v / 60,
  },
  hour: {
    name: 'Hour',
    symbol: 'h',
    category: 'time',
    toBase: (v) => v * 3600,
    fromBase: (v) => v / 3600,
  },
  day: {
    name: 'Day',
    symbol: 'd',
    category: 'time',
    toBase: (v) => v * 86400,
    fromBase: (v) => v / 86400,
  },
  week: {
    name: 'Week',
    symbol: 'wk',
    category: 'time',
    toBase: (v) => v * 604800,
    fromBase: (v) => v / 604800,
  },
  month: {
    name: 'Month (30 days)',
    symbol: 'mo',
    category: 'time',
    toBase: (v) => v * 2592000,
    fromBase: (v) => v / 2592000,
  },
  year: {
    name: 'Year (365 days)',
    symbol: 'yr',
    category: 'time',
    toBase: (v) => v * 31536000,
    fromBase: (v) => v / 31536000,
  },
};

// Digital storage units (base: bytes)
export const digitalUnits: Record<string, Unit> = {
  byte: {
    name: 'Byte',
    symbol: 'B',
    category: 'digital',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilobyte: {
    name: 'Kilobyte',
    symbol: 'KB',
    category: 'digital',
    toBase: (v) => v * 1024,
    fromBase: (v) => v / 1024,
  },
  megabyte: {
    name: 'Megabyte',
    symbol: 'MB',
    category: 'digital',
    toBase: (v) => v * 1024 * 1024,
    fromBase: (v) => v / (1024 * 1024),
  },
  gigabyte: {
    name: 'Gigabyte',
    symbol: 'GB',
    category: 'digital',
    toBase: (v) => v * 1024 * 1024 * 1024,
    fromBase: (v) => v / (1024 * 1024 * 1024),
  },
  terabyte: {
    name: 'Terabyte',
    symbol: 'TB',
    category: 'digital',
    toBase: (v) => v * Math.pow(1024, 4),
    fromBase: (v) => v / Math.pow(1024, 4),
  },
  petabyte: {
    name: 'Petabyte',
    symbol: 'PB',
    category: 'digital',
    toBase: (v) => v * Math.pow(1024, 5),
    fromBase: (v) => v / Math.pow(1024, 5),
  },
  bit: {
    name: 'Bit',
    symbol: 'bit',
    category: 'digital',
    toBase: (v) => v / 8,
    fromBase: (v) => v * 8,
  },
  kilobit: {
    name: 'Kilobit',
    symbol: 'Kbit',
    category: 'digital',
    toBase: (v) => v * 1024 / 8,
    fromBase: (v) => v * 8 / 1024,
  },
  megabit: {
    name: 'Megabit',
    symbol: 'Mbit',
    category: 'digital',
    toBase: (v) => v * 1024 * 1024 / 8,
    fromBase: (v) => v * 8 / (1024 * 1024),
  },
  gigabit: {
    name: 'Gigabit',
    symbol: 'Gbit',
    category: 'digital',
    toBase: (v) => v * 1024 * 1024 * 1024 / 8,
    fromBase: (v) => v * 8 / (1024 * 1024 * 1024),
  },
};

// All units combined
export const allUnits: Record<string, Unit> = {
  ...lengthUnits,
  ...weightUnits,
  ...temperatureUnits,
  ...volumeUnits,
  ...areaUnits,
  ...speedUnits,
  ...timeUnits,
  ...digitalUnits,
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
    units: Object.keys(areaUnits),
  },
  speed: {
    name: 'Speed',
    units: Object.keys(speedUnits),
  },
  time: {
    name: 'Time',
    units: Object.keys(timeUnits),
  },
  digital: {
    name: 'Digital Storage',
    units: Object.keys(digitalUnits),
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