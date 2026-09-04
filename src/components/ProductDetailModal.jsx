import React from 'react';
import { X, CheckCircle2, FileText, Download, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToQuote, isInQuote }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-surface-0 rounded-2xl max-w-4xl w-full border border-gold-500/40 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-navy-900 text-surface-0 px-6 py-4 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <span className="bg-gold-500 text-navy-900 font-mono font-extrabold text-xs px-2.5 py-1 rounded">
              {product.modelCode}
            </span>
            <div>
              <h3 className="font-bold font-display text-base sm:text-lg text-white">
                {product.name}
              </h3>
              <div className="text-[11px] font-mono text-gold-400">
                Category: {product.categoryName}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Top Grid: Image + Quick Features */}
          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            {/* Image Preview */}
            <div className="md:col-span-5 bg-surface-1 rounded-xl p-6 border border-border-custom flex items-center justify-center relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-56 object-cover rounded-lg shadow-sm"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-gold-500 text-navy-900 font-bold text-[10px] uppercase font-mono px-2 py-0.5 rounded">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Overview & Key Highlights */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-sm text-ink-900 font-medium leading-relaxed">
                {product.tagline}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-500" /> Key Features
                </h4>
                <ul className="space-y-1.5 text-xs text-ink-600">
                  {product.salientFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onAddToQuote(product);
                    onClose();
                  }}
                  className={`flex-1 font-bold text-xs py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isInQuote 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-gold-500 hover:bg-gold-400 text-navy-900 gold-glow'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  {isInQuote ? 'In Inquiry List' : 'Add to Order Inquiry'}
                </button>

                <a
                  href="/TMI 2025 New Catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-1 hover:bg-surface-2 text-navy-900 border border-border-custom font-semibold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4 text-gold-500" />
                  Datasheet PDF
                </a>
              </div>

            </div>

          </div>

          {/* Full Specifications Table */}
          <div className="space-y-3 pt-4 border-t border-border-custom">
            <h4 className="text-sm font-bold font-display text-navy-900 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-gold-500" /> Full Technical Specifications
            </h4>

            <div className="border border-border-custom rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-navy-900 text-surface-0 font-mono">
                    <th className="p-3 w-1/3 border-b border-navy-700">Specification Attribute</th>
                    <th className="p-3 border-b border-navy-700">Technical Value ({product.modelCode})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {Object.entries(product.specs).map(([key, val], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1'}>
                      <td className="p-3 font-semibold text-navy-900 capitalize border-r border-border-custom">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </td>
                      <td className="p-3 font-mono text-ink-900 font-semibold">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="bg-surface-1 px-6 py-3 border-t border-border-custom flex justify-between items-center text-xs text-ink-600">
          <span>Benzene Electricals • Acrasia Group</span>
          <button 
            onClick={onClose}
            className="text-navy-900 font-bold hover:text-gold-500 cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
