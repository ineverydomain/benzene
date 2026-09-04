import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ShieldCheck, FileText, ExternalLink, QrCode } from 'lucide-react';

export default function Footer({ onNavigateSection, setIsQuoteModalOpen }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer-section" className="bg-navy-900 text-surface-0 border-t border-navy-800">
      
      {/* Newsletter / Catalogue Capture Band */}
      <div className="bg-navy-800 border-b border-navy-700 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-surface-0">
              Subscribe to Benzene Technical Updates
            </h3>
            <p className="text-xs text-gray-300">
              Get direct updates on new testing instrument releases, application notes & power quality compliance standards.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-500 text-emerald-300 text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Subscribed! You will receive our quarterly newsletter.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-navy-900 border border-navy-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-ink-300 focus:outline-none focus:border-gold-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
        
        {/* Column 1: Company Profile */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-10 bg-navy-800 border-2 border-gold-500 rounded flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-6 h-6">
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="#0B1B3A" stroke="#D4A62A" strokeWidth="6"/>
                <path d="M52 18 L32 52 L48 52 L42 82 L70 44 L52 44 Z" fill="#D4A62A" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-base font-display text-white">BENZENE ELECTRICALS</div>
              <div className="text-[10px] font-mono text-gold-400">Part of Acrasia Private Limited Group</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-sm">
            Benzene Electricals designs and supplies high-precision portable test and measurement instruments for electrical power grids, manufacturing plants, renewables, and defense sector audits.
          </p>

          <div className="space-y-1.5 pt-2 text-gray-300 font-mono text-[11px]">
            <div>• Tagline: Precision • Reliability • Performance</div>
            <div>• Quality Standard: ISO 9001 / 14001 / 45001 / 50001</div>
          </div>
        </div>

        {/* Column 2: Product Line Cards */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm font-display text-gold-400 uppercase tracking-wider">
            Product Line Card
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Power Quality Analyzers
              </a>
            </li>
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Thermal Imagers & Cameras
              </a>
            </li>
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Insulation Resistance Testers
              </a>
            </li>
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Earth Ground Resistance Testers
              </a>
            </li>
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Digital Multimeters & Clamps
              </a>
            </li>
            <li>
              <a href="#catalog-section" onClick={() => onNavigateSection('catalog')} className="hover:text-gold-400 transition-colors">
                Revenue Smart Energy Meters
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support & Care */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm font-display text-gold-400 uppercase tracking-wider">
            Support & Services
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/TMI 2025 New Catalog.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-gold-500" />
                Download PDF Catalogue
              </a>
            </li>
            <li>
              <button onClick={() => setIsQuoteModalOpen(true)} className="hover:text-gold-400 transition-colors text-left">
                Request Order Quotation
              </button>
            </li>
            <li>
              <a href="#trust-section" onClick={() => onNavigateSection('trust')} className="hover:text-gold-400 transition-colors">
                Krykard Care Service Program
              </a>
            </li>
            <li>
              <a href="#trust-section" onClick={() => onNavigateSection('trust')} className="hover:text-gold-400 transition-colors">
                Calibration & Repair Request
              </a>
            </li>
            <li>
              <a href="#trust-section" onClick={() => onNavigateSection('trust')} className="hover:text-gold-400 transition-colors">
                Software & DataView Downloads
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Office */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm font-display text-gold-400 uppercase tracking-wider">
            Corporate Office
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>
                No. 5, Kumaran Street, Pazhavanthangal, Chennai - 600 114, Tamil Nadu, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <a href="tel:+914422340000" className="hover:text-gold-400">
                +91 44 2234 0000
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <a href="mailto:sales@benzene-electricals.com" className="hover:text-gold-400">
                sales@benzene-electricals.com
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-2 px-3 rounded text-xs transition-colors cursor-pointer"
            >
              Order Inquiry Form
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-950 border-t border-navy-800 py-6 px-4 text-[11px] text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Benzene Electricals (Acrasia Private Limited). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-400">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400">Terms of Supply</a>
            <a href="#" className="hover:text-gold-400">ISO Certifications</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
