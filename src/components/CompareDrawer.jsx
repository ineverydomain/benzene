import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Layers, X, Check, ArrowRight, FileText } from 'lucide-react';

export default function CompareDrawer({ comparedIds, onRemoveCompare, onClearAllCompare, onAddToQuote }) {
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);

  if (comparedIds.length === 0) return null;

  const comparedProducts = PRODUCTS.filter((p) => comparedIds.includes(p.id));

  // Extract all unique spec keys across compared products
  const allSpecKeys = Array.from(
    new Set(comparedProducts.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <>
      {/* Floating Bottom Compare Tray */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-navy-900 text-surface-0 border-2 border-gold-500 rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-4 max-w-2xl w-full mx-auto animate-slide-in">
        <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-bold shrink-0">
          <Layers className="w-4 h-4" />
          <span>Compare ({comparedProducts.length}/4)</span>
        </div>

        {/* Selected Product Pills */}
        <div className="flex items-center gap-2 overflow-x-auto flex-1 py-1 scrollbar-none">
          {comparedProducts.map((p) => (
            <span
              key={p.id}
              className="bg-navy-800 border border-gold-500/40 text-surface-0 text-xs font-mono px-2.5 py-1 rounded-lg flex items-center gap-1.5 shrink-0"
            >
              {p.modelCode}
              <button
                onClick={() => onRemoveCompare(p.id)}
                className="hover:text-gold-400 text-gray-400 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsMatrixOpen(true)}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-sm gold-glow"
          >
            Compare Matrix
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClearAllCompare}
            className="text-gray-400 hover:text-white p-1 text-xs cursor-pointer"
            title="Clear all comparison"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Modal */}
      {isMatrixOpen && (
        <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface-0 rounded-2xl max-w-5xl w-full border border-gold-500 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-navy-900 text-surface-0 px-6 py-4 flex items-center justify-between border-b border-navy-700">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold-500" />
                <h3 className="font-bold font-display text-lg">
                  Specification Comparison Matrix
                </h3>
              </div>
              <button
                onClick={() => setIsMatrixOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-navy-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Matrix Table */}
            <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 bg-surface-1 border border-border-custom font-bold font-mono text-navy-900 w-48">
                      Model / Specification
                    </th>
                    {comparedProducts.map((p, idx) => (
                      <th
                        key={p.id}
                        className={`p-4 border border-border-custom text-center ${
                          idx === 0 ? 'bg-gold-100/50 border-t-4 border-t-gold-500' : 'bg-surface-1'
                        }`}
                      >
                        <div className="font-mono font-extrabold text-gold-500 text-sm">{p.modelCode}</div>
                        <div className="font-bold text-navy-900 text-xs line-clamp-1 mt-0.5">{p.name}</div>
                        <button
                          onClick={() => onAddToQuote(p)}
                          className="mt-3 w-full bg-navy-900 hover:bg-gold-500 hover:text-navy-900 text-gold-400 font-bold py-1.5 px-2 rounded text-[11px] transition-colors cursor-pointer"
                        >
                          Request Quote
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {allSpecKeys.map((specKey, rowIdx) => (
                    <tr key={specKey} className={rowIdx % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1'}>
                      <td className="p-3 font-semibold text-navy-900 capitalize border border-border-custom font-mono">
                        {specKey.replace(/([A-Z])/g, ' $1')}
                      </td>
                      {comparedProducts.map((p, colIdx) => (
                        <td
                          key={p.id}
                          className={`p-3 border border-border-custom font-mono text-center text-ink-900 ${
                            colIdx === 0 ? 'bg-gold-100/20 font-bold' : ''
                          }`}
                        >
                          {p.specs[specKey] || '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="bg-surface-1 px-6 py-3 border-t border-border-custom flex justify-between items-center text-xs">
              <span className="text-ink-600 font-mono">Comparing {comparedProducts.length} models</span>
              <button
                onClick={() => setIsMatrixOpen(false)}
                className="bg-navy-900 text-gold-400 font-bold px-4 py-2 rounded-lg text-xs"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
