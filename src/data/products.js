export const CATEGORIES = [
  { id: 'all', name: 'All Products', count: 42 },
  { id: 'power-quality', name: 'Power Quality Analyzers', count: 4, icon: 'Zap' },
  { id: 'thermal-imaging', name: 'Thermal Imagers & Camcorders', count: 16, icon: 'Flame' },
  { id: 'insulation-testers', name: 'Insulation Testers', count: 6, icon: 'ShieldCheck' },
  { id: 'earth-testers', name: 'Earth & Loop Testers', count: 6, icon: 'Compass' },
  { id: 'clamp-meters', name: 'Clamp Meters', count: 4, icon: 'Maximize2' },
  { id: 'digital-multimeters', name: 'Digital Multimeters', count: 6, icon: 'Activity' },
  { id: 'micro-ohmmeters', name: 'Micro-Ohmmeters', count: 2, icon: 'Cpu' },
  { id: 'oscilloscopes', name: 'Digital Oscilloscopes', count: 2, icon: 'Layers' },
  { id: 'installation-testers', name: 'Installation Testers', count: 2, icon: 'CheckSquare' },
  { id: 'energy-meters', name: 'Multi Function & Energy Meters', count: 10, icon: 'BarChart3' },
  { id: 'load-banks', name: 'Load Banks & Diagnostics', count: 1, icon: 'Sliders' }
];

