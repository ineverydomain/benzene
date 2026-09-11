import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Search, 
  FileText, 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  ShieldCheck,
  Building,
  Layers
} from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  quoteList, 
  setIsQuoteModalOpen,
  onNavigateSection 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface-0 shadow-md">
      {/* Top Utility Bar & Trust Strip */}
      <div className="bg-navy-900 text-surface-0 text-xs py-2 px-4 border-b border-navy-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Rotating / Trust Announcement */}
          <div className="flex items-center gap-4 text-gold-400 font-medium overflow-x-auto whitespace-nowrap">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" /> 
              39+ Years Experience
            </span>
            <span className="text-navy-700">•</span>
            <span>100+ Service Centers Pan-India</span>
            <span className="text-navy-700">•</span>
            <span className="text-surface-0">ISO 9001:2015 & CE Certified Instruments</span>
          </div>

          {/* Contact & Direct Quote Link */}
          <div className="flex items-center gap-5 text-gray-300">
            <a href="tel:+918123081712" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>+91 8123081712</span>
            </a>
            <a href="mailto:sheefa@acrasia.in" className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>sheefa@acrasia.in</span>
            </a>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="text-gold-400 hover:text-gold-100 flex items-center gap-1 underline underline-offset-2 font-semibold cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Quick RFQ
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }} 
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-10 h-11 bg-navy-900 border-2 border-gold-500 rounded-md flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-7 h-7">
              <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="#0B1B3A" stroke="#D4A62A" strokeWidth="6"/>
              <path d="M52 18 L32 52 L48 52 L42 82 L70 44 L52 44 Z" fill="#D4A62A" />
            </svg>
          </div>
          <div>
            <div className="text-xl font-bold font-display tracking-tight text-navy-900 flex items-center gap-1 leading-none">
              BENZENE
              <span className="text-gold-500 font-extrabold">ELECTRICALS</span>
            </div>
            <div className="text-[10px] font-mono text-ink-600 tracking-wider uppercase mt-0.5">
              Testing Equipments • Acrasia Group
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-navy-900">
          <button 
            onClick={() => onNavigateSection('hero')} 
            className="hover:text-gold-500 transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigateSection('catalog')} 
            className="hover:text-gold-500 transition-colors cursor-pointer py-1 flex items-center gap-1"
          >
            Line Card Catalog
          </button>
          <button 
            onClick={() => onNavigateSection('solutions')} 
            className="hover:text-gold-500 transition-colors cursor-pointer py-1"
          >
            Solutions
          </button>
          <button 
            onClick={() => onNavigateSection('trust')} 
            className="hover:text-gold-500 transition-colors cursor-pointer py-1"
          >
            Benzene Electricals
          </button>
          <button 
            onClick={() => onNavigateSection('footer')} 
            className="hover:text-gold-500 transition-colors cursor-pointer py-1"
          >
            About Us
          </button>
        </nav>

        {/* Live Search Bar & Quote Counter Button */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <div className="relative hidden md:block w-48 xl:w-64">
            <input
              type="text"
              placeholder="Search model (e.g. CA 8345)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-1 border border-border-custom rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-ink-900 placeholder-ink-300"
            />
            <Search className="w-3.5 h-3.5 text-ink-600 absolute left-3 top-2.5" />
          </div>

          {/* Quote Inquiry List Button */}
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2 shadow-sm gold-glow cursor-pointer transition-all shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Order Inquiry</span>
            {quoteList.length > 0 && (
              <span className="bg-navy-900 text-gold-400 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                {quoteList.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy-900 hover:text-gold-500 rounded-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 text-surface-0 border-t border-navy-800 px-4 py-5 space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search model (e.g. CA 8345)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg pl-9 pr-3 py-2 text-sm placeholder-ink-300 focus:outline-none focus:border-gold-500"
            />
            <Search className="w-4 h-4 text-gold-400 absolute left-3 top-3" />
          </div>

          <div className="flex flex-col gap-3 font-semibold text-sm">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('hero'); }}
              className="text-left py-2 border-b border-navy-800 hover:text-gold-400 flex items-center justify-between"
            >
              Home <ChevronRight className="w-4 h-4 text-gold-500" />
            </button>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('catalog'); }}
              className="text-left py-2 border-b border-navy-800 hover:text-gold-400 flex items-center justify-between"
            >
              Line Card Catalog <ChevronRight className="w-4 h-4 text-gold-500" />
            </button>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('solutions'); }}
              className="text-left py-2 border-b border-navy-800 hover:text-gold-400 flex items-center justify-between"
            >
              Solutions <ChevronRight className="w-4 h-4 text-gold-500" />
            </button>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onNavigateSection('trust'); }}
              className="text-left py-2 border-b border-navy-800 hover:text-gold-400 flex items-center justify-between"
            >
              Benzene Electricals Support <ChevronRight className="w-4 h-4 text-gold-500" />
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
              className="w-full bg-gold-500 text-navy-900 font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Request Instant Quote ({quoteList.length} items)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
