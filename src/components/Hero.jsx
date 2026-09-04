import React from 'react';
import { ShieldCheck, Download, ArrowRight, Activity, Zap, Flame, Award } from 'lucide-react';

export default function Hero({ onExploreCatalog, onRequestQuote }) {
  return (
    <section className="bg-hero-navy bg-circuit-lines relative overflow-hidden text-surface-0 py-16 lg:py-24 border-b border-navy-700">
      {/* Decorative Gold Circuit Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-navy-700/50 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Hexagon Badge Tag */}
            <div className="inline-flex items-center gap-2 bg-navy-800/80 border border-gold-500/40 rounded-full px-3.5 py-1 text-xs font-mono text-gold-400 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              PORTABLE TEST & MEASUREMENT INSTRUMENTS
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold font-display tracking-tight leading-tight">
              Precision • Reliability <br />
              <span className="text-metallic-gold">Performance</span>
            </h1>

            {/* Subhead Tagline */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
              Benzene Electricals delivers high-accuracy Power Quality Analyzers, Thermal Imagers, Insulation Testers, and Energy Monitors engineered for utilities, manufacturing plants, and heavy industrial audits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-lg shadow-lg text-sm flex items-center justify-center gap-2 gold-glow cursor-pointer transition-all"
              >
                Explore Line Card
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto border-2 border-surface-0/30 hover:border-gold-400 text-surface-0 hover:text-gold-400 font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer bg-navy-900/40 backdrop-blur-sm"
              >
                Request Custom Quote
              </button>
            </div>

            {/* Key Instrument Specs Quick Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-navy-800 text-left">
              <div className="bg-navy-800/50 p-3 rounded-lg border border-navy-700/60">
                <div className="text-gold-400 font-mono text-xs font-semibold">CLASS A</div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">Power Quality (CA 8345)</div>
              </div>
              <div className="bg-navy-800/50 p-3 rounded-lg border border-navy-700/60">
                <div className="text-gold-400 font-mono text-xs font-semibold">384×288 IR</div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">Thermal Imagers</div>
              </div>
              <div className="bg-navy-800/50 p-3 rounded-lg border border-navy-700/60">
                <div className="text-gold-400 font-mono text-xs font-semibold">15kV / 30 TΩ</div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">Insulation Testers</div>
              </div>
              <div className="bg-navy-800/50 p-3 rounded-lg border border-navy-700/60">
                <div className="text-gold-400 font-mono text-xs font-semibold">CAT IV 1000V</div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">Industrial DMMs</div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Product Card / Instrument Showcase Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-2xl p-6 border border-gold-500/30 shadow-2xl relative group">
              {/* Product Badge */}
              <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 font-bold text-[10px] font-mono uppercase px-2.5 py-1 rounded shadow-sm">
                FLAGSHIP MODEL
              </div>

              {/* Instrument Graphic Showcase */}
              <div className="bg-surface-0/95 rounded-xl p-6 text-navy-900 shadow-inner relative overflow-hidden mb-5">
                <div className="absolute top-2 left-2 text-[10px] font-mono text-gold-500 font-bold">
                  MODEL: CA 8345
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                  alt="Class A Power Quality Analyzer" 
                  className="w-full h-48 object-cover rounded-lg mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gold-400">
                  <span>POWER QUALITY ANALYZER</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    In Stock
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-surface-0">
                  CA 8345 — Class A Analyzer
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2">
                  4 Voltage & 4 Current channels with IEC 61000-4-30 Class A compliance for grid power audits.
                </p>

                {/* Quick Action */}
                <button
                  onClick={onRequestQuote}
                  className="w-full mt-3 bg-navy-700 hover:bg-gold-500 hover:text-navy-900 text-gold-400 font-bold py-2.5 px-4 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Order / Enquiry for CA 8345
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