export const PRODUCTS = [
  // --- POWER QUALITY ANALYZERS ---
  {
    id: 'ca-8345',
    modelCode: 'CA 8345',
    name: 'Class A Power Quality Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: 'IEC 61000-4-30 Class A Ed 3.0 certified analyzer for compliance testing and deep grid audits.',
    badge: 'Class A Flagship',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Certified to IEC 61000-4-30 Class A Ed 3.0',
      '512 samples/cycle resolution with 2.5 µs transient capture',
      '7" Color LCD Touchscreen display with intuitive UI',
      'Harmonics analysis up to 127th order',
      'Massive 64 GB internal memory for continuous recording',
      'Wi-Fi, Ethernet, Web server, and USB communication'
    ],
    specs: {
      compliance: 'IEC 61000-4-30 Class A Ed 3.0',
      samplingRate: '512 samples / cycle',
      transients: '2.5 µs transient capture',
      harmonics: 'Up to 127th order',
      display: '7" Color LCD Touchscreen',
      memory: '64 GB internal memory'
    }
  },
  {
    id: 'alm-20',
    modelCode: 'ALM 20',
    name: 'Portable Power Quality Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: 'Compact power manager with self-powering phase supply & Android app interface.',
    badge: 'Portable',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '3 Voltage & 3 Current Channels',
      'AC/DC Voltage: Up to 1,000 V Ph-N',
      'THD (V, I) & Individual Harmonics up to 50th order',
      'PC interface & Android application connectivity',
      'Self-powered directly via the phase'
    ],
    specs: {
      channels: '3 Voltage & 3 Current Channels',
      voltageRange: 'Up to 1,000 V Ph-N (AC/DC)',
      harmonics: 'THD & Individual Harmonics to 50th order',
      powerSource: 'Self-powered via the phase',
      connectivity: 'PC Interface & Android App'
    }
  },
  {
    id: 'alm-31',
    modelCode: 'ALM 31',
    name: '3-Phase Class B Power Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: '5.7" color screen power quality analyzer with short flicker (Pst) measurement.',
    badge: 'Popular',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '3 Voltage & 3 Current Channels',
      '5.7" Color VGA TFT screen display',
      'Complied with IEC 61000-4-30 Class B',
      'Short flicker measurement (Pst)',
      'Battery backup up to 13 hours continuous'
    ],
    specs: {
      channels: '3 Voltage & 3 Current',
      display: '5.7" Color VGA TFT screen',
      standard: 'IEC 61000-4-30 Class B',
      flicker: 'Short flicker measurement (Pst)',
      batteryLife: 'Up to 13 hours battery backup'
    }
  },
  {
    id: 'alm-36',
    modelCode: 'ALM 36',
    name: '4-Phase Power Quality Analyzer',
    category: 'power-quality',
    categoryName: 'Power Quality',
    tagline: '4 Voltage & 4 Current channels with IEC 61000-4-30 Class B compliance.',
    badge: '4 Channel',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '4 Voltage & 4 Current Channels',
      '5.7" Color VGA TFT screen display',
      'Complied with IEC 61000-4-30 Class B',
      'Short flicker measurement (Pst)',
      'Long-lasting battery backup up to 13 hours'
    ],
    specs: {
      channels: '4 Voltage & 4 Current',
      display: '5.7" Color VGA TFT',
      standard: 'IEC 61000-4-30 Class B',
      flicker: 'Short flicker measurement (Pst)',
      batteryLife: 'Up to 13 hours'
    }
  },

  // --- THERMAL IMAGERS & CAMCORDERS ---
  {
    id: 'ma-250',
    modelCode: 'MA 250',
    name: 'Compact Mobile Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '256×192 IR mobile attachment thermal imager for smartphones.',
    badge: 'Mobile',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.6,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 256 × 192 pixels',
      'Temperature Range: -20°C to 400°C',
      'High Thermal Sensitivity NETD < 40 mK',
      'Field of View (FOV): 50° × 37.2°',
      'SuperIR, Thermal/PIP modes',
      'USB-C & Lightning dual connector support'
    ],
    specs: {
      irResolution: '256 × 192 pixels',
      tempRange: '-20°C to 400°C',
      netd: '< 40 mK',
      fov: '50° × 37.2°',
      interface: 'USB-C & Lightning'
    }
  },
  {
    id: 'tc-e050',
    modelCode: 'TC E050',
    name: 'Entry-Level Handheld Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Ergonomic 96×96 (SuperIR 240×240) handheld thermal imager with 8 hr battery.',
    badge: 'Entry Level',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.5,
    reviewsCount: 12,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 96 × 96 (SuperIR: 240 × 240 pixels)',
      'Temperature Range: -20°C to 550°C',
      'NETD < 50 mK, FOV 50° × 50°',
      'Thermal / Visual / Fusion modes',
      '8 hours continuous battery life, 2.4" LCD'
    ],
    specs: {
      irResolution: '96 × 96 (SuperIR 240 × 240)',
      tempRange: '-20°C to 550°C',
      display: '2.4" LCD Screen',
      batteryLife: '8 hours continuous',
      modes: 'Thermal / Visual / Fusion'
    }
  },
  {
    id: 'tc-s030',
    modelCode: 'TC S030',
    name: 'Portable Precision Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '3.5" Touchscreen pocket thermal camera with PIP & blending modes.',
    badge: 'Touchscreen',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 96 × 96 pixels',
      'Temperature Range: -20°C to 350°C',
      'NETD < 50 mK, FOV 50° × 50°',
      '3.5" Touchscreen display',
      'SuperIR, Thermal/Visual/Fusion, PIP/Blending'
    ],
    specs: {
      irResolution: '96 × 96 pixels',
      tempRange: '-20°C to 350°C',
      display: '3.5" Touchscreen',
      netd: '< 50 mK',
      modes: 'SuperIR, Fusion, PIP, Blending'
    }
  },
  {
    id: 'tc-2150',
    modelCode: 'TC 2150',
    name: 'Compact Diagnostic Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '192×144 IR resolution with SuperIR enhancement up to 550°C.',
    badge: 'Best Value',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 192 × 144 pixels with SuperIR',
      'Temperature Range: -20°C to 550°C',
      'High Sensitivity NETD < 40 mK',
      'FOV: 27.8° × 37.2°',
      'Thermal/Visual/Fusion, PIP, 6 hr battery'
    ],
    specs: {
      irResolution: '192 × 144 pixels',
      tempRange: '-20°C to 550°C',
      netd: '< 40 mK',
      fov: '27.8° × 37.2°',
      batteryLife: '6 hours'
    }
  },
  {
    id: 'tc-s240',
    modelCode: 'TC S240',
    name: 'Compact Precision Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '256×192 (49,152 px) IR camera with Wi-Fi & 3.5" Touch LCD.',
    badge: 'Wi-Fi Enabled',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 256 × 192 (49,152 pixels)',
      'Temperature Range: -20°C to 400°C',
      'NETD < 40 mK',
      '3.5" LCD Touchscreen',
      'SuperIR, Wi-Fi connectivity, Fusion Mode'
    ],
    specs: {
      irResolution: '256 × 192 (49,152 px)',
      tempRange: '-20°C to 400°C',
      display: '3.5" LCD Touch',
      netd: '< 40 mK',
      wireless: 'Built-in Wi-Fi'
    }
  },
  {
    id: 'tc-2250',
    modelCode: 'TC 2250',
    name: 'Advanced Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Dual handle design with 256×192 thermal resolution & Wi-Fi analytics.',
    badge: 'Popular',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 256 × 192 (49,152 pixels)',
      'Temperature Range: -20°C to 400°C',
      'NETD < 40 mK',
      '3.5" LCD Touchscreen',
      'SuperIR, Wi-Fi, Fusion Mode'
    ],
    specs: {
      irResolution: '256 × 192 pixels',
      tempRange: '-20°C to 400°C',
      netd: '< 40 mK',
      display: '3.5" LCD Touch',
      connectivity: 'Wi-Fi & USB'
    }
  },
  {
    id: 'tc-3250',
    modelCode: 'TC 3250 / TC 3151',
    name: 'Professional Handheld Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '8 MP Visual camera with SuperIR (512×384) & swappable battery.',
    badge: '8 MP Camera',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 256 × 192 (SuperIR: 512 × 384)',
      'Temperature Range: -20°C to 550°C',
      'NETD < 40 mK, FOV: 25° × 18.8°',
      'Integrated 8 MP Visual Camera',
      'Touch LCD screen & Interchangeable Battery'
    ],
    specs: {
      irResolution: '256 × 192 (SuperIR 512 × 384)',
      tempRange: '-20°C to 550°C',
      camera: '8 MP Visual Camera',
      fov: '25° × 18.8°',
      battery: 'Interchangeable Battery'
    }
  },
  {
    id: 'tc-3360',
    modelCode: 'TC 3360',
    name: 'Professional Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '384×288 IR resolution with NETD <30 mK for high-precision plant inspection.',
    badge: 'High Precision',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 384 × 288 (SuperIR: 768 × 576)',
      'Temperature Range: -20°C to 650°C',
      'Ultra-high sensitivity NETD < 30 mK',
      'FOV: 41.1° × 30.5°',
      '8 MP Camera, Fusion/PIP, 3.5" Touch LCD'
    ],
    specs: {
      irResolution: '384 × 288 (SuperIR 768 × 576)',
      tempRange: '-20°C to 650°C',
      netd: '< 30 mK',
      camera: '8 MP Camera',
      fov: '41.1° × 30.5°'
    }
  },
  {
    id: 'tc-3660',
    modelCode: 'TC 3660',
    name: 'High-Resolution Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '640×480 IR resolution (SuperIR 1280×960) for critical power grid predictive maintenance.',
    badge: '640×480 HD',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 40,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 640 × 480 (SuperIR: 1280 × 960)',
      'Temperature Range: -20°C to 650°C',
      'NETD < 35 mK',
      'FOV: 41.9° × 33.3°',
      '8 MP Camera, Fusion/PIP, 3.5" Touch LCD'
    ],
    specs: {
      irResolution: '640 × 480 (SuperIR 1280 × 960)',
      tempRange: '-20°C to 650°C',
      netd: '< 35 mK',
      camera: '8 MP Camera',
      fov: '41.9° × 33.3°'
    }
  },
  {
    id: 'tc-p360',
    modelCode: 'TC P360',
    name: 'Advanced Thermal Imager with Auto Focus',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Auto Focus mechanism with optional telephoto/wide angle lenses & 8 hr battery.',
    badge: 'Auto Focus',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 17,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 384 × 288 (SuperIR: 768 × 576)',
      'Temperature Range: -20°C to 650°C',
      'NETD ≤ 50 mK, FOV: 24° × 18°',
      'Auto Focus with interchangeable optional lenses',
      '8 hours long battery endurance'
    ],
    specs: {
      irResolution: '384 × 288 pixels',
      tempRange: '-20°C to 650°C',
      focus: 'Auto Focus',
      lenses: 'Optional interchangeable lenses',
      batteryLife: '8 hours'
    }
  },
  {
    id: 'tc-4360',
    modelCode: 'TC 4360',
    name: 'Advanced Diagnostics Thermal Imager',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Laser Auto Focus at 50 Hz real-time thermal video on 4.3" Touchscreen.',
    badge: 'Laser AF 50Hz',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 384 × 288 (SuperIR: 768 × 576)',
      'Temperature Range: -20°C to 650°C',
      'NETD < 35 mK, FOV: 25° × 19°',
      'Laser Auto Focus with 50 Hz refresh rate',
      'Large 4.3" Touchscreen LCD'
    ],
    specs: {
      irResolution: '384 × 288 pixels',
      frameRate: '50 Hz real-time video',
      focus: 'Laser AF',
      display: '4.3" Touch LCD',
      netd: '< 35 mK'
    }
  },
  {
    id: 'tc-4460h',
    modelCode: 'TC 4460 / TC 4460H',
    name: 'Professional Diagnostics Imager (Up to 2000°C)',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'High-temperature industrial camera with range up to 2000°C for steel & furnaces.',
    badge: '2000°C High Temp',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 36,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 480 × 360 (SuperIR: 960 × 720)',
      'Temperature Range: Up to 650°C / 2000°C (High-Temp H version)',
      'NETD < 35 mK, FOV: 18.7° × 14°',
      'Laser AF, 50 Hz frame rate',
      '8 MP Visual Camera with LED light'
    ],
    specs: {
      irResolution: '480 × 360 (SuperIR 960 × 720)',
      tempRange: 'Up to 650°C / 2000°C',
      camera: '8 MP Visual Camera',
      frameRate: '50 Hz',
      netd: '< 35 mK'
    }
  },
  {
    id: 'tc-4660h',
    modelCode: 'TC 4660 / TC 4660H',
    name: 'High-Resolution Diagnostics Imager (Up to 2000°C)',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Top-tier 640×480 thermal resolution with 2000°C temperature option.',
    badge: 'Ultra Diagnostic',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 640 × 480 (SuperIR: 1280 × 960)',
      'Temperature Range: Up to 650°C / 2000°C',
      'NETD < 35 mK, FOV: 25° × 19°',
      'Laser AF, 50 Hz frame rate',
      '8 MP Camera, Touch screen LCD'
    ],
    specs: {
      irResolution: '640 × 480 (SuperIR 1280 × 960)',
      tempRange: 'Up to 650°C / 2000°C',
      netd: '< 35 mK',
      frameRate: '50 Hz',
      camera: '8 MP Camera'
    }
  },
  {
    id: 'tcc-7460',
    modelCode: 'TCC 7460 / TCC 742K',
    name: 'Professional Thermal Camcorder',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Ergonomic camcorder layout with 480×360 IR & 5" Touch LCD display.',
    badge: 'Camcorder',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 480 × 360 (SuperIR: 960 × 720)',
      'Temperature Range: -20°C to 650°C / -40°C to 2200°C',
      'NETD < 30 mK',
      '5" LCD Touchscreen display',
      'Laser AF, 8 MP Camera, Interchangeable Battery'
    ],
    specs: {
      irResolution: '480 × 360 pixels',
      tempRange: '-20°C to 650°C / -40°C to 2200°C',
      display: '5" LCD Touchscreen',
      camera: '8 MP Camera',
      netd: '< 30 mK'
    }
  },
  {
    id: 'tcc-7660',
    modelCode: 'TCC 7660 / TCC 762K',
    name: 'High-Resolution Thermal Camcorder',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: '640×480 IR resolution thermal camcorder for continuous substation recording.',
    badge: 'HD Camcorder',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 26,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 640 × 480 (SuperIR: 1280 × 960)',
      'Temperature Range: -20°C to 650°C / -40°C to 2200°C',
      'NETD < 30 mK',
      '5" LCD Touchscreen display',
      'Laser AF, 8 MP Camera, Interchangeable Battery'
    ],
    specs: {
      irResolution: '640 × 480 pixels',
      tempRange: '-20°C to 650°C / -40°C to 2200°C',
      display: '5" LCD Touchscreen',
      netd: '< 30 mK',
      camera: '8 MP Camera'
    }
  },
  {
    id: 'tcc-812k',
    modelCode: 'TCC 812K',
    name: 'Ultra-High Resolution Thermal Camcorder (1280×1024)',
    category: 'thermal-imaging',
    categoryName: 'Thermal Imaging',
    tagline: 'Flagship 1280×1024 (SuperIR 2560×2048) thermal camera with 5.1" OLED Touch.',
    badge: 'Ultra HD 1280×1024',
    availability: 'on-request',
    availabilityText: 'Special Order / Inquiry Required',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IR Resolution: 1280 × 1024 (SuperIR: 2560 × 2048)',
      'Temperature Range: -40°C to 2200°C',
      'Ultra sensitivity NETD < 20 mK',
      '5.1" OLED Touchscreen display',
      'Laser AF, 13 MP Camera, Interchangeable Battery'
    ],
    specs: {
      irResolution: '1280 × 1024 (SuperIR 2560 × 2048)',
      tempRange: '-40°C to 2200°C',
      netd: '< 20 mK',
      display: '5.1" OLED Touchscreen',
      camera: '13 MP Camera'
    }
  },

  // --- INSULATION TESTERS ---
  {
    id: 'ca-6528',
    modelCode: 'CA 6522 / CA 6528',
    name: 'Professional 1kV Insulation Testers',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: '1000V digital insulation tester measuring up to 110 GΩ with backlit dual LCD.',
    badge: 'Best Seller',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Test Voltages: 250 V, 500 V, 1000 V',
      'Insulation Range: CA 6522: 50 kΩ to 40 GΩ, CA 6528: 50 kΩ to 110 GΩ',
      'Voltage Measurement: Up to 700 V',
      '4000 counts double digital backlit LCD screen',
      'Continuity test at 200mA (0.001Ω - 400Ω)',
      'IP 40 (CA 6528) / IP 54 (CA 6522)'
    ],
    specs: {
      testVoltage: '250 V, 500 V, 1000 V',
      resistanceRange: '50 kΩ to 110 GΩ',
      voltageRange: 'Up to 700 V',
      continuity: '200 mA (0.001 Ω to 400 Ω)',
      display: '4000 counts double LCD'
    }
  },
  {
    id: 'ca-6526',
    modelCode: 'CA 6524 / CA 6526',
    name: 'Advanced 1kV Insulation Testers with Bluetooth',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: '50V to 1000V insulation testing with PI/DAR, Bluetooth & capacitance measurement.',
    badge: 'Bluetooth',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Test Voltages: 50 V, 100 V, 250 V, 500 V, 1000 V',
      'Insulation Range: 10 kΩ to 20 GΩ (Accuracy ±3%)',
      'PI & DAR automatic calculation',
      'Capacitance Measurement: 0.1 nF to 10 µF (CA 6526)',
      'Memory: 300 (CA 6524) / 1300 measurements (CA 6526)',
      'Bluetooth Communication (CA 6526)'
    ],
    specs: {
      testVoltage: '50 V, 100 V, 250 V, 500 V, 1000 V',
      resistanceRange: '10 kΩ to 20 GΩ',
      capacitance: '0.1 nF to 10 µF',
      piDar: 'Automatic PI & DAR',
      bluetooth: 'Bluetooth (CA 6526)'
    }
  },
  {
    id: 'ca-6536',
    modelCode: 'CA 6532 / CA 6534 / CA 6536',
    name: 'Specialized Telecom & ESD Insulation Testers',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: 'Specialized low-voltage & telecom insulation resistance testing up to 1000V.',
    badge: 'Specialized',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Test Voltage: 250 V, 500 V, 1000 V',
      'PI & DAR calculation (CA 6532)',
      'Continuity at 200mA (0.00Ω to 10.00Ω)',
      '1300 record memory (CA 6532 & 6534)',
      'Bluetooth Communication (CA 6532 & 6534)'
    ],
    specs: {
      testVoltage: '250 V, 500 V, 1000 V',
      resistanceRange: '50 kΩ to 110 GΩ',
      memory: '1300 records',
      connectivity: 'Bluetooth',
      display: '4000 counts double + bargraph'
    }
  },
  {
    id: 'ca-6545',
    modelCode: 'CA 6505 / CA 6545',
    name: '5kV High Voltage Insulation Testers',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: '5kV insulation tester measuring up to 10 TΩ with automatic DAR/PI/DD calculation.',
    badge: '5kV Heavy Duty',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Fixed / Adjustable Test Voltage: 500V, 1000V, 2500V, 5000V (or 500V to 5100V in 10V/100V steps)',
      'Insulation Resistance: 1 Ω to 10 TΩ',
      'Automatic calculation of DAR / PI / DD (CA 6545)',
      'Voltage Range: Up to 5100 V, Leakage Current: 3 mA',
      'Capacitance Range: Up to 49.99 µF'
    ],
    specs: {
      testVoltage: '500 V to 5100 V DC',
      resistanceRange: '1 Ω to 10 TΩ',
      voltageRange: 'Up to 5100 V AC/DC',
      leakageCurrent: '3 mA',
      capacitance: 'Up to 49.99 µF'
    }
  },
  {
    id: 'ca-6549',
    modelCode: 'CA 6547 / CA 6549',
    name: 'Advanced 5kV Testers with Curve Plotting',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: '5kV insulation tester featuring real-time R(t) resistance curve graph plotting.',
    badge: 'Graphic Curve',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Large backlit LCD with direct plotting R(t) curves (CA 6549)',
      'Automatic DAR/PI/DD ratios calculation',
      'Resistance Range: 10 kΩ to 10 TΩ',
      'Calculation of R at Reference Temperature (T°)',
      '128KB memory, USB two-way PC interface'
    ],
    specs: {
      testVoltage: '40 V to 5100 V',
      resistanceRange: '10 kΩ to 10 TΩ',
      plotting: 'Direct R(t) curve plotting',
      memory: '128KB storage capacity',
      interface: 'USB Two-Way PC interface'
    }
  },
  {
    id: 'ca-6555',
    modelCode: 'CA 6550 / CA 6555',
    name: 'Ultra High Voltage 15kV Insulation Testers',
    category: 'insulation-testers',
    categoryName: 'Insulation Testers',
    tagline: '15kV diagnostic tester measuring up to 30 TΩ with Ramp, Step Voltage & Burn-in mode.',
    badge: '15kV Flagship',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 37,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'CA 6550: Up to 10,000 V / 25 TΩ | CA 6555: Up to 15,000 V / 30 TΩ',
      'Voltage ramp & step with "burn-in", "early break" & "limit" modes',
      'Large graphical LCD display with backlight & bargraph',
      '80,000 points memory with USB PC interface',
      'Leakage Current up to 8 mA, Capacitance up to 19.99 µF'
    ],
    specs: {
      testVoltage: '500 V to 15,000 V DC',
      resistanceRange: '10 kΩ to 30 TΩ',
      testModes: 'Ramp, Step, Burn-in, Early break',
      memory: '80,000 measurements',
      leakageCurrent: 'Up to 8 mA'
    }
  },

  // --- EARTH & LOOP TESTERS ---
  {
    id: 'ca-6424',
    modelCode: 'CA 6424',
    name: '2P/3P Earth Tester',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: '206-segment LCD earth resistance tester with RH stake resistance & noise indication.',
    badge: '2P/3P Earth',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 20,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '2P Earth Resistance: 0.05 Ω to 50 kΩ (2%R + 1 count)',
      '3P Earth Resistance: 0.5 Ω to 50.00 kΩ (2%R + 1 count)',
      'RH Stake Resistance: 0.05 Ω to 49.99 kΩ',
      'Ue Voltage Measurement: Up to 600 VAC',
      'Leakage Current Measurement: Up to 60.00 A'
    ],
    specs: {
      earth2P: '0.05 Ω to 50 kΩ',
      earth3P: '0.5 Ω to 50.00 kΩ',
      voltage: 'Up to 600 V AC',
      leakageCurrent: 'Up to 60.00 A',
      display: 'Backlit custom 206-segment LCD'
    }
  },
  {
    id: 'ca-6462',
    modelCode: 'CA 6460 / CA 6462',
    name: '4P Earth Tester (Resistivity 3-in-1)',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: '3-in-1 earth tester for soil resistivity (Wenner) & ground resistance (TAGG).',
    badge: '4P Resistivity',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Soil Resistivity: Wenner method (4-rod method)',
      'Ground Resistance: TAGG method (62% method)',
      'Resistance Range: 0.01 Ω to 2,000 Ω (3 auto ranges)',
      '3 fault presence indicators for measurement validation',
      'CA 6462 includes Rechargeable Batteries'
    ],
    specs: {
      methods: 'Wenner (4-rod) & TAGG (62%)',
      range: '0.01 Ω to 2,000 Ω',
      testCurrent: '10mA, 1mA, 0.1mA',
      accuracy: '±2% ±1 point',
      display: 'Large 2,000-count LCD'
    }
  },
  {
    id: 'ca-6471',
    modelCode: 'CA 6470N / CA 6471',
    name: '3P/4P Earth & Selective Earth Tester',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: '5-in-1 earth tester with selective 2-clamp earth measurement & 512 memory.',
    badge: '5-in-1 Selective',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '5-in-1 Tester (CA 6471): Earth, Selective Earth, Resistivity, Coupling, Continuity',
      'Selective 4-pole measurements with 2 clamps (0.01 Ω to 500 Ω)',
      'Noise interference detection & alarm function',
      '512 memory record locations',
      'USB communication for automated report generation'
    ],
    specs: {
      modes: '5-in-1 (Selective 2 clamps)',
      range: '0.01 Ω to 99.9 kΩ',
      selectiveRange: '0.01 Ω to 500 Ω',
      memory: '512 record locations',
      communication: 'USB'
    }
  },
  {
    id: 'ca-6474',
    modelCode: 'CA 6474 / CA 6472',
    name: 'Pylon Earth Tester System',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: 'Earth measurement on high-voltage transmission pylons with overhead earth cable.',
    badge: 'Pylon Specialist',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Earth measurement on Pylons with earth cable (with CA 6474 option)',
      '3P, 4P, 4P Selective, Earth measurement with 2 clamps',
      'Earth Potential & DC Resistance measurement (0.001 Ω to 99.9 kΩ)',
      'Automatic & Expert modes with 512-record memory',
      'Frequency range: 41 Hz to 5078 Hz'
    ],
    specs: {
      pylonTesting: 'Supported via CA 6474 adapter',
      range: '0.001 Ω to 99.9 kΩ',
      frequency: '41 Hz to 5078 Hz',
      memory: '512 records',
      interface: 'USB'
    }
  },
  {
    id: 'ca-6417',
    modelCode: 'CA 6417',
    name: 'Clamp-On Earth Loop Tester',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: 'Ø35 mm clamp-on earth tester with Bluetooth & Android smartphone reporting app.',
    badge: 'Bluetooth Clamp',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Ø35 mm clamping jaw diameter',
      'OLED Display: 1,500 counts (Loop) / 4,000 counts (Ammeter)',
      'Loop Resistance up to 1,500 Ω, Inductance up to 500 µH',
      'Ground Voltage up to 75 V, Current up to 39.99 A',
      'Bluetooth & Android app integration with 2,000 memory records'
    ],
    specs: {
      jawDiameter: 'Ø35 mm',
      loopResistance: 'Up to 1,500 Ω',
      inductance: 'Up to 500 µH',
      currentRange: 'Up to 39.99 A',
      wireless: 'Bluetooth & Android App'
    }
  },
  {
    id: 'ca-6418',
    modelCode: 'CA 6418',
    name: 'Advanced Oblong Clamp-On Earth Tester',
    category: 'earth-testers',
    categoryName: 'Earth Testers',
    tagline: 'Ø32/55 mm oblong head clamp-on earth tester for busbars & flat earth tapes.',
    badge: 'Oblong Head',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Ø32/55 mm max clamping diameter (Oblong jaw for busbars)',
      'Large 152-segment OLED display',
      'Loop Resistance Range: Up to 1,200 Ω',
      'Current Range: Up to 20 A, Ground Voltage: Up to 75 V',
      '300 measurements memory with time/date stamp'
    ],
    specs: {
      jawType: 'Oblong head Ø32/55 mm',
      loopResistance: 'Up to 1,200 Ω',
      currentRange: 'Up to 20 A',
      voltageRange: 'Up to 75 V',
      memory: '300 timestamped records'
    }
  },

  // --- CLAMP METERS ---
  {
    id: 'f604',
    modelCode: 'F205 / F404 / F604',
    name: 'Heavy Duty Power Clamp Meters',
    category: 'clamp-meters',
    categoryName: 'Clamp Meters',
    tagline: 'True Inrush AC/DC power clamp meter with jaw opening up to 60 mm.',
    badge: 'Power Clamp',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 30,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Clamping Diameter: F205: 34mm | F404: 48mm | F604: 60mm',
      'Voltage AC/DC: Up to 1,200 V AC / 1,700 V DC',
      'Current AC/DC: F205: 600A AC/900A DC | F404: 1000A AC/1500A DC | F604: 2000A AC/3000A DC',
      'Measures True Inrush, kW, kVAR, kVA & Power Factor (PF)',
      'IP54 rating (F404/F604)'
    ],
    specs: {
      voltage: 'Up to 1,200 V AC / 1,700 V DC',
      current: 'Up to 2,000 A AC / 3,000 A DC',
      jawOpening: 'Up to 60 mm',
      powerModes: 'kW, kVAR, kVA, PF',
      ipRating: 'IP54'
    }
  },
  {
    id: 'f606-solar',
    modelCode: 'F406 / F606 Solar',
    name: '1700V DC Solar Photovoltaic Clamp Meter',
    category: 'clamp-meters',
    categoryName: 'Clamp Meters',
    tagline: 'Specially designed solar clamp meter for 1700V DC solar PV installations.',
    badge: '1700V DC Solar',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 25,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Specially designed for photovoltaic applications up to 1700 V DC',
      'Voltage: Up to 1,200 V AC / 1,700 V DC',
      'Current: F406: 1,000A AC/1,500A DC | F606: 2,000A AC/3,000A DC',
      '1-phase & 3-phase Power: F406 up to 1,200 kW | F606 up to 2,400 kW',
      'Voltage & Current THDf / THDr harmonic measurements'
    ],
    specs: {
      application: 'Solar PV 1700 V DC',
      voltage: 'Up to 1,700 V DC',
      current: 'Up to 2,000 A AC / 3,000 A DC',
      power: 'Up to 2,400 kW',
      harmonics: 'THDf / THDr'
    }
  },
  {
    id: 'f607-harmonics',
    modelCode: 'F407 / F607',
    name: 'Power & Harmonics Clamp Meter with Bluetooth',
    category: 'clamp-meters',
    categoryName: 'Clamp Meters',
    tagline: 'Power quality clamp meter with individual harmonics up to 25th order & Bluetooth.',
    badge: 'Harmonics',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Voltage AC/DC: Up to 1,000 V',
      'Current: F407: 1,000A AC/1,500A DC | F607: 2,000A AC/3,000A DC',
      'Individual harmonics measurement up to 25th order',
      'Measures kW, kVAR, kVA, PF & DPF with data recording',
      'Bluetooth communication for wireless data export'
    ],
    specs: {
      voltage: 'Up to 1,000 V AC/DC',
      current: 'Up to 2,000 A AC / 3,000 A DC',
      harmonics: 'Up to 25th order',
      wireless: 'Bluetooth connectivity',
      display: '10,000 counts backlit LCD'
    }
  },
  {
    id: 'f65-leakage',
    modelCode: 'F65',
    name: 'RMS Leakage Current Clamp Meter',
    category: 'clamp-meters',
    categoryName: 'Clamp Meters',
    tagline: 'IEC 61557-13 compliant AC leakage current clamp meter down to 60 mA.',
    badge: 'Leakage Current',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'AC Current Range: 60 mA to 100 A',
      '28 mm clamping jaw diameter',
      'Complied with IEC 61557-13 standard for leakage detection',
      'Voltage AC/DC: 600 V, Resistance & Continuity at 1 kΩ',
      'Frequency range: 5 Hz to 1 kHz'
    ],
    specs: {
      leakageRange: '60 mA to 100 A AC',
      jawOpening: '28 mm',
      standard: 'IEC 61557-13',
      voltage: '600 V AC/DC',
      display: '10,000 counts backlit LCD'
    }
  },

  // --- DIGITAL MULTIMETERS ---
  {
    id: 'mtx-203',
    modelCode: 'MTX 203',
    name: 'Basic Digital Multimeter (IP54)',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: '6000 count compact field digital multimeter with VLow & blue backlight.',
    badge: 'Compact DMM',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.6,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 6000 counts monochrome LCD with blue backlighting',
      'Voltage: AC: 0.4V to 600V | AC/DC: 10mV to 1000V',
      'Current: AC: 2mA to 10A & 10µA to 10A',
      'VLow low-impedance mode, HOLD, NCV, Min/Max values',
      'Rugged IP 54 rated casing'
    ],
    specs: {
      counts: '6000 counts',
      voltage: 'Up to 1000 V AC/DC',
      current: 'Up to 10 A',
      temperature: 'Up to 1,200°C',
      ipRating: 'IP54'
    }
  },
  {
    id: 'dmm-230',
    modelCode: 'DMM 210 / DMM 220 / DMM 230',
    name: 'Standard Digital Multimeter (IP67)',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: 'IP67 waterproof TRMS digital multimeter with 6,000 counts backlit bargraph.',
    badge: 'IP67 Waterproof',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 6,000 counts backlit LCD with bargraph',
      'TRMS measurement (DMM 230)',
      'Voltage: V(AC) 6V to 1000V | V(DC) 600mV to 1000V',
      'AC Bandwidth up to 1 kHz, Resistance up to 60 MΩ',
      'IP 67 waterproof & dustproof rating'
    ],
    specs: {
      counts: '6,000 counts with bargraph',
      measurementType: 'TRMS (DMM 230)',
      voltage: 'Up to 1000 V AC/DC',
      frequency: 'Up to 10 MHz',
      ipRating: 'IP67 Waterproof'
    }
  },
  {
    id: 'dmm-240',
    modelCode: 'DMM 240',
    name: '40,000 Count Advanced Digital Multimeter',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: 'High precision 40,000 counts TRMS DMM with 100 MHz frequency measurement.',
    badge: '40,000 Counts',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 40,000 counts backlit LCD with bargraph',
      'Measurement Type: TRMS with 1ms PEAK mode',
      'Voltage V(AC/DC): 400 mV to 1000 V',
      'Frequency: Up to 100 MHz, Capacitance up to 40 mF',
      'IP 67 heavy-duty industrial enclosure'
    ],
    specs: {
      counts: '40,000 counts',
      measurementType: 'TRMS',
      frequency: 'Up to 100 MHz',
      capacitance: 'Up to 40 mF',
      ipRating: 'IP67'
    }
  },
  {
    id: 'ca-5277',
    modelCode: 'CA 5273 / CA 5275 / CA 5277',
    name: 'CA Advanced Series Multimeter',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: 'Dual 2x6,000 counts LCD with 1ms Peak capture & 10 kHz AC bandwidth.',
    badge: '10 kHz Bandwidth',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 2 × 6,000 counts with backlighting & bargraph',
      'Automatic AC/DC detection (CA 5273)',
      '1 ms Peak+/Peak- values capture (CA 5277)',
      'AC Bandwidth up to 10 kHz (CA 5275 & CA 5277)',
      'IP 54 protection rating'
    ],
    specs: {
      counts: '2 × 6,000 counts',
      peakCapture: '1 ms Peak values',
      bandwidth: 'Up to 10 kHz',
      voltage: 'Up to 1000 V AC/DC',
      ipRating: 'IP54'
    }
  },
  {
    id: 'mtx-3291',
    modelCode: 'MTX 3291',
    name: '60,000 Count High Resolution Multimeter',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: '60,000 count graphical monochrome DMM with USB & IP67 rating.',
    badge: '60k High Res',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 60,000 counts backlit digital monochrome',
      'TRMS value measurement across AC+DC',
      'HOLD / Auto-HOLD & USB PC interface communication',
      'Voltage: V(AC) 6V to 1000V | V(DC) 600mV to 1000V',
      'IP 67 waterproof protection'
    ],
    specs: {
      counts: '60,000 counts',
      measurementType: 'TRMS',
      communication: 'USB PC Interface',
      capacitance: 'Up to 1000 µF',
      ipRating: 'IP67'
    }
  },
  {
    id: 'ca-5293',
    modelCode: 'CA 5292 / CA 5293',
    name: 'Professional Color Graphic Multimeter (0.02% DC)',
    category: 'digital-multimeters',
    categoryName: 'Digital Multimeters',
    tagline: '4x100,000 count color graphic DMM with 200 kHz bandwidth & trend recording.',
    badge: 'Graphic 0.02%',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: 4 × 100,000 count color graphical with backlighting',
      'Ultra high DC Accuracy: 0.03% (CA 5292) & 0.02% (CA 5293)',
      'AC & AC+DC Bandwidth: Up to 100 kHz (CA 5292) & 200 kHz (CA 5293)',
      'Memory: 10,000 (CA 5292) / 30,000 measurements (CA 5293)',
      'USB & Bluetooth communication with IP 67 rating'
    ],
    specs: {
      counts: '4 × 100,000 color display',
      accuracyDC: '0.02% V DC (CA 5293)',
      bandwidth: '200 kHz (CA 5293)',
      memory: '30,000 measurements',
      connectivity: 'USB & Bluetooth'
    }
  },

  // --- MICRO-OHMMETERS ---
  {
    id: 'ca-6255',
    modelCode: 'CA 6240 / CA 6255',
    name: '10A Precision Micro-Ohmmeter',
    category: 'micro-ohmmeters',
    categoryName: 'Micro-Ohmmeters',
    tagline: '10A micro-ohmmeter measuring down to 5 µΩ with automatic recording mode.',
    badge: '10A Micro-Ohm',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 26,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Resistance Range: CA 6240: 5 µΩ to 399.9 Ω | CA 6255: 5 mΩ to 2,500 Ω',
      'Accuracy: ±0.25% ± 2 counts',
      'Test Current Range: Selectable up to 10 A',
      'Automatic "on the fly" or manual recording mode',
      'Memory: 100 (CA 6240) / 1,500 measurements (CA 6255), RS232 / Optical USB'
    ],
    specs: {
      resolution: '5 µΩ',
      testCurrent: 'Up to 10 A',
      accuracy: '±0.25% ± 2 counts',
      memory: '1,500 measurements',
      interface: 'RS 232 / USB'
    }
  },
  {
    id: 'ca-6292',
    modelCode: 'CA 6292',
    name: '200A High-Current Micro-Ohmmeter',
    category: 'micro-ohmmeters',
    categoryName: 'Micro-Ohmmeters',
    tagline: '200A micro-ohmmeter with BSG (Both Sides Grounded) mode for circuit breaker audits.',
    badge: '200A BSG Mode',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Resistance Range: 0.1 µΩ to 1 Ω (Accuracy ±1%)',
      'Test Current: Selectable up to 200 A DC',
      'BSG (Both Sides Grounded) safe testing mode via MR6292 clamp',
      'Internal cooling system for continuous high-current injection',
      'Memory: 8,000 measurements with USB PC interface'
    ],
    specs: {
      testCurrent: 'Up to 200 A DC',
      resistanceRange: '0.1 µΩ to 1 Ω',
      safetyMode: 'BSG (Both Sides Grounded)',
      memory: '8,000 measurements',
      interface: 'USB'
    }
  },

  // --- DIGITAL OSCILLOSCOPES ---
  {
    id: 'ox-5042',
    modelCode: 'OX 5022 / OX 5042',
    name: 'Handheld Digital Oscilloscope & Multimeter',
    category: 'oscilloscopes',
    categoryName: 'Oscilloscopes',
    tagline: '2 isolated channel handheld scope (20MHz/40MHz) with 31-order harmonic analyzer.',
    badge: 'Handheld Scope',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Bandwidth: 20 MHz (OX 5022) / 40 MHz (OX 5042)',
      '2 channel isolated inputs (1 MΩ ±0.5%)',
      'Multimeter Mode: 8,000-count display with bargraph',
      'Harmonic Analyzer: 2 channels up to 31st order',
      '3.5" Colour TFT display (320 × 240) with PC interface'
    ],
    specs: {
      bandwidth: '20 MHz / 40 MHz',
      channels: '2 isolated channels',
      multimeter: '8,000 counts + bargraph',
      harmonics: '31 orders',
      display: '3.5" Colour TFT'
    }
  },
  {
    id: 'ox-9304',
    modelCode: 'OX 9062 / OX 9102 / OX 9104 / OX 9304',
    name: 'Portable Digital Storage Oscilloscope (Up to 300MHz)',
    category: 'oscilloscopes',
    categoryName: 'Oscilloscopes',
    tagline: '7" WVGA Touchscreen portable scope (60/100/300 MHz) with 4 isolated channels.',
    badge: '300 MHz 4-Ch',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Bandwidth: 60 MHz / 100 MHz / 300 MHz',
      '2 or 4 isolated channels with 7" WVGA color touch LCD screen (800×480)',
      'Logger Mode: Up to 100,000 measurements over 20,000 s',
      'Harmonic Analyzer up to 63rd order',
      '2 GB internal memory with USB PC interface'
    ],
    specs: {
      bandwidth: 'Up to 300 MHz',
      channels: '2 or 4 isolated channels',
      display: '7" WVGA Touchscreen LCD',
      loggerMode: '100,000 measurements',
      harmonics: 'Up to 63rd order'
    }
  },

  // --- INSTALLATION TESTERS ---
  {
    id: 'ca-6117',
    modelCode: 'CA 6117',
    name: 'Advanced Electrical Installation Tester',
    category: 'installation-testers',
    categoryName: 'Installation Testers',
    tagline: '5.7" Color graphic electrical installation tester compliant with IEC 60364-6.',
    badge: 'Advanced Installation',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '5.7" backlit graphic color LCD screen (320 × 240)',
      'Insulation Test Voltage: 50 / 100 / 250 / 500 / 1,000 V DC',
      'RCD Testing: AC, A, F, B, B+ & EV-type RCDs',
      'Earth Resistance up to 40 Ω (3-Pole) & Selective earth',
      'Active Power up to 330 kW (3 phase) & Harmonics up to 50th order'
    ],
    specs: {
      standards: 'IEC 60364-6, VDE 100, NFC 15-100',
      display: '5.7" Color Graphic LCD',
      rcdTypes: 'AC, A, F, B, B+, EV-type',
      powerRange: 'Up to 330 kW',
      harmonics: 'Up to 50th order'
    }
  },
  {
    id: 'ca-6133',
    modelCode: 'CA 6133',
    name: 'Standard Electrical Installation Tester',
    category: 'installation-testers',
    categoryName: 'Installation Testers',
    tagline: 'Compact multifunction installation tester with Android reporting app.',
    badge: 'Standard Installation',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Display: Custom 231-segment LCD with blue backlighting',
      'Insulation Test Voltage: 250 V / 500 V / 1,000 V',
      'Earth Resistance up to 2,000 Ω (3P method)',
      'RCD Test: Type AC & RCDs (30mA to 650mA)',
      'Android application for fast test report generation'
    ],
    specs: {
      display: '231-segment backlit LCD',
      testVoltage: '250 V / 500 V / 1,000 V',
      earthResistance: 'Up to 2,000 Ω',
      app: 'Android Report Generation App',
      memory: '30 sites × 99 tests'
    }
  },

  // --- MULTI FUNCTION & ENERGY METERS ---
  {
    id: 'digi-530h',
    modelCode: 'DiGi 530S / DiGi 530H',
    name: 'Standard Multi Function Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'Class 0.5s IEC 62053-22 multi-function meter with RS485 Modbus RTU.',
    badge: 'Class 0.5s',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 40,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Accuracy Class 0.5s as per IEC 62053-22',
      '3-line bright LCD display with PT & CT programmable',
      'Measures RMS V, I, Hz, Power (kW, kVAR, kVA), kWh & THD',
      'Individual Harmonics up to 31st order (DiGi 530H)',
      'Dimension: 96mm × 96mm × 83mm (Cut-out 90 × 90 mm)'
    ],
    specs: {
      accuracyClass: 'Class 0.5s (IEC 62053-22)',
      display: '3-line bright LCD',
      communication: 'RS485 Modbus RTU',
      harmonics: 'Up to 31st order (530H)',
      dimensions: '96 × 96 × 83 mm'
    }
  },
  {
    id: 'digi-630d',
    modelCode: 'DiGi 630S / DiGi 630D',
    name: 'Advanced Dual Source Multi Function Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'Class 0.2s dual source energy meter with 4 DI & 2 DO load control.',
    badge: 'Dual Source',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Accuracy Class 0.5s / Class 0.2s per IEC 62053-22',
      'Dual Source (EB vs DG) energy accounting',
      '4 Digital Inputs, 2 Digital Outputs (DiGi 630D)',
      'Bi-directional 4 Quadrant energy measurement',
      'RS485 Modbus RTU with custom Modbus table'
    ],
    specs: {
      accuracyClass: 'Class 0.2s / 0.5s',
      dualSource: 'EB vs DG Source Metering',
      ioPorts: '4 DI / 2 DO (DiGi 630D)',
      communication: 'RS485 Modbus RTU',
      quadrant: '4 Quadrant Energy'
    }
  },
  {
    id: 'digi-730d',
    modelCode: 'DiGi 730S / DiGi 730D',
    name: 'Premium Multi Function Meter with Tariff Control',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'Multi-tariff energy recording (6 rates) with harmonics up to 51st order.',
    badge: 'Multi-Tariff',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Accuracy Class 0.5s / Class 0.2s per IEC 62053-22',
      'Tariff Energy Recording (6 tariff rates)',
      '6 Digital Inputs, 3 DO & 1 Analog Output (DiGi 730D)',
      'Individual Harmonics up to 51st order with Crest & K-Factor',
      'High-speed RS485 up to 115,200 bps'
    ],
    specs: {
      accuracyClass: 'Class 0.2s',
      tariffs: '6 Tariff rates',
      harmonics: 'Up to 51st order',
      ioPorts: '6 DI / 3 DO / 1 AO',
      baudRate: 'Up to 115,200 bps'
    }
  },
  {
    id: 'digi-760',
    modelCode: 'DiGi 760',
    name: 'High Precision Waveform Display Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'TFT Color LCD meter with real-time waveform & voltage swell/sag recording.',
    badge: 'Waveform Display',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Accuracy Class 0.2s as per IEC 62053-22',
      'TFT color LCD display with 320 × 240 resolution & Real Time Waveform',
      'Voltage swell/sag event recording with waveform capture',
      'Ethernet Port with Modbus TCP/IP & RS485 Modbus communication',
      'Harmonics up to 63rd order & ToU (Time of Use) 2 Tariff rates'
    ],
    specs: {
      accuracyClass: 'Class 0.2s',
      display: 'TFT Color LCD 320×240',
      waveform: 'Real-time waveform display',
      ethernet: 'Modbus TCP/IP & RS485',
      harmonics: 'Up to 63rd order'
    }
  },
  {
    id: 'digi-820',
    modelCode: 'DiGi 820',
    name: 'Class A Power Quality Analyzer Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'IEC 61000-4-30 Class A panel-mount power quality meter with 8GB memory.',
    badge: 'Class A Panel Meter',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'IEC 61000-4-30 Class A power quality monitoring meter (Class 0.2s)',
      '640 × 480 Color LCD with real-time waveform display',
      'Records 256 PQ events & captures 20s PQ voltage transients',
      '8 DI, 2 DO (Pulse) & 4 Relay outputs',
      '8GB memory for data and event recording'
    ],
    specs: {
      standard: 'IEC 61000-4-30 Class A',
      accuracyClass: 'Class 0.2s',
      memory: '8 GB internal memory',
      relays: '8 DI / 2 DO / 4 Relays',
      transients: '20s PQ voltage transient capture'
    }
  },
  {
    id: 'multy4',
    modelCode: 'Multy4',
    name: 'Multi-Channel Energy Meter (4 Channels)',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: '4-channel multi-feeder energy meter monitoring up to 12 single-phase lines.',
    badge: 'Multi-Feeder',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Monitors 12 × 1 phase or 4 × 3 phase feeders simultaneously',
      'Accuracy Class 1.0 as per IEC 62053-21 (includes CT errors)',
      'Special high-accuracy CT supplied with the meter',
      'RS485-Modbus RTU Protocol',
      '75mm (W) × 94mm (H) × 62mm (D) compact DIN rail mounting'
    ],
    specs: {
      channels: '12 × 1 phase / 4 × 3 phase',
      accuracy: 'Class 1.0 (includes CT)',
      communication: 'RS485 Modbus RTU',
      mounting: 'DIN rail 75×94×62 mm'
    }
  },
  {
    id: 'plm-r90',
    modelCode: 'PLM R90',
    name: 'DC Energy Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: '35mm DIN rail DC energy meter with external shunt up to 300A.',
    badge: 'DC Meter',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.7,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '35mm DIN rail installing (standard DIN ED5002)',
      'Accuracy: Class 0.5s',
      'External Shunt support: 100A, 200A, 300A',
      'RS485 port with Modbus-RTU protocol',
      'LED pulse output indicator'
    ],
    specs: {
      type: 'DC Energy Meter',
      accuracy: 'Class 0.5s',
      shunts: '100A, 200A, 300A Shunts',
      mounting: '35mm DIN rail (2 module)'
    }
  },
  {
    id: 'plm-r91',
    modelCode: 'PLM R91',
    name: 'AC Single-Phase Energy Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: '6+1 digit LCD single-phase DIN rail energy meter up to 63A direct.',
    badge: '1-Phase DIN',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.6,
    reviewsCount: 14,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '35mm DIN rail installing (DIN EN 50022)',
      'Class 1.0 active energy accuracy per IEC 62053-21',
      '6+1 digit LCD display (999999.9 kWh)',
      'Max rate of continuous current: 63A',
      'RS485 Modbus-RTU or DLT645'
    ],
    specs: {
      type: 'Single Phase AC',
      accuracy: 'Class 1.0',
      current: 'Up to 63A direct',
      display: '6+1 digit LCD'
    }
  },
  {
    id: 'plm-r93',
    modelCode: 'PLM R93',
    name: '3-Phase Energy Meter',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: '7+1 digit LCD 3-phase DIN energy meter with 10-year historical data log.',
    badge: '3-Phase DIN',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 4.8,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      '35mm DIN in accordance with ED5002',
      '7+1 digit LCD display (9999999.9 kWh)',
      'Bi-directional energy & multi-tariff values',
      'Phase sequence error indication',
      'Historical data logging up to 10 years'
    ],
    specs: {
      type: '3-Phase Energy Meter',
      accuracy: 'Class 1.0',
      history: 'Up to 10 years historical data',
      display: '7+1 digit LCD'
    }
  },
  {
    id: 'eon-40',
    modelCode: 'EON 4.0',
    name: 'Advanced IoT Smart Energy Meter (4G / LAN)',
    category: 'energy-meters',
    categoryName: 'Energy Meters',
    tagline: 'Class 0.5 smart energy meter with built-in 4G wireless MQTT gateway or LAN RJ45.',
    badge: '4G / IoT Smart',
    availability: 'in-stock',
    availabilityText: 'Available for Immediate Quote',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Active energy accuracy up to Class 0.5',
      'EON 4.0G: 4G wireless for MQTT | EON 4.0E: LAN RJ45 for Modbus TCP/HTTP/MQTT',
      'Gateway function with 7 days built-in data logging memory',
      'Harmonics up to 63rd order & auto phase sequence adjustment',
      '10 seconds battery backup to capture power interruption events'
    ],
    specs: {
      accuracyClass: 'Class 0.5',
      connectivity: '4G Wireless / LAN RJ45 / RS485',
      protocols: 'Modbus TCP / HTTP / MQTT',
      memory: '7 days built-in memory',
      backup: '10s battery backup for power outage'
    }
  },

  // --- LOAD BANKS ---
  {
    id: 'load-bank-2000kw',
    modelCode: 'LOAD BANK (10 kW – 2000 kW)',
    name: 'Industrial Heavy Duty Load Bank',
    category: 'load-banks',
    categoryName: 'Load Banks',
    tagline: 'Customized AC/DC Load Banks from 10 kW to 2000 kW with SCADA remote logging & HMI touch screen.',
    badge: '10 kW – 2000 kW',
    availability: 'on-request',
    availabilityText: 'Custom Manufactured to Requirement',
    price: 'Quote on Request',
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    salientFeatures: [
      'Capacity: 10 kW to 2000 kW (LT or HT voltages)',
      'AC/DC, Resistive / Inductive / Capacitive loads (e.g. 250 kW 0.8 PF inductive)',
      'Remote monitoring SCADA with data logging',
      'Automatic PLC based auto load cycle & manual control',
      'Forced cooling with acoustic weather-proof outdoor enclosures',
      'HMI touch screen display with AL/CU Bus bars'
    ],
    specs: {
      capacity: '10 kW to 2000 kW',
      loadTypes: 'Resistive, Inductive, Capacitive',
      control: 'PLC based auto load cycle & SCADA',
      enclosure: 'Containerized Acoustic Outdoor Enclosures',
      display: 'HMI Touchscreen Display'
    }
  }
];

