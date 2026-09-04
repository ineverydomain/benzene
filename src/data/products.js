export const CATEGORIES = [
  { id: 'all', name: 'All Products', count: 15 },
  { id: 'power-quality', name: 'Power Quality Analyzers', count: 3, icon: 'Zap' },
  { id: 'thermal-imaging', name: 'Thermal Imagers', count: 3, icon: 'Flame' },
  { id: 'insulation-earth', name: 'Insulation & Earthing', count: 4, icon: 'ShieldCheck' },
  { id: 'meters-multimeters', name: 'Meters & Multimeters', count: 3, icon: 'Activity' },
  { id: 'oscilloscopes-energy', name: 'Oscilloscopes & Energy', count: 2, icon: 'Cpu' }
];

export const PRODUCTS = [
  {
    id: 'ca-8345',
    modelCode: 'CA 8345',
    name: 'Class A Power Quality Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: 'IEC 61000-4-30 Class A certified analyzer for critical grid & industrial power audits.',
    badge: 'Best Seller',
    availability: 'in-stock', // in-stock | low-stock | on-request
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IEC 61000-4-30 Edition 3 Class A Compliance',
      '4 Voltage & 4 Current channels with simultaneous recording',
      'Harmonics up to 50th order with phase angles',
      'Inrush current recording up to 10 minutes',
      'Wi-Fi, Ethernet, USB, & SD Card data logging',
      'CAT IV 1000V / CAT III 1000V Safety Rating'
    ],
    specs: {
      voltageRange: '10 V to 1000 V AC/DC',
      currentRange: '5 mA to 10,000 A (CT dependent)',
      samplingRate: '512 samples per cycle',
      accuracy: '±0.1% for voltage',
      display: '7" Color Touchscreen TFT LCD',
      batteryLife: 'Up to 10 hours rechargeable Li-ion',
      communication: 'Wi-Fi, Ethernet, USB 2.0, Web Server',
      ipRating: 'IP54 rugged enclosure'
    }
  },
  {
    id: 'alm-34',
    modelCode: 'ALM 34',
    name: '3-Phase Power & Harmonics Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: 'Comprehensive 3-phase electrical load, harmonics & transient recorder.',
    badge: 'Popular',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Real-time phasor display & unbalance calculation',
      'Transients capture down to 2.5 µs',
      'Automatic current probe recognition (AmpFlex / MiniFlex)',
      'DataView® software included for automated reporting',
      'Compact ergonomically designed IP54 housing'
    ],
    specs: {
      voltageRange: '2 V to 1000 V AC/DC',
      currentRange: '100 mA to 6500 A AC',
      samplingRate: '256 samples per cycle',
      accuracy: '±0.5% reading',
      display: '5.7" High Resolution Color Display',
      batteryLife: 'Up to 8 hours continuous operation',
      communication: 'USB, Bluetooth interface',
      ipRating: 'IP54'
    }
  },
  {
    id: 'ca-8336',
    modelCode: 'CA 8336',
    name: 'Qualistar+ Power Quality Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: 'Heavy-duty power quality diagnostic tool for electrical maintenance engineers.',
    badge: null,
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 14,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Inrush current mode with waveform captures',
      'TrueRMS measurement up to 50th harmonic',
      'Power factor, Cos φ, Tan φ, & Energy metering (kWh, VARh)',
      '2 GB internal memory for multi-week trend monitoring'
    ],
    specs: {
      voltageRange: '2 V to 1000 V AC/DC',
      currentRange: '10 mA to 10,000 A',
      samplingRate: '256 samples/cycle',
      accuracy: '±0.5%',
      display: 'Color TFT 1/4 VGA screen',
      batteryLife: '8 hours',
      communication: 'USB 2.0',
      ipRating: 'IP53'
    }
  },
  {
    id: 'tc-4460h',
    modelCode: 'TC 4460H',
    name: 'Industrial High Resolution Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imagers',
    tagline: '384×288 IR resolution with <40mK thermal sensitivity for predictive maintenance.',
    badge: 'Flagship',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '384×288 uncooled FPA thermal detector (110,592 pixels)',
      'High thermal sensitivity NETD < 40mK (0.04°C)',
      'Wide temperature range: -20°C to 650°C (optional 1500°C)',
      'Thermal, Visual, PIP, & MSX-style Fusion modes',
      'Voice annotation, laser pointer & LED illumination light',
      'Drop tested to 2 meters with IP54 rating'
    ],
    specs: {
      thermalResolution: '384 × 288 pixels',
      tempRange: '-20°C to 650°C (-4°F to 1202°F)',
      thermalSensitivity: '< 40 mK at 30°C',
      frameRate: '50 Hz real-time thermal video',
      fieldOfView: '28.4° × 21.5° (Manual/Auto focus)',
      display: '4.3" Capacitive Touchscreen',
      batteryLife: '5 hours swappable Li-ion',
      communication: 'Wi-Fi, Bluetooth, USB-C'
    }
  },
  {
    id: 'tc-1800',
    modelCode: 'TC 1800',
    name: 'Handheld Diagnostic Thermal Camera',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imagers',
    tagline: '160×120 entry-level thermal imager for fast hot-spot inspection.',
    badge: 'Best Value',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.6,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '160×120 IR detector with 25Hz smooth video output',
      'Automatic hot spot & cold spot tracking',
      '5 color palettes: Ironbow, Rainbow, White Hot, Black Hot, Lava',
      'Includes Benzene Thermal Report Analysis software'
    ],
    specs: {
      thermalResolution: '160 × 120 pixels',
      tempRange: '-20°C to 350°C',
      thermalSensitivity: '< 50 mK',
      frameRate: '25 Hz',
      fieldOfView: '37.2° × 28.5°',
      display: '3.2" LCD Screen',
      batteryLife: '6 hours',
      communication: 'Micro-USB'
    }
  },
  {
    id: 'tc-cam-50',
    modelCode: 'TC Cam 50',
    name: 'Thermal Camcorder for Electrical Audits',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imagers',
    tagline: 'Radiometric thermal video camcorder with continuous radiometric recording.',
    badge: 'New',
    availability: 'low-stock',
    availabilityText: 'Low Stock - Order Soon',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 11,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Full radiometric thermal video recording at 50fps',
      'Rotatable lens mechanism up to 180° for awkward angles',
      'GPS location tagging on saved thermal images'
    ],
    specs: {
      thermalResolution: '640 × 480 pixels (Super-resolution mode)',
      tempRange: '-40°C to 1200°C',
      thermalSensitivity: '< 30 mK',
      frameRate: '50 Hz',
      fieldOfView: '24° × 18°',
      display: '5.0" Rotating HD Touchscreen',
      batteryLife: '4 hours continuous',
      communication: 'Wi-Fi, HDMI, USB-C'
    }
  },
  {
    id: 'ca-6528',
    modelCode: 'CA 6528',
    name: '1kV High Precision Insulation Tester',
    category: 'insulation-earth',
    categoryName: 'Insulation & Earthing',
    tagline: 'Digital 1000V insulation resistance tester with automatic PI/DAR calculation.',
    badge: 'Best Seller',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Test Voltages: 250V, 500V, 1000V DC',
      'Insulation Resistance measurement up to 11 GΩ',
      'Automatic Calculation of DAR (Dielectric Absorption Ratio) & PI (Polarization Index)',
      '200mA Continuity test with auto polarity reversal',
      'Backlit dual display with analogue bar-graph',
      'Safety CAT IV 600V compliant'
    ],
    specs: {
      testVoltage: '250 V, 500 V, 1000 V DC',
      resistanceRange: '0.01 MΩ to 11 GΩ',
      continuityTest: '0.01 Ω to 40 Ω (200 mA current)',
      voltageMeasurement: '1 V to 700 V AC/DC',
      display: 'Dual Backlit LCD with 35-segment Bargraph',
      batteryLife: 'Over 2000 tests at 1000V',
      communication: 'Optical USB interface',
      ipRating: 'IP54'
    }
  },
  {
    id: 'ca-6555',
    modelCode: 'CA 6555',
    name: '15kV Heavy Duty Insulation Tester',
    category: 'insulation-earth',
    categoryName: 'Insulation & Earthing',
    tagline: 'High voltage 15kV diagnostic insulation tester for power transformers & sub-station cables.',
    badge: 'Heavy Duty',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Variable test voltage from 40V to 15,000V DC',
      'Measures Insulation up to 30 TΩ (30,000,000 MΩ)',
      'Automated Step Voltage, Ramp Voltage & Burn Mode testing',
      '5mA short circuit current for quick capacitive charging',
      'Housed in ultra-rugged Pelican-style waterproof case'
    ],
    specs: {
      testVoltage: '40 V to 15,000 V DC (adjustable in 10V steps)',
      resistanceRange: '10 kΩ to 30 TΩ',
      continuityTest: 'Automated DD (Dielectric Discharge) calculation',
      voltageMeasurement: '1 V to 2500 V AC/DC',
      display: 'Graphical LCD with real-time R(t)+V(t)+I(t) curves',
      batteryLife: 'Rechargeable LiFePO4 battery',
      communication: 'USB & Bluetooth',
      ipRating: 'IP65 (closed) / IP54 (open)'
    }
  },
  {
    id: 'et-4105',
    modelCode: 'ET 4105',
    name: 'Digital Earth Resistance Tester',
    category: 'insulation-earth',
    categoryName: 'Insulation & Earthing',
    tagline: '3-Pole & 4-Pole soil resistivity & earth ground resistance tester.',
    badge: null,
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '2-wire, 3-wire and 4-wire earth resistance measurement',
      'Earth resistivity measurement (Wenner method)',
      'Noise suppression up to 40V peak-to-peak',
      'High accuracy 0.01Ω resolution on 20Ω range'
    ],
    specs: {
      testVoltage: 'Earth resistance 0.01 Ω to 2000 Ω',
      resistanceRange: '0.01 Ω to 2000 Ω',
      continuityTest: 'Earth Voltage up to 200 V AC',
      voltageMeasurement: '1 V to 200 V AC',
      display: '3-1/2 Digit 2000 count LCD',
      batteryLife: '8 × AA alkaline batteries',
      communication: 'Standalone rugged kit',
      ipRating: 'IP54'
    }
  },
  {
    id: 'mo-200',
    modelCode: 'MO 200',
    name: '200A Micro-Ohmmeter',
    category: 'insulation-earth',
    categoryName: 'Insulation & Earthing',
    tagline: 'High precision low resistance micro-ohmmeter for circuit breakers & busbar joints.',
    badge: 'Precision',
    availability: 'on-request',
    availabilityText: 'Made to Order - Inquiry Required',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 8,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Test current selectable up to 200A DC true continuous',
      'Resolution down to 0.1 µΩ',
      'Kelvin 4-wire measurement technique eliminates lead resistance',
      'Thermal printer output built into heavy duty transport case'
    ],
    specs: {
      testVoltage: '200 A DC Test Current',
      resistanceRange: '0.1 µΩ to 2000 mΩ',
      continuityTest: 'Automatic demagnetization circuit',
      voltageMeasurement: 'Direct contact resistance test',
      display: 'High contrast OLED display',
      batteryLife: 'Main powered 230V AC',
      communication: 'RS232 / USB / Internal Thermal Printer',
      ipRating: 'IP67 case'
    }
  },
  {
    id: 'digi-730d',
    modelCode: 'DiGi 730D',
    name: 'True RMS Industrial Digital Multimeter',
    category: 'meters-multimeters',
    categoryName: 'Meters & Multimeters',
    tagline: 'Heavy duty IP67 waterproof & 1000V CAT IV rugged industrial DMM.',
    badge: 'Best Seller',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '60,000 counts dual LCD with bar-graph & orange backlight',
      'True RMS AC+DC measurements with 100 kHz bandwidth',
      'LoZ low impedance voltage mode to prevent ghost voltages',
      'Low Pass Filter (VFD) mode for variable frequency drives',
      'IP67 dustproof & waterproof + 3-meter drop proof construction'
    ],
    specs: {
      acDcVoltage: '1000 V AC / 1000 V DC',
      acDcCurrent: '10 A continuous (20 A for 30s)',
      resistanceCapacitance: '60 MΩ / 10 mF max',
      frequencyTemp: '100 kHz / -40°C to 1000°C (K-type probe)',
      display: '60,000 count dual display LCD',
      batteryLife: '200 hours continuous',
      communication: 'Bluetooth low energy app logging',
      ipRating: 'IP67'
    }
  },
  {
    id: 'cm-2000',
    modelCode: 'CM 2000',
    name: '2000A AC/DC True RMS Clamp Meter',
    category: 'meters-multimeters',
    categoryName: 'Meters & Multimeters',
    tagline: '55mm jaw opening high current AC/DC clamp meter with Inrush measurement.',
    badge: 'Popular',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '2000A AC/DC Current measurement with 100ms Inrush current capture',
      '55mm large clamp jaw accommodates thick busbars & parallel cables',
      'Non-contact voltage (NCV) indicator light & buzzer',
      'Includes temperature probe, heavy duty leads, & padded carrying pouch'
    ],
    specs: {
      acDcVoltage: '1000 V AC / 1000 V DC',
      acDcCurrent: '2000 A AC / 2000 A DC',
      resistanceCapacitance: '60 MΩ / 100 mF',
      frequencyTemp: '10 kHz / -50°C to 1000°C',
      display: '6000 count backlit LCD',
      batteryLife: '100 hours',
      communication: 'Bluetooth connectivity',
      ipRating: 'CAT IV 600V / CAT III 1000V'
    }
  },
  {
    id: 'digi-510',
    modelCode: 'DiGi 510',
    name: 'Compact Field Multimeter',
    category: 'meters-multimeters',
    categoryName: 'Meters & Multimeters',
    tagline: 'Pocket-sized true RMS DMM with non-contact voltage detector for field technicians.',
    badge: null,
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '6000 counts auto-ranging with fast response time',
      'Built-in LED flashlight for dark junction boxes',
      'Smart auto power-off & low battery alert'
    ],
    specs: {
      acDcVoltage: '600 V AC / 600 V DC',
      acDcCurrent: '10 A AC/DC',
      resistanceCapacitance: '40 MΩ / 4000 µF',
      frequencyTemp: '5 MHz / NCV built-in',
      display: '6000 count backlit LCD',
      batteryLife: '150 hours',
      communication: 'Standard probes',
      ipRating: 'CAT III 600V'
    }
  },
  {
    id: 'ox-9304',
    modelCode: 'OX 9304',
    name: '300MHz 4-Channel Isolated Handheld Oscilloscope',
    category: 'oscilloscopes-energy',
    categoryName: 'Oscilloscopes & Energy',
    tagline: '600V CAT III isolated 4-channel portable digital storage scope + DMM + Harmonics.',
    badge: 'Lab Grade',
    availability: 'on-request',
    availabilityText: 'Special Order / Demo Available',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 7,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '4 channels with 600V CAT III channel-to-channel isolation',
      '300 MHz bandwidth with 2.5 GS/s real-time sampling rate per channel',
      '3-in-1 Instrument: Oscilloscope + 4-channel DMM + Power Analyzer',
      'Color 7"WVGA touchscreen with intuitive touch gestures'
    ],
    specs: {
      bandwidth: '300 MHz',
      channels: '4 Isolated Channels',
      sampleRate: '2.5 GS/s per channel',
      recordLength: '100 kpts per channel',
      display: '7" Color Touchscreen',
      batteryLife: '7 hours Li-ion battery',
      communication: 'Wi-Fi, Ethernet, USB, SD Card',
      ipRating: 'IP54 portable field casing'
    }
  },
  {
    id: 'eon-40',
    modelCode: 'EON 4.0',
    name: 'Class 0.2S Smart Energy & Power Monitor',
    category: 'oscilloscopes-energy',
    categoryName: 'Oscilloscopes & Energy',
    tagline: 'High precision revenue-grade multi-tariff energy meter with Modbus RS485 & IoT connectivity.',
    badge: 'Smart Energy',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Class 0.2S active energy accuracy per IEC 62053-22',
      'RS485 Modbus RTU & Ethernet Modbus TCP output',
      'Monitors V, I, F, PF, kW, kVA, kVAR, kWh, kVARh & THD (V & I)',
      'Dual source energy metering (EB vs DG source)'
    ],
    specs: {
      bandwidth: '50/60 Hz utility monitoring',
      channels: '3 Phase 4 Wire / 3 Phase 3 Wire',
      sampleRate: '128 samples per cycle',
      accuracyClass: 'Class 0.2S (Revenue Grade)',
      display: 'Ultra-bright custom LED display',
      batteryLife: 'Non-volatile flash memory',
      communication: 'RS485 Modbus RTU / Ethernet',
      ipRating: 'Front panel IP65'
    }
  }
];

export const CLIENT_LOGOS = [
  { name: 'Tata Power', location: 'Utilities' },
  { name: 'Larsen & Toubro', location: 'Engineering' },
  { name: 'Siemens Energy', location: 'Electricals' },
  { name: 'ABB India', location: 'Automation' },
  { name: 'Schneider Electric', location: 'Power' },
  { name: 'BHEL', location: 'Public Sector' },
  { name: 'Reliance Infrastructure', location: 'Grid' },
  { name: 'Adani Energy Solutions', location: 'Renewables' }
];

export const TRUST_BADGES = [
  { title: '39+ Years Experience', subtitle: 'Pioneering test instrument excellence', icon: 'Award' },
  { title: '100+ Service Centers', subtitle: 'Pan-India technical calibration network', icon: 'MapPin' },
  { title: 'CE & ISO Certified', subtitle: 'ISO 9001/14001/45001 compliant manufacturing', icon: 'ShieldCheck' },
  { title: 'e-Service & Calibration', subtitle: 'Factory-trained engineers & quick turnaround', icon: 'Wrench' }
];
