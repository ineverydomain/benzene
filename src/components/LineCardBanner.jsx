import React from 'react';
import { CATEGORIES } from '../data/products';
import { Download, FileText, Filter, CheckCircle2 } from 'lucide-react';

export default function LineCardBanner({ activeCategory, setActiveCategory }) {
  return (
    <div id="catalog-section" className="bg-surface-1 border-b border-border-custom py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Banner Header Card */}
        <div className="bg-navy-900 text-surface-0 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-navy-700 shadow-sm">
          {/* Subtle gold background element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl"></div>

          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 text-gold-400 font-mono text-xs tracking-wider uppercase font-bold">
              <FileText className="w-4 h-4" /> 
              Triplett-Style Product Line Card
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Full Instrument Catalog Line Card
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
              Explore our heavy-duty testing equipment line card. Filter by category, compare specifications side-by-side, and request instant pricing quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <a 
              href="/TMI 2025 New Catalog.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Line Card PDF
            </a>
          </div>
        </div>

        {/* Quick Category Navigation Tabs */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-mono text-navy-900 uppercase flex items-center gap-1 shrink-0 pr-2">
              <Filter className="w-3.5 h-3.5 text-gold-500" /> Filter Line:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-navy-900 text-gold-400 shadow-sm ring-2 ring-gold-500' 
                      : 'bg-surface-0 text-ink-600 hover:bg-surface-2 hover:text-navy-900 border border-border-custom'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