export const CLIENT_LOGOS = [
  { name: 'Valeo', location: 'Automotive' },
  { name: 'ReNew Power', location: 'Renewables' },
  { name: 'ACT', location: 'Infrastructure' },
  { name: 'Siemens', location: 'Industrial' },
  { name: 'Avaada', location: 'Solar Energy' },
  { name: 'Precision Metals', location: 'Manufacturing' },
  { name: 'Mylan', location: 'Pharma & Steel' },
  { name: 'PwC', location: 'Consulting' },
  { name: 'ONGC', location: 'Oil & Gas' },
  { name: 'Polyhose', location: 'Industrial' },
  { name: 'Schneider Electric', location: 'Power' },
  { name: 'Luminous', location: 'Energy' },
  { name: 'Asian Paints', location: 'Chemicals' },
  { name: 'Reliance', location: 'Utilities' },
  { name: 'Godrej', location: 'Manufacturing' },
  { name: 'Grundfos', location: 'Pumps & Motors' },
  { name: 'Tata Communications', location: 'Telecom' },
  { name: 'Jio', location: 'Telecom & Tech' },
  { name: 'Schindler', location: 'Heavy Industry' },
  { name: 'NTPC', location: 'Power Generation' }
];

export const TRUST_BADGES = [
  { title: 'Official 2026 Catalogue', subtitle: 'Benzene Electricals (Acrasia Group)', icon: 'Award' },
  { title: 'Pan-India Technical Network', subtitle: 'Calibration & service backup support', icon: 'MapPin' },
  { title: 'ISO 9001, BIS & RoHS', subtitle: 'Certified safety & compliance testing', icon: 'ShieldCheck' },
  { title: 'Benzene Electricals Support', subtitle: 'Factory-trained engineers & quick turnaround', icon: 'Wrench' }
];
