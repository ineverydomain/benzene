import React from 'react';
import { FileText, Eye, CheckSquare, Square, Star, Shield, Cpu, Activity } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToQuote, 
  isInQuote,
  onToggleCompare, 
  isCompared 
}) {
  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'in-stock':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow"></span>
            Available for Quote
          </span>
        );
      case 'low-stock':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Low Stock
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Made to Order
          </span>
        );
    }
  };

  return (
    <div className="bg-surface-0 border border-border-custom hover:border-gold-500 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative">
      
      {/* Badge Top Left */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-gold-500 text-navy-900 font-extrabold text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
          {product.badge}
        </div>
      )}

      {/* Compare Checkbox Top Right */}
      <button
        onClick={() => onToggleCompare(product.id)}
        className={`absolute top-3 right-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
          isCompared 
            ? 'bg-navy-900 text-gold-400 border border-gold-500 shadow-sm' 
            : 'bg-surface-0/90 hover:bg-surface-2 text-ink-600 border border-border-custom backdrop-blur-sm'
        }`}
        title="Add to spec comparison matrix"
      >
        {isCompared ? <CheckSquare className="w-3.5 h-3.5 text-gold-400" /> : <Square className="w-3.5 h-3.5 text-ink-300" />}
        <span>Compare</span>
      </button>

      {/* Product Image Area */}
      <div 
        onClick={() => onQuickView(product)}
        className="bg-surface-1 p-6 flex items-center justify-center h-48 relative overflow-hidden cursor-pointer group-hover:bg-surface-2/60 transition-colors"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="max-h-36 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-xs"
        />
        <div className="absolute inset-0 bg-navy-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-navy-900 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-lg shadow flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> Quick View Specs
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          {/* Model Code */}
          <div className="text-xs font-mono font-bold text-gold-500 uppercase tracking-wider">
            {product.modelCode}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-bold text-navy-900 group-hover:text-navy-700 cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-ink-600 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Key Specification Preview Bullets */}
        <div className="bg-surface-1 rounded-lg p-2.5 space-y-1 text-[11px] font-mono text-ink-600 border border-border-custom/50">
          {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center gap-2">
              <span className="capitalize text-ink-600 truncate">{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span className="font-semibold text-navy-900 truncate">{val}</span>
            </div>
          ))}
        </div>

        {/* Status Dot & Actions */}
        <div className="space-y-3 pt-1 border-t border-border-custom">
          <div className="flex items-center justify-between">
            {getAvailabilityBadge()}
            <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="w-full bg-surface-1 hover:bg-surface-2 text-navy-900 border border-border-custom font-semibold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" /> Specs
            </button>

            <button
              onClick={() => onAddToQuote(product)}
              className={`w-full font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs ${
                isInQuote 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gold-500 hover:bg-gold-400 text-navy-900 gold-glow'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              {isInQuote ? 'In Inquiry' : 'Order Quote'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
