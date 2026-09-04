import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import { 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal, 
  Search, 
  RotateCcw,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function ProductCatalog({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  onQuickView,
  onAddToQuote,
  quoteList,
  comparedIds,
  onToggleCompare
}) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [availabilityFilter, setAvailabilityFilter] = useState('all'); // 'all' | 'in-stock' | 'on-request'
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'name-asc' | 'rating-desc'

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Availability filter
      if (availabilityFilter !== 'all' && item.availability !== availabilityFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchModel = item.modelCode.toLowerCase().includes(query);
        const matchName = item.name.toLowerCase().includes(query);
        const matchTagline = item.tagline.toLowerCase().includes(query);
        const matchCategory = item.categoryName.toLowerCase().includes(query);
        if (!matchModel && !matchName && !matchTagline && !matchCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      return 0; // featured default order
    });
  }, [activeCategory, availabilityFilter, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setAvailabilityFilter('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <section className="py-12 px-4 bg-surface-0">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-custom pb-5">
          <div>
            <div className="text-xs font-mono text-gold-500 font-bold uppercase tracking-wider">
              BENZENE INSTRUMENT LINE CARD
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-900 mt-1">
              Industrial Test & Measurement Products
            </h2>
          </div>

          <div className="text-xs text-ink-600 font-mono">
            Showing <span className="font-bold text-navy-900">{filteredProducts.length}</span> of {PRODUCTS.length} models
          </div>
        </div>

        {/* Catalog Body: Sidebar + Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Filter Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-surface-1 rounded-xl p-5 border border-border-custom space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between border-b border-border-custom pb-3">
                <h3 className="font-bold text-sm font-display text-navy-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gold-500" />
                  Filter Catalog
                </h3>
                {(activeCategory !== 'all' || availabilityFilter !== 'all' || searchQuery !== '') && (
                  <button 
                    onClick={handleResetFilters}
                    className="text-[11px] text-navy-700 hover:text-gold-500 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Category Filter List */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-ink-600 uppercase">
                  Product Categories
                </label>
                <div className="space-y-1 text-xs">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                        activeCategory === cat.id 
                          ? 'bg-navy-900 text-gold-400 font-bold' 
                          : 'hover:bg-surface-2 text-ink-900 font-medium'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] font-mono opacity-80">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="space-y-2 pt-4 border-t border-border-custom">
                <label className="text-xs font-bold font-mono text-ink-600 uppercase">
                  Quote Availability
                </label>
                <div className="space-y-1.5 text-xs font-medium text-ink-900">
                  <label className="flex items-center gap-2 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="availability"
                      checked={availabilityFilter === 'all'}
                      onChange={() => setAvailabilityFilter('all')}
                      className="accent-gold-500"
                    />
                    <span>All Products</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="availability"
                      checked={availabilityFilter === 'in-stock'}
                      onChange={() => setAvailabilityFilter('in-stock')}
                      className="accent-gold-500"
                    />
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Available for Quote
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="availability"
                      checked={availabilityFilter === 'on-request'}
                      onChange={() => setAvailabilityFilter('on-request')}
                      className="accent-gold-500"
                    />
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      Made to Order
                    </span>
                  </label>
                </div>
              </div>

              {/* Catalog Download Widget */}
              <div className="bg-navy-900 text-surface-0 rounded-lg p-4 space-y-2 border border-gold-500/30">
                <div className="text-xs font-bold font-display text-gold-400">
                  Need Full Technical Specs?
                </div>
                <p className="text-[11px] text-gray-300">
                  Download the complete Benzene Electricals 2026 catalogue PDF.
                </p>
                <a
                  href="/TMI 2025 New Catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-xs py-2 rounded transition-colors"
                >
                  Download PDF Catalogue
                </a>
              </div>

            </div>
          </div>

          {/* Right Product Grid Column */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-surface-1 p-3.5 rounded-xl border border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Active Search & Filter Indicator */}
              <div className="text-xs text-ink-600 font-medium">
                {searchQuery ? (
                  <span>
                    Search results for "<strong className="text-navy-900">{searchQuery}</strong>"
                  </span>
                ) : (
                  <span>Showing products in catalog grid</span>
                )}
              </div>

              {/* Sort & Grid/List Controls */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-2 text-xs">
                  <label className="font-mono text-ink-600 hidden sm:inline">Sort:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-surface-0 border border-border-custom rounded-lg px-2.5 py-1.5 text-xs text-navy-900 font-semibold focus:outline-none focus:border-gold-500"
                  >
                    <option value="featured">Featured / Best Seller</option>
                    <option value="name-asc">Model Name (A - Z)</option>
                    <option value="rating-desc">Highest Rated</option>
                  </select>
                </div>

                {/* View Mode Toggle Buttons */}
                <div className="flex items-center bg-surface-0 border border-border-custom rounded-lg p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      viewMode === 'grid' ? 'bg-navy-900 text-gold-400' : 'text-ink-600 hover:text-navy-900'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      viewMode === 'list' ? 'bg-navy-900 text-gold-400' : 'text-ink-600 hover:text-navy-900'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Product Cards Container */}
            {filteredProducts.length === 0 ? (
              <div className="bg-surface-1 border border-dashed border-border-custom rounded-2xl p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-navy-900/10 text-navy-900 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">No matching instruments found</h3>
                <p className="text-xs text-ink-600 max-w-md mx-auto">
                  Try adjusting your search model code, clearing filters, or browsing all product categories.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-navy-900 text-gold-400 font-bold px-5 py-2 rounded-lg text-xs hover:bg-navy-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                    onAddToQuote={onAddToQuote}
                    isInQuote={quoteList.some((q) => q.id === product.id)}
                    onToggleCompare={onToggleCompare}
                    isCompared={comparedIds.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              /* Spec List View */
              <div className="space-y-4">
                {filteredProducts.map((product) => {
                  const isInQuote = quoteList.some((q) => q.id === product.id);
                  const isCompared = comparedIds.includes(product.id);
                  return (
                    <div 
                      key={product.id}
                      className="bg-surface-0 border border-border-custom hover:border-gold-500 rounded-xl p-5 transition-all flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-20 h-20 object-cover rounded-lg bg-surface-1 p-2 shrink-0"
                        />
                        <div className="space-y-1">
                          <div className="text-xs font-mono font-bold text-gold-500 uppercase">
                            {product.modelCode}
                          </div>
                          <h3 
                            onClick={() => onQuickView(product)}
                            className="font-bold text-base text-navy-900 hover:text-navy-700 cursor-pointer"
                          >
                            {product.name}
                          </h3>
                          <p className="text-xs text-ink-600 line-clamp-1">
                            {product.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-border-custom">
                        <button
                          onClick={() => onToggleCompare(product.id)}
                          className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
                            isCompared ? 'bg-navy-900 text-gold-400 border-gold-500' : 'bg-surface-1 text-ink-600 border-border-custom'
                          }`}
                        >
                          {isCompared ? 'Compared' : '+ Compare'}
                        </button>
                        <button
                          onClick={() => onQuickView(product)}
                          className="bg-surface-1 hover:bg-surface-2 text-navy-900 font-semibold text-xs px-3 py-2 rounded-lg border border-border-custom"
                        >
                          Specs
                        </button>
                        <button
                          onClick={() => onAddToQuote(product)}
                          className={`font-bold text-xs px-4 py-2 rounded-lg transition-all ${
                            isInQuote ? 'bg-emerald-600 text-white' : 'bg-gold-500 hover:bg-gold-400 text-navy-900'
                          }`}
                        >
                          {isInQuote ? 'In Inquiry' : 'Order Quote'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
